import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page section-pad text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sage-500">404</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-forest-900">Page not found</h1>
      <p className="mx-auto mt-4 max-w-xl text-ink/70">The page you&apos;re looking for does not exist, or it may have moved.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/">Back to Home</Button>
        <Button href="/contact" variant="secondary">
          Contact
        </Button>
      </div>
    </div>
  );
}
