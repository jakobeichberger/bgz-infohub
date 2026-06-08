import Link from "next/link";

export type LinkCardItem = {
  href: string;
  label: string;
  desc: string;
  /** Optional dot colour override (default: bg-primary) */
  dotClass?: string;
};

/**
 * Responsive grid of link cards (dot + label + description).
 * - Internal hrefs (starting with "/") render as <Link> for SPA navigation.
 * - External hrefs render as <a target="_blank" rel="noopener noreferrer">.
 * Replaces the link-card markup that used to be copy-pasted across pages.
 */
export function LinkCards({ items }: { items: LinkCardItem[] }) {
  const cls =
    "flex items-center gap-3 p-3 rounded-lg bg-card border border-border-app hover:border-primary/40 transition-all hover:-translate-y-0.5 hover:shadow-md group";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
      {items.map((link) => {
        const inner = (
          <>
            <div
              className={`w-2 h-2 rounded-full ${link.dotClass ?? "bg-primary"} flex-shrink-0`}
            />
            <div>
              <span className="text-sm font-medium text-txt group-hover:text-primary transition-colors">
                {link.label}
              </span>
              <span className="text-xs text-txt-light block">{link.desc}</span>
            </div>
          </>
        );

        return link.href.startsWith("/") ? (
          <Link key={link.href} href={link.href} className={cls}>
            {inner}
          </Link>
        ) : (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cls}
          >
            {inner}
          </a>
        );
      })}
    </div>
  );
}
