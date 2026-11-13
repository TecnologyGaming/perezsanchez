import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { VALUES } from "./data";
import { Eyebrow, Reveal } from "./Reveal";

export const Firm = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="firma" ref={ref} data-testid="firm-section" className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-[var(--line-2)]">
            <motion.img style={{ y }} src="/img/library.jpg" alt="Biblioteca jurídica" className="absolute inset-0 h-[124%] w-full -translate-y-[12%] object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] to-transparent" />
            <img src="/img/logo.jpg" alt="Logo Pérez Sánchez & Asociados" className="absolute bottom-5 left-5 w-28 rounded-xl border border-[var(--line-2)] shadow-2xl md:w-36" />
          </div>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <Eyebrow>La firma</Eyebrow>
            <h2 className="mt-6 font-display text-5xl leading-[1] text-[var(--ink)] md:text-6xl">Firmeza en el estrado. <em className="text-gold-grad">Cercanía</em> con usted.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-[var(--ink-2)] md:text-lg">
              Pérez Sánchez & Asociados es un escritorio jurídico dedicado al derecho penal con sede en Acarigua, estado Portuguesa. Entendemos que detrás de cada expediente hay una persona y una familia, por eso combinamos preparación técnica con un trato humano y directo.
            </p>
          </Reveal>
          <div className="mt-12 divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.1 + i * 0.08}>
                <div data-testid={`value-${i + 1}`} className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-10">
                  <h3 className="font-display text-2xl text-[var(--ink)] transition-transform duration-500 group-hover:translate-x-2 sm:w-64">{v.title}</h3>
                  <p className="text-[var(--ink-2)]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
