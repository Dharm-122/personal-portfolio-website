export function CardSkeleton() {
  return (
    <div className="animate-pulse rounded-[28px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,.3)]">
      <div className="h-40 rounded-3xl bg-white/[0.06]" />
      <div className="mt-6 h-4 w-24 rounded bg-white/[0.08]" />
      <div className="mt-3 h-6 w-3/4 rounded bg-white/[0.08]" />
      <div className="mt-3 h-4 w-full rounded bg-white/[0.06]" />
      <div className="mt-2 h-4 w-5/6 rounded bg-white/[0.06]" />
    </div>
  );
}
