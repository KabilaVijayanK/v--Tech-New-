import { Wrench, Cog, Globe2 } from "lucide-react";

const items = [
  {
    icon: Wrench,
    title: "Custom Engineered Solutions",
    desc: "Every conveyor designed around the subtle details of your operation.",
  },
  {
    icon: Cog,
    title: "Durable, Low-Maintenance Machines",
    desc: "Built in-house for the uptime you expect — easy to maintain.",
  },
  {
    icon: Globe2,
    title: "Serving Industries Across India",
    desc: "Trusted by manufacturers in food, pharma, packaging and logistics.",
  },
];

export const ValueProps = () => (
  <section className="py-20 lg:py-24 bg-white border-b border-border">
    <div className="container-x grid md:grid-cols-3 gap-10 lg:gap-16">
      {items.map((it) => (
        <div key={it.title} className="text-center group">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-5 border-2 border-accent-red text-accent-red group-hover:bg-accent-red group-hover:text-white transition-colors">
            <it.icon className="w-7 h-7" strokeWidth={1.5} />
          </div>
          <h3 className="font-display uppercase text-xl lg:text-2xl font-bold text-navy mb-2 tracking-wide">
            {it.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
            {it.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
);
