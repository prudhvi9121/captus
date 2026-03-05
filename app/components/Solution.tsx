"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import GridBlueprint from "./vectors/GridBlueprint";

export default function Solution() {
    const headerRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
    const listRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

    return (
        <section
            style={{
                position: "relative",
                overflow: "hidden",
                padding: "clamp(60px, 8vw, 120px) clamp(20px, 5vw, 24px)",
                background: "#F8F9FA",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
            }}
        >
            <GridBlueprint />
            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div ref={headerRef} className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(24px, 4vw, 42px)",
                            color: "var(--text-primary)",
                            marginBottom: "16px",
                        }}
                    >
                        How Captus Works
                    </h2>
                </div>

                <div ref={listRef} className="reveal" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {[
                        { title: "1. Automated Ingestion", desc: "Captus ingests and connects project data across documents, drawings, specifications, emails, models, and external systems like Procore and Autodesk." },
                        { title: "2. Delta Detection", desc: "We map relationships between scope, trades, schedule dependencies, and communication records to surface inconsistencies instantly." },
                        { title: "3. Risk Heat Map", desc: "The platform visualizes the risk and forecasts potential financial and scheduling consequences before they impact downstream trades." },
                        { title: "4. Accelerated Decisions", desc: "Route the identified conflict directly to the appropriate stakeholder with full context attached, transforming raw documentation into intelligence." },
                    ].map((step, i) => (
                        <div
                            key={i}
                            className="reveal-child"
                            style={{
                                background: "#FFFFFF",
                                padding: "clamp(20px, 4vw, 32px)",
                                borderRadius: "8px",
                                border: "1px solid var(--border)",
                                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = "rgba(204,85,0,0.3)";
                                el.style.boxShadow = "0 4px 20px rgba(204,85,0,0.06)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.borderColor = "var(--border)";
                                el.style.boxShadow = "none";
                            }}
                        >
                            <h3 className="font-display" style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#CC5500", marginBottom: "8px" }}>{step.title}</h3>
                            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "clamp(14px, 1.5vw, 16px)" }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
