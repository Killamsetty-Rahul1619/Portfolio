import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

/** Consistent section wrapper: full-width border divider + centered container. */
export default function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`border-t border-border ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {children}
      </div>
    </section>
  );
}
