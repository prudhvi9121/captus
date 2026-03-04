"use client";

import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ─── Tiny hook: animate-in on mount ─── */
function useFadeUp(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      if (el) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);
  return ref;
}

export default function Home() {
  const heroRef = useFadeUp(100);
  const heroSubRef = useFadeUp(250);
  const heroCtaRef = useFadeUp(400);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* ── HERO SECTION ───────────────────────── */}
        <section
          id="hero"
          style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "#FFFFFF",
          }}
        >
          {/* Background grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.04,
              backgroundImage:
                "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Radial glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "900px",
              height: "900px",
              borderRadius: "50%",
              pointerEvents: "none",
              background: "radial-gradient(circle, rgba(204,85,0,0.05) 0%, transparent 65%)",
            }}
          />

          {/* Decorative triangle */}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", userSelect: "none" }}>
            <svg width="680" height="680" viewBox="0 0 680 680" fill="none" style={{ opacity: 0.035 }}>
              <polygon points="340,50 630,590 50,590" fill="none" stroke="#CC5500" strokeWidth="2.5" />
              <polygon points="340,110 580,560 100,560" fill="none" stroke="#CC5500" strokeWidth="1" />
              <polygon points="340,170 530,530 150,530" fill="#CC5500" opacity="0.05" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 pt-32 pb-24">

            {/* Left Column: Text */}
            <div className="flex-1 flex flex-col items-start text-left gap-6">
              {/* Headline */}
              <h1
                ref={heroSubRef}
                className="font-display"
                style={{
                  fontSize: "clamp(32px, 4vw, 56px)",
                  color: "var(--text-primary)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "100ms",
                  maxWidth: "600px"
                }}
              >
                Identify Financial & Operational Risk <br />
                <span style={{ color: "#CC5500" }}>Before It Materializes.</span>
              </h1>

              {/* Sub-headline */}
              <p
                ref={heroCtaRef}
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "clamp(15px, 1.2vw, 17px)",
                  maxWidth: "480px",
                  lineHeight: 1.6,
                  fontWeight: 400,
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "200ms"
                }}
              >
                Captus is built for construction owners and developers who carry financial exposure across complex projects. We protect capital by connecting fragmented data to surface conflicts early.
              </p>

              {/* CTA */}
              <div
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: "300ms",
                  marginTop: "8px"
                }}
              >
                <a
                  href="/book-demo"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "16px 32px",
                    backgroundColor: "#1F1F1F", // Dark solid color requested in inspiration
                    color: "#FFFFFF",
                    fontSize: "15px",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                    borderRadius: "8px",
                    textDecoration: "none",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = "#0A0A0A";
                    (e.target as HTMLElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = "#1F1F1F";
                    (e.target as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  Schedule a call
                </a>
              </div>
            </div>

            {/* Right Column: Video Placeholder */}
            <div
              ref={heroRef}
              className="flex-1 w-full"
              style={{
                position: "relative",
                aspectRatio: "16/9",
                background: "var(--surface-2)",
                borderRadius: "20px",
                border: "1px solid var(--border)",
                boxShadow: "0 24px 50px -12px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "400ms"
              }}
            >
              {/* Subtle graphic inside placeholder */}
              <div style={{ position: "absolute", inset: 0, opacity: 0.15, backgroundImage: "url('/risk-heatmap.png')", backgroundSize: "cover", backgroundPosition: "center", transition: "transform 2s ease" }}
                className="hover:scale-105"
              />

              {/* Video Play overlay placeholder */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 24px",
                  background: "rgba(0,0,0,0.55)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "9999px",
                  cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = "rgba(0,0,0,0.75)";
                  (e.target as HTMLElement).style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "rgba(0,0,0,0.55)";
                  (e.target as HTMLElement).style.transform = "scale(1)";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 500 }}>Play with sound</span>
              </div>
            </div>
          </div>

          {/* Bottom vignette */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "160px", background: "linear-gradient(to top, #FFFFFF, transparent)", pointerEvents: "none" }} />

        </section>

        {/* ── PROBLEM SECTION ────────────────────── */}
        <section
          style={{
            padding: "100px 24px",
            background: "#FFFFFF",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                }}
              >
                The Cost of Reactive Oversight
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
                Construction inefficiency continues to erode owner returns at scale. Wait-and-see approaches drain contingency budgets.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "24px",
              }}
            >
              {/* Problem Card 1 */}
              <div className="glass" style={{ padding: "40px", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "40px", color: "#CC5500", fontWeight: 700, marginBottom: "16px", fontFamily: "Good Times" }}>5–20%</div>
                <h3 className="font-display" style={{ fontSize: "20px", marginBottom: "12px" }}>Value Lost to Rework</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  Industry data shows that between 5% and 20% of total contract value is lost to preventable rework, miscommunication, and poor data coordination.
                </p>
              </div>
              {/* Problem Card 2 */}
              <div className="glass" style={{ padding: "40px", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "40px", color: "#CC5500", fontWeight: 700, marginBottom: "16px", fontFamily: "Good Times" }}>100x</div>
                <h3 className="font-display" style={{ fontSize: "20px", marginBottom: "12px" }}>The Escalation Curve</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  An issue corrected at the design stage may cost one dollar. That same issue corrected during installation can cost one hundred dollars.
                </p>
              </div>
              {/* Problem Card 3 */}
              <div className="glass" style={{ padding: "40px", borderRadius: "12px", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: "40px", color: "#CC5500", fontWeight: 700, marginBottom: "16px", fontFamily: "Good Times" }}>0</div>
                <h3 className="font-display" style={{ fontSize: "20px", marginBottom: "12px" }}>Predictive Visibility</h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  Traditional tools document what has already happened. They do not identify systemic risk patterns early enough to prevent capital loss.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SOLUTION SECTION ───────────────────── */}
        <section
          style={{
            padding: "120px 24px",
            background: "#F8F9FA",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div style={{ gridColumn: "1 / -1", textAlign: "center", marginBottom: "40px" }}>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  color: "var(--text-primary)",
                  marginBottom: "16px",
                }}
              >
                How Captus Works
              </h2>
            </div>

            <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Workings List */}
              {[
                { title: "1. Automated Ingestion", desc: "Captus ingests and connects project data across documents, drawings, specifications, emails, models, and external systems like Procore and Autodesk." },
                { title: "2. Delta Detection", desc: "We map relationships between scope, trades, schedule dependencies, and communication records to surface inconsistencies instantly." },
                { title: "3. Risk Heat Map", desc: "The platform visualizes the risk and forecasts potential financial and scheduling consequences before they impact downstream trades." },
                { title: "4. Accelerated Decisions", desc: "Route the identified conflict directly to the appropriate stakeholder with full context attached, transforming raw documentation into intelligence." },
              ].map((step, i) => (
                <div key={i} style={{ background: "#FFFFFF", padding: "32px", borderRadius: "8px", border: "1px solid var(--border)", display: "flex", gap: "24px" }}>
                  <div>
                    <h3 className="font-display" style={{ fontSize: "18px", color: "#CC5500", marginBottom: "8px" }}>{step.title}</h3>
                    <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OWNER VALUE SECTION ────────────────── */}
        <section
          style={{
            padding: "100px 24px",
            background: "#FFFFFF",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                color: "var(--text-primary)",
                marginBottom: "24px",
              }}
            >
              Designed for Capital Preservation
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "18px", lineHeight: 1.6, marginBottom: "40px" }}>
              General contractors have project management tools. Owners need predictive oversight.
              Captus is positioned upstream to focus strictly on identifying financial exposure across the project lifecycle.
              Each avoided rework event preserves margin and reduces contingency drawdown.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
              <div style={{ padding: "20px 40px", background: "#F8F9FA", borderRadius: "8px", border: "1px solid var(--border)" }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>Protects Capital</div>
              </div>
              <div style={{ padding: "20px 40px", background: "#F8F9FA", borderRadius: "8px", border: "1px solid var(--border)" }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>Strengthens Accountability</div>
              </div>
              <div style={{ padding: "20px 40px", background: "#F8F9FA", borderRadius: "8px", border: "1px solid var(--border)" }}>
                <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>Supports Sustainability</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CASE STUDY SECTION ─────────────────── */}
        <section
          style={{
            padding: "100px 24px",
            background: "#111827",
            color: "#FFFFFF",
          }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ borderLeft: "4px solid #CC5500", paddingLeft: "32px" }}>
              <span style={{ color: "#FF7B1A", fontSize: "14px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Current Engagement
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(24px, 3vw, 36px)",
                  marginTop: "16px",
                  marginBottom: "24px",
                  lineHeight: 1.3,
                }}
              >
                $500M+ Portfolio Design Partner
              </h2>
              <p style={{ color: "#9CA3AF", fontSize: "18px", lineHeight: 1.6 }}>
                Captus is actively utilized by a major strategic design partner to coordinate risk and exposure across sustainable life sciences and LEED-certified developments. We are validating predictive intelligence across institutional-grade capital projects.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ────────────────────────── */}
        <section
          style={{
            padding: "100px 24px",
            background: "#FFFFFF",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 className="font-display" style={{ fontSize: "32px", marginBottom: "24px" }}>Evaluate Our Platform</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.6, marginBottom: "32px" }}>
              Qualified owners and developers can request a private demo to evaluate how predictive risk intelligence can strengthen portfolio performance.
            </p>
            <a href="/book-demo" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ padding: "14px 32px", fontSize: "16px" }}>
                <span>Book a Demo</span>
              </button>
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
