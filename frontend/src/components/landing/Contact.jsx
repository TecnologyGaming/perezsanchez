import { Phone, MapPin } from "lucide-react";
import { TEL, WA, PHONE_DISPLAY } from "./data";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./Icons";

export const Contact = () => (
  <section id="contacto" data-testid="contact-section" className="spotlight relative overflow-hidden py-28 md:py-44">
    <img src="/img/court.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.12]" />
    <div className="relative mx-auto max-w-[1400px] px-5 text-left md:px-10">
      <Reveal>
        <p className="eyebrow">Hablemos hoy</p>
        <h2 className="mt-6 font-display text-[14vw] leading-[0.9] tracking-[-0.02em] text-[var(--ink)] md:text-[8.5rem]">
          No enfrente <br /><em className="text-gold-grad">esto solo.</em>
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <a data-testid="contact-whatsapp-btn" href={WA} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-3xl bg-[var(--gold)] p-7 text-black transition-transform duration-500 hover:-translate-y-1 md:p-10">
            <span>
              <span className="block font-mono text-xs uppercase tracking-[0.3em]">WhatsApp</span>
              <span className="mt-3 block font-display text-3xl md:text-4xl">Escríbanos ahora</span>
            </span>
            <WhatsAppIcon className="h-10 w-10 transition-transform duration-500 group-hover:rotate-12" />
          </a>
          <a data-testid="contact-call-btn" href={TEL} className="group flex items-center justify-between rounded-3xl border border-[var(--line-2)] bg-[rgba(10,13,18,0.6)] p-7 backdrop-blur-xl transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-[var(--gold)] md:p-10">
            <span>
              <span className="block font-mono text-xs uppercase tracking-[0.3em] text-[var(--gold)]">Llamada directa</span>
              <span data-testid="contact-phone" className="mt-3 block font-display text-3xl text-[var(--ink)] md:text-4xl">{PHONE_DISPLAY}</span>
            </span>
            <Phone className="h-9 w-9 text-[var(--gold-l)] transition-transform duration-500 group-hover:-rotate-12" />
          </a>
        </div>
        <p data-testid="contact-location" className="mt-8 flex items-center gap-2 text-[var(--ink-2)]"><MapPin className="h-4 w-4 text-[var(--gold)]" /> Acarigua, estado Portuguesa, Venezuela</p>
      </Reveal>
    </div>
  </section>
);
