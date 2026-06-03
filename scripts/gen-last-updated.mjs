// Generates lib/last-updated.json — a map of route → ISO date of the last
// modification of each app/**/page.tsx. Uses the git commit date for clean
// (committed) files and the file mtime for files with uncommitted changes.
// Runs automatically before `npm run dev` and `npm run build`.

import { readdirSync, statSync, writeFileSync, mkdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const appDir = join(root, "app");

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
  // strip route-group segments like (group)
  rel = rel
    .split("/")
    .filter((s) => s && !(s.startsWith("(") && s.endsWith(")")))
    .join("/");
  return "/" + rel;
}

function lastModified(file) {
  try {
    const dirty = execSync(`git status --porcelain -- "${file}"`, {
      cwd: root,
    })
      .toString()
      .trim();
    if (!dirty) {
      const iso = execSync(`git log -1 --format=%cI -- "${file}"`, {
        cwd: root,
      })
        .toString()
        .trim();
      if (iso) return iso;
    }
  } catch {
    // git not available or file untracked — fall through to mtime
  }
  return statSync(file).mtime.toISOString();
}

const files = walk(appDir);
const map = {};
for (const file of files) {
  map[routeFor(file)] = lastModified(file);
}

// stable key order for clean diffs
const sorted = Object.fromEntries(
  Object.keys(map)
    .sort()
    .map((k) => [k, map[k]])
);

mkdirSync(join(root, "lib"), { recursive: true });
writeFileSync(
  join(root, "lib", "last-updated.json"),
  JSON.stringify(sorted, null, 2) + "\n"
);

console.log(
  `gen-last-updated: wrote ${Object.keys(sorted).length} entries to lib/last-updated.json`
);
