import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import bg from "@/assets/bg-contact.jpg";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      <img src={bg} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40 -z-10" />
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-blue text-white border-2 border-ink rounded-3xl p-8 md:p-14 shadow-pop relative overflow-hidden"
        >
          <div className="absolute top-6 right-6 h-16 w-16 rounded-full bg-yellow border-2 border-ink hidden md:block" />
          <div className="absolute bottom-6 right-24 h-10 w-10 rounded bg-red border-2 border-ink rotate-12 hidden md:block" />

          <span className="chip !text-foreground">/ Let's build</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1] max-w-2xl">
            Got a problem worth solving?
          </h2>
          <p className="mt-5 max-w-xl text-white/90 text-lg">
            I'm taking on new clients for AI/ML, automation, and analytics projects.
            Replies within 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:uchemichaelbartholomew@gmail.com"
              className="inline-flex items-center gap-2 bg-yellow text-foreground border-2 border-ink px-6 py-3 rounded-full font-semibold shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
            >
              <Mail size={18} /> Send an email <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-uche-731835368/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-foreground border-2 border-ink px-6 py-3 rounded-full font-semibold shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {[
            { Icon: Mail, label: "Email", value: "uchemichaelbartholomew@gmail.com", href: "mailto:uchemichaelbartholomew@gmail.com", bg: "bg-yellow" },
            { Icon: Phone, label: "Phone", value: "+234 813 200 3036", href: "tel:+2348132003036", bg: "bg-red text-white" },
            { Icon: MapPin, label: "Location", value: "Lagos, Nigeria · Remote-ready", bg: "bg-blue text-white" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="bg-white border-2 border-ink rounded-2xl p-5 shadow-pop hover:translate-y-[-4px] transition-transform block"
            >
              <div className={`inline-grid place-items-center h-9 w-9 rounded-full border-2 border-ink ${c.bg} mb-3`}>
                <c.Icon size={16} />
              </div>
              <div className="font-mono-jb text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{c.label}</div>
              <div className="text-sm font-semibold break-words">{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-ink py-8 px-4 sm:px-6 bg-foreground text-background">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg">
          Michael<span className="text-yellow">.</span>
        </div>
        <div className="text-xs opacity-70 font-mono-jb">
          © {new Date().getFullYear()} Uche Michael Ikenna · Built with care.
        </div>
        <div className="flex gap-2">
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
              className="h-9 w-9 grid place-items-center rounded-full border-2 border-background hover:bg-yellow hover:text-foreground hover:border-ink transition-colors"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
