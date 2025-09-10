import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import items from "@/content/gallery.json";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A glance at textures, tones, and tasteful compositions.",
};

export default function GalleryPage() {
  return (
    <section className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Gallery</h1>
      <GalleryGrid items={items} />
    </section>
  );
}


