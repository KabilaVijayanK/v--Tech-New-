import { ArrowRight, Target, Eye } from "lucide-react";

export const About = () => (
  <section id="about" className="py-20 lg:py-28 bg-light-gray">
    <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-7">
        <div className="text-[11px] uppercase tracking-[0.3em] text-accent-red font-bold mb-4">
          — Who is VTECH?
        </div>
        <h2 className="font-display uppercase text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
          The right machine for every application — in a single unit.
        </h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Companies that need reliable conveyor systems think VTECH. We have
            been designing and building custom conveyors and conveyor systems
            for a broad range of applications and industries.
          </p>
          <p>
            VTECH believes the success of your conveyor system lies in
            understanding the subtle details of your operation. Our engineers
            have the experience and knowledge you require, providing you with
            years of dependable operation, increased efficiency, and low
            maintenance costs.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red-hover text-white px-7 py-3.5 font-display uppercase tracking-wider font-bold text-sm transition-colors"
        >
          More about VTECH <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="lg:col-span-5 space-y-5">
        <div className="bg-white p-7 border-l-4 border-accent-red shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-3 mb-3">
            <Eye className="w-6 h-6 text-accent-red" strokeWidth={1.5} />
            <h3 className="font-display uppercase text-xl font-bold text-navy tracking-wide">
              Vision
            </h3>
          </div>
          <p className="text-muted-foreground">
            To be the most trusted supplier and brand of industrial conveyors.
          </p>
        </div>
        <div className="bg-navy text-white p-7 border-l-4 border-accent-red">
          <div className="flex items-center gap-3 mb-3">
            <Target className="w-6 h-6 text-accent-red" strokeWidth={1.5} />
            <h3 className="font-display uppercase text-xl font-bold tracking-wide">
              Mission
            </h3>
          </div>
          <p className="text-white/75">
            Without fail, VTECH solves our customers' industrial conveying
            challenges — and our machines are built to last.
          </p>
        </div>
      </div>
    </div>
  </section>
);
