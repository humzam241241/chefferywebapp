import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <section className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Terms of Service</h1>
      <p className="text-neutral-300 max-w-3xl">
        By using this website, you agree to our terms. Services are provided subject to
        availability and a confirmed agreement. Details may evolve over time. For questions,
        contact hello@cheffery.com.
      </p>
    </section>
  );
}


