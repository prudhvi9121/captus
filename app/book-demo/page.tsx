"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookDemo() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
            <main style={{
                flex: 1,
                paddingTop: "120px",
                paddingBottom: "80px",
                paddingLeft: "clamp(20px, 5vw, 48px)",
                paddingRight: "clamp(20px, 5vw, 48px)",
                display: "flex",
                justifyContent: "center",
            }}>
                <div style={{ width: "100%", maxWidth: "600px" }}>
                    <div style={{ textAlign: "center", marginBottom: "clamp(28px, 5vw, 48px)" }}>
                        <h1 className="font-display" style={{ fontSize: "clamp(22px, 5vw, 48px)", color: "var(--text-primary)", marginBottom: "12px" }}>
                            Request a Private Demo
                        </h1>
                        <p style={{ color: "var(--text-secondary)", fontSize: "clamp(14px, 3vw, 18px)", lineHeight: 1.6 }}>
                            Evaluate how predictive risk intelligence can strengthen portfolio performance and protect your capital.
                        </p>
                    </div>

                    <form
                        className="glass"
                        style={{
                            padding: "clamp(20px, 5vw, 40px)",
                            borderRadius: "12px",
                            border: "1px solid var(--border)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "clamp(16px, 3vw, 24px)",
                        }}
                        action="mailto:info@captus.ai"
                        method="POST"
                        encType="text/plain"
                    >
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(16px, 3vw, 24px)" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>Name<span style={{ color: "#CC5500" }}>*</span></label>
                                <input required type="text" name="Name" style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>Email<span style={{ color: "#CC5500" }}>*</span></label>
                                <input required type="email" name="Email" style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(16px, 3vw, 24px)" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>Company<span style={{ color: "#CC5500" }}>*</span></label>
                                <input required type="text" name="Company" style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>Title<span style={{ color: "#CC5500" }}>*</span></label>
                                <input required type="text" name="Title" style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(16px, 3vw, 24px)" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>Phone (optional)</label>
                                <input type="tel" name="Phone" style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>Project / Portfolio Size</label>
                                <input type="text" name="Size" placeholder="$50M+" style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>Message<span style={{ color: "#CC5500" }}>*</span></label>
                            <textarea required name="Message" rows={4} style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)", resize: "vertical" }}></textarea>
                        </div>

                        <button type="submit" className="btn-primary" style={{ padding: "clamp(12px, 3vw, 16px)", fontSize: "clamp(14px, 3vw, 16px)", marginTop: "12px", width: "100%" }}>
                            Submit Request
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}