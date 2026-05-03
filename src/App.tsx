import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CruzPatea } from "@/components/sigils/CruzPatea";

interface EmberProps {
  leftPct: number;
  delay: number;
  duration?: number;
}

function Ember({ leftPct, delay, duration = 14 }: EmberProps) {
  return (
    <motion.span
      aria-hidden="true"
      className="bg-ember pointer-events-none absolute h-[3px] w-[3px] rounded-full blur-[1px]"
      style={{
        left: `${leftPct}%`,
        boxShadow: "0 0 8px var(--color-ember), 0 0 16px var(--color-ember)",
      }}
      initial={{ y: "100vh", x: 0, opacity: 0 }}
      animate={{
        y: "-10vh",
        x: [0, 8, -6, 4, 0],
        opacity: [0, 0.7, 0.5, 0.2, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
    />
  );
}

const TAGLINE_EN = "Where games never die.";
const TAGLINE_PT = "Onde jogos nunca morrem.";

function App() {
  const [taglineHover, setTaglineHover] = useState(false);
  const [showK, setShowK] = useState(false);

  useEffect(() => {
    const handle = window.setTimeout(() => setShowK(true), 6000);
    return () => window.clearTimeout(handle);
  }, []);

  return (
    <main className="bg-background text-foreground relative isolate min-h-dvh w-full overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <Ember leftPct={18} delay={0} />
      <Ember leftPct={62} delay={5} />
      <Ember leftPct={84} delay={9} />

      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 text-center">
        <p className="text-muted-foreground mb-4 font-mono text-[11px] tracking-[0.4em] uppercase">
          xy.classics &nbsp;·&nbsp; phase 0
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-heading text-primary text-5xl font-bold tracking-[0.18em] sm:text-6xl"
          style={{ textShadow: "0 0 28px oklch(0.72 0.18 50 / 0.35)" }}
        >
          XY CLASSICS
        </motion.h1>

        <div
          className="mt-3 h-7 cursor-default"
          onMouseEnter={() => setTaglineHover(true)}
          onMouseLeave={() => setTaglineHover(false)}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineHover ? "pt" : "en"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4 }}
              className="text-bone/80 font-serif text-lg italic"
            >
              {taglineHover ? TAGLINE_PT : TAGLINE_EN}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-muted-foreground mt-10 flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] uppercase"
        >
          <span className="bg-ember inline-block h-1.5 w-1.5 animate-pulse rounded-full" />
          <span>scaffold.complete</span>
          <span className="text-border-strong">·</span>
          <span>v0.0.1</span>
          <span className="text-border-strong">·</span>
          <span>tauri 2 / react 19</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1.2 }}
          className="text-muted-foreground mt-12 max-w-md text-sm leading-relaxed"
        >
          The vault is sealed. Catalog, emulators, and saves arrive in upcoming phases. For now — a
          single, quiet ember.
        </motion.p>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="text-muted-foreground/60 absolute inset-x-0 bottom-4 z-10 text-center font-mono text-[10px] tracking-[0.3em] uppercase"
      >
        gpl-3.0 &nbsp;·&nbsp; iuxyog &nbsp;·&nbsp; 2026
      </motion.footer>

      <button
        type="button"
        aria-label="XY Classics sigil"
        className="text-vasco-cross/60 hover:text-primary focus-visible:ring-ring absolute top-4 right-4 z-20 rounded-md p-1.5 transition-colors focus:outline-none focus-visible:ring-2"
        onClick={() => setShowK((prev) => !prev)}
      >
        <CruzPatea className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {showK && (
          <motion.span
            key="kafka-k"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.12, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            aria-hidden="true"
            className="text-bone pointer-events-none absolute bottom-8 left-1/2 z-0 -translate-x-1/2 text-[28rem] leading-none select-none"
            style={{ fontFamily: "var(--font-fraktur)" }}
          >
            K
          </motion.span>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
