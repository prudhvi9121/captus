"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
    {
        quote:
            "Captus fundamentally changed how we approach financial oversight on capital projects. The ability to surface conflicts before they escalate is unlike anything we've seen in the market.",
        name: "Strategic Design Partner",
        title: "Owner — $500M+ Portfolio",
        initial: "S",
    },
];

export default function Testimonial() {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

    return (
        <section
            style={{
                padding: "clamp(60px, 8vw, 100px) clamp(16px, 5vw, 24px)",
                background: "#FFFFFF",
                borderTop: "1px solid var(--border)",
            }}
        >
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "clamp(40px, 6vw, 64px)" }}>
                    <p
                        style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "#CC5500",
                            marginBottom: "12px",
                        }}
                    >
                        What Partners Say
                    </p>
                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(24px, 4vw, 38px)",
                            color: "var(--text-primary)",
                        }}
                    >
                        Built on Real Outcomes
                    </h2>
                </div>

                {/* Testimonial Cards */}
                <div
                    ref={ref}
                    className="reveal"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                    }}
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="reveal-child"
                            style={{
                                background: "#111827",
                                borderRadius: "16px",
                                padding: "clamp(28px, 5vw, 48px)",
                                borderLeft: "4px solid #CC5500",
                                position: "relative",
                                overflow: "hidden",
                                animationDelay: `${i * 150}ms`,
                            }}
                        >
                            {/* Large quote mark */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: "16px",
                                    right: "24px",
                                    fontSize: "120px",
                                    lineHeight: 1,
                                    color: "rgba(204,85,0,0.08)",
                                    fontFamily: "Georgia, serif",
                                    pointerEvents: "none",
                                    userSelect: "none",
                                }}
                            >
                                &ldquo;
                            </div>

                            <p
                                style={{
                                    color: "#E5E7EB",
                                    fontSize: "clamp(16px, 2vw, 20px)",
                                    lineHeight: 1.7,
                                    fontStyle: "italic",
                                    marginBottom: "32px",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                                {/* Avatar initial */}
                                <div
                                    style={{
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "50%",
                                        background: "rgba(204,85,0,0.2)",
                                        border: "1px solid rgba(204,85,0,0.4)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#FF7B1A",
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        flexShrink: 0,
                                    }}
                                >
                                    {t.initial}
                                </div>
                                <div>
                                    <div
                                        style={{
                                            color: "#FFFFFF",
                                            fontWeight: 700,
                                            fontSize: "15px",
                                        }}
                                    >
                                        {t.name}
                                    </div>
                                    <div
                                        style={{
                                            color: "#9CA3AF",
                                            fontSize: "13px",
                                            marginTop: "2px",
                                        }}
                                    >
                                        {t.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
