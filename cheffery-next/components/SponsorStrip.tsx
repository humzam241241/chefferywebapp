import Image from "next/image";

type Sponsor = { name: string; logo: string; url: string };

export default function SponsorStrip({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6 opacity-80">
      {sponsors.map((s) => (
        <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="flex items-center justify-center p-4 rounded-xl border border-neutral-900 bg-neutral-950">
          <Image src={s.logo} alt={s.name} width={120} height={60} className="h-8 w-auto object-contain" />
        </a>
      ))}
    </div>
  );
}



