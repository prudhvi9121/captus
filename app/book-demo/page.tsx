"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookDemo() {

    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSeH_mTnyOwicTvWFX2rxyeAZOfPD9tmK4hq0R14B7iorSh_gA/formResponse",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: formData,
                }
            );

            setSuccess(true);
            form.reset();

            setTimeout(() => setSuccess(false), 3000);

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />

            {/* ✅ SUCCESS POPUP */}
            {success && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999
                }}>
                    <div style={{
                        background: "var(--surface-1)",
                        padding: "24px 28px",
                        borderRadius: "12px",
                        width: "90%",
                        maxWidth: "400px",
                        textAlign: "center",
                        border: "1px solid var(--border)"
                    }}>
                        <h3 style={{ marginBottom: "10px", color: "var(--text-primary)" }}>
                            ✅ Submitted
                        </h3>

                        <p style={{
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                            marginBottom: "20px"
                        }}>
                            Your request has been submitted successfully.
                        </p>

                        <button
                            onClick={() => setSuccess(false)}
                            className="btn-primary"
                            style={{ padding: "10px 16px", fontSize: "14px" }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

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
                        onSubmit={handleSubmit}
                        style={{
                            padding: "clamp(20px, 5vw, 40px)",
                            borderRadius: "12px",
                            border: "1px solid var(--border)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "clamp(16px, 3vw, 24px)",
                        }}
                    >

                        {/* Name + Email */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(16px, 3vw, 24px)" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>
                                    Name<span style={{ color: "#CC5500" }}>*</span>
                                </label>
                                <input required type="text" name="entry.1481821760"
                                    style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>
                                    Email<span style={{ color: "#CC5500" }}>*</span>
                                </label>
                                <input required type="email" name="entry.45870342"
                                    style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>
                        </div>

                        {/* Company + Title */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(16px, 3vw, 24px)" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>
                                    Company<span style={{ color: "#CC5500" }}>*</span>
                                </label>
                                <input required type="text" name="entry.1000089707"
                                    style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>
                                    Title<span style={{ color: "#CC5500" }}>*</span>
                                </label>
                                <input required type="text" name="entry.674157560"
                                    style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>
                        </div>

                        {/* Phone + Size */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(16px, 3vw, 24px)" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>
                                    Phone (optional)
                                </label>
                                <input type="tel" name="entry.1607118228"
                                    style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>
                                    Project / Portfolio Size
                                </label>
                                <input type="text" name="entry.1568768636" placeholder="$50M+"
                                    style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>
                        </div>

                        {/* Message */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>
                                Message<span style={{ color: "#CC5500" }}>*</span>
                            </label>
                            <textarea required name="entry.858552139" rows={4}
                                style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)", resize: "vertical" }} />
                        </div>

                        <button type="submit" className="btn-primary"
                            style={{ padding: "clamp(12px, 3vw, 16px)", fontSize: "clamp(14px, 3vw, 16px)", marginTop: "12px", width: "100%" }}>
                            Submit Request
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}