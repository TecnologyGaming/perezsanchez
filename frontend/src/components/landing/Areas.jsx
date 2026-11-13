import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AREAS, WA } from "./data";
import { Eyebrow, Reveal, EASE } from "./Reveal";

const Card = ({ a, i }) => (
  <motion.a
    href={WA}
    target="_blank"
    rel="noreferrer"
    data-testid={`area-card-${a.n}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
    className={`card group relative flex min-h-[260px] flex-col justify-between overflow-hidden p-7 md:p-8 ${a.span}`}
  >
    {a.img && (
      <>
        <img src={a.img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-[1.4s] ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/70 to-transparent" />
      </>
    )}
    <div className="relative flex items-start justify-between">
      <span className="font-mono text-xs tracking-[0.3em] text-[var(--gold)]">{a.n}</span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line-2)] text-[var(--gold-l)] transition-[background-color,transform,color] duration-500 group-hover:rotate-45 group-hover:bg-[var(--gold)] group-hover:text-black">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </div>
    <div className={`relative ${a.img ? "md:max-w-md" : ""}`}>
      <h3 className={`font-display leading-[1.05] text-[var(--ink)] ${a.img ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{a.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-[var(--ink-2)] md:text-base">{a.text}</p>
    </div>
  </motion.a>
);

export const Areas = () => (
  <section id="areas" data-testid="areas-section" className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
    <div className="mb-16 grid gap-8 md:grid-cols-12">
      <Reveal className="md:col-span-7">
        <Eyebrow>Áreas de práctica</Eyebrow>
        <h2 className="mt-6 font-display text-5xl leading-[1] text-[var(--ink)] md:text-7xl">Derecho penal, <em className="text-gold-grad">de principio a fin.</em></h2>
      </Reveal>
      <Reveal delay={0.15} className="self-end md:col-span-4 md:col-start-9">
        <p className="text-[var(--ink-2)]">Cada caso es distinto. Le acompañamos en todas las fases del proceso penal venezolano, desde la investigación hasta las instancias superiores.</p>
      </Reveal>
    </div>
    <div className="grid grid-cols-1 gap-4 md:auto-rows-[minmax(260px,auto)] md:grid-cols-6">
      {AREAS.map((a, i) => <Card key={a.n} a={a} i={i} />)}
    </div>
  </section>
);
