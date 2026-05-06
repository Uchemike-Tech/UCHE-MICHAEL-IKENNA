import { motion } from "framer-motion";

const principles = [
  { n: "01", t: "Outcome-led", d: "Every model, dashboard, or web app ships against a measurable business goal." },
  { n: "02", t: "Production-first", d: "I optimize for systems that hold up in production: reliable, monitored, and easy to hand off." },
  { n: "03", t: "Right-sized tooling", d: "The simplest approach that meets the bar wins — with clean implementation and testing." },
  { n: "04", t: "Tight feedback loops", d: "Weekly demos, early delivery, and decisions made on data — not opinions." },
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
              Based in Lagos, working with teams worldwide. I build end-to-end solutions across web
              development, AI &amp; machine learning, automation, and data analytics — from clean UIs and
              APIs to predictive models and executive dashboards.
              <span className="text-foreground"> Founder of Uchemike-Tech</span> (formerly MB-Tech).
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
