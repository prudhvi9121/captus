"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import CraneWireframe from "./vectors/CraneWireframe";

export default function Problem() {
    const headerRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
    const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section
            style={{
                position: "relative",
                overflow: "hidden",
                padding: "clamp(60px, 8vw, 100px) clamp(16px, 5vw, 24px)",
                background: "#FFFFFF",
            }}
        >
            <CraneWireframe />
            <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div ref={headerRef} className="reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(28px, 4vw, 42px)",
                            color: "var(--text-primary)",
                            marginBottom: "16px",
                        }}
                    >
                        The Cost of Reactive Oversight
                    </h2>
                    <p style={{ color: "var(--text-secondary)", fontSize: "18px", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
                        Construction inefficiency continues to erode owner returns at scale. Wait-and-see approaches drain contingency budgets.
                    </p>
                </div>

                <div
                    ref={gridRef}
                    className="reveal"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "20px",
                    }}
                >
                    <div className="glass reveal-child" style={{ padding: "40px", borderRadius: "12px", border: "1px solid var(--border)" }}>
                        <div style={{ fontSize: "40px", color: "#CC5500", fontWeight: 700, marginBottom: "16px", fontFamily: "Good Times" }}>5–20%</div>
                        <h3 className="font-display" style={{ fontSize: "20px", marginBottom: "12px" }}>Value Lost to Rework</h3>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                            Industry data shows that between 5% and 20% of total contract value is lost to preventable rework, miscommunication, and poor data coordination.
                        </p>
                    </div>
                    <div className="glass reveal-child" style={{ padding: "40px", borderRadius: "12px", border: "1px solid var(--border)" }}>
                        <div style={{ fontSize: "40px", color: "#CC5500", fontWeight: 700, marginBottom: "16px", fontFamily: "Good Times" }}>100x</div>
                        <h3 className="font-display" style={{ fontSize: "20px", marginBottom: "12px" }}>The Escalation Curve</h3>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                            An issue corrected at the design stage may cost one dollar. That same issue corrected during installation can cost one hundred dollars.
                        </p>
                    </div>
                    <div className="glass reveal-child" style={{ padding: "40px", borderRadius: "12px", border: "1px solid var(--border)" }}>
                        <div style={{ fontSize: "40px", color: "#CC5500", fontWeight: 700, marginBottom: "16px", fontFamily: "Good Times" }}>0</div>
                        <h3 className="font-display" style={{ fontSize: "20px", marginBottom: "12px" }}>Predictive Visibility</h3>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                            Traditional tools document what has already happened. They do not identify systemic risk patterns early enough to prevent capital loss.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
