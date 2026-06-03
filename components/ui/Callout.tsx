// Colors are defined in globals.css as explicit hex/rgba (.callout-* classes)
// instead of Tailwind's oklch palette, for cross-browser readability.
const variants = {
  info: { icon: "ℹ️", cls: "callout-info" },
  success: { icon: "✅", cls: "callout-success" },
  warning: { icon: "⚠️", cls: "callout-warning" },
  danger: { icon: "🚫", cls: "callout-danger" },
} as const;

export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: keyof typeof variants;
  title?: string;
  children: React.ReactNode;
}) {
  const v = variants[type];
  return (
    <div className={`${v.cls} border rounded-xl p-4 my-5`}>
      {title && (
        <div className="callout-title font-semibold mb-1.5 flex items-center gap-2">
          <span aria-hidden="true">{v.icon}</span>
          <span>{title}</span>
        </div>
      )}
      <div className="callout-body text-sm leading-relaxed [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mt-1 [&_ul]:space-y-0.5 [&_ol]:list-decimal [&_ol]:ml-5 [&_ol]:mt-1 [&_ol]:space-y-0.5 [&_a]:underline [&_a]:font-medium">
        {children}
      </div>
    </div>
  );
}
