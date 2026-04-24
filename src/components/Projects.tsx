import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Machine Learning",
    title: "AI-Powered Customer Churn Prediction",
    desc: "Random Forest + XGBoost classifier hitting 91% accuracy. Early-warning system that cut churn by 28% for a telecom client. Automated preprocessing pipeline for 50K+ records monthly.",
    stats: ["91% accuracy", "28% churn reduction", "50K records/mo"],
    color: "from-primary/20 to-accent/10",
  },
  {
    tag: "Business Intelligence",
    title: "Sales Performance Analytics Dashboard",
    desc: "Power BI dashboard integrating 5+ data sources for real-time sales tracking and quarterly forecasting. Boosted client revenue by 20% and improved sales-team efficiency by 35%.",
    stats: ["+20% revenue", "+35% efficiency", "87% forecast accuracy"],
    color: "from-accent/20 to-primary/10",
  },
  {
    tag: "Automation",
    title: "Automated Expense Management System",
    desc: "Python automation handling expense categorization, anomaly detection, and financial reporting. Reduced manual data entry by 90% and eliminated 95% of human errors.",
    stats: ["−90% manual work", "−95% errors", "15+ hrs saved/mo"],
    color: "from-primary/15 to-accent/15",
  },
  {
    tag: "Computer Vision",
    title: "CNN Defect Detection System",
    desc: "Convolutional neural network for quality control in manufacturing. Achieved 94% defect-detection accuracy and reduced inspection time by 70%, processing 1,000+ images daily.",
    stats: ["94% accuracy", "−70% inspection time", "1k+ images/day"],
    color: "from-accent/15 to-primary/20",
  },
  {
    tag: "NLP",
    title: "Sentiment Analysis Tool",
    desc: "Brand reputation NLP model analyzing 100K+ customer reviews and social posts with 89% classification accuracy. Insights led to a 15% lift in customer satisfaction scores.",
    stats: ["100K+ docs", "89% accuracy", "+15% CSAT"],
    color: "from-primary/20 to-accent/20",
  },
  {
    tag: "Data Engineering",
    title: "ETL Pipeline Architecture",
    desc: "Engineered enterprise ETL pipelines handling 500K+ daily transactions across retail, healthcare, finance, and logistics — reducing data processing time by 60%.",
    stats: ["500K txns/day", "−60% processing", "98% data accuracy"],
    color: "from-accent/20 to-primary/15",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <div className="font-mono-jb text-xs uppercase tracking-widest text-primary mb-3">/ Selected Work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold max-w-3xl">
            Projects that moved the <span className="text-gradient">needle</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass p-7 hover:border-primary/40 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="font-mono-jb text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" size={20} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stats.map((s) => (
                    <span key={s} className="text-xs font-mono-jb px-2.5 py-1 rounded-md bg-background/50 border border-white/10">
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
