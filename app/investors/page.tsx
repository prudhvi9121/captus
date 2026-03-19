"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Investors() {

    const [checkboxError, setCheckboxError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const checkbox = form.querySelector<HTMLInputElement>("#strategic");

        if (!checkbox || !checkbox.checked) {
            setCheckboxError(true);
            return;
        }

        setCheckboxError(false);

        const formData = new FormData(form);

        try {
            await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSftxNyomG9aPvMlFCWlXM63X341Wa-fCWGRrzJVQoPY8f0T4Q/formResponse",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: formData,
                }
            );

            setSuccess(true);
            form.reset();

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
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
                        <h3 style={{
                            marginBottom: "10px",
                            color: "var(--text-primary)"
                        }}>
                            ✅ Submitted
                        </h3>

                        <p style={{
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                            marginBottom: "20px"
                        }}>
                            Your details have been submitted successfully.
                        </p>

                        <button
                            onClick={() => setSuccess(false)}
                            className="btn-primary"
                            style={{
                                padding: "10px 16px",
                                fontSize: "14px"
                            }}
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
                            Investor Relations
                        </h1>
                        <p style={{ color: "var(--text-secondary)", fontSize: "clamp(14px, 3vw, 18px)", lineHeight: 1.6 }}>
                            Connect with our capital and strategy team.
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
                            gap: "24px",
                        }}
                    >
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(16px, 3vw, 24px)" }}>

                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>
                                    Name<span style={{ color: "#CC5500" }}>*</span>
                                </label>
                                <input required type="text" name="entry.1060124428"
                                    style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>
                                    Email<span style={{ color: "#CC5500" }}>*</span>
                                </label>
                                <input required type="email" name="entry.12194182"
                                    style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>
                                Firm / Institution<span style={{ color: "#CC5500" }}>*</span>
                            </label>
                            <input required type="text" name="entry.177650040"
                                style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)" }} />
                        </div>

                        {/* Checkbox */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "4px", marginBottom: "4px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <input type="checkbox" id="strategic"
                                    style={{ width: "18px", height: "18px", accentColor: "#CC5500", cursor: "pointer", flexShrink: 0 }} />
                                <label htmlFor="strategic"
                                    style={{ fontSize: "clamp(13px, 2.5vw, 15px)", color: "var(--text-secondary)", cursor: "pointer" }}>
                                    I am interested as an Investor / Strategic Partner
                                </label>
                            </div>

                            {checkboxError && (
                                <span style={{ color: "red", fontSize: "13px" }}>
                                    Please confirm before submitting
                                </span>
                            )}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                            <label style={{ fontSize: "clamp(12px, 2.5vw, 14px)", fontWeight: 700, color: "var(--text-primary)" }}>
                                Message<span style={{ color: "#CC5500" }}>*</span>
                            </label>
                            <textarea required name="entry.1529888000" rows={4}
                                style={{ padding: "clamp(9px, 2vw, 12px) clamp(12px, 2.5vw, 16px)", borderRadius: "6px", border: "1px solid var(--border)", background: "var(--surface-1)", fontSize: "clamp(14px, 3vw, 16px)", color: "var(--text-primary)", resize: "vertical" }}></textarea>
                        </div>

                        <button type="submit" className="btn-primary"
                            style={{ padding: "clamp(12px, 3vw, 16px)", fontSize: "clamp(14px, 3vw, 16px)", marginTop: "12px", width: "100%" }}>
                            Submit Interest
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}