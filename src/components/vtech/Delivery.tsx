import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "100%", label: "In-House Manufacturing" },
  { value: "3x", label: "Faster Lead Times" },
  { value: "Zero", label: "Compromises on Quality" },
];

interface Pillar {
  number: string;
  category: string;
  title: string;
  body: string;
  icon: JSX.Element;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    category: "DELIVERY",
    title: "Best-in-Class Lead Times",
    body: "On-time performance you can count on. Every conveyor is manufactured entirely in-house — no outsourcing, no delays, complete project control from day one to handover.",
    icon: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
        <circle cx="32" cy="32" r="28" stroke="#c0392b" strokeWidth="2" />
        <polyline points="32,16 32,34 44,42" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="32" r="3" fill="#c0392b" />
      </svg>
    ),
  },
  {
    number: "02",
    category: "VALUE",
    title: "Engineered for Uptime",
    body: "VTECH conveyors are specifically designed to deliver the uptime your operation demands. Easy to maintain, competitively priced, and built to run shift after shift without complaint.",
    icon: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
        <path d="M8 48 L20 32 L32 38 L44 20 L56 28" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="56" cy="28" r="4" fill="#c0392b" />
        <line x1="8" y1="52" x2="56" y2="52" stroke="#c0392b" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: "03",
    category: "PERFORMANCE",
    title: "Built to Outlast",
    body: "From the first weld to final commissioning, every VTECH machine is assembled with precision. The result is a conveyor system that performs harder and longer than the competition.",
    icon: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
        <polygon points="32,6 40,26 62,26 46,40 52,60 32,48 12,60 18,40 2,26 24,26" stroke="#c0392b" strokeWidth="2" fill="none" />
        <polygon points="32,18 36,30 50,30 39,38 43,52 32,44 21,52 25,38 14,30 28,30" fill="#c0392b" opacity="0.2" />
      </svg>
    ),
  },
];

function useInView(threshold = 0.2): [React.RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState<boolean>(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

interface AnimatedCounterProps {
  target: string;
  inView: boolean;
}

function AnimatedCounter({ target, inView }: AnimatedCounterProps): JSX.Element {
  const [val, setVal] = useState<string>("—");
  useEffect(() => {
    if (!inView) return;
    const isNum = /^\d+/.test(target);
    if (!isNum) { setTimeout(() => setVal(target), 300); return; }
    const num = parseInt(target);
    const suffix = target.replace(/[\d]/g, "");
    let start = 0;
    const step = Math.ceil(num / 40);
    const t = setInterval(() => {
      start += step;
      if (start >= num) { setVal(target); clearInterval(t); }
      else setVal(start + suffix);
    }, 35);
    return () => clearInterval(t);
  }, [inView, target]);
  return <>{val}</>;
}

export function Delivery(): JSX.Element {
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.2);
  const [pillarsRef, pillarsInView] = useInView(0.15);
  const [ctaRef, ctaInView] = useInView(0.2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@300;400;600;700&family=Barlow:wght@300;400;500&display=swap');

        .dv-section { font-family: 'Barlow', sans-serif; overflow: hidden; }

        @keyframes dvFadeUp {
          from { opacity: 0; transform: translateY(48px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dvSlideRight {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes dvLineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes dvPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(192,57,43,0.4); }
          50%      { box-shadow: 0 0 0 16px rgba(192,57,43,0); }
        }
        @keyframes conveyorMove {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes dvBlink {
          0%,100% { opacity: 1; } 50% { opacity: 0.3; }
        }

        .dv-in { opacity: 0; }
        .dv-in.visible { animation: dvFadeUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }
        .dv-slide.visible { animation: dvSlideRight 0.75s cubic-bezier(0.22,1,0.36,1) forwards; }

        .dv-line-grow {
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 1.2s cubic-bezier(0.22,1,0.36,1);
        }
        .dv-line-grow.visible { transform: scaleX(1); }

        /* ── Red-inside-blue card styling ── */
        .pillar-card {
          position: relative;
          background: #0d1b4b;          /* deep blue card background */
          border: 1px solid rgba(255,255,255,0.08);
          padding: 2.5rem 2rem;
          transition: border-color 0.3s, transform 0.3s;
          overflow: hidden;
          cursor: default;
        }
        .pillar-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #c0392b;           /* red accent bar */
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .pillar-card:hover::before { transform: scaleX(1); }
        .pillar-card:hover {
          border-color: rgba(192,57,43,0.4);
          transform: translateY(-6px);
        }
        /* Red glow inside blue card on hover */
        .pillar-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 100%, rgba(192,57,43,0.12) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .pillar-card:hover::after { opacity: 1; }

        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          color: #c0392b;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        /* Blue hero grid background */
        .hero-bg-grid {
          background-image:
            linear-gradient(rgba(13,27,75,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,27,75,0.6) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .conveyor-track {
          animation: conveyorMove 8s linear infinite;
          display: flex;
          width: 200%;
        }

        /* Red tag now sits on a blue base */
        .red-tag {
          display: inline-block;
          background: #c0392b;
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          padding: 3px 10px;
          text-transform: uppercase;
          font-family: 'Barlow Condensed', sans-serif;
          border: 1px solid rgba(255,255,255,0.15);
        }

        .number-bg {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 9rem;
          color: rgba(192,57,43,0.06);    /* faint red ghost number on blue */
          position: absolute;
          right: -1rem;
          bottom: -2rem;
          line-height: 1;
          pointer-events: none;
        }

        /* Stats bar: blue bg, red numbers */
        .stats-bar {
          background: #0d1b4b;
          border-top: 3px solid #ffffff;
          border-bottom: 3px solid #ffffff;
        }

        /* Quote strip: blue with red accents */
        .quote-strip {
          background: #0d1b4b;
          border-top: 1px solid rgba(192,57,43,0.2);
          border-bottom: 1px solid rgba(192,57,43,0.2);
        }

        @media (max-width: 768px) {
          .dv-hero-grid { grid-template-columns: 1fr !important; }
          .dv-hero-right { display: none !important; }
        }
      `}</style>

      <div className="dv-section">

        {/* ── HERO PANEL ── */}
        <section
          ref={heroRef as React.RefObject<HTMLElement>}
          className="relative hero-bg-grid"
          style={{
            background: "#060c1a",
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            padding: "6rem 0",
          }}
        >
          {/* Blue-toned diagonal slash with red edge */}
          <div style={{
            position: "absolute", top: 0, right: 0, width: "42%", height: "100%",
            background: "linear-gradient(135deg, transparent 40%, rgba(13,27,75,0.35) 100%)",
            borderLeft: "1px solid rgba(192,57,43,0.15)",
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>

            {/* Left */}
            <div>
              <div className={`dv-in${heroInView ? " visible" : ""}`} style={{ animationDelay: "0s" }}>
                <span className="red-tag">Why VTECH</span>
              </div>

              <h2
                className={`dv-in${heroInView ? " visible" : ""}`}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3.5rem, 7vw, 6rem)",
                  color: "white",
                  lineHeight: 0.95,
                  margin: "1.25rem 0 0",
                  animationDelay: "0.1s",
                }}
              >
                DELIVERY.<br />
                {/* Red word sits inside blue context */}
                <span style={{
                  color: "#c0392b",
                  background: "rgba(13,27,75,0.4)",
                  padding: "0 0.15em",
                  boxShadow: "inset 0 0 20px rgba(13,27,75,0.6)",
                }}>VALUE.</span><br />
                PERFORMANCE.
              </h2>

              <div
                className={`dv-line-grow${heroInView ? " visible" : ""}`}
                style={{ height: 2, background: "#c0392b", margin: "1.5rem 0", width: "80%", boxShadow: "0 0 8px rgba(192,57,43,0.5)" }}
              />

              <p
                className={`dv-in${heroInView ? " visible" : ""}`}
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  maxWidth: 440,
                  animationDelay: "0.25s",
                }}
              >
                Every VTECH conveyor is engineered to exceed expectation — built in-house, delivered on time, and designed to outlast the competition.
              </p>

              <div
                className={`dv-in${heroInView ? " visible" : ""}`}
                style={{ marginTop: "2rem", display: "flex", gap: "1rem", animationDelay: "0.35s" }}
              >
                <a
                  href="#contact"
                  style={{
                    display: "inline-block",
                    background: "#c0392b",
                    color: "white",
                    padding: "0.85rem 2.2rem",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "background 0.2s",
                    border: "1px solid rgba(13,27,75,0.5)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#a93226")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#c0392b")}
                >
                  Get a Quote
                </a>
                <a
                  href="#about"
                  style={{
                    display: "inline-block",
                    border: "1px solid rgba(13,27,75,0.8)",
                    background: "rgba(13,27,75,0.3)",
                    color: "rgba(255,255,255,0.7)",
                    padding: "0.85rem 2.2rem",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#c0392b";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.background = "rgba(192,57,43,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(13,27,75,0.8)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                    e.currentTarget.style.background = "rgba(13,27,75,0.3)";
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right — animated conveyor visual */}
            <div
              className={`dv-in${heroInView ? " visible" : ""}`}
              style={{ animationDelay: "0.2s", position: "relative" }}
            >
              <div style={{
                background: "rgba(13,27,75,0.5)",          /* blue panel */
                border: "1px solid rgba(13,27,75,0.9)",
                boxShadow: "inset 0 0 40px rgba(13,27,75,0.8), 0 0 30px rgba(13,27,75,0.3)",
                padding: "2.5rem",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Animated conveyor belt */}
                <div style={{ overflow: "hidden", borderRadius: 4, marginBottom: "1.5rem" }}>
                  <div style={{ position: "relative", height: 80, background: "#0a1540" }}>
                    <div style={{ position: "absolute", top: 12, left: 0, right: 0, height: 6, background: "#1a2f7a" }} />
                    <div style={{ position: "absolute", bottom: 12, left: 0, right: 0, height: 6, background: "#1a2f7a" }} />
                    <div className="conveyor-track" style={{ position: "absolute", top: 18, height: 44 }}>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} style={{ width: 28, height: 44, marginRight: 12, background: "#253d7a", borderRadius: 14, flexShrink: 0, border: "1px solid #3a5aa0" }} />
                      ))}
                    </div>
                    {/* Red packages on blue belt — red inside blue */}
                    <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "20%", width: 36, height: 26, background: "#c0392b", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 12px rgba(192,57,43,0.6)" }}>
                      <div style={{ width: 20, height: 2, background: "rgba(255,255,255,0.4)", borderRadius: 1 }} />
                    </div>
                    <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "55%", width: 44, height: 30, background: "rgba(192,57,43,0.7)", borderRadius: 2, boxShadow: "0 0 8px rgba(192,57,43,0.4)" }} />
                  </div>
                </div>

                {/* Key specs */}
                {[
                  { label: "Lead Time", value: "Best-in-class" },
                  { label: "Manufacturing", value: "100% In-house" },
                  { label: "Maintenance", value: "Minimal & easy" },
                  { label: "Pricing", value: "Competitive" },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "0.7rem 0",
                    borderBottom: i < 3 ? "1px solid rgba(13,27,75,0.9)" : "none",
                  }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {item.label}
                    </span>
                    <span style={{ color: "white", fontSize: "0.9rem", fontWeight: 500 }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Red corner accents inside blue panel */}
              <div style={{ position: "absolute", top: 0, right: 0, width: 40, height: 40, borderTop: "3px solid #c0392b", borderRight: "3px solid #c0392b" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: 40, height: 40, borderBottom: "3px solid #c0392b", borderLeft: "3px solid #c0392b" }} />
            </div>
          </div>
        </section>

        {/* ── STATS BAR — blue bg, red numbers ── */}
        <section
          ref={statsRef as React.RefObject<HTMLElement>}
          className="stats-bar"
          style={{ padding: "3rem 2rem" }}
        >
          <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", textAlign: "center" }}>
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`dv-in${statsInView ? " visible" : ""}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="stat-num">
                  <AnimatedCounter target={s.value} inView={statsInView} />
                </div>
                <div style={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: "0.25rem",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── THREE PILLARS — blue cards, red accents ── */}
        <section
          ref={pillarsRef as React.RefObject<HTMLElement>}
          style={{ background: "#07101f", padding: "6rem 2rem" }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div
              className={`dv-in${pillarsInView ? " visible" : ""}`}
              style={{ textAlign: "center", marginBottom: "4rem" }}
            >
              <span className="red-tag">Our Promise</span>
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "white",
                marginTop: "1rem",
                letterSpacing: "0.05em",
              }}>
                What Sets VTECH Apart
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {PILLARS.map((p, i) => (
                <div
                  key={p.number}
                  className={`pillar-card dv-in${pillarsInView ? " visible" : ""}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="number-bg">{p.number}</div>

                  <div style={{ marginBottom: "1.25rem" }}>{p.icon}</div>

                  <div style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.25em",
                    color: "#c0392b",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                    fontWeight: 700,
                  }}>
                    {p.category}
                  </div>

                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "0.05em",
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                  }}>
                    {p.title}
                  </h3>

                  <p style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                  }}>
                    {p.body}
                  </p>

                  <div style={{
                    marginTop: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#c0392b",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUOTE STRIP — blue with red accents ── */}
        <section
          className="quote-strip"
          style={{
            padding: "4rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "16rem",
            color: "rgba(192,57,43,0.04)",    /* faint red watermark on blue */
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            letterSpacing: "0.1em",
          }}>
            VTECH
          </div>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative" }}>
            <div style={{ color: "#c0392b", fontSize: "3rem", lineHeight: 1, marginBottom: "0.5rem", fontFamily: "Georgia, serif" }}>"</div>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.9rem)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.5,
              letterSpacing: "0.02em",
            }}>
              VTECH Conveyors are specifically designed and built to deliver the uptime you expect in your operation — easy to maintain, and competitively priced.
            </p>
            <div style={{
              marginTop: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
            }}>
              <div style={{ width: 32, height: 1, background: "#c0392b" }} />
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif" }}>
                V Tech Industries, Chennai
              </span>
              <div style={{ width: 32, height: 1, background: "#c0392b" }} />
            </div>
          </div>
        </section>

        {/* ── CTA BOTTOM ── */}
        <section
          ref={ctaRef as React.RefObject<HTMLElement>}
          style={{ background: "#060c1a", padding: "6rem 2rem", textAlign: "center" }}
        >
          <div
            className={`dv-in${ctaInView ? " visible" : ""}`}
            style={{ maxWidth: 640, margin: "0 auto" }}
          >
            <span className="red-tag">Ready to Start?</span>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "white",
              margin: "1rem 0",
              letterSpacing: "0.05em",
            }}>
              Let's Build Your Conveyor
            </h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Tell us about your process — our engineers will design the right solution, on time, every time.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="tel:+917845922919"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  background: "#c0392b", color: "white",
                  padding: "1rem 2.5rem",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700, fontSize: "0.85rem",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "background 0.2s",
                  animation: "dvPulse 2.5s ease-in-out infinite",
                  border: "1px solid rgba(13,27,75,0.4)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#a93226")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#c0392b")}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                +91 78459 22919
              </a>
              <a
                href="mailto:vignesh@vtechindustries.co.in"
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(13,27,75,0.8)",
                  background: "rgba(13,27,75,0.3)",
                  color: "rgba(255,255,255,0.7)",
                  padding: "1rem 2.5rem",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600, fontSize: "0.85rem",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#c0392b";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.background = "rgba(192,57,43,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(13,27,75,0.8)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                  e.currentTarget.style.background = "rgba(13,27,75,0.3)";
                }}
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}