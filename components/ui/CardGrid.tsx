import Link from "next/link";

export function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      {children}
    </div>
  );
}

export function Card({
  href,
  icon,
  title,
  children,
}: {
  href?: string;
  icon?: string;
  title: string;
  children: React.ReactNode;
}) {
  const content = (
    <>
      {icon && <span className="text-2xl mb-2 block">{icon}</span>}
      <h3 className="text-base font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors mb-1">
        {title}
      </h3>
      <p className="text-sm text-[var(--text-light)] leading-relaxed">
        {children}
      </p>
    </>
  );

  const className =
    "block p-4 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/40 transition-all hover:-translate-y-0.5 hover:shadow-lg group";

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
