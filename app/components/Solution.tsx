"use client";

export default function Solution() {
    return (
        <section
            style={{
                padding: "120px 24px",
                background: "#F8F9FA",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
                <div style={{ gridColumn: "1 / -1", textAlign: "center", marginBottom: "40px" }}>
                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(28px, 4vw, 42px)",
                            color: "var(--text-primary)",
                            marginBottom: "16px",
                        }}
                    >
                        How Captus Works
                    </h2>
                </div>

                <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "24px" }}>
                    {/* Workings List */}
                    {[
                        { title: "1. Automated Ingestion", desc: "Captus ingests and connects project data across documents, drawings, specifications, emails, models, and external systems like Procore and Autodesk." },
                        { title: "2. Delta Detection", desc: "We map relationships between scope, trades, schedule dependencies, and communication records to surface inconsistencies instantly." },
                        { title: "3. Risk Heat Map", desc: "The platform visualizes the risk and forecasts potential financial and scheduling consequences before they impact downstream trades." },
                        { title: "4. Accelerated Decisions", desc: "Route the identified conflict directly to the appropriate stakeholder with full context attached, transforming raw documentation into intelligence." },
                    ].map((step, i) => (
                        <div key={i} style={{ background: "#FFFFFF", padding: "32px", borderRadius: "8px", border: "1px solid var(--border)", display: "flex", gap: "24px" }}>
                            <div>
                                <h3 className="font-display" style={{ fontSize: "18px", color: "#CC5500", marginBottom: "8px" }}>{step.title}</h3>
                                <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
