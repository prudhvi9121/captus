"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Image from "next/image";

const teamMembers = [
    { name: "Jonathan Kruljac", role: "Mentor & Advisor", type: "advisor" },
    { name: "Alley (Tong) Wu", role: "Founding AI Engineer", type: "founding" },
    { name: "Khanak Agrawal", role: "AI Engineer", type: "engineer" },
    { name: "Youssef Benaouda", role: "AI Engineer", type: "engineer" },
];

function Section({ children }: { children: React.ReactNode }) {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
}

export default function Team() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />

            {/* FIX 1: Increased mobile padding from px-5 to px-8 for more breathing room */}
            <main
                className="px-8 sm:px-10 md:px-12"
                style={{ flex: 1, paddingTop: "120px", paddingBottom: "80px", display: "flex", justifyContent: "center" }}
            >
                <div style={{ width: "100%", maxWidth: "1000px" }}>

                    {/* ── Page Header ── */}
                    <div style={{ textAlign: "center", marginBottom: "clamp(48px, 6vw, 72px)" }}>
                        <h1
                            className="font-display"
                            style={{ fontSize: "clamp(28px, 5vw, 48px)", color: "var(--text-primary)", marginBottom: "16px" }}
                        >
                            Our Team
                        </h1>
                        <p className="px-2 sm:px-0" style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.5vw, 18px)", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
                            Captus is led by experienced industry operators with deep expertise in AI, data systems, and complex construction workflows.
                        </p>
                    </div>

                    {/* ── Founder Section ── */}
                    <Section>
                        <div style={{ marginBottom: "clamp(56px, 8vw, 80px)" }}>
                            <p
                                className="text-center md:text-left"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "#CC5500",
                                    marginBottom: "24px",
                                }}
                            >
                                Leadership
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-12 items-start">
                                {/* Left: portrait + name */}
                                <div className="flex flex-col items-center md:items-start gap-4">
                                    <div
                                        className="w-[85%] sm:w-2/3 md:w-full mx-auto md:mx-0 relative"
                                        style={{
                                            aspectRatio: "1/1",
                                            background: "var(--surface-2)",
                                            borderRadius: "16px",
                                            border: "1px solid var(--border)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--text-muted)",
                                            fontSize: "13px",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Image
                                            src="/Anatoly-51 - Anatoly Khen.jpg"
                                            alt="Anatoly Khen - Founder & CEO"
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h2 className="font-display" style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: "var(--text-primary)" }}>
                                            Anatoly Khen
                                        </h2>
                                        <p style={{ color: "#CC5500", fontWeight: 700, fontSize: "15px", marginTop: "4px" }}>
                                            Founder &amp; CEO
                                        </p>
                                    </div>
                                </div>

                                {/* Right: bio */}
                                <div className="px-1 sm:px-4 md:px-0 text-left md:text-left" style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                    <p style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.75 }}>
                                        Captus is led by Anatoly Khen, Founder and CEO, with a proven background in product and go-to-market strategy across leading AI and technology organizations. He brings deep experience from past roles at innovative companies including Revelen.ai, Axon, Paylocity, and VIEVU.
                                    </p>
                                    <p style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.75 }}>
                                        With an Executive MBA from MIT, Anatoly blends rigorous academic frameworks with practical operational expertise to solve complex systemic issues within the construction industry. He recognizes that owner returns are fundamentally eroded by preventable risk and has focused Captus exclusively on solving this upstream visibility problem.
                                    </p>
                                    <div
                                        className="text-left"
                                        style={{
                                            padding: "clamp(16px, 3vw, 24px)",
                                            background: "var(--surface-1)",
                                            borderRadius: "10px",
                                            border: "1px solid var(--border)",
                                            marginTop: "8px"
                                        }}
                                    >
                                        <h3 className="font-display" style={{ fontSize: "clamp(14px, 1.8vw, 16px)", color: "var(--text-primary)", marginBottom: "12px" }}>
                                            Professional Background
                                        </h3>
                                        <ul
                                            style={{
                                                color: "var(--text-secondary)",
                                                fontSize: "clamp(14px, 1.4vw, 15px)",
                                                lineHeight: 1.7,
                                                paddingLeft: "20px",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "6px",
                                            }}
                                        >
                                            <li><strong>MIT</strong> - Executive MBA</li>
                                            <li><strong>Revelen.ai</strong> - Leadership &amp; Strategy</li>
                                            <li><strong>Axon</strong> - Product &amp; Market Growth</li>
                                            <li><strong>Paylocity</strong> - Technology &amp; Scale</li>
                                            <li><strong>VIEVU</strong> - Go-to-Market Expansion</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* ── Divider ── */}
                    <div style={{ height: "1px", background: "var(--border)", marginBottom: "clamp(48px, 6vw, 64px)" }} />

                    {/* ── Rest of Team ── */}
                    <Section>
                        <div>
                            <p
                                className="text-center md:text-left"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "#CC5500",
                                    marginBottom: "24px",
                                }}
                            >
                                The Team
                            </p>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                                    gap: "24px",
                                }}
                            >
                                {teamMembers.map((member, i) => (
                                    <div
                                        key={i}
                                        className="glass reveal-child mx-auto w-full max-w-[320px] md:max-w-none"
                                        style={{
                                            padding: "clamp(24px, 4vw, 32px)",
                                            borderRadius: "14px",
                                            border: "1px solid var(--border)",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center",
                                            transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                                            animationDelay: `${i * 100}ms`,
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.transform = "translateY(-4px)";
                                            el.style.borderColor = "rgba(204,85,0,0.35)";
                                            el.style.boxShadow = "0 12px 32px rgba(204,85,0,0.08)";
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget as HTMLElement;
                                            el.style.transform = "translateY(0)";
                                            el.style.borderColor = "var(--border)";
                                            el.style.boxShadow = "none";
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "80px",
                                                height: "80px",
                                                borderRadius: "50%",
                                                background: "rgba(204,85,0,0.07)",
                                                border: "1px solid rgba(204,85,0,0.2)",
                                                marginBottom: "20px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#CC5500",
                                                fontSize: "12px",
                                            }}
                                        >
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                        <h3 className="font-display" style={{ fontSize: "clamp(16px, 2vw, 18px)", color: "var(--text-primary)", marginBottom: "6px" }}>
                                            {member.name}
                                        </h3>
                                        <p style={{ color: "#CC5500", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                                            {member.role}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Section>

                </div>
            </main>
            <Footer />
        </div>
    );
}