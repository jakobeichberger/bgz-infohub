export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-primary mt-10 mb-4 pb-2 border-b-2 border-border-app">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-txt mt-6 mb-3">
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-txt leading-relaxed mb-4">{children}</p>
  );
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc list-inside space-y-1.5 text-txt mb-4 ml-1">
      {children}
    </ul>
  );
}

export function OL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="list-decimal list-inside space-y-1.5 text-txt mb-4 ml-1">
      {children}
    </ol>
  );
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-sm bg-code-bg text-txt px-1.5 py-0.5 rounded font-mono">
      {children}
    </code>
  );
}

export function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-3 py-2 font-semibold text-primary bg-bg border-b border-border-app"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-hover-bg transition-colors">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-3 py-2 border-b border-border-app text-txt"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
