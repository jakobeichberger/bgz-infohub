export function PageHeader({ title }: { title: string }) {
  return (
    <h1 className="text-2xl sm:text-3xl font-bold text-[var(--primary)] mb-6 pb-3 border-b-2 border-[var(--border)]">
      {title}
    </h1>
  );
}
