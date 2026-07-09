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
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/[0.08] bg-[linear-gradient(180deg,#0E0E1E_0%,#121224_100%)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,33,63,0.45),transparent_30%),radial-gradient(circle_at_top_left,rgba(163,177,138,0.08),transparent_24%)]" />
      <div className="absolute inset-0 grid-pattern opacity-[0.16]" />
      <div className="container-page relative py-[120px]">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-sage-400">{eyebrow}</p>
          ) : null}
          <h1 className="font-heading text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? <p className="mt-5 max-w-2xl text-base leading-7 text-[#B8B8C5] sm:text-lg">{description}</p> : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
