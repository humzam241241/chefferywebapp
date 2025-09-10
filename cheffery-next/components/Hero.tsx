import Link from "next/link";
import { Button } from "@/components/ui/button";

type CTA = { label: string; href: string };
type HeroData = {
  headline: string;
  subhead: string;
  ctas: CTA[];
};

export default function Hero({ data, variant = "primary" }: { data: HeroData; variant?: "primary" | "secondary" }) {
  return (
    <section className="relative flex min-h-[80vh] items-center">
      <div className="container-max py-20">
        <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
          {data.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-neutral-300 text-lg">
          {data.subhead}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          {data.ctas?.map((cta) => (
            <Button key={cta.href} asChild variant={variant === "primary" ? "gold" : "default"}>
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}



