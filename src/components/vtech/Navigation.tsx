import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 lg:h-20">
        <Logo />
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display uppercase tracking-wider text-sm font-semibold text-navy hover:text-accent-red transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-navy hover:text-accent-red transition-colors"
            aria-label="Contact"
          >
            <Mail className="w-5 h-5" />
            <span className="font-display uppercase text-sm font-semibold tracking-wider">Contact</span>
          </a>
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display uppercase tracking-wider text-sm font-semibold text-navy py-2"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
