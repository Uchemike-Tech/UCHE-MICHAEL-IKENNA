const items = [
  "Web Development",
  "React",
  "Node.js APIs",
  "Machine Learning",
  "Data Analytics",
  "Power BI & Tableau",
  "Computer Vision",
  "NLP",
];

export function Marquee() {
  const all = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y hairline py-8">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {all.map((t, i) => (
          <span
            key={i}
            className="font-display text-base md:text-lg font-medium text-muted-foreground flex items-center gap-12"
          >
            {t}
            <span className="text-accent/60">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
