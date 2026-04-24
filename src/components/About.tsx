import { motion } from "framer-motion";
import { Brain, Database, Zap, LineChart } from "lucide-react";

const pillars = [
  { Icon: Brain, title: "AI / ML Engineering", desc: "End-to-end ML systems — from data pipelines to deployed inference." },
  { Icon: Database, title: "Data Analytics", desc: "Statistical modeling, BI dashboards, and insights that drive decisions." },
  { Icon: Zap, title: "Automation", desc: "Python & RPA workflows that eliminate 15–20 hours of manual work weekly." },
  { Icon: LineChart, title: "Business Impact", desc: "30–50% efficiency gains, $2M+ in identified savings across clients." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16">
          <div className="md:sticky md:top-32 self-start">
            <div className="font-mono-jb text-xs uppercase tracking-widest text-primary mb-4">/ About</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              I turn messy data into <span className="text-gradient">measurable outcomes</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Based in Lagos, working with teams worldwide. I've built 25+ ML models, engineered ETL pipelines
              handling 500K+ daily transactions, and shipped 20+ executive dashboards.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether it's a churn prediction system, a Power BI dashboard, or a CV defect detector, I focus
              on one thing: results you can put a number on.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-primary/40 transition-all group"
              >
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary/15 text-primary mb-4 group-hover:scale-110 transition-transform">
                  <p.Icon size={20} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
