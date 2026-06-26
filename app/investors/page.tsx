"use client";

import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Image from "next/image";

export default function Investors() {
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Google Form requires the Firm field (entry.177650040).
        // Since it is optional in the UI mockup, we supply a fallback "N/A" if empty
        // to prevent Google Forms from returning a 400 Bad Request.
        const firmValue = formData.get("entry.177650040");
        if (!firmValue || (typeof firmValue === "string" && firmValue.trim() === "")) {
            formData.set("entry.177650040", "N/A");
        }

        // Use URLSearchParams for reliable application/x-www-form-urlencoded format
        const searchParams = new URLSearchParams();
        formData.forEach((value, key) => {
            searchParams.append(key, value as string);
        });

        try {
            await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSftxNyomG9aPvMlFCWlXM63X341Wa-fCWGRrzJVQoPY8f0T4Q/formResponse",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: searchParams,
                }
            );

            setSuccess(true);
            form.reset();

            // Auto-dismiss success after 5 seconds
            setTimeout(() => setSuccess(false), 5000);

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
            
            {/* SUCCESS POPUP */}
            {success && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999,
                }}>
                    <div style={{
                        background: "#FFFFFF",
                        padding: "32px",
                        borderRadius: "16px",
                        width: "90%",
                        maxWidth: "400px",
                        textAlign: "center",
                        border: "1px solid rgba(204, 85, 0, 0.1)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}>
                        <h3 style={{
                            marginBottom: "12px",
                            color: "#CC5500",
                            fontFamily: '"Good Times", system-ui, sans-serif',
                            fontSize: "18px"
                        }}>
                            ✅ ADDED TO LIST
                        </h3>

                        <p style={{
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                            marginBottom: "24px",
                            lineHeight: 1.5
                        }}>
                            Thank you! You have been successfully added to our investor updates list.
                        </p>

                        <button
                            onClick={() => setSuccess(false)}
                            style={{
                                padding: "10px 24px",
                                fontSize: "12px",
                                background: "#CC5500",
                                color: "#FFFFFF",
                                border: "none",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontFamily: '"Good Times", system-ui, sans-serif'
                            }}
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            )}

            <main style={{
                flex: 1,
                paddingTop: "140px",
                paddingBottom: "100px",
                paddingLeft: "clamp(24px, 6vw, 80px)",
                paddingRight: "clamp(24px, 6vw, 80px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `
                    linear-gradient(to right, rgba(204, 85, 0, 0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(204, 85, 0, 0.04) 1px, transparent 1px)
                `,
                backgroundSize: "56px 56px",
                backgroundColor: "var(--bg)",
            }}>
                <div 
                    className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start"
                >
                    {/* Left Column */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="section-tag" style={{ marginBottom: "16px" }}>
                            <span className="eyebrow-line" style={{ background: "#CC5500" }}></span>
                            Investors
                        </div>

                        <h1 style={{
                            fontFamily: '"Courier New", Courier, monospace',
                            fontSize: "clamp(36px, 6vw, 64px)",
                            fontWeight: "normal",
                            color: "#111111",
                            lineHeight: 1.1,
                            letterSpacing: "-0.02em",
                            marginBottom: "24px"
                        }}>
                            Thank you.
                        </h1>

                        <div style={{ marginBottom: "32px" }}>
                            <div style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                background: "#F5EBE1",
                                color: "#A34400",
                                padding: "8px 16px",
                                borderRadius: "20px",
                                fontSize: "13px",
                                fontWeight: "600",
                            }}>
                                <span style={{ color: "#CC5500", fontSize: "14px" }}>●</span>
                                Pre-seed round oversubscribed
                            </div>
                        </div>

                        <p style={{
                            color: "#4B5563",
                            fontSize: "16px",
                            lineHeight: 1.6,
                            marginBottom: "32px",
                            maxWidth: "480px"
                        }}>
                            To everyone who backed us this early: thank you. The real work starts now, and we're glad you're in it with us.
                        </p>

                        <div style={{
                            borderLeft: "2.5px solid #CC5500",
                            paddingLeft: "24px",
                            marginBottom: "40px",
                            maxWidth: "500px"
                        }}>
                            <p style={{
                                fontSize: "18px",
                                lineHeight: 1.6,
                                color: "#4B5563",
                            }}>
                                Captus oversubscribed our pre-seed round. Thank you to the old and new friends who bet on our early vision: <span style={{ color: "#CC5500", fontWeight: 600 }}>helping CRE developers and owners finish projects on time and on budget.</span>
                            </p>
                        </div>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            flexWrap: "wrap"
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                    border: "1px solid var(--border)",
                                    position: "relative",
                                }}>
                                    <Image
                                        src="/Anatoly.jpg"
                                        alt="Anatoly Khen"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: "13px", fontWeight: "700", color: "#111111", letterSpacing: "0.05em" }}>
                                        ANATOLY KHEN
                                    </h4>
                                    <p style={{ fontSize: "11px", color: "#888888" }}>
                                        Co-Founder & CEO, Captus.ai
                                    </p>
                                </div>
                            </div>
                            
                            <a 
                                href="https://www.linkedin.com/posts/anatolykhen_pre-seed-round-oversubscribed-captus"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    fontSize: "13px",
                                    color: "#4B5563",
                                    textDecoration: "none",
                                    fontWeight: "500",
                                    marginLeft: "12px",
                                    transition: "color 0.2s"
                                }}
                                className="hover:text-orange-dark"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                                Read the announcement
                            </a>
                        </div>
                    </div>

                    {/* Right Column (Form Card) */}
                    <div className="flex justify-center lg:justify-end w-full">
                        <div style={{
                            background: "#FFFFFF",
                            borderRadius: "24px",
                            border: "1px solid rgba(226, 226, 224, 0.8)",
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.01)",
                            padding: "clamp(24px, 4vw, 40px)",
                            maxWidth: "460px",
                            width: "100%",
                        }}>
                            <div className="section-tag" style={{ marginBottom: "12px" }}>
                                <span className="eyebrow-line" style={{ background: "#CC5500", width: "16px" }}></span>
                                Investor Updates
                            </div>

                            <h2 style={{
                                fontFamily: '"Courier New", Courier, monospace',
                                fontSize: "clamp(22px, 3.5vw, 28px)",
                                fontWeight: "bold",
                                color: "#111111",
                                marginBottom: "16px"
                            }}>
                                Hear from us first
                            </h2>

                            <p style={{
                                fontSize: "14px",
                                lineHeight: 1.6,
                                color: "#6B7280",
                                marginBottom: "28px"
                            }}>
                                We send a short update a few times a year: a new milestone, what we're focused on, and early word when we open our next round.
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                {/* Full Name */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <label style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", letterSpacing: "0.05em" }}>
                                        FULL NAME
                                    </label>
                                    <input 
                                        required 
                                        type="text" 
                                        name="entry.1060124428"
                                        placeholder="Jane Investor"
                                        style={{ 
                                            padding: "12px 16px", 
                                            borderRadius: "8px", 
                                            border: "1px solid #E5E7EB", 
                                            background: "#FFFFFF", 
                                            fontSize: "14px", 
                                            color: "#111111",
                                            outline: "none",
                                            transition: "border-color 0.2s"
                                        }}
                                        className="focus:border-orange focus:outline-none"
                                    />
                                </div>

                                {/* Email */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <label style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", letterSpacing: "0.05em" }}>
                                        EMAIL
                                    </label>
                                    <input 
                                        required 
                                        type="email" 
                                        name="entry.12194182"
                                        placeholder="jane@firm.com"
                                        style={{ 
                                            padding: "12px 16px", 
                                            borderRadius: "8px", 
                                            border: "1px solid #E5E7EB", 
                                            background: "#FFFFFF", 
                                            fontSize: "14px", 
                                            color: "#111111",
                                            outline: "none",
                                            transition: "border-color 0.2s"
                                        }}
                                        className="focus:border-orange focus:outline-none"
                                    />
                                </div>

                                {/* Firm (optional) */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <label style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", letterSpacing: "0.05em" }}>
                                        FIRM <span style={{ textTransform: "lowercase", fontWeight: "400", color: "#9CA3AF" }}>(optional)</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="entry.177650040"
                                        placeholder="Acme Ventures"
                                        style={{ 
                                            padding: "12px 16px", 
                                            borderRadius: "8px", 
                                            border: "1px solid #E5E7EB", 
                                            background: "#FFFFFF", 
                                            fontSize: "14px", 
                                            color: "#111111",
                                            outline: "none",
                                            transition: "border-color 0.2s"
                                        }}
                                        className="focus:border-orange focus:outline-none"
                                    />
                                </div>

                                {/* Hidden field for message, which is required by the original form setup */}
                                <input 
                                    type="hidden" 
                                    name="entry.1529888000" 
                                    value="Investor updates subscription request" 
                                />

                                {/* Submit Button */}
                                <button 
                                    type="submit" 
                                    style={{ 
                                        padding: "14px", 
                                        fontSize: "14px", 
                                        fontWeight: "bold",
                                        background: "#CC5500", 
                                        color: "#FFFFFF",
                                        border: "none",
                                        borderRadius: "8px", 
                                        cursor: "pointer",
                                        marginTop: "8px",
                                        transition: "background-color 0.2s, transform 0.1s"
                                    }}
                                    className="hover:bg-orange-dark active:scale-[0.98]"
                                >
                                    Add me to the list
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}