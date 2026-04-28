import { Pill, Wheat, Package2, Beaker, Factory, Truck, Cpu, Boxes } from "lucide-react";

const industries = [
  { icon: Pill, name: "Pharmaceuticals" },
  { icon: Wheat, name: "Food & Beverage" },
  { icon: Package2, name: "Packaging" },
  { icon: Beaker, name: "Chemicals" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Truck, name: "Logistics" },
  { icon: Cpu, name: "Electronics" },
  { icon: Boxes, name: "Warehousing" },
];

export const Industries = () => (
  <section id="industries" className="py-20 lg:py-24 bg-navy-deep text-white relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, white 0 1px, transparent 1px 24px)",
      }}
    />
    <div className="container-x relative">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="text-[11px] uppercase tracking-[0.3em] text-accent-red font-bold mb-4">
          — Our customers
        </div>
        <h2 className="font-display uppercase text-4xl lg:text-5xl font-extrabold leading-tight">
          Industries we serve
        </h2>
        <p className="mt-4 text-white/60 text-lg">
          From pharmaceuticals to packaging, VTECH conveyors keep India's
          factories moving.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10">
        {industries.map((i) => (
          <div
            key={i.name}
            className="bg-navy-deep p-8 flex flex-col items-center justify-center text-center hover:bg-navy-soft/50 transition-colors group"
          >
            <i.icon className="w-9 h-9 text-accent-red mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.4} />
            <div className="font-display uppercase font-bold tracking-wider text-sm">
              {i.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
