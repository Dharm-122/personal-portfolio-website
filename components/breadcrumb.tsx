import Link from "next/link";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink/55">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 ? <span>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-forest-900">
                {item.label}
              </Link>
            ) : (
              <span className="text-forest-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
