import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHero({ eyebrow, title, description, children, className }: Props) {
  return (
    <section className={cn("relative overflow-hidden border-b border-forest-100 bg-sage-radial", className)}>
      <div className="absolute inset-0 grid-pattern opacity-[0.35]" />
      <div className="container-page relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-sage-500">{eyebrow}</p>
          ) : null}
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-forest-900 text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? <p className="mt-5 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg">{description}</p> : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
