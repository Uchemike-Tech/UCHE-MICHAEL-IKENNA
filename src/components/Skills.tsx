import { motion } from "framer-motion";

const stacks = [
  { title: "Languages", items: ["Python", "SQL", "Java", "R", "JavaScript", "TypeScript"] },
  { title: "ML / AI", items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "XGBoost", "OpenCV", "HuggingFace"] },
  { title: "Data & BI", items: ["pandas", "NumPy", "Apache Spark", "Power BI", "Tableau", "Jupyter", "Excel"] },
  { title: "Web", items: ["React", "Next.js", "TanStack", "Tailwind CSS", "HTML / CSS", "Node.js"] },
  { title: "Cloud & DevOps", items: ["AWS", "Google Cloud", "Azure", "Docker", "Git", "CI/CD"] },
  { title: "Workflow", items: ["Agile / Scrum", "Jira", "Asana", "Trello", "Monday.com", "Notion"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="font-mono-jb text-xs uppercase tracking-widest text-primary mb-3">/ Toolkit</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              The <span className="text-gradient-accent">stack</span> I ship with.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Pragmatic choices over hype. The right tool for the job, every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stacks.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <h3 className="font-mono-jb text-xs uppercase tracking-widest text-muted-foreground">
                  {s.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full bg-secondary/60 border border-white/5 hover:border-primary/40 hover:text-primary transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
