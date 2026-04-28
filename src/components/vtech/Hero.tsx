import slat from "@/assets/hero-slat.jpg";
import roller from "@/assets/hero-roller.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => (
  <section className="relative bg-navy-deep text-white overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, white 0 1px, transparent 1px 22px), repeating-linear-gradient(-45deg, white 0 1px, transparent 1px 22px)",
      }}
    />
    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent-red/10 blur-3xl" />
    <div className="container-x relative pt-16 lg:pt-24 pb-20">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-10 h-px bg-accent-red" />
          <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-semibold">
            Solution Partner for Your Process
          </span>
        </div>
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-8xl leading-[0.95] uppercase">
          Built to last
          <br />
          <span className="text-accent-red">Backed</span> by service
        </h1>
        <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-2xl">
          Custom conveyor solutions engineered in Chennai — designed for years
          of dependable operation, increased efficiency and low maintenance.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-4 lg:gap-6">
        {[
          { src: slat, title: "Slat Chain Conveyors", tag: "Heavy duty" },
          { src: roller, title: "Roller Conveyors", tag: "Modular" },
        ].map((p) => (
          <div
            key={p.title}
            className="group relative overflow-hidden border border-white/10 bg-navy-soft/40"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={p.src}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={1024}
                height={768}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 flex items-end justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent-red font-bold mb-1">
                  {p.tag}
                </div>
                <div className="font-display text-2xl lg:text-3xl uppercase font-bold">
                  {p.title}
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-white/70 group-hover:text-accent-red group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <a
          href="#products"
          className="inline-flex items-center justify-center gap-2 bg-accent-red hover:bg-accent-red-hover text-white px-8 py-4 font-display uppercase tracking-wider font-bold text-sm transition-colors"
        >
          Explore Products <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 font-display uppercase tracking-wider font-bold text-sm transition-colors"
        >
          Request a Quote
        </a>
      </div>
    </div>
  </section>
);
