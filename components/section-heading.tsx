import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, centered, tone = "light", className }: Props) {
  const eyebrowClass = tone === "dark" ? "text-sage-400" : "text-sage-500";
  const titleClass = tone === "dark" ? "text-white" : "text-forest-900";
  const descriptionClass = tone === "dark" ? "text-[#B8B8C5]" : "text-ink/75";

  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("mb-3 text-sm font-semibold uppercase tracking-[0.24em]", eyebrowClass)}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl", titleClass)}>
        {title}
      </h2>
      {description ? <p className={cn("mt-4 text-base leading-7 sm:text-lg", descriptionClass)}>{description}</p> : null}
    </div>
  );
}
