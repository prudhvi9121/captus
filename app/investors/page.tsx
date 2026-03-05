"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Investors() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
            <main className="px-5 sm:px-6" style={{ flex: 1, paddingTop: "120px", paddingBottom: "80px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: "600px" }}>
                    <div style={{ textAlign: "center", marginBottom: "48px" }}>
                        <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "var(--text-primary)", marginBottom: "16px" }}>
                            Investor Relations
                        </h1>
                        <p style={{ color: "var(--text-secondary)", fontSize: "18px", lineHeight: 1.6 }}>
                            Drive the future of predictive risk intelligence. Connect with our capital and strategy team.
                        </p>
                    </div>

                    <form
                        className="glass"
                        style={{ padding: "40px", borderRadius: "12px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "24px" }}
                        action="mailto:info@captus.ai"
                        method="POST"
                        encType="text/plain"
                    >
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>Name<span style={{ color: "#CC5500" }}>*</span></label>
                                <input required type="text" name="Name" style={{ padding: "12px 16px", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "16px", color: "var(--text-primary)" }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <label style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>Email<span style={{ color: "#CC5500" }}>*</span></label>
                                <input required type="email" name="Email" style={{ padding: "12px 16px", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "16px", color: "var(--text-primary)" }} />
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>Firm / Institution<span style={{ color: "#CC5500" }}>*</span></label>
                            <input required type="text" name="Firm" style={{ padding: "12px 16px", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "16px", color: "var(--text-primary)" }} />
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "8px", marginBottom: "8px" }}>
                            <input type="checkbox" id="strategic" name="InterestType" value="Strategic Partner" style={{ width: "20px", height: "20px", accentColor: "#CC5500", cursor: "pointer" }} />
                            <label htmlFor="strategic" style={{ fontSize: "15px", color: "var(--text-secondary)", cursor: "pointer" }}>I am interested as an Investor / Strategic Partner</label>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)" }}>Message<span style={{ color: "#CC5500" }}>*</span></label>
                            <textarea required name="Message" rows={4} style={{ padding: "12px 16px", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "16px", color: "var(--text-primary)", resize: "vertical" }}></textarea>
                        </div>

                        <button type="submit" className="btn-primary" style={{ padding: "16px", fontSize: "16px", marginTop: "16px", width: "100%" }}>
                            Submit Interest
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
