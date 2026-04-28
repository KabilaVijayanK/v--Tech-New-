import { Linkedin } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    title: "For Clients",
    links: ["Products", "Services", "Spare Parts", "Documentation"],
  },
  {
    title: "New Clients",
    links: ["Request a Quote", "Industries", "Case Studies", "Custom Solutions"],
  },
  {
    title: "About VTECH",
    links: ["Company", "Vision & Mission", "Careers", "Contact"],
  },
];

export const Footer = () => (
  <footer className="bg-navy-deep text-white">
    <div className="container-x py-16 grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-4">
        <Logo variant="light" />
        <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-xs">
          Custom conveyor systems engineered in Chennai. Solution partner for
          your process.
        </p>
        <a
          href="#"
          aria-label="LinkedIn"
          className="mt-6 inline-flex items-center justify-center w-10 h-10 border border-white/20 hover:bg-accent-red hover:border-accent-red transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
      {cols.map((c) => (
        <div key={c.title} className="lg:col-span-2 lg:col-start-auto">
          <h4 className="font-display uppercase font-bold tracking-wider text-sm mb-4 text-white">
            {c.title}
          </h4>
          <ul className="space-y-2.5">
            {c.links.map((l) => (
              <li key={l}>
                <a href="#" className="text-white/60 text-sm hover:text-accent-red transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="border-t border-white/10">
      <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <div>© {new Date().getFullYear()} V Tech Industries. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Imprint</a>
        </div>
      </div>
    </div>
  </footer>
);
