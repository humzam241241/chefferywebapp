"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const nav = [
  { href: "/new-home", label: "New Home" },
  { href: "/enter", label: "Enter to Secure a Spot" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/forum", label: "Forum" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-900 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="container-max h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-lg font-semibold tracking-wide">
            Cheffery
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-neutral-200 hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="rounded-xl border border-neutral-800 p-2 hover:bg-neutral-900">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open Menu</span>
            </SheetTrigger>
            <SheetContent>
              <nav className="mt-8 flex flex-col gap-4">
                {nav.map((n) => (
                  <Link key={n.href} href={n.href} className="text-base text-neutral-200 hover:text-white">
                    {n.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}



