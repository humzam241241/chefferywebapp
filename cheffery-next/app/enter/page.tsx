import type { Metadata } from "next";
import EnterForm from "@/components/forms/EnterForm";

export const metadata: Metadata = {
  title: "Enter to Secure a Spot",
  description: "Share your details for an opportunity to experience something more refined.",
};

export default function EnterPage() {
  return (
    <section className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Enter your details for an opportunity to experience something more refined.</h1>
      <div className="mt-8">
        <EnterForm />
      </div>
    </section>
  );
}


