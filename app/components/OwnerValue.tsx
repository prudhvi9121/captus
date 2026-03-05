"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import CityscapeWireframe from "./vectors/CityscapeWireframe";

export default function OwnerValue() {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

    return (
        <section
            style={{
                position: "relative",
                overflow: "hidden",
                padding: "clamp(60px, 8vw, 100px) clamp(16px, 5vw, 24px)",
                background: "#FFFFFF",
            }}
        >
            <CityscapeWireframe />
            <div ref={ref} className="reveal" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
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
                    {["Protects Capital", "Strengthens Accountability", "Supports Sustainability"].map((label, i) => (
                        <div
                            key={i}
                            className="reveal-child"
                            style={{
                                padding: "20px 40px",
                                background: "#F8F9FA",
                                borderRadius: "8px",
                                border: "1px solid var(--border)",
                                transition: "transform 0.2s ease, border-color 0.2s, box-shadow 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = "translateY(-3px)";
                                el.style.borderColor = "rgba(204,85,0,0.3)";
                                el.style.boxShadow = "0 8px 20px rgba(204,85,0,0.07)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = "translateY(0)";
                                el.style.borderColor = "var(--border)";
                                el.style.boxShadow = "none";
                            }}
                        >
                            <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
