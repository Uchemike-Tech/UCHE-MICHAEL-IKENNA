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
    tag: "Web",
    title: "Customer Portal & Admin Dashboard",
    desc: "React dashboard with role-based access and a Node.js API powering customer management, reporting, and notifications.",
    stats: [["RBAC", "Auth"], ["REST", "API"], ["Postgres", "DB"]],
  },
  {
    img: imgSales,
    no: "02",
    tag: "BI",
    title: "Intelligent Sales Performance Analytics Dashboard",
    desc: "Power BI dashboard integrating multiple sources to track performance, forecast trends, and surface actionable insights for leaders.",
    stats: [["5+", "Sources"], ["20%", "Revenue ↑"], ["50+", "KPIs"]],
  },
  {
    img: imgAuto,
    no: "03",
    tag: "ML",
    title: "AI-Powered Customer Churn Prediction System",
    desc: "Machine learning model (Random Forest + XGBoost) with an early warning workflow to reduce churn and improve retention decisions.",
    stats: [["91%", "Accuracy"], ["28%", "Churn ↓"], ["50K+", "Records"]],
  },
  {
    img: imgVision,
    no: "04",
    tag: "Web",
    title: "Marketing Website (Performance + SEO)",
    desc: "Responsive website with optimized Core Web Vitals, clean content structure, and metadata built for discoverability.",
    stats: [["SEO", "Metadata"], ["Fast", "Loads"], ["Mobile", "First"]],
  },
  {
    img: imgNlp,
    no: "05",
    tag: "Automation",
    title: "Automated Expense Management & Reporting System",
    desc: "Python automation for expense categorization, anomaly detection, and reporting with real-time budget visibility.",
    stats: [["90%", "Time ↓"], ["15+", "Hours saved"], ["95%", "Errors ↓"]],
  },
  {
    img: imgEtl,
    no: "06",
    tag: "CV",
    title: "Computer Vision Object Recognition System",
    desc: "CNN-based image classification for quality control, enabling fast defect detection with real-time inference workflows.",
    stats: [["94%", "Accuracy"], ["70%", "Time ↓"], ["1K+", "Imgs/day"]],
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
              Projects with <span className="font-serif-i italic text-muted-foreground">measurable impact.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            AI/ML, dashboards, automation, and data engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.08 }}
              className="group"
            >
              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-surface">
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

              <div className="grid grid-cols-3 gap-4">
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
