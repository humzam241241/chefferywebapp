import type { Metadata } from "next";
import services from "@/content/services.json";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Private events, corporate dining, tasting menus, and refined staffing add-ons.",
};

export default function ServicesPage() {
  return (
    <section className="container-max py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-8">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((s) => (
          <Card key={s.key}>
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
              <CardDescription>{s.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Learn more</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{s.title}</DialogTitle>
                  </DialogHeader>
                  <p className="text-neutral-300">{s.details}</p>
                  <div className="mt-6">
                    <Button asChild variant="gold">
                      <Link href="/enter">{s.cta}</Link>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}


