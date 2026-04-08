const styles = {
  info: {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-200 dark:border-orange-800",
    icon: "ℹ️",
    title: "text-orange-800 dark:text-orange-300",
  },
  success: {
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-200 dark:border-green-800",
    icon: "✅",
    title: "text-green-800 dark:text-green-300",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    icon: "⚠️",
    title: "text-amber-800 dark:text-amber-300",
  },
  danger: {
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-800",
    icon: "🚫",
    title: "text-red-800 dark:text-red-300",
  },
} as const;

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: keyof typeof styles;
  title?: string;
  children: React.ReactNode;
}) {
  const s = styles[type];
  return (
    <div className={`${s.bg} ${s.border} border rounded-xl p-4 my-5`}>
      {title && (
        <div className={`font-semibold ${s.title} mb-1.5 flex items-center gap-2`}>
          <span>{s.icon}</span>
          <span>{title}</span>
        </div>
      )}
      <div className="text-sm text-[var(--text)] leading-relaxed [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mt-1 [&_ul]:space-y-0.5 [&_ol]:list-decimal [&_ol]:ml-5 [&_ol]:mt-1 [&_ol]:space-y-0.5 [&_a]:text-[var(--primary)] [&_a]:underline">
        {children}
      </div>
    </div>
  );
}
