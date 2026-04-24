import { motion } from "framer-motion";

const roles = [
  {
    period: "Jan 2019 – Present",
    title: "Senior AI & Automation Consultant",
    org: "Freelance",
    points: [
      "Designed & deployed 25+ ML models, achieving 30–50% efficiency gains.",
      "Engineered ETL pipelines processing 500K+ daily transactions.",
      "Managed 30+ clients across retail, healthcare, finance, logistics — 95% retention.",
    ],
  },
  {
    period: "Mar 2019 – Dec 2024",
    title: "Lead Data Analyst & ML Researcher",
    org: "Self-Employed",
    points: [
      "Implemented ML algorithms reaching 92% average model accuracy.",
      "Built executive dashboards tracking 50+ KPIs — surfaced $2M+ in savings.",
      "Established data governance, lifting accuracy from 75% → 97%.",
    ],
  },
  {
    period: "Jun 2019 – Present",
    title: "Data Collection & QA Specialist",
    org: "Independent / Remote",
    points: [
      "Curated 10,000+ images and datasets for ML training pipelines.",
      "Maintained 99% data accuracy across 50,000+ annotated points.",
    ],
  },
  {
    period: "Mar 2019 – Dec 2021",
    title: "Computer Instructor & Trainer",
    org: "Sacred Heart Computer & Vocational Centre",
    points: [
      "Trained 150+ students with 95% satisfaction, 85% certification rate.",
      "Authored 20+ SOPs and training guides; ran the lab for 50+ users.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <div className="font-mono-jb text-xs uppercase tracking-widest text-primary mb-3">/ Experience</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            6+ years <span className="text-gradient-accent">in the trenches</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent" />
          <div className="space-y-10">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-primary glow" />
                <div className="pl-10 md:pl-0 md:pr-8">
                  <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-all">
                    <div className="font-mono-jb text-[11px] uppercase tracking-widest text-primary mb-2">
                      {r.period}
                    </div>
                    <h3 className="font-display text-xl font-bold">{r.title}</h3>
                    <div className="text-sm text-muted-foreground mb-4">{r.org}</div>
                    <ul className="space-y-2">
                      {r.points.map((p) => (
                        <li key={p} className="text-sm text-foreground/80 flex gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 glass rounded-2xl p-6 md:p-8 grid md:grid-cols-[1fr_auto] gap-4 items-center">
          <div>
            <div className="font-mono-jb text-[11px] uppercase tracking-widest text-primary mb-2">/ Education</div>
            <div className="font-display text-xl font-bold">B.Sc. Computer Science</div>
            <div className="text-sm text-muted-foreground">Federal University of Technology, Owerri · 2020 – 2025</div>
          </div>
          <div className="text-sm text-muted-foreground md:text-right">
            ML · Data Structures · AI · Software Engineering
          </div>
        </div>
      </div>
    </section>
  );
}
