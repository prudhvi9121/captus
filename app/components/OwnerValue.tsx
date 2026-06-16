"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import Image from "next/image";

export default function OwnerValue() {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

    const features = [
        {
            label: "Protects Capital",
            desc: "Each avoided rework event preserves margin and reduces contingency drawdown.",
        },
        {
            label: "Strengthens Accountability",
            desc: "Positions owners upstream with data-driven visibility across all project parties.",
        },
        {
            label: "Supports Sustainability",
            desc: "Reduces material waste and schedule overruns inherent in reactive project oversight.",
        },
    ];

    return (
        <section
            style={{
                position: "relative",
                overflow: "hidden",
                background: "#FFFFFF",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row" as const,
                    flexWrap: "wrap" as const,
                    minHeight: "600px",
                }}
            >
                {/* ── LEFT: Image panel ── */}
                <div
                    style={{
                        flex: "1 1 380px",
                        position: "relative",
                        minHeight: "480px",
                        overflow: "hidden",
                    }}
                >
                    <Image
                        src="/Admin.png"
                        alt="Captus platform — owner view"
                        fill
                        style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                    {/* Gradient overlay */}
                    <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(105deg, rgba(10,10,10,0.18) 0%, rgba(10,10,10,0.05) 100%)",
                    }} />
                    {/* Orange accent bar at bottom */}
                    <div style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        height: "4px",
                        background: "linear-gradient(90deg, #CC5500, #FF7B1A)",
                    }} />
                </div>

                {/* ── RIGHT: Content ── */}
                <div
                    style={{
                        flex: "1 1 380px",
                        display: "flex",
                        flexDirection: "column" as const,
                        justifyContent: "center",
                        padding: "clamp(56px, 8vw, 100px) clamp(32px, 5vw, 80px)",
                        background: "var(--surface-1)",
                    }}
                >
                    <div ref={ref} className="reveal">
                        <span className="section-tag">For Construction Owners</span>

                        <h2
                            className="reveal-child"
                            style={{
                                fontFamily: "'Good Times', sans-serif",
                                fontSize: "clamp(28px, 4vw, 52px)",
                                color: "#111111",
                                lineHeight: 1.05,
                                letterSpacing: "-0.5px",
                                marginBottom: "24px",
                            }}
                        >
                            DESIGNED FOR
                            <br />
                            CAPITAL{" "}
                            <span style={{ color: "#CC5500" }}>PRESERVATION</span>
                        </h2>

                        <p
                            className="reveal-child"
                            style={{
                                fontFamily: "Nexa, sans-serif",
                                color: "#6B7280",
                                fontSize: "clamp(14px, 1.4vw, 17px)",
                                lineHeight: 1.75,
                                marginBottom: "44px",
                                maxWidth: "460px",
                            }}
                        >
                            General contractors have project management tools. Owners need predictive
                            oversight. Captus is positioned upstream to focus strictly on identifying
                            financial exposure across the project lifecycle.
                        </p>

                        {/* Feature list */}
                        <div
                            className="reveal-child"
                            style={{ display: "flex", flexDirection: "column" as const, gap: "0" }}
                        >
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "20px",
                                        paddingTop: "24px",
                                        paddingBottom: "24px",
                                        borderBottom: i < features.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                                    }}
                                >
                                    {/* Orange check */}
                                    <div style={{
                                        width: "24px", height: "24px",
                                        borderRadius: "50%",
                                        background: "rgba(204,85,0,0.1)",
                                        border: "1px solid rgba(204,85,0,0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        marginTop: "2px",
                                    }}>
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                            <path d="M1 4L3.5 6.5L9 1" stroke="#CC5500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontFamily: "'Good Times', sans-serif",
                                            fontSize: "12px",
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase" as const,
                                            color: "#111111",
                                            marginBottom: "6px",
                                        }}>
                                            {f.label}
                                        </div>
                                        <div style={{
                                            fontFamily: "Nexa, sans-serif",
                                            fontSize: "13px",
                                            color: "#6B7280",
                                            lineHeight: 1.6,
                                        }}>
                                            {f.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
