import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { NAV, TEL, WA } from "./data";
import { scrollToId } from "./useLenis";
import { WhatsAppIcon } from "./Icons";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const go = (id) => { setOpen(false); scrollToId(id); };

  return (
    <motion.header
      data-testid="nav-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${scrolled || open ? "bg-[rgba(8,10,14,0.78)] backdrop-blur-xl border-b border-[var(--line)]" : "border-b border-transparent"}`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
        <button data-testid="nav-logo" onClick={() => go("top")} className="flex items-center gap-3">
          <img src="/img/mark.png" alt="Monograma Pérez Sánchez" className="h-9 w-auto" />
          <span className="text-left leading-tight">
            <span className="block font-display text-[15px] tracking-[0.18em] text-[var(--ink)]">PÉREZ SÁNCHEZ</span>
            <span className="block font-mono text-[10px] tracking-[0.4em] text-[var(--gold)]">& ASOCIADOS</span>
          </span>
        </button>
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <button key={n.id} data-testid={`nav-link-${n.id}`} onClick={() => go(n.id)} className="link-u text-sm text-[var(--ink-2)] hover:text-[var(--ink)]">
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a data-testid="nav-call-btn" href={TEL} className="hidden items-center gap-2 rounded-full border border-[var(--line-2)] px-4 py-2 text-sm text-[var(--gold-l)] transition-colors hover:bg-[var(--gold)] hover:text-black sm:flex">
            <Phone className="h-4 w-4" /> Llamar
          </a>
          <a data-testid="nav-whatsapp-btn" href={WA} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-[var(--gold)] px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.03] sm:flex">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <button data-testid="nav-menu-toggle" onClick={() => setOpen(!open)} className="rounded-full border border-[var(--line-2)] p-2 text-[var(--ink)] lg:hidden" aria-label="Menú">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div data-testid="nav-mobile-menu" className="border-t border-[var(--line)] px-5 pb-6 lg:hidden">
          {NAV.map((n) => (
            <button key={n.id} data-testid={`mobile-link-${n.id}`} onClick={() => go(n.id)} className="block w-full border-b border-[var(--line)] py-4 text-left font-display text-2xl text-[var(--ink)]">
              {n.label}
            </button>
          ))}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a data-testid="mobile-call-btn" href={TEL} className="flex items-center justify-center gap-2 rounded-full border border-[var(--line-2)] py-3 text-[var(--gold-l)]"><Phone className="h-4 w-4" /> Llamar</a>
            <a data-testid="mobile-whatsapp-btn" href={WA} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] py-3 font-medium text-black"><WhatsAppIcon className="h-4 w-4" /> WhatsApp</a>
          </div>
        </div>
      )}
    </motion.header>
  );
};
