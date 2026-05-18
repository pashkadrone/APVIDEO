import type { ReactNode } from "react";

export function Label({
  children,
  htmlFor
}: {
  children: ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      className="mb-2 block text-xs uppercase tracking-[0.22em] text-white/56"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
