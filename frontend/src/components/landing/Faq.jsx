import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { FAQ } from "./data";
import { Eyebrow, Reveal } from "./Reveal";

export const Faq = () => (
  <section id="preguntas" data-testid="faq-section" className="border-t border-[var(--line)] bg-[var(--bg-2)] py-28 md:py-40">
    <div className="mx-auto grid max-w-[1400px] gap-14 px-5 md:px-10 lg:grid-cols-12">
      <Reveal className="lg:col-span-4">
        <Eyebrow>Preguntas frecuentes</Eyebrow>
        <h2 className="mt-6 font-display text-5xl leading-[1] text-[var(--ink)] md:text-6xl">Lo que suelen <em className="text-gold-grad">preguntarnos.</em></h2>
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
        <Accordion type="single" collapsible className="border-t border-[var(--line)]">
          {FAQ.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`} className="border-b border-[var(--line)]">
              <AccordionTrigger data-testid={`faq-trigger-${i + 1}`} className="py-7 text-left font-display text-xl text-[var(--ink)] hover:text-[var(--gold-l)] hover:no-underline md:text-2xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent data-testid={`faq-content-${i + 1}`} className="pb-7 text-base leading-relaxed text-[var(--ink-2)]">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
