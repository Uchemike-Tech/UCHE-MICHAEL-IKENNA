import { motion } from "framer-motion";

const principles = [
  { n: "01", t: "Outcome-led", d: "Every model, dashboard, or pipeline ships against a measurable business KPI — never built for its own sake." },
  { n: "02", t: "Production-first", d: "I optimise for systems that hold up in production: monitored, observable, and built to be handed off." },
  { n: "03", t: "Quiet pragmatism", d: "Right-sized tooling. The simplest model that meets the bar wins, every time." },
  { n: "04", t: "Tight feedback loops", d: "Weekly demos, working software early, decisions made on data — not opinions." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[280px_1fr] gap-12 md:gap-20">
          <div className="md:sticky md:top-32 self-start">
            <div className="font-mono-jb text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
              About
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
              Principles that shape <span className="font-serif-i italic text-muted-foreground">my work.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-12 max-w-2xl">
              Based in Lagos, working with teams worldwide. I've delivered 25+ ML models,
              engineered ETL pipelines moving 500K+ daily transactions, and shipped 20+
              executive dashboards. The common thread is a focus on results that
              decision-makers can act on.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {principles.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-t hairline pt-5"
                >
                  <div className="font-mono-jb text-xs text-accent mb-3">{p.n}</div>
                  <h3 className="font-display text-lg font-medium mb-2">{p.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
