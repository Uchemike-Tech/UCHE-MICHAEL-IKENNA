import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import imgChurn from "@/assets/proj-churn.jpg";
import imgSales from "@/assets/proj-sales.jpg";
import imgAuto from "@/assets/proj-automation.jpg";
import imgVision from "@/assets/proj-vision.jpg";
import imgNlp from "@/assets/proj-nlp.jpg";
import imgEtl from "@/assets/proj-etl.jpg";

const projects = [
  {
    img: imgChurn,
    no: "01",
    tag: "Machine Learning",
    title: "Customer Churn Prediction",
    desc: "Random Forest + XGBoost classifier achieving 91% accuracy. Early-warning system reduced churn by 28% for a telecommunications client.",
    stats: [["91%", "Accuracy"], ["−28%", "Churn"], ["50K", "Records / mo"]],
  },
  {
    img: imgSales,
    no: "02",
    tag: "Business Intelligence",
    title: "Sales Performance Dashboard",
    desc: "Power BI dashboard integrating five upstream sources for real-time tracking and quarterly forecasting across the sales organisation.",
    stats: [["+20%", "Revenue"], ["+35%", "Sales efficiency"], ["87%", "Forecast accuracy"]],
  },
  {
    img: imgAuto,
    no: "03",
    tag: "Automation",
    title: "Expense Management System",
    desc: "Python automation handling expense categorisation, anomaly detection, and reporting — integrated with cloud storage for budget alerts.",
    stats: [["−90%", "Manual entry"], ["−95%", "Errors"], ["15+ hrs", "Saved / mo"]],
  },
  {
    img: imgVision,
    no: "04",
    tag: "Computer Vision",
    title: "CNN Defect Detection",
    desc: "Convolutional model deployed for quality control in manufacturing, processing 1,000+ images per day with real-time inference.",
    stats: [["94%", "Accuracy"], ["−70%", "Inspection time"], ["1k+", "Images / day"]],
  },
  {
    img: imgNlp,
    no: "05",
    tag: "Natural Language",
    title: "Sentiment Analysis Engine",
    desc: "NLP pipeline analysing 100K+ customer reviews and social posts for brand reputation insights — informing product and support decisions.",
    stats: [["100K+", "Documents"], ["89%", "Accuracy"], ["+15%", "CSAT lift"]],
  },
  {
    img: imgEtl,
    no: "06",
    tag: "Data Engineering",
    title: "ETL Pipeline Architecture",
    desc: "Enterprise pipelines moving 500K+ daily transactions across retail, healthcare, finance, and logistics — reducing latency 60%.",
    stats: [["500K", "Txns / day"], ["−60%", "Latency"], ["98%", "Data accuracy"]],
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-28 md:py-40 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="font-mono-jb text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Selected work
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              Six projects, <span className="font-serif-i italic text-muted-foreground">measurable lift.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            A cross-section of recent engagements. Numbers verified with clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden border hairline">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.08 }}
              className="group bg-background p-7 hover:bg-surface/50 transition-colors"
            >
              <div className="aspect-[16/10] rounded-xl overflow-hidden border hairline mb-6 bg-surface">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                />
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono-jb text-[10px] text-muted-foreground">{p.no}</span>
                  <span className="font-mono-jb text-[10px] uppercase tracking-[0.14em] text-accent">{p.tag}</span>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>

              <h3 className="font-display text-2xl font-semibold tracking-tight mb-3">{p.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">{p.desc}</p>

              <div className="grid grid-cols-3 gap-4 border-t hairline pt-5">
                {p.stats.map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-lg font-semibold">{v}</div>
                    <div className="text-[10.5px] uppercase tracking-[0.1em] text-muted-foreground mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
