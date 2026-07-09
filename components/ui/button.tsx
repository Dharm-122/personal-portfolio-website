import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, ReactElement } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  loading?: boolean;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button(props: ButtonProps): ReactElement;
export function Button(props: LinkProps): ReactElement;
export function Button({
  children,
  variant = "primary",
  className,
  loading,
  href,
  ...rest
}: ButtonProps | LinkProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2",
    variant === "primary" &&
      "bg-white text-zinc-950 shadow-premium hover:-translate-y-0.5 hover:bg-zinc-100",
    variant === "secondary" &&
      "border border-white/10 bg-white/5 text-white backdrop-blur hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10",
    variant === "ghost" && "text-zinc-300 hover:bg-white/5",
    className,
  );

  if (href) {
    return (
      <Link className={styles} href={href} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
}
