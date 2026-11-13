import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowDownRight, Phone } from "lucide-react";
import { MaskLine, EASE } from "./Reveal";
import { TEL, WA, PHONE_DISPLAY } from "./data";
import { WhatsAppIcon } from "./Icons";

const HeroArt = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 80, damping: 18 });
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      data-testid="hero-art"
      onMouseMove={move}
      onMouseLeave={reset}
      initial={{ clipPath: "inset(100% 0 0 0 round 999px 999px 24px 24px)" }}
      animate={{ clipPath: "inset(0% 0 0 0 round 999px 999px 24px 24px)" }}
      transition={{ duration: 1.6, ease: EASE, delay: 0.5 }}
      className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-t-full rounded-b-3xl border border-[var(--line-2)]"
      style={{ perspective: 1000 }}
    >
      <motion.img
        src="/img/justice.jpg"
        alt="Estatua de la justicia con balanza"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 2.4, ease: EASE, delay: 0.5 }}
        className="absolute inset-0 h-full w-full object-cover object-[60%_center] opacity-70 grayscale-[35%]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(8,10,14,0.55)_55%,rgba(8,10,14,0.95)_100%)]" />
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="absolute inset-0 flex items-center justify-center">
        <motion.img
          src="/img/mark.png"
          alt=""
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE, delay: 1.3 }}
          style={{ translateZ: 80 }}
          className="w-[42%] drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]"
        />
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 pb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--ink-2)]">
        <span>Acarigua</span><span>Portuguesa</span>
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yArt = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="top" ref={ref} data-testid="hero-section" className="spotlight relative min-h-[100svh] overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 pb-20 md:px-10 lg:grid-cols-12 lg:gap-8">
        <motion.div style={{ y: yText }} className="lg:col-span-7">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }} className="eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)]" /> Escritorio jurídico penalista
          </motion.p>
          <h1 data-testid="hero-title" className="font-display text-[13vw] leading-[0.92] tracking-[-0.02em] text-[var(--ink)] sm:text-7xl lg:text-[6.6rem]">
            <MaskLine delay={0.35}>Su libertad</MaskLine>
            <MaskLine delay={0.5}><em className="text-gold-grad">merece</em> la</MaskLine>
            <MaskLine delay={0.65}>mejor defensa.</MaskLine>
          </h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 1, ease: EASE }} className="mt-8 max-w-xl text-base leading-relaxed text-[var(--ink-2)] md:text-lg">
            Pérez Sánchez & Asociados. Abogados penalistas en Acarigua, estado Portuguesa. Defendemos sus derechos con rigor técnico, discreción y presencia en cada audiencia.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 1, ease: EASE }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a data-testid="hero-whatsapp-btn" href={WA} target="_blank" rel="noreferrer" className="btn-gold group">
              <WhatsAppIcon /> Escribir por WhatsApp
              <ArrowDownRight className="h-4 w-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a data-testid="hero-call-btn" href={TEL} className="btn-ghost"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a>
          </motion.div>
        </motion.div>
        <motion.div style={{ y: yArt }} className="lg:col-span-5"><HeroArt /></motion.div>
      </div>
    </section>
  );
};
