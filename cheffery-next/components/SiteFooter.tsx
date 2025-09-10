import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const quick = [
  { href: "/", label: "Home" },
  { href: "/enter", label: "Enter" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/forum", label: "Forum" },
  { href: "/contact", label: "Contact" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950">
      <div className="container-max py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="text-xl font-semibold">Cheffery</div>
          <p className="mt-2 text-neutral-300">Refined culinary moments, thoughtfully orchestrated.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <nav className="grid grid-cols-2 gap-2">
            {quick.map((q) => (
              <Link key={q.href} href={q.href} className="text-sm text-neutral-300 hover:text-white">
                {q.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <div className="font-semibold mb-3">Connect</div>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com" className="hover:text-gold-400" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-gold-400" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com" className="hover:text-gold-400" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
            <a href="mailto:hello@cheffery.com" className="text-sm underline underline-offset-4">hello@cheffery.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-900 py-4 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Cheffery. All rights reserved.
      </div>
    </footer>
  );
}



