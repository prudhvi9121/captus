"use client";

import { useEffect, useRef } from "react";
import GridBlueprint from "./vectors/GridBlueprint";

/* ── Hooks ── */
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
    const dividerRef = useFadeUp(350);
    const rightRef = useFadeUp(450);

    return (
        <section
            id="case-study"
            className="relative overflow-hidden bg-[#0A0A0A] min-h-[50vh] flex items-center justify-center"
            style={{ padding: "clamp(40px, 8vw, 120px) 0" }}
        >
            <style>{`
                @media (max-width: 640px) {
                    .case-divider {
                        width: 80px !important;
                        height: 1px !important;
                        min-height: unset !important;
                        align-self: auto !important;
                        background: linear-gradient(to right, transparent, rgba(204,85,0,0.5), transparent) !important;
                    }
                }
            `}</style>
            {/* ── Ambient Background ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[url('/500image.png')] bg-cover bg-center bg-no-repeat opacity-10 mix-blend-luminosity" />
                <div className="absolute inset-0 bg-[#0A0A0A]/60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-[#CC5500]/15 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
                <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
                <div className="absolute inset-0 opacity-[0.03] text-white">
                    <GridBlueprint />
                </div>
            </div>

            {/* ── Content ── */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    maxWidth: "1100px",
                    margin: "0 auto",
                    paddingLeft: "clamp(20px, 6vw, 96px)",
                    paddingRight: "clamp(20px, 6vw, 96px)",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "clamp(16px, 4vw, 64px)",
                }}
            >
                {/* ── LEFT: Title ── */}
                <div
                    ref={leftRef}
                    style={{
                        flex: "1 1 260px",
                        opacity: 0,
                        transform: "translateY(20px)",
                        transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
                    }}
                >
                    {/* Eyebrow */}
                    <p style={{
                        fontSize: "10px",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#CC5500",
                        fontWeight: 700,
                        marginBottom: "16px",
                    }}>
                        Case Study
                    </p>

                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(28px, 4vw, 48px)",
                            lineHeight: 1.05,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        <span style={{
                            background: "linear-gradient(135deg, #ffffff 0%, #cccccc 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}>
                            $500M+
                        </span>
                        <br />
                        <span style={{
                            background: "linear-gradient(135deg, #aaaaaa 0%, #555555 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}>
                            Portfolio
                        </span>
                        <br />
                        <span style={{
                            background: "linear-gradient(135deg, #aaaaaa 0%, #555555 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}>
                            Design Partner
                        </span>
                    </h2>
                </div>

                {/* ── DIVIDER: vertical on desktop, horizontal on mobile ── */}
                <div
                    ref={dividerRef}
                    className="case-divider"
                    style={{
                        width: "1px",
                        alignSelf: "stretch",
                        minHeight: "120px",
                        background: "linear-gradient(to bottom, transparent, rgba(204,85,0,0.5), transparent)",
                        opacity: 0,
                        transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
                        flexShrink: 0,
                    }}
                />

                {/* ── RIGHT: Paragraph ── */}
                <div
                    ref={rightRef}
                    style={{
                        flex: "1.4 1 280px",
                        opacity: 0,
                        transform: "translateY(20px)",
                        transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <p style={{
                        color: "#D1D5DB",
                        fontSize: "clamp(14px, 1.4vw, 17px)",
                        lineHeight: 1.75,
                        fontWeight: 400,
                    }}>
                        Captus is actively used by a major strategic design partner to coordinate risk and exposure across sustainable life sciences and LEED-certified developments. We are validating predictive intelligence across institutional-grade capital projects.
                    </p>
                </div>
            </div>

            {/* Top/Bottom Fade */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
        </section>
    );
}