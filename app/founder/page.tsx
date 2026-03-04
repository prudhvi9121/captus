"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Founder() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
            <main style={{ flex: 1, padding: "180px 24px 100px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: "900px" }}>
                    <div style={{ textAlign: "center", marginBottom: "64px" }}>
                        <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "var(--text-primary)", marginBottom: "16px" }}>
                            Leadership
                        </h1>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "48px", alignItems: "start" }}>
                        {/* Headshot Placeholder */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                            <div
                                style={{
                                    width: "100%",
                                    aspectRatio: "1/1",
                                    background: "var(--surface-2)",
                                    borderRadius: "12px",
                                    border: "1px solid var(--border)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--text-muted)"
                                }}
                            >
                                [Founder Headshot]
                            </div>
                            <div>
                                <h2 className="font-display" style={{ fontSize: "24px", color: "var(--text-primary)" }}>Anatoly Khen</h2>
                                <p style={{ color: "#CC5500", fontWeight: 700, fontSize: "16px", marginTop: "4px" }}>Founder & CEO</p>
                            </div>
                        </div>

                        {/* Bio */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            <p style={{ color: "var(--text-secondary)", fontSize: "18px", lineHeight: 1.7 }}>
                                Captus is led by Anatoly Khen, Founder and CEO, with a proven background in product and go-to-market execution across leading AI and technology organizations. He brings deep experience from past roles at innovative companies including Revelen.ai, Axon, Paylocity, and VIEVU.
                            </p>
                            <p style={{ color: "var(--text-secondary)", fontSize: "18px", lineHeight: 1.7 }}>
                                With an Executive MBA from MIT, Anatoly blends rigorous academic frameworks with practical operational expertise to solve complex systemic issues within the construction industry. He recognizes that owner returns are fundamentally eroded by preventable risk and has focused Captus exclusively on solving this upstream visibility problem.
                            </p>

                            <div style={{ padding: "24px", background: "var(--surface-1)", borderRadius: "8px", border: "1px solid var(--border)", marginTop: "16px" }}>
                                <h3 className="font-display" style={{ fontSize: "18px", color: "var(--text-primary)", marginBottom: "12px" }}>Professional Background</h3>
                                <ul style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.7, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                                    <li><strong>MIT</strong> — Executive MBA</li>
                                    <li><strong>Revelen.ai</strong> — Leadership & Strategy</li>
                                    <li><strong>Axon</strong> — Product & Market Execution</li>
                                    <li><strong>Paylocity</strong> — Technology & Scale</li>
                                    <li><strong>VIEVU</strong> — Go-to-Market Expansion</li>
                                </ul>
                            </div>

                            <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.7, fontStyle: "italic", marginTop: "16px" }}>
                                Outside of building Captus and working with strategic design partners, Anatoly prioritizes spending quality time with his family.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
