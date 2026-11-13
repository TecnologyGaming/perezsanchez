import { motion } from "framer-motion";
import { STEPS } from "./data";
import { Eyebrow, Reveal, EASE } from "./Reveal";

export const Method = () => (
  <section id="metodo" data-testid="method-section" className="relative border-t border-[var(--line)] bg-[var(--bg-2)] py-28 md:py-40">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <Reveal>
        <Eyebrow>Nuestro método</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1] text-[var(--ink)] md:text-7xl">Cuatro tiempos para <em className="text-gold-grad">una defensa sólida.</em></h2>
      </Reveal>
      <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            data-testid={`method-step-${i + 1}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}
            className="group relative bg-[var(--bg-2)] p-8 transition-colors duration-500 hover:bg-[#121722] md:p-10"
          >
            <span className="font-display text-7xl italic text-[var(--steel)] transition-colors duration-500 group-hover:text-[var(--gold)] md:text-8xl">{s.n}</span>
            <h3 className="mt-10 font-display text-3xl text-[var(--ink)]">{s.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--ink-2)] md:text-base">{s.text}</p>
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--gold)] transition-[width] duration-700 group-hover:w-full" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
