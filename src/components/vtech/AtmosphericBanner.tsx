import banner from "@/assets/banner-conveyor.jpg";
import { ArrowRight } from "lucide-react";

export const AtmosphericBanner = () => (
  <section className="relative h-[520px] lg:h-[600px] overflow-hidden">
    <img
      src={banner}
      alt="Industrial conveyor systems factory"
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
      width={1920}
      height={800}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/70 to-navy-deep/30" />
    <div className="container-x relative h-full flex items-center">
      <div className="max-w-2xl text-white">
        <div className="text-[11px] uppercase tracking-[0.3em] text-accent-red font-bold mb-4">
          — Engineering experience
        </div>
        <h2 className="font-display uppercase text-4xl lg:text-6xl font-extrabold leading-tight">
          Conveyors are our thing.
          <br />
          <span className="text-white/70">Ours too?</span>
        </h2>
        <p className="mt-5 text-white/70 text-lg max-w-lg">
          Benefit from years of experience designing and building custom
          conveyor systems for India's most demanding industries.
        </p>
        <a
          href="#about"
          className="mt-8 inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-hover text-white px-7 py-3.5 font-display uppercase tracking-wider font-bold text-sm transition-colors"
        >
          More about VTECH <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);
