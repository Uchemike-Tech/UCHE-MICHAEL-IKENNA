import { motion } from "framer-motion";

const roles = [
  {
    period: "2019 — Present",
    title: "Senior AI & Automation Consultant",
    org: "Freelance (Contract)",
    points: [
      "Designed and deployed 25+ machine learning models for predictive analytics, segmentation, and forecasting — delivering 30–50% efficiency gains.",
      "Developed automation scripts and RPA solutions that eliminated 15–20 hours of manual work weekly per client while processing 100K+ records with high accuracy.",
      "Engineered ETL pipelines and integrations handling 500K+ daily transactions, reducing processing time by 60%.",
      "Built dashboards and real-time analytics platforms supporting data-driven decision-making for stakeholders.",
    ],
  },
  {
    period: "2019 — Present",
    title: "Full-Stack Web Developer",
    org: "Independent Practice",
    points: [
      "Built responsive web applications with React and modern UI tooling.",
      "Designed and shipped backend APIs with Node.js and Express.",
      "Delivered authentication, database integration, and production deployments for client projects.",
    ],
  },
  {
    period: "2019 — 2024",
    title: "Lead Data Analyst & ML Researcher",
    org: "Self-Employed",
    points: [
      "Conducted advanced analytics projects (statistical modeling, hypothesis testing, predictive analytics) improving business insights by 35–45%.",
      "Researched and implemented ML algorithms for classification, regression, and clustering with 92% average model accuracy.",
      "Designed executive dashboards tracking 50+ KPIs in Power BI and Tableau, identifying $2M+ in savings and opportunities.",
      "Built automated reporting pipelines that reduced reporting turnaround by 80%.",
    ],
  },
  {
    period: "2019 — Present",
    title: "Virtual Assistant & Project Coordinator",
    org: "Self-Employed",
    points: [
      "Supported 15+ executives and founders with calendar, email coordination, and client communications.",
      "Developed SOPs, workflow diagrams, and training materials that reduced onboarding time by 40%.",
      "Coordinated cross-functional projects with Agile practices using Asana and Trello, maintaining a strong on-time delivery record.",
      "Managed CRM workflows and reporting, improving conversion rates and pipeline visibility.",
    ],
  },
  {
    period: "2019 — Present",
    title: "Data Collection Specialist & Quality Assurance Analyst",
    org: "Independent Contributor (Remote)",
    points: [
      "Captured and curated 10,000+ high-quality images and datasets for AI training under strict quality standards.",
      "Implemented quality checks and validation workflows achieving 99% data accuracy across 50,000+ annotated points.",
      "Executed field data collection with accurate metadata and consistent capture guidelines.",
    ],
  },
  {
    period: "2019 — 2021",
    title: "Computer Instructor & Technology Trainer",
    org: "Sacred Heart Computer & Vocational Centre",
    points: [
      "Designed training programs covering digital literacy, programming fundamentals (Python, Java), and data analysis basics.",
      "Trained 150+ students, achieving strong satisfaction and completion outcomes.",
      "Maintained computer lab operations and resolved technical issues supporting daily learning activities.",
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
            6+ years delivering <span className="font-serif-i italic text-muted-foreground">AI, analytics, and web.</span>
          </h2>
        </div>

        <div className="space-y-12">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12"
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

        <div className="mt-16 grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 py-8">
          <div className="font-mono-jb text-xs text-muted-foreground pt-1">2020 — 2025</div>
          <div>
            <div className="font-mono-jb text-[10px] uppercase tracking-[0.14em] text-accent mb-2">Education</div>
            <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">B.Sc. Computer Science</h3>
            <div className="text-sm text-muted-foreground mt-1">
              Federal University of Technology, Owerri
            </div>
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl">
              Coursework: Machine Learning, Data Structures &amp; Algorithms, Database Management Systems,
              Artificial Intelligence, Statistical Analysis, Software Engineering, Web Development.
            </p>
            <div className="mt-8">
              <h4 className="font-display text-lg font-semibold tracking-tight">Diploma in Computer Operations</h4>
              <div className="text-sm text-muted-foreground mt-1">
                Sacred Heart Computer &amp; Vocational Centre · 2018
              </div>
              <p className="text-sm text-muted-foreground mt-3 max-w-2xl">
                Focus: Computer Hardware/Software, Office Productivity, Digital Literacy, Graphic Design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
