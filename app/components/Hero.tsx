"use client";

import { useEffect, useRef } from "react";

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

export default function Hero() {
    const heroRef = useFadeUp(100);
    const heroSubRef = useFadeUp(250);
    const heroCtaRef = useFadeUp(400);

    return (
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
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 pt-40 pb-24">
                {/* Left Column: Text */}
                <div className="flex-[0.8] flex flex-col items-start text-left gap-8">
                    {/* Headline */}
                    <h3
                        ref={heroSubRef}
                        className="font-display"
                        style={{
                            fontSize: "clamp(24px, 3vw, 40px)",
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
                    </h3>

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
                                backgroundColor: "#1F1F1F",
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
                    className="flex-[1.2] w-full"
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
    );
}
