import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import portrait from "@/assets/michael-bw.jpg";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-6">
      <div className="absolute inset-0 bg-radial-glow -z-10" />
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="font-mono-jb text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
            Contact
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02] max-w-3xl mx-auto text-balance">
            Have a project worth <span className="font-serif-i italic text-muted-foreground">solving?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            I'm taking on a small number of new engagements this quarter. Tell me about
            the problem — replies within 24 hours.
          </p>
          <div className="mt-9 inline-flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:uchemichaelbartholomew@gmail.com"
              className="btn-primary inline-flex items-center gap-1.5"
            >
              Start a conversation <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-uche-731835368/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost inline-flex items-center gap-2"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-10">
          {[
            { Icon: Mail, label: "Email", value: "uchemichaelbartholomew@gmail.com", href: "mailto:uchemichaelbartholomew@gmail.com" },
            { Icon: Phone, label: "Phone", value: "+234 813 200 3036", href: "tel:+2348132003036" },
            { Icon: MapPin, label: "Location", value: "Lagos, Nigeria · Remote-ready" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="block group"
            >
              <c.Icon size={16} className="text-muted-foreground group-hover:text-accent transition-colors mb-4" />
              <div className="font-mono-jb text-[10px] uppercase tracking-[0.14em] text-muted-foreground mb-1.5">{c.label}</div>
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
    <footer className="border-t hairline py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <img
            src={portrait}
            alt="Uche Michael Ikenna"
            className="h-6 w-6 rounded-md object-cover"
          />
          <span className="text-sm">Uche Michael Ikenna</span>
        </div>
        <div className="text-xs text-muted-foreground font-mono-jb">
          © {new Date().getFullYear()} Uche Michael Ikenna · All rights reserved.
        </div>
        <div className="flex gap-1">
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
              className="h-9 w-9 grid place-items-center rounded-full text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
