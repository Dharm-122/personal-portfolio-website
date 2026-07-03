import { CardSkeleton } from "@/components/loading-skeleton";

export default function Loading() {
  return (
    <div className="container-page section-pad grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}
