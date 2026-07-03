import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, centered, className }: Props) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sage-500">{eyebrow}</p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-forest-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-ink/75 sm:text-lg">{description}</p> : null}
    </div>
  );
}
