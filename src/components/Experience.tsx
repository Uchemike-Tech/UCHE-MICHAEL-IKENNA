import { motion } from "framer-motion";
import bg from "@/assets/bg-experience.jpg";

const roles = [
  {
    period: "Jan 2019 – Present",
    title: "Senior AI & Automation Consultant",
    org: "Freelance",
    color: "bg-blue text-white",
    points: [
      "Designed & deployed 25+ ML models, achieving 30–50% efficiency gains.",
      "Engineered ETL pipelines processing 500K+ daily transactions.",
      "Managed 30+ clients across retail, healthcare, finance, logistics.",
    ],
  },
  {
    period: "Mar 2019 – Dec 2024",
    title: "Lead Data Analyst & ML Researcher",
    org: "Self-Employed",
    color: "bg-red text-white",
    points: [
      "Implemented ML algorithms reaching 92% average model accuracy.",
      "Built executive dashboards tracking 50+ KPIs — surfaced $2M+ in savings.",
      "Lifted data accuracy from 75% → 97% via governance frameworks.",
    ],
  },
  {
    period: "Jun 2019 – Present",
    title: "Data Collection & QA Specialist",
    org: "Independent / Remote",
    color: "bg-yellow text-foreground",
    points: [
      "Curated 10,000+ images and datasets for ML training pipelines.",
      "Maintained 99% data accuracy across 50,000+ annotated points.",
    ],
  },
  {
    period: "Mar 2019 – Dec 2021",
    title: "Computer Instructor & Trainer",
    org: "Sacred Heart Computer & Vocational Centre",
    color: "bg-foreground text-background",
    points: [
      "Trained 150+ students with 95% satisfaction, 85% certification rate.",
      "Authored 20+ SOPs and training guides; ran lab for 50+ users.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      <img src={bg} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20 -z-10" />
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl mb-12">
          <span className="chip">/ Experience</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            6+ years <span className="text-red">in the trenches</span>.
          </h2>
        </div>

        <div className="space-y-5">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border-2 border-ink rounded-2xl p-6 shadow-pop grid md:grid-cols-[200px_1fr] gap-5"
            >
              <div>
                <div className={`inline-block ${r.color} border-2 border-ink rounded-full px-3 py-1 font-mono-jb text-[10px] uppercase tracking-widest`}>
                  {r.period}
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">{r.title}</h3>
                <div className="text-sm text-muted-foreground mb-3">{r.org}</div>
                <ul className="space-y-1.5">
                  {r.points.map((p) => (
                    <li key={p} className="text-sm flex gap-2">
                      <span className="text-blue mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 bg-foreground text-background border-2 border-ink rounded-2xl p-6 shadow-pop grid md:grid-cols-[1fr_auto] gap-3 items-center">
          <div>
            <div className="font-mono-jb text-[11px] uppercase tracking-widest text-yellow mb-1">/ Education</div>
            <div className="font-display text-xl font-bold">B.Sc. Computer Science</div>
            <div className="text-sm opacity-70">Federal University of Technology, Owerri · 2020 – 2025</div>
          </div>
          <div className="text-xs opacity-70 md:text-right">
            ML · Data Structures · AI · Software Engineering
          </div>
        </div>
      </div>
    </section>
  );
}
