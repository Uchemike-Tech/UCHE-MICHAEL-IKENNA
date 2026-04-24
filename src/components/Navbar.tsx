import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-4 sm:px-6`}>
        <div className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "glass" : ""}`}>
          <a href="#home" className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient">Michael.U</span>
            <span className="text-primary">/</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="/Uche_Michael_Ikenna_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex font-mono-jb text-xs uppercase tracking-wider bg-primary text-primary-foreground px-4 py-2 rounded-full hover:glow transition-all"
          >
            Resume ↗
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-2xl p-5 flex flex-col gap-3"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/90 py-1">
                {l.label}
              </a>
            ))}
            <a
              href="/Uche_Michael_Ikenna_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-mono-jb text-xs uppercase tracking-wider bg-primary text-primary-foreground px-4 py-2 rounded-full text-center mt-2"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
