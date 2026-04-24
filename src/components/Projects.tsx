import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import bg from "@/assets/bg-projects.jpg";
import imgChurn from "@/assets/proj-churn.jpg";
import imgSales from "@/assets/proj-sales.jpg";
import imgAuto from "@/assets/proj-automation.jpg";
import imgVision from "@/assets/proj-vision.jpg";
import imgNlp from "@/assets/proj-nlp.jpg";
import imgEtl from "@/assets/proj-etl.jpg";

const projects = [
  {
    img: imgChurn,
    tag: "Machine Learning",
    tagBg: "bg-blue",
    title: "Customer Churn Prediction",
    desc: "Random Forest + XGBoost classifier hitting 91% accuracy. Cut churn by 28% for a telecom client.",
    stats: ["91% accuracy", "−28% churn", "50K records/mo"],
  },
  {
    img: imgSales,
    tag: "BI Dashboard",
    tagBg: "bg-red",
    title: "Sales Analytics Dashboard",
    desc: "Power BI dashboard integrating 5+ data sources for real-time sales tracking and forecasting.",
    stats: ["+20% revenue", "+35% efficiency", "87% forecast"],
  },
  {
    img: imgAuto,
    tag: "Automation",
    tagBg: "bg-yellow",
    title: "Expense Management System",
    desc: "Python automation for expense categorization, anomaly detection, and reporting.",
    stats: ["−90% manual work", "−95% errors", "15+ hrs/mo"],
  },
  {
    img: imgVision,
    tag: "Computer Vision",
    tagBg: "bg-blue",
    title: "CNN Defect Detection",
    desc: "CNN model for quality control in manufacturing, processing 1,000+ images daily.",
    stats: ["94% accuracy", "−70% inspection", "1k+ imgs/day"],
  },
  {
    img: imgNlp,
    tag: "NLP",
    tagBg: "bg-red",
    title: "Sentiment Analysis Tool",
    desc: "NLP model analyzing 100K+ reviews and social posts for brand reputation insights.",
    stats: ["100K+ docs", "89% accuracy", "+15% CSAT"],
  },
  {
    img: imgEtl,
    tag: "Data Engineering",
    tagBg: "bg-yellow",
    title: "ETL Pipeline Architecture",
    desc: "Enterprise pipelines handling 500K+ daily transactions across multiple sectors.",
    stats: ["500K txns/day", "−60% latency", "98% accuracy"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      <img src={bg} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30 -z-10" />
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl mb-12">
          <span className="chip">/ Selected work</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Projects that moved the <span className="text-blue">needle</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="group bg-white border-2 border-ink rounded-2xl overflow-hidden shadow-pop hover:translate-y-[-4px] transition-transform flex flex-col"
            >
              <div className="aspect-video overflow-hidden border-b-2 border-ink bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className={`${p.tagBg} border-2 border-ink rounded-full px-2.5 py-0.5 font-mono-jb text-[10px] uppercase tracking-widest`}>
                    {p.tag}
                  </span>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-blue group-hover:rotate-12 transition-all" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stats.map((s) => (
                    <span key={s} className="text-[11px] font-mono-jb px-2 py-0.5 rounded border border-ink/30 bg-secondary">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
