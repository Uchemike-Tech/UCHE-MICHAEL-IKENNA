import { motion } from "framer-motion";

type Skill = { name: string; slug: string };

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", slug: "python" },
      { name: "TypeScript", slug: "typescript" },
      { name: "SQL", slug: "mysql" },
      { name: "Java", slug: "openjdk" },
      { name: "R", slug: "r" },
      { name: "JavaScript", slug: "javascript" },
    ],
  },
  {
    title: "AI / ML",
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
    title: "Data & Analytics",
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
    title: "Cloud & Infra",
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
    title: "Web",
    skills: [
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Tailwind", slug: "tailwindcss" },
      { name: "HTML5", slug: "html5" },
      { name: "Vite", slug: "vite" },
    ],
  },
  {
    title: "Operations",
    skills: [
      { name: "Jira", slug: "jira" },
      { name: "Asana", slug: "asana" },
      { name: "Notion", slug: "notion" },
      { name: "Slack", slug: "slack" },
      { name: "Figma", slug: "figma" },
      { name: "Linear", slug: "linear" },
    ],
  },
];

export function Skills() {
  return (
    <section id="expertise" className="relative py-28 md:py-40 px-6 surface-2/30">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="font-mono-jb text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
              Expertise
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
              The toolkit, <span className="font-serif-i italic text-muted-foreground">earned in production.</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            A pragmatic stack — chosen for reliability, observability, and team handoff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border hairline">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.04 }}
              className="bg-background p-7"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="font-display text-sm font-medium">{g.title}</div>
                <div className="font-mono-jb text-[10px] text-muted-foreground">
                  {String(gi + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-x-4 gap-y-5">
                {g.skills.map((s) => (
                  <div
                    key={s.name}
                    className="group flex flex-col items-center gap-2.5"
                    title={s.name}
                  >
                    <div className="h-10 w-10 grid place-items-center rounded-lg surface hairline border group-hover:border-strong group-hover:bg-surface-2 transition-all">
                      <img
                        src={`https://cdn.simpleicons.org/${s.slug}/ffffff`}
                        alt={s.name}
                        width={20}
                        height={20}
                        loading="lazy"
                        className="h-5 w-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <span className="text-[10.5px] text-muted-foreground text-center leading-tight">
                      {s.name}
                    </span>
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
