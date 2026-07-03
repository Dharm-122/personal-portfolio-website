export function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-[28px] border border-forest-100 bg-white p-6 shadow-sm">
      <div className="h-40 rounded-3xl bg-forest-100" />
      <div className="mt-6 h-4 w-24 rounded bg-forest-100" />
      <div className="mt-3 h-6 w-3/4 rounded bg-forest-100" />
      <div className="mt-3 h-4 w-full rounded bg-forest-100" />
      <div className="mt-2 h-4 w-5/6 rounded bg-forest-100" />
    </div>
  );
}
