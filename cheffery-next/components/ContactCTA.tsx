import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="py-16">
      <div className="container-max rounded-2xl border border-neutral-800 bg-neutral-950 px-8 py-12 shadow-subtle">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready to plan something extraordinary?</h3>
            <p className="mt-2 text-neutral-300">Tell us your vision. Well tailor every detail with care.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="gold">
              <Link href="/enter">Enter to Secure a Spot</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}



