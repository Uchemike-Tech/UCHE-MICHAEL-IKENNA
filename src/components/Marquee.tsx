const items = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "Data Engineering",
  "MLOps",
  "Python",
  "TensorFlow",
  "PyTorch",
  "React",
  "Power BI",
  "AWS",
];

export function Marquee() {
  const all = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 py-6 bg-surface/40">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {all.map((t, i) => (
          <span key={i} className="font-display text-2xl md:text-4xl font-bold text-foreground/50 hover:text-primary transition-colors flex items-center gap-12">
            {t}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
