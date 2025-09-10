import type { Metadata } from "next";
import Hero from "@/components/Hero";
import hero from "@/content/hero.json";

export const metadata: Metadata = {
  title: "New Home",
  description: "A refined invitation to the Cheffery experience.",
};

export default function NewHomePage() {
  const data = { ...hero, headline: "A New Home for Elevated Dining." };
  return (
    <>
      <Hero data={data} variant="secondary" />
      <section className="container-max py-20">
        <p className="max-w-2xl text-neutral-300">
          Reserved, modern, and meticulously curated—this is Cheffery’s space to explore what’s
          possible for your next gathering.
        </p>
      </section>
    </>
  );
}


