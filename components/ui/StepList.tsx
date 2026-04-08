"use client";

import { Children } from "react";

export function StepList({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 space-y-0">
      {Children.map(children, (child, i) => {
        if (!child) return null;
        return (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                {i + 1}
              </div>
              {i < Children.count(children) - 1 && (
                <div className="w-0.5 flex-1 bg-border-app my-1" />
              )}
            </div>
            <div className="pb-5 flex-1">{child}</div>
          </div>
        );
      })}
    </div>
  );
}

export function Step({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="font-semibold text-txt mb-1">{title}</h4>
      <div className="text-sm text-txt-light leading-relaxed [&_a]:text-primary [&_a]:underline [&_ol]:list-decimal [&_ol]:ml-5 [&_ol]:mt-1 [&_ol]:space-y-0.5">
        {children}
      </div>
    </div>
  );
}
