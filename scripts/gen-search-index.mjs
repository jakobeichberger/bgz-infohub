// Generates public/search-index.json — a full-text search index for the
// client-side site search. Walks all app/**/page.tsx, parses each with the
// TypeScript compiler API (already a devDependency) and extracts the visible
// text: PageHeader/Step/Callout/Card titles, JSX text nodes, and string
// literals from Table/LinkCards data arrays. Runs before `npm run dev` and
// `npm run build` (see package.json). The JSON is fetched lazily by
// components/Search.tsx — it is NOT bundled into the page JS.

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import ts from "typescript";

const root = process.cwd();
const appDir = join(root, "app");

// Only index real content pages; skip redirects (/, /en), 404 and the
// intentionally-unlinked "lizenzen" page.
const INCLUDE_PREFIXES = ["/infohub", "/en/infohub"];
const EXCLUDE_SUBSTRINGS = ["/lizenzen"];

// JSX attributes whose values are visible text worth indexing. Everything
// else (className, href, src, icon, rel, target, key, id, type, …) is ignored.
const TEXT_ATTRS = new Set(["title", "alt", "label"]);

function walk(dir) {
  let files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files = files.concat(walk(full));
    else if (entry.name === "page.tsx") files.push(full);
  }
  return files;
}

function routeFor(file) {
  let rel = relative(appDir, file).split(sep).join("/");
  rel = rel.replace(/\/?page\.tsx$/, "");
  rel = rel
    .split("/")
    .filter((s) => s && !(s.startsWith("(") && s.endsWith(")")))
    .join("/");
  return "/" + rel;
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&rarr;/g, "→")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "…");
}

function clean(s) {
  return decodeEntities(s).replace(/\s+/g, " ").trim();
}

// Pull the string value out of a StringLiteral or a JsxExpression that wraps
// a single string literal (e.g. title={"…"}). Returns "" otherwise.
function literalText(node) {
  if (!node) return "";
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return node.text;
  }
  if (ts.isJsxExpression(node) && node.expression) {
    if (
      ts.isStringLiteral(node.expression) ||
      ts.isNoSubstitutionTemplateLiteral(node.expression)
    ) {
      return node.expression.text;
    }
  }
  return "";
}

function extract(file) {
  const text = readFileSync(file, "utf8");
  const sf = ts.createSourceFile(
    file,
    text,
    ts.ScriptTarget.Latest,
    /* setParentNodes */ true,
    ts.ScriptKind.TSX
  );

  let metaTitle = "";
  let description = "";
  let pageHeaderTitle = "";
  const headings = []; // PageHeader + H2/H3/Step/Callout/Card titles
  const body = []; // JSX text nodes + table/card string literals

  // Extract export const metadata = { title, description }
  function readMetadata(node) {
    if (
      ts.isVariableStatement(node) &&
      node.declarationList.declarations.some(
        (d) => ts.isIdentifier(d.name) && d.name.text === "metadata"
      )
    ) {
      const decl = node.declarationList.declarations.find(
        (d) => ts.isIdentifier(d.name) && d.name.text === "metadata"
      );
      const init = decl && decl.initializer;
      if (init && ts.isObjectLiteralExpression(init)) {
        for (const prop of init.properties) {
          if (!ts.isPropertyAssignment(prop) || !prop.name) continue;
          const key = prop.name.getText(sf);
          const val = literalText(prop.initializer);
          if (key === "title") metaTitle = val;
          else if (key === "description") description = val;
        }
      }
    }
  }

  function visit(node) {
    readMetadata(node);

    // JSX attributes: title / alt / label
    if (ts.isJsxAttribute(node) && node.name) {
      const attrName = node.name.getText(sf);
      if (TEXT_ATTRS.has(attrName)) {
        const val = literalText(node.initializer);
        if (val) {
          // PageHeader title is the page's main heading
          const opening = node.parent && node.parent.parent;
          const tag =
            opening && opening.tagName ? opening.tagName.getText(sf) : "";
          if (tag === "PageHeader") pageHeaderTitle = val;
          else headings.push(val);
        }
      }
    }

    // Visible JSX text nodes
    if (ts.isJsxText(node)) {
      const t = clean(node.text);
      if (t) body.push(t);
    }

    // String literals inside array literals → Table headers/rows, LinkCards items
    if (
      (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) &&
      node.parent
    ) {
      let p = node.parent;
      // direct array element, or value of an object inside an array
      if (ts.isPropertyAssignment(p)) p = p.parent;
      if (p && ts.isArrayLiteralExpression(p)) {
        const t = clean(node.text);
        if (t) body.push(t);
      } else if (
        p &&
        ts.isObjectLiteralExpression(p) &&
        p.parent &&
        ts.isArrayLiteralExpression(p.parent)
      ) {
        const t = clean(node.text);
        if (t) body.push(t);
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sf);

  const title =
    pageHeaderTitle || metaTitle.replace(/\s*[—–-]\s*BG Zehnergasse.*$/, "");

  // Dedupe headings while preserving order
  const seen = new Set();
  const uniqHeadings = headings.filter((h) => {
    const k = h.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  return {
    title: clean(title),
    desc: clean(description),
    headings: clean(uniqHeadings.join(" · ")),
    text: clean(body.join(" ")),
  };
}

const files = walk(appDir);
const entries = [];

for (const file of files) {
  const url = routeFor(file);
  if (!INCLUDE_PREFIXES.some((p) => url === p || url.startsWith(p + "/")))
    continue;
  if (EXCLUDE_SUBSTRINGS.some((s) => url.includes(s))) continue;

  const { title, desc, headings, text } = extract(file);
  if (!title && !text) continue;

  entries.push({
    url,
    lang: url.startsWith("/en/") || url === "/en" ? "en" : "de",
    title,
    desc,
    headings,
    text,
  });
}

// Stable order for clean diffs
entries.sort((a, b) => a.url.localeCompare(b.url));

mkdirSync(join(root, "public"), { recursive: true });
writeFileSync(
  join(root, "public", "search-index.json"),
  JSON.stringify(entries) + "\n"
);

console.log(
  `gen-search-index: wrote ${entries.length} entries to public/search-index.json`
);
