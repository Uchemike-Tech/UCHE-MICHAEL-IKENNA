import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/michael-bw.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow -z-10" />
      <div className="absolute inset-0 grid-faint [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] -z-10" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono-jb text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Available for new engagements · Q2 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-balance font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.02] tracking-[-0.03em] max-w-5xl"
        >
          Designing intelligent systems that turn data into{" "}
          <span className="font-serif-i italic text-muted-foreground">measurable outcomes.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-12 grid md:grid-cols-[1fr_auto] gap-10 items-end"
        >
          <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
            I'm <span className="text-foreground">Michael Uche</span> — an AI/ML engineer and data
            consultant. Six years building production machine learning, automation, and
            analytics for teams across retail, healthcare, finance, and logistics.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary inline-flex items-center gap-1.5">
              View work <ArrowUpRight size={14} />
            </a>
            <a href="#contact" className="btn-ghost">Get in touch</a>
          </div>
        </motion.div>

        {/* Portrait + key stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-end"
        >
          <div className="relative">
            <div className="aspect-[4/5] w-56 sm:w-64 overflow-hidden rounded-2xl hairline border">
              <img
                src={portrait}
                alt="Michael Ikenna Uche"
                className="h-full w-full object-cover grayscale-[10%]"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 md:gap-10 border-t hairline pt-8">
            {[
              { v: "6+", l: "Years of practice" },
              { v: "25+", l: "ML models in production" },
              { v: "30+", l: "Clients served globally" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
