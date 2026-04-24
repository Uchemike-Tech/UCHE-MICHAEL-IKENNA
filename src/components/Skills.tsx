import { motion } from "framer-motion";

// Logos via cdn.simpleicons.org (brand color)
type Skill = { name: string; slug: string; color?: string };

const groups: { title: string; bg: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    bg: "bg-blue",
    skills: [
      { name: "Python", slug: "python" },
      { name: "TypeScript", slug: "typescript" },
      { name: "JavaScript", slug: "javascript" },
      { name: "SQL", slug: "mysql" },
      { name: "Java", slug: "openjdk" },
      { name: "R", slug: "r" },
    ],
  },
  {
    title: "AI / ML",
    bg: "bg-red",
    skills: [
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "scikit-learn", slug: "scikitlearn" },
      { name: "Keras", slug: "keras" },
      { name: "OpenCV", slug: "opencv" },
      { name: "Hugging Face", slug: "huggingface" },
    ],
  },
  {
    title: "Data & BI",
    bg: "bg-yellow",
    skills: [
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "Apache Spark", slug: "apachespark" },
      { name: "Power BI", slug: "powerbi" },
      { name: "Tableau", slug: "tableau" },
      { name: "Jupyter", slug: "jupyter" },
    ],
  },
  {
    title: "Web",
    bg: "bg-blue",
    skills: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Tailwind", slug: "tailwindcss" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
    ],
  },
  {
    title: "Cloud & DevOps",
    bg: "bg-red",
    skills: [
      { name: "AWS", slug: "amazonwebservices" },
      { name: "Google Cloud", slug: "googlecloud" },
      { name: "Azure", slug: "microsoftazure" },
      { name: "Docker", slug: "docker" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
    ],
  },
  {
    title: "Workflow",
    bg: "bg-yellow",
    skills: [
      { name: "Jira", slug: "jira" },
      { name: "Asana", slug: "asana" },
      { name: "Trello", slug: "trello" },
      { name: "Notion", slug: "notion" },
      { name: "Slack", slug: "slack" },
      { name: "Figma", slug: "figma" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-4 sm:px-6 bg-secondary">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl mb-12">
          <span className="chip">/ Toolkit</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Tools I use <span className="text-red">every day</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Pragmatic stack — the right tool for the job, every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.05 }}
              className="bg-white border-2 border-ink rounded-2xl p-6 shadow-pop"
            >
              <div className={`inline-block ${g.bg} border-2 border-ink rounded-full px-3 py-1 font-mono-jb text-[10px] uppercase tracking-widest mb-5`}>
                {g.title}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {g.skills.map((s) => (
                  <div
                    key={s.name}
                    className="group flex flex-col items-center gap-2 p-2 rounded-xl border-2 border-transparent hover:border-ink hover:bg-secondary transition-all"
                    title={s.name}
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${s.slug}`}
                      alt={s.name}
                      width={32}
                      height={32}
                      loading="lazy"
                      className="h-8 w-8 object-contain group-hover:scale-110 transition-transform"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <span className="text-[11px] font-medium text-center leading-tight">{s.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
