import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out to plan your next extraordinary gathering.",
};

export default function ContactPage() {
  return (
    <section className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <ContactForm />
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
            <Image src="/gallery/abstract-01.svg" alt="Map placeholder" width={800} height={500} className="h-auto w-full object-cover" />
          </div>
          <p className="text-neutral-300">Serving the Greater Toronto Area and select destinations upon request.</p>
        </div>
      </div>
    </section>
  );
}


