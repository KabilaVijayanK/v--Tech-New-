import { useState, useEffect, useRef, useCallback } from "react";

const PRODUCTS = [
  {
    name: "Slat Chain Conveyors",
    tagline: "Heavy-duty. Built for the long haul.",
    desc: "Robust slat chain systems engineered for bulk material handling, incline transport, and harsh industrial environments.",
    bg: ["#0d1b4b", "#1a2f7a"],
    accent: "#4a90e2",
    particle: "#a0c4ff",
    image: "/images/slat-chain.png",
    svgId: "slat",
  },
  {
    name: "Roller Conveyors",
    tagline: "Smooth flow. Zero compromise.",
    desc: "Powered roller conveyor systems designed for precise product movement across packaging and logistics lines.",
    bg: ["#1a0a00", "#4a1500"],
    accent: "#e87040",
    particle: "#ffb880",
    image: "/images/roller.png",
    svgId: "roller",
  },
  {
    name: "Belt Conveyors",
    tagline: "Versatile. Reliable. Proven.",
    desc: "Flat and incline belt conveyors for food, pharma, and general manufacturing — customised to your line speed.",
    bg: ["#001a1a", "#003333"],
    accent: "#2dd4bf",
    particle: "#99f6e4",
    image: "/images/belt.png",
    svgId: "belt",
  },
  {
    name: "Modular Conveyors",
    tagline: "Flexible by design.",
    desc: "Modular plastic belt conveyors that curve, incline and accumulate — adapting to any plant layout with ease.",
    bg: ["#0f0f2e", "#1e1e5e"],
    accent: "#818cf8",
    particle: "#c7d2fe",
    image: "/images/modular.png",
    svgId: "modular",
  },
  {
    name: "Powerised Turn Table Conveyors",
    tagline: "Direction changes made effortless.",
    desc: "Motorised turntables and diverters that rotate products smoothly between conveyor lines and packing stations.",
    bg: ["#1a0a2e", "#3b0764"],
    accent: "#c084fc",
    particle: "#e9d5ff",
    image: "/images/turntable.png",
    svgId: "turntable",
  },
  {
    name: "Cooling & Drying Conveyors",
    tagline: "Precision cooling in motion.",
    desc: "Mesh belt and fan-assisted cooling conveyors for food processing, foundry, and industrial drying applications.",
    bg: ["#001529", "#003d6b"],
    accent: "#38bdf8",
    particle: "#bae6fd",
    image: "/images/cooling.png",
    svgId: "cooling",
  },
  {
    name: "Floor to Floor / Incline Conveyors",
    tagline: "Elevation. Delivered.",
    desc: "Steep incline and Z-type conveyors that move goods between floors without lifts — maximising your floor space.",
    bg: ["#1a1200", "#4a3300"],
    accent: "#fbbf24",
    particle: "#fde68a",
    image: "/images/incline.png",
    svgId: "incline",
  },
  {
    name: "Idler Roller Conveyors",
    tagline: "Gravity does the work.",
    desc: "Non-powered gravity roller conveyors for warehouses, dispatch zones, and manual loading/unloading stations.",
    bg: ["#0f1a0f", "#1a3a1a"],
    accent: "#4ade80",
    particle: "#bbf7d0",
    image: "/images/idler.png",
    svgId: "idler",
  },
  {
    name: "Bag Closing with Conveyor",
    tagline: "Seal it. Move it. Done.",
    desc: "Integrated bag closing machines with inline belt conveyors — the complete end-of-line packaging solution.",
    bg: ["#1a0f1a", "#3b1a3b"],
    accent: "#f472b6",
    particle: "#fbcfe8",
    image: "/images/bagclose.png",
    svgId: "bagclosing",
  },
];

// Product display: Image with SVG fallback
function ProductDisplay({ image, svgId, accent, size = 340 }) {
  const [imageError, setImageError] = useState(false);

  if (!imageError && image) {
    return (
      <img
        src={image}
        alt="Product"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          filter: `drop-shadow(0 0 32px ${accent}55)`,
        }}
        onError={() => setImageError(true)}
      />
    );
  }

  return <ConveyorIllustration svgId={svgId} accent={accent} size={size} />;
}

// Inline SVG conveyor illustrations per product
function ConveyorIllustration({ svgId, accent, size = 340 }) {
  const illustrations = {
    slat: (
      <g>
        {/* Frame */}
        <rect x="40" y="130" width="300" height="60" rx="4" fill={accent + "22"} stroke={accent + "88"} strokeWidth="2" />
        {/* Slats */}
        {[60, 90, 120, 150, 180, 210, 240, 270, 300].map((x) => (
          <rect key={x} x={x} y="130" width="20" height="60" rx="1" fill={accent + "55"} stroke={accent + "99"} strokeWidth="1" />
        ))}
        {/* Drive rollers */}
        <ellipse cx="60" cy="160" rx="18" ry="18" fill={accent + "33"} stroke={accent} strokeWidth="2.5" />
        <ellipse cx="320" cy="160" rx="18" ry="18" fill={accent + "33"} stroke={accent} strokeWidth="2.5" />
        {/* Motor */}
        <rect x="20" y="145" width="30" height="30" rx="3" fill={accent + "44"} stroke={accent} strokeWidth="1.5" />
        <line x1="20" y1="160" x2="42" y2="160" stroke={accent} strokeWidth="2" />
        {/* Legs */}
        {[80, 180, 300].map((x) => (
          <g key={x}>
            <line x1={x} y1="190" x2={x - 10} y2="230" stroke={accent + "99"} strokeWidth="3" strokeLinecap="round" />
            <line x1={x + 10} y1="190" x2={x + 20} y2="230" stroke={accent + "99"} strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
        {/* Label */}
        <text x="190" y="90" textAnchor="middle" fill={accent} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">SLAT CHAIN</text>
      </g>
    ),
    roller: (
      <g>
        <rect x="30" y="120" width="320" height="15" rx="3" fill={accent + "33"} stroke={accent + "88"} strokeWidth="1.5" />
        <rect x="30" y="185" width="320" height="15" rx="3" fill={accent + "33"} stroke={accent + "88"} strokeWidth="1.5" />
        {[50, 80, 110, 140, 170, 200, 230, 260, 290, 320].map((x) => (
          <g key={x}>
            <rect x={x} y="135" width="16" height="50" rx="8" fill={accent + "44"} stroke={accent} strokeWidth="1.5" />
            <ellipse cx={x + 8} cy="135" rx="8" ry="4" fill={accent + "88"} />
            <ellipse cx={x + 8} cy="185" rx="8" ry="4" fill={accent + "88"} />
          </g>
        ))}
        {[80, 200, 320].map((x) => (
          <g key={x}>
            <line x1={x} y1="200" x2={x - 8} y2="240" stroke={accent + "99"} strokeWidth="3" strokeLinecap="round" />
            <line x1={x} y1="200" x2={x + 8} y2="240" stroke={accent + "99"} strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
        <text x="190" y="90" textAnchor="middle" fill={accent} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">ROLLER</text>
      </g>
    ),
    belt: (
      <g>
        <path d="M50 140 Q190 110 330 140 L330 180 Q190 210 50 180 Z" fill={accent + "22"} stroke={accent + "66"} strokeWidth="1.5" />
        <path d="M50 140 Q190 110 330 140" fill="none" stroke={accent} strokeWidth="3" strokeDasharray="8 4" />
        <path d="M50 180 Q190 210 330 180" fill="none" stroke={accent + "88"} strokeWidth="2" />
        <ellipse cx="60" cy="160" rx="22" ry="20" fill={accent + "33"} stroke={accent} strokeWidth="2.5" />
        <ellipse cx="320" cy="160" rx="22" ry="20" fill={accent + "33"} stroke={accent} strokeWidth="2.5" />
        <ellipse cx="60" cy="160" rx="8" ry="8" fill={accent + "66"} />
        <ellipse cx="320" cy="160" rx="8" ry="8" fill={accent + "66"} />
        {[80, 190, 310].map((x) => (
          <line key={x} x1={x} y1="200" x2={x} y2="235" stroke={accent + "88"} strokeWidth="3" strokeLinecap="round" />
        ))}
        <text x="190" y="90" textAnchor="middle" fill={accent} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">BELT CONVEYOR</text>
      </g>
    ),
    modular: (
      <g>
        {/* Curved modular belt */}
        <path d="M60 200 Q100 200 140 160 Q180 120 220 120 L280 120 L280 150 L220 150 Q190 150 155 185 Q120 220 80 220 Z" fill={accent + "22"} stroke={accent + "88"} strokeWidth="2" />
        {/* Module lines */}
        {[80, 110, 140, 170, 200, 230, 260].map((x, i) => (
          <line key={x} x1={x} y1={i < 3 ? 200 - i * 12 : 120} y2={i < 3 ? 220 - i * 12 : 150} stroke={accent + "66"} strokeWidth="1.5" strokeLinecap="round" />
        ))}
        <ellipse cx="68" cy="210" rx="16" ry="16" fill={accent + "33"} stroke={accent} strokeWidth="2" />
        <ellipse cx="280" cy="135" rx="16" ry="16" fill={accent + "33"} stroke={accent} strokeWidth="2" />
        <text x="190" y="85" textAnchor="middle" fill={accent} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">MODULAR</text>
      </g>
    ),
    turntable: (
      <g>
        <ellipse cx="190" cy="165" rx="90" ry="90" fill={accent + "11"} stroke={accent + "44"} strokeWidth="1" />
        <ellipse cx="190" cy="165" rx="70" ry="70" fill={accent + "22"} stroke={accent + "66"} strokeWidth="2" />
        <ellipse cx="190" cy="165" rx="50" ry="50" fill={accent + "33"} stroke={accent} strokeWidth="2.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const r = (deg * Math.PI) / 180;
          return (
            <line key={deg}
              x1={190 + 50 * Math.cos(r)} y1={165 + 50 * Math.sin(r)}
              x2={190 + 70 * Math.cos(r)} y2={165 + 70 * Math.sin(r)}
              stroke={accent} strokeWidth="3" strokeLinecap="round"
            />
          );
        })}
        <ellipse cx="190" cy="165" rx="12" ry="12" fill={accent} />
        {/* Rollers around */}
        {[0, 90, 180, 270].map((deg) => {
          const r = (deg * Math.PI) / 180;
          return <rect key={deg} x={190 + 85 * Math.cos(r) - 20} y={165 + 85 * Math.sin(r) - 6} width="40" height="12" rx="6" fill={accent + "55"} stroke={accent} strokeWidth="1.5" transform={`rotate(${deg}, ${190 + 85 * Math.cos(r)}, ${165 + 85 * Math.sin(r)})`} />;
        })}
        <text x="190" y="85" textAnchor="middle" fill={accent} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">TURN TABLE</text>
      </g>
    ),
    cooling: (
      <g>
        <rect x="40" y="120" width="300" height="80" rx="6" fill={accent + "11"} stroke={accent + "44"} strokeWidth="1.5" />
        {/* Mesh pattern */}
        {[60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((x) =>
          [130, 150, 170, 185].map((y) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="20" height="8" rx="1" fill={accent + "33"} stroke={accent + "66"} strokeWidth="0.5" />
          ))
        )}
        {/* Fan symbols */}
        {[90, 190, 290].map((x) => (
          <g key={x}>
            <ellipse cx={x} cy="100" rx="20" ry="20" fill={accent + "22"} stroke={accent} strokeWidth="1.5" />
            <path d={`M${x} 80 Q${x + 15} 95 ${x} 100 Q${x - 15} 95 ${x} 80`} fill={accent + "66"} />
            <path d={`M${x + 20} 100 Q${x + 5} 115 ${x} 100 Q${x + 5} 85 ${x + 20} 100`} fill={accent + "66"} />
            <path d={`M${x} 120 Q${x - 15} 105 ${x} 100 Q${x + 15} 105 ${x} 120`} fill={accent + "66"} />
            <ellipse cx={x} cy="100" rx="5" ry="5" fill={accent} />
          </g>
        ))}
        <text x="190" y="75" textAnchor="middle" fill={accent} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">COOLING</text>
      </g>
    ),
    incline: (
      <g>
        {/* Inclined frame */}
        <path d="M60 220 L300 100 L310 115 L70 235 Z" fill={accent + "22"} stroke={accent + "88"} strokeWidth="2" />
        {/* Belt */}
        <path d="M65 227 L305 107" stroke={accent} strokeWidth="3" strokeDasharray="10 5" />
        {/* Cleats */}
        {[0.1, 0.25, 0.4, 0.55, 0.7, 0.85].map((t) => {
          const x1 = 65 + t * 240;
          const y1 = 227 - t * 120;
          const angle = -Math.atan2(120, 240);
          const dx = Math.sin(angle) * 12;
          const dy = Math.cos(angle) * 12;
          return <line key={t} x1={x1 - dx} y1={y1 - dy} x2={x1 + dx} y2={y1 + dy} stroke={accent} strokeWidth="3" strokeLinecap="round" />;
        })}
        <ellipse cx="80" cy="220" rx="20" ry="20" fill={accent + "33"} stroke={accent} strokeWidth="2" />
        <ellipse cx="300" cy="107" rx="20" ry="20" fill={accent + "33"} stroke={accent} strokeWidth="2" />
        <line x1="60" y1="235" x2="60" y2="260" stroke={accent + "88"} strokeWidth="4" strokeLinecap="round" />
        <line x1="300" y1="115" x2="300" y2="130" stroke={accent + "88"} strokeWidth="4" strokeLinecap="round" />
        <text x="190" y="75" textAnchor="middle" fill={accent} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">INCLINE</text>
      </g>
    ),
    idler: (
      <g>
        <rect x="30" y="130" width="320" height="15" rx="3" fill={accent + "22"} stroke={accent + "66"} strokeWidth="1.5" />
        <rect x="30" y="185" width="320" height="15" rx="3" fill={accent + "22"} stroke={accent + "66"} strokeWidth="1.5" />
        {[55, 85, 115, 145, 175, 205, 235, 265, 295, 325].map((x) => (
          <g key={x}>
            <ellipse cx={x} cy="158" rx="8" ry="27" fill={accent + "33"} stroke={accent} strokeWidth="1.5" />
            <ellipse cx={x} cy="131" rx="8" ry="4" fill={accent + "66"} />
            <ellipse cx={x} cy="185" rx="8" ry="4" fill={accent + "66"} />
          </g>
        ))}
        {[70, 190, 310].map((x) => (
          <g key={x}>
            <line x1={x} y1="200" x2={x - 6} y2="235" stroke={accent + "99"} strokeWidth="3" strokeLinecap="round" />
            <line x1={x} y1="200" x2={x + 6} y2="235" stroke={accent + "99"} strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
        <text x="190" y="100" textAnchor="middle" fill={accent} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">IDLER ROLLER</text>
      </g>
    ),
    bagclosing: (
      <g>
        {/* Machine body */}
        <rect x="100" y="80" width="120" height="140" rx="6" fill={accent + "22"} stroke={accent + "88"} strokeWidth="2" />
        {/* Thread reel */}
        <ellipse cx="110" cy="110" rx="28" ry="28" fill={accent + "33"} stroke={accent} strokeWidth="2" />
        <ellipse cx="110" cy="110" rx="12" ry="12" fill={accent + "66"} />
        {/* Conveyor below */}
        <rect x="40" y="230" width="300" height="18" rx="4" fill={accent + "22"} stroke={accent + "66"} strokeWidth="1.5" />
        {[65, 100, 140, 180, 220, 260, 295, 330].map((x) => (
          <ellipse key={x} cx={x} cy="239" rx="7" ry="9" fill={accent + "33"} stroke={accent} strokeWidth="1" />
        ))}
        {/* Bag */}
        <path d="M155 175 Q190 165 225 175 L225 225 Q190 235 155 225 Z" fill={accent + "44"} stroke={accent} strokeWidth="1.5" />
        {/* Stitching line */}
        <path d="M155 180 L225 180" stroke={accent} strokeWidth="2" strokeDasharray="5 3" />
        <text x="190" y="65" textAnchor="middle" fill={accent} fontSize="11" fontFamily="monospace" opacity="0.6" letterSpacing="3">BAG CLOSING</text>
      </g>
    ),
  };
  return (
    <svg viewBox="0 0 380 300" width={size} height={(size * 300) / 380} style={{ filter: `drop-shadow(0 0 32px ${accent}55)` }}>
      {illustrations[svgId] || null}
    </svg>
  );
}

// Particle field
function Particles({ color, count = 60, key: _k }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    dur: Math.random() * 6 + 4,
    delay: Math.random() * 4,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: color,
            opacity: Math.random() * 0.7 + 0.2,
            animation: `floatParticle ${p.dur}s ${p.delay}s infinite ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

export function ProductSelector() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const [animating, setAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef(null);

  const go = useCallback((idx, dir = 1) => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setPrev(current);
    setCurrent(idx);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 700);
  }, [animating, current]);

  const next = useCallback(() => go((current + 1) % PRODUCTS.length, 1), [current, go]);
  const goTo = useCallback((i) => go(i, i > current ? 1 : -1), [current, go]);

  useEffect(() => {
    if (!autoplay) return;
    timerRef.current = setTimeout(next, 4500);
    return () => clearTimeout(timerRef.current);
  }, [current, autoplay, next]);

  const p = PRODUCTS[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;600&display=swap');
        @keyframes floatParticle {
          0%,100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-30px) scale(1.3); opacity: 0.9; }
        }
        @keyframes slideInRight {
          from { transform: translateX(80px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-80px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes glowPulse {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
        .slide-in {
          animation: ${direction === 1 ? "slideInRight" : "slideInLeft"} 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards; }
        .fade-up-2 { animation: fadeUp 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.2s cubic-bezier(0.22,1,0.36,1) both; }
        .glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
        .no-select { user-select: none; }
      `}</style>

      <section
        className="relative w-full overflow-hidden no-select"
        style={{
          minHeight: "100vh",
          background: `radial-gradient(ellipse at 60% 40%, ${p.bg[1]} 0%, ${p.bg[0]} 70%)`,
          transition: "background 0.8s ease",
          fontFamily: "'Barlow', sans-serif",
        }}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        {/* Particles */}
        <Particles color={p.particle} count={55} key={current} />

        {/* Radial glow behind product */}
        <div
          className="absolute glow-pulse"
          style={{
            left: "50%",
            top: "45%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${p.accent}33 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        {/* Ground reflection */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "35%",
            background: `linear-gradient(to top, ${p.bg[0]}ee 0%, transparent 100%)`,
            pointerEvents: "none",
          }}
        />

        {/* Top: product name */}
        <div className="absolute top-0 left-0 right-0 flex justify-center pt-14 z-20">
          <div key={`title-${current}`} className="text-center fade-up">
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                color: "white",
                letterSpacing: "0.08em",
                lineHeight: 1,
                textShadow: `0 0 60px ${p.accent}88, 0 2px 8px rgba(0,0,0,0.6)`,
              }}
            >
              {p.name.toUpperCase()}
            </h1>
            <div
              style={{
                color: p.accent,
                fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
                letterSpacing: "0.25em",
                fontWeight: 600,
                marginTop: 8,
                textTransform: "uppercase",
              }}
            >
              {p.tagline}
            </div>
          </div>
        </div>

        {/* Center: product image / illustration */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{ paddingTop: "6rem", paddingBottom: "10rem" }}
        >
          <div key={`img-${current}`} className="slide-in flex flex-col items-center">
            <ProductDisplay image={p.image} svgId={p.svgId} accent={p.accent} size={420} />
          </div>
        </div>

        {/* Bottom: desc + CTA */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-14 z-20">
          <div key={`desc-${current}`} className="text-center px-6 max-w-lg fade-up-2">
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {p.desc}
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "0.8rem 2.5rem",
                background: "rgba(150,150,150,0.25)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = p.accent + "44";
                e.currentTarget.style.borderColor = p.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(150,150,150,0.25)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              }}
            >
              Discover More
            </a>
          </div>
        </div>

        {/* Left / Right arrows */}
        {["prev", "next"].map((dir) => (
          <button
            key={dir}
            onClick={() => dir === "prev"
              ? go((current - 1 + PRODUCTS.length) % PRODUCTS.length, -1)
              : go((current + 1) % PRODUCTS.length, 1)
            }
            style={{
              position: "absolute",
              top: "50%",
              [dir === "prev" ? "left" : "right"]: "1.5rem",
              transform: "translateY(-50%)",
              zIndex: 30,
              background: "rgba(0,0,0,0.3)",
              border: `1px solid ${p.accent}66`,
              color: "white",
              width: 48,
              height: 48,
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = p.accent + "55"; e.currentTarget.style.borderColor = p.accent; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.3)"; e.currentTarget.style.borderColor = p.accent + "66"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {dir === "prev"
                ? <polyline points="15 18 9 12 15 6" />
                : <polyline points="9 18 15 12 9 6" />
              }
            </svg>
          </button>
        ))}

        {/* Dot indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.5rem",
            zIndex: 30,
          }}
        >
          {PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === current ? p.accent : "rgba(255,255,255,0.3)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Product count */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "4rem",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 30,
          }}
          className="hidden md:flex"
        >
          <div style={{ color: "white", fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", lineHeight: 1 }}>
            {String(current + 1).padStart(2, "0")}
          </div>
          <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.3)" }} />
          <div style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}>
            {String(PRODUCTS.length).padStart(2, "0")}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div
          style={{
            position: "absolute",
            left: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            zIndex: 30,
            maxHeight: "80vh",
            overflowY: "auto",
          }}
          className="hidden lg:flex"
        >
          {PRODUCTS.map((prod, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: 44,
                height: 32,
                borderRadius: 4,
                border: i === current ? `2px solid ${p.accent}` : "1px solid rgba(255,255,255,0.15)",
                background: i === current ? p.accent + "33" : "rgba(0,0,0,0.3)",
                color: "white",
                fontSize: "0.55rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                cursor: "pointer",
                transition: "all 0.3s",
                backdropFilter: "blur(6px)",
                padding: "2px 4px",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}