import { motion } from "framer-motion";
import { Brain, Database, Zap, TrendingUp } from "lucide-react";
import bg from "@/assets/bg-about.jpg";

const pillars = [
  { Icon: Brain, title: "AI / ML Engineering", desc: "End-to-end ML systems — from data pipelines to deployed inference.", color: "bg-blue text-white" },
  { Icon: Database, title: "Data Analytics", desc: "Statistical modeling, BI dashboards, and insights that drive decisions.", color: "bg-red text-white" },
  { Icon: Zap, title: "Automation", desc: "Python & RPA workflows that eliminate 15–20 hours of manual work weekly.", color: "bg-yellow text-foreground" },
  { Icon: TrendingUp, title: "Business Impact", desc: "30–50% efficiency gains and $2M+ in identified savings across clients.", color: "bg-foreground text-background" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      <img src={bg} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25 -z-10" />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl mb-12">
          <span className="chip">/ About</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-tight">
            I turn messy data into <span className="text-blue">measurable outcomes</span>.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Based in Lagos, working with teams worldwide. I've built 25+ ML models,
            engineered ETL pipelines handling 500K+ daily transactions, and shipped
            20+ executive dashboards — focused on results you can put a number on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border-2 border-ink rounded-2xl p-6 shadow-pop hover:translate-y-[-4px] transition-transform"
            >
              <div className={`h-12 w-12 grid place-items-center rounded-xl border-2 border-ink ${p.color} mb-4`}>
                <p.Icon size={20} />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
