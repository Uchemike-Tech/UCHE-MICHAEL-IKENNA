import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 noise"
          style={{ background: "var(--gradient-accent)" }}
        >
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative">
            <div className="font-mono-jb text-xs uppercase tracking-widest text-neon-foreground/70 mb-4">
              / Let's build
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-neon-foreground leading-[0.95] max-w-2xl">
              Got a problem worth solving?
            </h2>
            <p className="mt-6 text-neon-foreground/80 max-w-xl text-lg">
              I'm taking on new clients for AI/ML, automation, and analytics projects.
              Tell me about yours — replies within 24 hours.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:uchemichaelbartholomew@gmail.com"
                className="group inline-flex items-center gap-2 bg-neon-foreground text-primary px-6 py-3.5 rounded-full font-medium hover:scale-[1.02] transition-transform"
              >
                <Mail size={18} />
                Send an email
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/michael-uche-731835368/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-neon-foreground/30 text-neon-foreground px-6 py-3.5 rounded-full font-medium hover:bg-neon-foreground/10 transition-all"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { Icon: Mail, label: "Email", value: "uchemichaelbartholomew@gmail.com", href: "mailto:uchemichaelbartholomew@gmail.com" },
            { Icon: Phone, label: "Phone", value: "+234 813 200 3036", href: "tel:+2348132003036" },
            { Icon: MapPin, label: "Location", value: "Lagos, Nigeria · Remote-ready" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="glass rounded-2xl p-5 hover:border-primary/40 transition-all block"
            >
              <c.Icon className="text-primary mb-3" size={18} />
              <div className="font-mono-jb text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{c.label}</div>
              <div className="text-sm font-medium break-words">{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg">
          <span className="text-gradient">Michael.U</span>
        </div>
        <div className="text-xs text-muted-foreground font-mono-jb">
          © {new Date().getFullYear()} Uche Michael Ikenna · Crafted with care.
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/Uchemike-Tech" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/michael-uche-731835368/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin size={18} /></a>
          <a href="mailto:uchemichaelbartholomew@gmail.com" className="text-muted-foreground hover:text-primary"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
