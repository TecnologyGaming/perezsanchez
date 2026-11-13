import { motion } from "framer-motion";
import { TEL, WA, PHONE_DISPLAY } from "./data";
import { WhatsAppIcon } from "./Icons";

export const Footer = () => (
  <footer data-testid="footer" className="border-t border-[var(--line)] px-5 pb-28 pt-14 md:px-10 md:pb-14 md:pr-28">
    <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div className="flex items-center gap-4">
        <img src="/img/mark.png" alt="" className="h-14 w-auto" />
        <div>
          <p className="font-display text-xl tracking-[0.15em] text-[var(--ink)]">PÉREZ SÁNCHEZ</p>
          <p className="font-mono text-xs tracking-[0.4em] text-[var(--gold)]">& ASOCIADOS</p>
        </div>
      </div>
      <div className="text-sm text-[var(--ink-2)] md:text-right">
        <p>Escritorio jurídico penalista · Acarigua, Portuguesa</p>
        <a data-testid="footer-phone" href={TEL} className="link-u mt-1 inline-block text-[var(--ink)]">{PHONE_DISPLAY}</a>
        <p className="mt-4 text-xs text-[var(--ink-3)]">© {new Date().getFullYear()} Pérez Sánchez & Asociados</p>
      </div>
    </div>
  </footer>
);

export const FloatingWA = () => (
  <motion.a
    data-testid="floating-whatsapp-btn"
    href={WA}
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 2, type: "spring", stiffness: 200, damping: 15 }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_rgba(37,211,102,0.4)]"
  >
    <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
    <WhatsAppIcon className="relative h-7 w-7" />
  </motion.a>
);
