const styles = {
  info: {
    bg: "bg-teal-50 dark:bg-teal-900/40",
    border: "border-teal-300 dark:border-teal-700",
    icon: "ℹ️",
    title: "text-teal-800 dark:text-teal-200",
    text: "text-teal-900 dark:text-teal-100",
  },
  success: {
    bg: "bg-green-50 dark:bg-green-900/40",
    border: "border-green-300 dark:border-green-700",
    icon: "✅",
    title: "text-green-800 dark:text-green-200",
    text: "text-green-900 dark:text-green-100",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-900/40",
    border: "border-amber-300 dark:border-amber-700",
    icon: "⚠️",
    title: "text-amber-800 dark:text-amber-200",
    text: "text-amber-900 dark:text-amber-100",
  },
  danger: {
    bg: "bg-red-50 dark:bg-red-900/40",
    border: "border-red-300 dark:border-red-700",
    icon: "🚫",
    title: "text-red-800 dark:text-red-200",
    text: "text-red-900 dark:text-red-100",
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
      <div className={`text-sm ${s.text} leading-relaxed [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mt-1 [&_ul]:space-y-0.5 [&_ol]:list-decimal [&_ol]:ml-5 [&_ol]:mt-1 [&_ol]:space-y-0.5 [&_a]:underline [&_a]:font-medium`}>
        {children}
      </div>
    </div>
  );
}
