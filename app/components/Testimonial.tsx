"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
    {
        quote:
            "We're doing about half a billion dollars of development and construction. I had the best data at my fingertips, especially when it came to risk, timing and budget.",
        name: "Anthony Maher",
        title: "Owner and Developer, University Place Associates",
        initial: "A",
    },
];

export default function Testimonial() {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section
            style={{
                padding: "clamp(80px, 10vw, 140px) clamp(20px, 6vw, 96px)",
                background: "var(--surface-1)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Large decorative quote mark */}
            <div style={{
                position: "absolute",
                top: "-20px",
                left: "clamp(20px, 6vw, 96px)",
                fontFamily: "Georgia, serif",
                fontSize: "clamp(200px, 22vw, 320px)",
                lineHeight: 1,
                color: "rgba(204,85,0,0.06)",
                pointerEvents: "none",
                userSelect: "none",
                zIndex: 0,
            }}>
                &ldquo;
            </div>

            <div
                ref={ref}
                className="reveal"
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                }}
            >
                {/* Eyebrow */}
                <span className="section-tag">What Partners Say</span>

                {/* Orange divider line */}
                <div style={{
                    width: "40px",
                    height: "3px",
                    background: "#CC5500",
                    margin: "0 auto 48px",
                }} />

                {testimonials.map((t, i) => (
                    <div key={i} className="reveal-child">
                        {/* The quote itself — large editorial style */}
                        <blockquote
                            style={{
                                fontFamily: "Nexa, sans-serif",
                                fontSize: "clamp(20px, 2.8vw, 32px)",
                                lineHeight: 1.5,
                                fontWeight: 300,
                                color: "#111111",
                                fontStyle: "italic",
                                marginBottom: "48px",
                                letterSpacing: "-0.2px",
                            }}
                        >
                            &ldquo;{t.quote}&rdquo;
                        </blockquote>

                        {/* Attribution */}
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "20px",
                        }}>
                            {/* Avatar */}
                            <div style={{
                                width: "52px",
                                height: "52px",
                                borderRadius: "50%",
                                background: "rgba(204,85,0,0.12)",
                                border: "2px solid rgba(204,85,0,0.3)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#CC5500",
                                fontFamily: "'Good Times', sans-serif",
                                fontSize: "18px",
                                flexShrink: 0,
                            }}>
                                {t.initial}
                            </div>
                            <div style={{ textAlign: "left" }}>
                                <div style={{
                                    fontFamily: "'Good Times', sans-serif",
                                    fontSize: "12px",
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase" as const,
                                    color: "#111111",
                                    marginBottom: "4px",
                                }}>
                                    {t.name}
                                </div>
                                <div style={{
                                    fontFamily: "Nexa, sans-serif",
                                    fontSize: "13px",
                                    color: "#6B7280",
                                }}>
                                    {t.title}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
