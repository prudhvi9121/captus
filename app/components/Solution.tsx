"use client";

const STEPS = [
    {
        number: "01",
        label: "Step One",
        title: "Automated\nIngestion",
        desc: "Captus ingests and connects project data across documents, drawings, specifications, emails, models, and external systems like Procore and Autodesk.",
        stat: "40+",
        statLabel: "Data Sources Connected",
        color: "#CC5500",
    },
    {
        number: "02",
        label: "Step Two",
        title: "Delta\nDetection",
        desc: "We map relationships between scope, trades, schedule dependencies, and communication records to surface inconsistencies instantly — before they become claims.",
        stat: "100K+",
        statLabel: "Document Relationships Mapped",
        color: "#FF7B1A",
    },
    {
        number: "03",
        label: "Step Three",
        title: "Risk\nHeat Map",
        desc: "The platform visualizes risk and forecasts potential financial and scheduling consequences before they impact downstream trades.",
        stat: "Predictive",
        statLabel: "Financial Exposure Forecast",
        color: "#CC5500",
    },
];

export default function Solution() {
    return (
        <section
            id="how-it-works"
            style={{
                background: "#0A0A0A",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Subtle background grid */}
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
                pointerEvents: "none",
            }} />

            {/* Top ambient glow */}
            <div style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "70vw",
                height: "400px",
                background: "radial-gradient(ellipse at 50% 0%, rgba(204,85,0,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* ── Section Header ── */}
            <div style={{
                maxWidth: "1440px",
                margin: "0 auto",
                padding: "clamp(64px, 9vw, 110px) clamp(24px, 6vw, 96px) clamp(48px, 6vw, 72px)",
                position: "relative",
                zIndex: 1,
                textAlign: "center",
            }}>
                {/* Eyebrow */}
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    fontFamily: "'Good Times', sans-serif",
                    fontSize: "10.5px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "#CC5500",
                    marginBottom: "24px",
                    fontWeight: 700,
                }}>
                    Platform
                </div>

                {/* Headline */}
                <h2 style={{
                    fontFamily: "'Good Times', sans-serif",
                    fontSize: "clamp(30px, 5vw, 64px)",
                    color: "#FFFFFF",
                    lineHeight: 1.0,
                    margin: "0 0 20px",
                    letterSpacing: "0.01em",
                }}>
                    HOW{" "}<span style={{ color: "#CC5500" }}>CAPTUS</span>{" "}WORKS
                </h2>

                <p style={{
                    fontFamily: "Nexa, sans-serif",
                    fontSize: "clamp(14px, 1.05vw, 16px)",
                    color: "rgba(255,255,255,0.4)",
                    maxWidth: "460px",
                    margin: "0 auto",
                    lineHeight: 1.8,
                }}>
                    Three steps from fragmented data to financial protection.
                </p>
            </div>

            {/* ── Cards ── */}
            <div style={{
                maxWidth: "1440px",
                margin: "0 auto",
                padding: "0 clamp(24px, 6vw, 96px) clamp(80px, 10vw, 130px)",
                position: "relative",
                zIndex: 1,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "clamp(16px, 2vw, 24px)",
            }}>
                {STEPS.map((step) => (
                    <div
                        key={step.number}
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "10px",
                            padding: "clamp(28px, 3vw, 40px)",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            overflow: "hidden",
                            /* Transition for hover */
                            transition: "border-color 0.3s ease, background 0.3s ease",
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLDivElement).style.borderColor = `${step.color}40`;
                            (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)";
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                            (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                        }}
                    >
                        {/* Top accent line */}
                        <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "2px",
                            background: `linear-gradient(90deg, ${step.color} 0%, transparent 60%)`,
                            borderRadius: "10px 10px 0 0",
                        }} />

                        {/* Step number — large, outline */}
                        <div style={{
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "clamp(52px, 6vw, 72px)",
                            lineHeight: 1,
                            color: "transparent",
                            WebkitTextStroke: `1px rgba(204,85,0,0.3)`,
                            letterSpacing: "-0.02em",
                            userSelect: "none",
                            marginBottom: "20px",
                        }}>
                            {step.number}
                        </div>

                        {/* Step label */}
                        <div style={{
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "9px",
                            letterSpacing: "0.3em",
                            textTransform: "uppercase",
                            color: step.color,
                            marginBottom: "10px",
                            opacity: 0.9,
                        }}>
                            {step.label}
                        </div>

                        {/* Title */}
                        <h3 style={{
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "clamp(18px, 2vw, 26px)",
                            color: "#FFFFFF",
                            lineHeight: 1.15,
                            margin: "0 0 18px",
                            whiteSpace: "pre-line",
                            letterSpacing: "0.01em",
                        }}>
                            {step.title}
                        </h3>

                        {/* Divider */}
                        <div style={{
                            width: "32px",
                            height: "1px",
                            background: step.color,
                            opacity: 0.5,
                            marginBottom: "18px",
                        }} />

                        {/* Description */}
                        <p style={{
                            fontFamily: "Nexa, sans-serif",
                            fontSize: "clamp(13px, 1vw, 14.5px)",
                            color: "rgba(255,255,255,0.45)",
                            lineHeight: 1.8,
                            margin: "0 0 32px",
                            fontWeight: 300,
                            flexGrow: 1,
                        }}>
                            {step.desc}
                        </p>

                        {/* Stat */}
                        <div style={{
                            paddingTop: "20px",
                            borderTop: "1px solid rgba(255,255,255,0.07)",
                        }}>
                            <div style={{
                                fontFamily: "'Good Times', sans-serif",
                                fontSize: "clamp(18px, 2.2vw, 26px)",
                                color: step.color,
                                lineHeight: 1,
                                marginBottom: "5px",
                            }}>
                                {step.stat}
                            </div>
                            <div style={{
                                fontFamily: "Nexa, sans-serif",
                                fontSize: "10.5px",
                                color: "rgba(255,255,255,0.25)",
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                fontWeight: 400,
                            }}>
                                {step.statLabel}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom separator */}
            <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(204,85,0,0.18) 40%, rgba(204,85,0,0.18) 60%, transparent)",
            }} />
        </section>
    );
}
