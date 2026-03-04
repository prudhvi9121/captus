"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
    { name: "Anatoly Khen", role: "Founder & CEO", type: "founder" },
    { name: "Mentor & Advisor", role: "Strategic Advisor", type: "advisor" },
    { name: "Founding AI Engineer", role: "AI engineering & Architecture", type: "founding" },
    { name: "AI Engineers", role: "Platform Development", type: "engineer" },
];

export default function Team() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
            <main style={{ flex: 1, padding: "180px 24px 100px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: "1200px" }}>
                    <div style={{ textAlign: "center", marginBottom: "64px" }}>
                        <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "var(--text-primary)", marginBottom: "16px" }}>
                            Our Team
                        </h1>
                        <p style={{ color: "var(--text-secondary)", fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
                            Captus is supported by experienced AI engineers and advisors with deep expertise in artificial intelligence, data systems, and complex construction workflows.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
                        {teamMembers.map((member, i) => (
                            <div key={i} className="glass" style={{ padding: "32px", borderRadius: "12px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                                <div
                                    style={{
                                        width: "120px",
                                        height: "120px",
                                        borderRadius: "50%",
                                        background: "var(--surface-2)",
                                        border: "1px solid var(--border)",
                                        marginBottom: "24px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--text-muted)",
                                        fontSize: "12px"
                                    }}
                                >
                                    [Headshot]
                                </div>
                                <h3 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "8px" }}>
                                    {member.name}
                                </h3>
                                <p style={{ color: "#CC5500", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
