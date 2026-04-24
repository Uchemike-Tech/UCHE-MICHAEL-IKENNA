const items = [
  "Machine Learning",
  "Computer Vision",
  "NLP",
  "Data Engineering",
  "Power BI",
  "Python",
  "React",
  "Automation",
  "MLOps",
  "Cloud",
];

export function Marquee() {
  const all = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y-2 border-ink py-5 bg-blue">
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {all.map((t, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-3xl font-bold text-white flex items-center gap-10"
          >
            {t}
            <span className="text-yellow">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
