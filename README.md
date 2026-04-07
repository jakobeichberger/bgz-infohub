# InfoHub BG Zehnergasse

A modern information portal for parents and students at BG Zehnergasse (Austrian secondary school), built as a replacement for [wiki.bgzwn.at](https://wiki.bgzwn.at).

---

## What does this project do?

This is a **Next.js App Router** website that provides school-related information in an easy-to-read format. It covers:

- **Schulaccount & Office 365** — Login credentials, password rules, password reset, free Office 365
- **iPad & Geraete** — Device initiative, procurement, warranty, child protection, accessories
- **Schulservices** — WebUntis, edu.Flow, edu.Pay, edu.Card, printing, PoDS
- **MDM-Einrichtung** — Step-by-step device management setup for iOS, Android, Windows
- **Bildungsportal** — Austrian education portal guide for parents, edu.digicard
- **Hilfe & Kontakte** — Support contacts, FAQ, all important links

---

## Learning Guide: How This Website Was Built

This section explains the technology and architecture for anyone learning web development.

### 1. The Tech Stack

| Technology | What it does | Why we use it |
|---|---|---|
| **TypeScript** | A typed superset of JavaScript | Catches errors before runtime, better editor support |
| **React** | UI component library | Build reusable UI pieces (components) |
| **Next.js (App Router)** | React framework with routing, SSR, metadata | File-based routing, SEO, server rendering |
| **Tailwind CSS** | Utility-first CSS framework | Style directly in HTML/JSX without separate CSS files |

### 2. Project Structure

```
bgz-infohub/
├── page.tsx                    # Homepage (/)
├── schulaccount/
│   └── page.tsx                # /schulaccount
├── services/
│   └── page.tsx                # /services
├── geraete/
│   └── page.tsx                # /geraete
├── mdm/
│   └── page.tsx                # /mdm
├── bildungsportal/
│   └── page.tsx                # /bildungsportal
├── hilfe/
│   └── page.tsx                # /hilfe
└── README.md                   # This file
```

**How routing works:** In Next.js App Router, every folder with a `page.tsx` becomes a URL route. The file `geraete/page.tsx` automatically becomes the page at `/geraete`. No configuration needed!

### 3. Anatomy of a Page

Every page follows the same pattern. Here's a simplified example:

```tsx
// 1. Import types and components
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { H2, P, UL } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Callout";

// 2. Export metadata (for SEO — shown in Google, browser tabs)
export const metadata: Metadata = {
  title: "My Page Title",
  description: "What this page is about",
};

// 3. Export the page component (the actual content)
export default function MyPage() {
  return (
    <>
      <PageHeader title="My Page" />
      <P>Some introductory text.</P>

      <H2>A Section</H2>
      <UL>
        <li>Point one</li>
        <li>Point two</li>
      </UL>

      <Callout type="info" title="Tip">
        This is a highlighted information box.
      </Callout>
    </>
  );
}
```

### 4. Key Concepts Explained

#### Components
Components are reusable building blocks. Instead of writing raw HTML every time, we use pre-built components:

- `<PageHeader title="..." />` — renders a styled page title
- `<H2>`, `<H3>`, `<P>`, `<UL>` — styled typography (headings, paragraphs, lists)
- `<Table headers={[...]} rows={[...]} />` — renders a data table
- `<Callout type="info|success|warning|danger">` — colored information boxes
- `<StepList>` + `<Step>` — numbered step-by-step instructions
- `<CardGrid>` + `<Card>` — grid of clickable cards with icons

#### Metadata (SEO)
Every page exports a `metadata` object. This tells search engines (Google) and browsers:
- `title` — shown in the browser tab and search results
- `description` — shown under the title in search results

#### TypeScript
TypeScript adds types to JavaScript. For example:
```tsx
// JavaScript: no type safety
function greet(name) { return "Hello " + name; }

// TypeScript: catches errors at compile time
function greet(name: string): string { return "Hello " + name; }
greet(42); // ERROR! 42 is not a string
```

#### Tailwind CSS
Instead of writing CSS in separate files, Tailwind lets you style inline:
```tsx
// Traditional CSS approach:
// .card { padding: 12px; border-radius: 8px; border: 1px solid gray; }
// <div className="card">...</div>

// Tailwind approach (utility classes):
<div className="p-3 rounded-lg border border-gray-300">...</div>
```

Common Tailwind classes used in this project:
- `p-3` = padding 12px, `px-3` = horizontal padding, `py-2` = vertical padding
- `rounded-lg` = rounded corners
- `border` = 1px border
- `text-sm` = small text, `text-xs` = extra small
- `font-bold` / `font-semibold` = bold text
- `grid grid-cols-2 gap-3` = 2-column grid with gap
- `hover:underline` = underline on mouse hover
- `dark:text-blue-400` = blue text in dark mode

### 5. How to Add a New Page

1. Create a new folder: `mynewpage/`
2. Create `mynewpage/page.tsx`
3. Add metadata + content using the component pattern above
4. Add a link to the new page from the homepage or navigation

### 6. How to Edit Content

Most content changes are straightforward:
- **Change text:** Edit the JSX directly (the HTML-like code inside `return (...)`)
- **Add a table row:** Add an array item to the `rows` prop
- **Add a FAQ entry:** Copy an existing `<H3>` + `<UL>` block and modify
- **Add a link:** Use `<a href="..." target="_blank" rel="noopener noreferrer">`

### 7. External Links Management

All external links in this project have been verified. Key external services:

| Service | URL | Status |
|---|---|---|
| WebUntis | melpomene.webuntis.com/WebUntis/?school=bgzehnwn | Active |
| Office 365 | portal.office.com | Active |
| edu.Suite | edusuite.at/portal/ | Active |
| Bildungsportal | bildung.gv.at | Active (replaces pods.gv.at) |
| OeAD Digitales Lernen | digitaleslernen.oead.at | Active |
| Schulwebsite | bgzwn.at | Active |
| SaferInternet | saferinternet.at | Active |
| ACP TechRent | acptechrent.at | Active |
| Digitale Schule | digitaleschule.gv.at | Active |

**Note:** `pods.gv.at` now redirects to `bildung.gv.at` (PoDS is integrated into the Bildungsportal). All links have been updated accordingly.

### 8. Integration

This project contains only the page components. To run it, these files need to be placed inside a Next.js App Router project at the appropriate route (e.g., under `app/infohub/`).

The pages import shared UI components from `@/components/ui/`:
- `PageHeader`, `CardGrid`, `Card`
- `H2`, `H3`, `P`, `UL`, `OL`, `Table`, `InlineCode`
- `Callout`
- `StepList`, `Step`

These components need to be provided by the parent project.

---

## Content Sources

All content is based on the official school wiki at [wiki.bgzwn.at](https://wiki.bgzwn.at) and has been enriched with:
- Detailed password security education (good/bad examples)
- Full edu.Flow verification process for parents
- edu.Pay registration steps and refund procedures
- OeAD contact information and procurement details
- WebUntis absence reporting with legal requirements
- PoDS activation and troubleshooting

## Contact

- **IT-Administration:** admin@bgzwn.at
- **Schulkanzlei:** kanzlei@bgzwn.at
- **Hardware-Support:** sales@acptechrent.at / +43 1 813 0000
- **OeAD Hotline:** digitaleslernen@oead.at / +43 720 080 356

## License

Content is specific to BG Zehnergasse. All information is provided as-is and is legally non-binding.
