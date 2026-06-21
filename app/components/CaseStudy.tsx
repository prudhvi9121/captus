"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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

export default function CaseStudy() {
    const leftRef = useFadeUp(200);
    const rightRef = useFadeUp(400);

    return (
        <section
            id="case-study"
            className="curved-section"
            style={{
                minHeight: "560px",
                display: "flex",
                zIndex: 12,
            }}
        >
            {/* ── Full-bleed background ── */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <Image
                    src="/500image.png"
                    alt="Construction site"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 40%" }}
                    sizes="100vw"
                    quality={60}
                />
                {/* Dark overlay — heavier on the left */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(100deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.60) 60%, rgba(10,10,10,0.35) 100%)",
                }} />
                {/* Top + bottom fade */}
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    height: "120px",
                    background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 100%)",
                }} />
                <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "120px",
                    background: "linear-gradient(to top, #0A0A0A 0%, transparent 100%)",
                }} />
            </div>

            {/* ── Content layer ── */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "row" as const,
                    flexWrap: "wrap" as const,
                    alignItems: "stretch",
                    minHeight: "560px",
                }}
            >
                {/* ── LEFT: Main content ── */}
                <div
                    ref={leftRef}
                    style={{
                        flex: "1 1 320px",
                        padding: "clamp(72px, 9vw, 120px) clamp(32px, 6vw, 96px)",
                        display: "flex",
                        flexDirection: "column" as const,
                        justifyContent: "center",
                        opacity: 0,
                        transform: "translateY(20px)",
                        transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
                    }}
                >
                    <span className="section-tag-light">Case Study</span>

                    <h2
                        style={{
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "clamp(40px, 6vw, 80px)",
                            lineHeight: 1.0,
                            letterSpacing: "-2px",
                            marginBottom: "28px",
                            color: "#FFFFFF",
                        }}
                    >
                        <span style={{ color: "#CC5500" }}>$500M+</span>
                        <br />
                        PORTFOLIO
                        <br />
                        <span style={{ color: "rgba(255,255,255,0.5)" }}>DESIGN PARTNER</span>
                    </h2>

                    <p
                        style={{
                            fontFamily: "Nexa, sans-serif",
                            color: "rgba(255,255,255,0.65)",
                            fontSize: "clamp(14px, 1.4vw, 17px)",
                            lineHeight: 1.75,
                            maxWidth: "480px",
                        }}
                    >
                        Captus is actively used by a major strategic design partner to coordinate
                        risk and exposure across sustainable life sciences and LEED-certified developments.
                        We are validating predictive intelligence across institutional-grade capital projects.
                    </p>
                </div>

                {/* ── RIGHT: Dark CTA panel ── */}
                <div
                    ref={rightRef}
                    style={{
                        flex: "0 0 clamp(280px, 32vw, 420px)",
                        background: "rgba(10,10,10,0.85)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        borderLeft: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        flexDirection: "column" as const,
                        justifyContent: "center",
                        alignItems: "flex-start",
                        padding: "clamp(40px, 5vw, 72px) clamp(28px, 4vw, 56px)",
                        opacity: 0,
                        transform: "translateY(20px)",
                        transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
                    }}
                >
                    <div style={{
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase" as const,
                        color: "#CC5500",
                        marginBottom: "20px",
                    }}>
                        Evaluate Our Platform
                    </div>

                    <h3
                        style={{
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "clamp(18px, 2.5vw, 28px)",
                            color: "#FFFFFF",
                            lineHeight: 1.15,
                            marginBottom: "20px",
                            letterSpacing: "-0.3px",
                        }}
                    >
                        READY TO PROTECT YOUR CAPITAL?
                    </h3>

                    <p
                        style={{
                            fontFamily: "Nexa, sans-serif",
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "14px",
                            lineHeight: 1.7,
                            marginBottom: "36px",
                        }}
                    >
                        Qualified owners and developers can request a private demo
                        to evaluate predictive risk intelligence.
                    </p>

                    <a
                        href="/book-demo"
                        className="btn-enterprise"
                        style={{ padding: "14px 28px", fontSize: "10px" }}
                    >
                        Request a Demo
                    </a>
                </div>
            </div>
        </section>
    );
}