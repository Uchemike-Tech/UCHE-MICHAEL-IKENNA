import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/michael-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono-jb text-xs uppercase tracking-widest text-muted-foreground">
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
          >
            Building <span className="text-gradient">intelligent</span><br />
            systems that <span className="italic font-light">scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            I'm <span className="text-foreground font-medium">Michael Uche</span> — an AI/ML engineer, web developer, and data analyst with 6+ years
            shipping production ML, automation, and analytics that drive 30–50% efficiency gains.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:glow transition-all"
            >
              View my work
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:bg-secondary transition-all"
            >
              Let's talk →
            </a>

            <div className="flex items-center gap-1 ml-2">
              {[
                { Icon: Github, href: "https://github.com/Uchemike-Tech" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/michael-uche-731835368/" },
                { Icon: Mail, href: "mailto:uchemichaelbartholomew@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 grid place-items-center rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { v: "6+", l: "Years experience" },
              { v: "25+", l: "ML models shipped" },
              { v: "30+", l: "Happy clients" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-primary">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 via-accent/20 to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] w-72 sm:w-80 md:w-full max-w-sm rounded-[2rem] overflow-hidden border border-white/10 glow">
            <img src={portrait} alt="Michael Ikenna Uche" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-xl p-3">
              <div className="font-mono-jb text-[10px] uppercase tracking-widest text-primary">Currently</div>
              <div className="text-sm font-medium mt-0.5">Crafting AI · Lagos, NG 🇳🇬</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
