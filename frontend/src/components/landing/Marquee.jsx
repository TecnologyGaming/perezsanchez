import { MARQUEE } from "./data";

const Row = () => (
  <div className="flex shrink-0 items-center">
    {MARQUEE.map((m) => (
      <span key={m} className="flex items-center whitespace-nowrap font-display text-4xl italic text-[var(--ink)] md:text-6xl">
        {m}
        <span className="mx-8 inline-block h-2.5 w-2.5 rotate-45 bg-[var(--gold)] md:mx-12" />
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <section data-testid="marquee" className="relative overflow-hidden border-y border-[var(--line)] py-8 md:py-10">
    <div className="marquee-track flex w-max">
      <Row /><Row />
    </div>
  </section>
);
