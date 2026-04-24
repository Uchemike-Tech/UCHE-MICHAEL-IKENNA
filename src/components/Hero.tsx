import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import portrait from "@/assets/michael-portrait.jpg";
import bg from "@/assets/bg-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
      <img
        src={bg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-70 -z-10"
      />
      {/* playful shapes */}
      <div className="absolute top-32 right-10 h-20 w-20 rounded-full bg-yellow border-2 border-ink hidden md:block" />
      <div className="absolute bottom-20 left-12 h-16 w-16 rounded bg-red border-2 border-ink rotate-12 hidden md:block" />

      <div className="relative mx-auto max-w-6xl grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="chip"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
            Available for projects
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.02]"
          >
            Hi, I'm <span className="text-blue">Michael</span>.
            <br />I build <span className="bg-yellow px-2 -rotate-1 inline-block border-2 border-ink rounded-md">smart things</span> with data.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            AI/ML engineer, web developer & data analyst with 6+ years shipping
            machine learning, automation, and analytics that drive real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue text-white border-2 border-ink px-6 py-3 rounded-full font-semibold shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
            >
              See my work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white border-2 border-ink px-6 py-3 rounded-full font-semibold shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
            >
              Say hello
            </a>
          </motion.div>

          <div className="mt-7 flex gap-2">
            {[
              { Icon: GithubIcon, href: "https://github.com/Uchemike-Tech", label: "GitHub" },
              { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/michael-uche-731835368/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:uchemichaelbartholomew@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded-full border-2 border-ink bg-white hover:bg-yellow transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { v: "6+", l: "years", c: "text-blue" },
              { v: "25+", l: "ML models", c: "text-red" },
              { v: "30+", l: "clients", c: "text-foreground" },
            ].map((s) => (
              <div key={s.l} className="bg-white border-2 border-ink rounded-2xl p-3 shadow-pop">
                <div className={`font-display text-3xl font-bold ${s.c}`}>{s.v}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto"
        >
          {/* yellow backplate */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-yellow border-2 border-ink rounded-[2rem]" />
          <div className="relative aspect-[4/5] w-64 sm:w-72 md:w-full max-w-xs rounded-[2rem] overflow-hidden border-2 border-ink bg-white">
            <img src={portrait} alt="Michael Ikenna Uche" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-red text-white border-2 border-ink rounded-2xl px-3 py-2 shadow-pop -rotate-3">
            <div className="font-mono-jb text-[10px] uppercase tracking-widest opacity-80">Based in</div>
            <div className="font-bold text-sm">Lagos 🇳🇬</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
