"use client";
import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

type Item = { src: string; alt?: string; caption?: string };

export default function GalleryGrid({ items }: { items: Item[] }) {
  const [active, setActive] = React.useState<number | null>(null);
  return (
    <>
      <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]
        *:break-inside-avoid">
        {items.map((it, i) => (
          <button
            key={i}
            className="mb-4 w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 focus:outline-none focus:ring-2 focus:ring-gold-500"
            onClick={() => setActive(i)}
          >
            <Image src={it.src} alt={it.alt || "Gallery image"} width={800} height={600} className="h-auto w-full object-cover" />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-6"
          onClick={() => setActive(null)}
        >
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={items[active].src}
              alt={items[active].alt || "Gallery image"}
              width={1600}
              height={1200}
              className={cn("h-auto w-full rounded-2xl object-contain shadow-subtle")}
            />
            {items[active].caption && (
              <div className="mt-3 text-center text-neutral-300">{items[active].caption}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}



