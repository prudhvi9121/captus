"use client";

import { useEffect, useRef } from "react";

/* - Tiny hook: animate-in on mount - */
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
    const heroParaRef = useFadeUp(350);
    const heroCtaRef = useFadeUp(500);

    return (
        <section
            id="hero"
            style={{
                position: "relative",
                paddingTop: "clamp(60px, 6vw, 86px)",
                minHeight: "unset",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflow: "hidden",
                background: "#FFFFFF",
            }}
        >
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(0.5deg); }
                }
                @keyframes mesh {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>

            {/* Premium Mesh Background */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.4,
                    background: "radial-gradient(at 0% 0%, rgba(204,85,0,0.08) 0, transparent 50%), radial-gradient(at 100% 0%, rgba(255,123,26,0.05) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(204,85,0,0.08) 0, transparent 50%), radial-gradient(at 0% 100%, rgba(255,123,26,0.05) 0, transparent 50%)",
                    animation: "mesh 20s ease infinite",
                    backgroundSize: "200% 200%",
                }}
            />

            {/* Subtle Grid Overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.03,
                    backgroundImage: "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Decorative triangle */}
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", userSelect: "none" }}>
                <svg width="800" height="800" viewBox="0 0 800 800" fill="none" style={{ opacity: 0.02 }}>
                    <circle cx="400" cy="400" r="300" stroke="#CC5500" strokeWidth="1" strokeDasharray="4 8" />
                    <circle cx="400" cy="400" r="380" stroke="#CC5500" strokeWidth="0.5" opacity="0.5" />
                </svg>
            </div>

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    paddingTop: "clamp(36px, 5vw, 40px)",
                    paddingBottom: "clamp(64px, 8vw, 80px)",
                    paddingLeft: "clamp(36px, 6vw, 96px)",
                    paddingRight: "clamp(36px, 6vw, 96px)",
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "clamp(48px, 6vw, 80px)",
                }}
            >
                {/* Left Column: Text */}
                <div
                    style={{
                        flex: "0.8 1 280px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        textAlign: "left",
                        gap: "clamp(28px, 4vw, 32px)",
                        width: "100%",
                    }}
                >
                    {/* Headline */}
                    <h3
                        ref={heroSubRef}
                        className="font-display"
                        style={{
                            fontSize: "clamp(24px, 3.5vw, 40px)",
                            color: "var(--text-primary)",
                            lineHeight: 1.15,
                            letterSpacing: "-0.01em",
                            opacity: 0,
                            transform: "translateY(20px)",
                            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                            transitionDelay: "100ms",
                        }}
                    >
                        Identify Financial & Operational Risk{" "}
                        <span style={{ color: "#CC5500" }}>Before It Materializes.</span>
                    </h3>

                    {/* Sub-headline */}
                    <p
                        ref={heroParaRef}
                        style={{
                            color: "var(--text-secondary)",
                            fontSize: "clamp(15px, 1.3vw, 17px)",
                            maxWidth: "480px",
                            lineHeight: 1.6,
                            fontWeight: 400,
                            opacity: 0,
                            transform: "translateY(20px)",
                            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                            transitionDelay: "200ms",
                        }}
                    >
                        Captus is built for construction owners and developers who carry financial exposure across complex projects. We protect capital by connecting fragmented data to surface conflicts early.
                    </p>

                    {/* CTA */}
                    <div
                        ref={heroCtaRef}
                        style={{
                            opacity: 0,
                            transform: "translateY(20px)",
                            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                    >
                        <a
                            href="/book-demo"
                            className="font-display transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(204,85,0,0.6)] active:scale-95 active:shadow-[0_0_10px_rgba(204,85,0,0.4)]"
                            style={{
                                display: "inline-block",
                                padding: "clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)",
                                background: "#111111",
                                color: "#fff",
                                borderRadius: "12px",
                                fontWeight: 600,
                                fontSize: "clamp(13px, 1.5vw, 14px)",
                                textDecoration: "none",
                                boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                letterSpacing: "0.05em",
                            }}
                        >
                            Schedule a Demo
                        </a>
                    </div>
                </div>

                {/* Right Column: Premium Mockup */}
                <div
                    ref={heroRef}
                    style={{
                        flex: "1.6 1 380px",
                        width: "100%",
                        position: "relative",
                        opacity: 0,
                        transform: "translateY(20px)",
                        transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
                        transitionDelay: "400ms",
                        animation: "float 6s ease-in-out infinite",
                    }}
                >
                    {/* Shadow layers for depth */}
                    <div style={{
                        position: "absolute",
                        inset: "20px",
                        background: "rgba(0,0,0,0.2)",
                        filter: "blur(60px)",
                        borderRadius: "24px",
                        zIndex: -1,
                    }} />

                    <div style={{
                        position: "relative",
                        background: "#fff",
                        borderRadius: "24px",
                        padding: "12px",
                        border: "1px solid rgba(0,0,0,0.08)",
                        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06), 0 20px 40px -10px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                    }}>
                        {/* Chrome bar deco */}
                        <div style={{
                            height: "32px",
                            background: "#F9FAFB",
                            borderBottom: "1px solid rgba(0,0,0,0.05)",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "0 16px",
                            marginBottom: "8px",
                        }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E5E7EB" }} />
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E5E7EB" }} />
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E5E7EB" }} />
                        </div>

                        <img
                            src="/Mockup.jpeg"
                            alt="Captus Platform Mockup"
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "12px",
                                display: "block",
                            }}
                        />

                        {/* Glossy overlay */}
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                            pointerEvents: "none",
                        }} />
                    </div>
                </div>
            </div>

            {/* Bottom vignette */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "160px", background: "linear-gradient(to top, #FFFFFF, transparent)", pointerEvents: "none" }} />
        </section>
    );
}