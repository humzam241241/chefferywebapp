import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Privacy Policy</h1>
      <p className="text-neutral-300 max-w-3xl">
        We respect your privacy. Information submitted through our forms is used solely to respond to
        your inquiry. We do not sell or share your personal data. For specific requests, contact
        hello@cheffery.com.
      </p>
    </section>
  );
}


