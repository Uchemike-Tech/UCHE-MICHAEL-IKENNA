import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import portrait from "@/assets/michael-bw.jpg";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 font-medium">
          <img
            src={portrait}
            alt="Uche Michael Ikenna"
            className="h-7 w-7 rounded-md object-cover"
          />
          <span className="text-sm tracking-tight">Uche Michael Ikenna</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/Uche_Michael_Ikenna_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex btn-primary"
        >
          Resume
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden grid place-items-center h-9 w-9 rounded-full hairline-strong border bg-surface"
          aria-label="Toggle menu"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t hairline bg-background/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground py-1">
              {l.label}
            </a>
          ))}
          <a
            href="/Uche_Michael_Ikenna_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-center mt-2"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
