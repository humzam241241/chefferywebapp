import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import SponsorStrip from "@/components/SponsorStrip";
import GalleryGrid from "@/components/GalleryGrid";
import ContactCTA from "@/components/ContactCTA";
import hero from "@/content/hero.json";
import values from "@/content/values.json";
import sponsors from "@/content/sponsors.json";
import gallery from "@/content/gallery.json";

export const metadata: Metadata = {
  title: "Where Innovators Come to Celebrate.",
  description: "Elevated culinary experiences crafted with precision and style.",
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cheffery",
    description: "Elevated culinary experiences crafted with precision and style.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cheffery",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <Hero data={hero} variant="primary" />
      <section className="container-max py-16">
        <ValueProps values={values} />
      </section>
      <section className="container-max py-8">
        <SponsorStrip sponsors={sponsors} />
      </section>
      <section className="container-max py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">Featured Gallery</h2>
        <GalleryGrid items={gallery} />
      </section>
      <ContactCTA />
    </>
  );
}



