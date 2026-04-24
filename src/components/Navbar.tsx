import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display text-xl font-bold flex items-center gap-2">
          <span className="inline-grid place-items-center h-9 w-9 rounded-full bg-blue text-white text-sm shadow-pop border-2 border-ink">M</span>
          <span>Michael<span className="text-red">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-blue transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/Uche_Michael_Ikenna_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex bg-yellow text-foreground border-2 border-ink px-4 py-2 rounded-full font-semibold text-sm shadow-pop hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
        >
          Resume ↗
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden grid place-items-center h-10 w-10 rounded-full border-2 border-ink bg-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 py-5 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="/Uche_Michael_Ikenna_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-yellow text-foreground border-2 border-ink px-4 py-2 rounded-full font-semibold text-sm text-center mt-2 shadow-pop"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
