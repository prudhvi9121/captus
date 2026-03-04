"use client";

export default function OwnerValue() {
    return (
        <section
            style={{
                padding: "100px 24px",
                background: "#FFFFFF",
            }}
        >
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
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
                    <div style={{ padding: "20px 40px", background: "#F8F9FA", borderRadius: "8px", border: "1px solid var(--border)" }}>
                        <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>Protects Capital</div>
                    </div>
                    <div style={{ padding: "20px 40px", background: "#F8F9FA", borderRadius: "8px", border: "1px solid var(--border)" }}>
                        <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>Strengthens Accountability</div>
                    </div>
                    <div style={{ padding: "20px 40px", background: "#F8F9FA", borderRadius: "8px", border: "1px solid var(--border)" }}>
                        <div style={{ fontWeight: 700, color: "var(--text-primary)" }}>Supports Sustainability</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
