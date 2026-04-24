import { motion } from "framer-motion";

const roles = [
  {
    period: "2019 — Present",
    title: "Senior AI & Automation Consultant",
    org: "Independent Practice",
    points: [
      "Designed and deployed 25+ ML models, achieving 30–50% efficiency gains.",
      "Engineered ETL pipelines processing 500K+ daily transactions.",
      "Managed 30+ clients across retail, healthcare, finance, and logistics — 95% retention.",
    ],
  },
  {
    period: "2019 — 2024",
    title: "Lead Data Analyst & ML Researcher",
    org: "Self-Employed",
    points: [
      "Implemented ML algorithms reaching 92% average model accuracy.",
      "Built executive dashboards tracking 50+ KPIs — surfaced $2M+ in savings.",
      "Lifted data accuracy from 75% to 97% through governance frameworks.",
    ],
  },
  {
    period: "2019 — Present",
    title: "Data Collection & QA Specialist",
    org: "Independent / Remote",
    points: [
      "Curated 10,000+ images and datasets for ML training pipelines.",
      "Maintained 99% data accuracy across 50,000+ annotated points.",
    ],
  },
  {
    period: "2019 — 2021",
    title: "Computer Instructor & Trainer",
    org: "Sacred Heart Computer & Vocational Centre",
    points: [
      "Trained 150+ students with 95% satisfaction, 85% certification rate.",
      "Authored 20+ SOPs and training guides for software tools.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <div className="font-mono-jb text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Experience
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
            Six years building <span className="font-serif-i italic text-muted-foreground">things that ship.</span>
          </h2>
        </div>

        <div>
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 py-8 border-t hairline last:border-b"
            >
              <div className="font-mono-jb text-xs text-muted-foreground pt-1">
                {r.period}
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">{r.title}</h3>
                <div className="text-sm text-muted-foreground mt-1 mb-4">{r.org}</div>
                <ul className="space-y-2 max-w-2xl">
                  {r.points.map((p) => (
                    <li key={p} className="text-[15px] text-foreground/80 leading-relaxed flex gap-3">
                      <span className="text-accent mt-2 shrink-0">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 py-8 border-t hairline">
          <div className="font-mono-jb text-xs text-muted-foreground pt-1">2020 — 2025</div>
          <div>
            <div className="font-mono-jb text-[10px] uppercase tracking-[0.14em] text-accent mb-2">Education</div>
            <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">B.Sc. Computer Science</h3>
            <div className="text-sm text-muted-foreground mt-1">
              Federal University of Technology, Owerri
            </div>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl">
              Coursework: Machine Learning, Data Structures &amp; Algorithms, Database Systems,
              Artificial Intelligence, Statistical Analysis, Software Engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
