import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/michael-bw.jpg";
import bgPortrait from "@/assets/michael-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow -z-10" />
      <div className="absolute inset-0 grid-faint [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src={bgPortrait}
          alt=""
          className="h-full w-full object-cover object-[60%_10%] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/70 to-background" />
      </div>

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

        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-1 md:order-3 mt-10 md:mt-20 grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-end"
          >
            <div className="relative flex justify-center md:block">
              <div className="md:hidden h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-full ring-2 ring-accent/50 ring-offset-4 ring-offset-background/70">
                <img
                  src={portrait}
                  alt="Uche Michael Ikenna"
                  className="h-full w-full object-cover object-[55%_10%] grayscale-[10%]"
                />
              </div>

              <div className="hidden md:block aspect-[4/5] w-56 lg:w-64 overflow-hidden rounded-2xl hairline border">
                <img
                  src={portrait}
                  alt="Uche Michael Ikenna"
                  className="h-full w-full object-cover grayscale-[10%]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 md:gap-10 border-t hairline pt-7 md:pt-8">
              {[
                { v: "6+", l: "Years experience" },
                { v: "25+", l: "ML models deployed" },
                { v: "20+", l: "Dashboards shipped" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                    {s.v}
                  </div>
                  <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1 mt-10 md:mt-0 text-balance font-display text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.08] md:leading-[1.02] tracking-[-0.03em] max-w-5xl"
          >
            Uche Michael Ikenna —{" "}
            <span className="font-serif-i italic text-muted-foreground">
              Web Developer · AI &amp; ML Engineer · Data Analyst.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-3 md:order-2 mt-7 md:mt-12 grid md:grid-cols-[1fr_auto] gap-8 md:gap-10 items-end"
          >
            <p className="max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              I build full-stack web apps, machine learning solutions, automation systems, and dashboards —
              turning complex problems into measurable outcomes.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-primary inline-flex items-center gap-1.5">
                View work <ArrowUpRight size={14} />
              </a>
              <a href="#contact" className="btn-ghost">Get in touch</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
