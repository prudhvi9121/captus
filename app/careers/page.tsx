"use client";

import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Careers() {
    const [success, setSuccess] = useState(false);
    const [aboutText, setAboutText] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Simulate a successful form submission
        setSuccess(true);
        e.currentTarget.reset();
        setAboutText("");

        // Auto-dismiss success after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
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
                            ✅ REACHED OUT
                        </h3>

                        <p style={{
                            fontSize: "14px",
                            color: "var(--text-secondary)",
                            marginBottom: "24px",
                            lineHeight: 1.5
                        }}>
                            Thank you! Your introduction has been received. We'll be in touch soon.
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
                            Careers
                        </div>

                        <h1 style={{
                            fontSize: "clamp(28px, 4vw, 44px)",
                            fontWeight: "400",
                            fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
                            color: "#111111",
                            lineHeight: 1.1,
                            letterSpacing: "-0.01em",
                            marginBottom: "24px"
                        }}>
                            Build with us
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
                                Hiring in Seattle & Remote
                            </div>
                        </div>

                        <p style={{
                            color: "#4B5563",
                            fontSize: "16px",
                            lineHeight: 1.6,
                            marginBottom: "40px",
                            maxWidth: "480px",
                            fontFamily: '"IBM Plex Sans", system-ui, sans-serif'
                        }}>
                            We're a small team taking on a problem the construction industry has lived with for decades. If you want real ownership and work that ships to real projects, we should talk.
                        </p>

                        {/* Values list */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "520px" }}>
                            
                            {/* Value 1 */}
                            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                                <div style={{ 
                                    background: "rgba(204, 85, 0, 0.08)", 
                                    padding: "10px", 
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CC5500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                    </svg>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <h4 style={{ fontSize: "15px", fontWeight: "600", color: "#111111", fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
                                        Ownership from day one
                                    </h4>
                                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.5, fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
                                        Early team, early equity, and a direct hand in what we build.
                                    </p>
                                </div>
                            </div>

                            {/* Value 2 */}
                            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                                <div style={{ 
                                    background: "rgba(204, 85, 0, 0.08)", 
                                    padding: "10px", 
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CC5500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                        <polyline points="16 7 22 7 22 13"></polyline>
                                    </svg>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <h4 style={{ fontSize: "15px", fontWeight: "600", color: "#111111", fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
                                        Real work, real projects
                                    </h4>
                                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.5, fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
                                        What you ship goes straight to teams running active capital projects.
                                    </p>
                                </div>
                            </div>

                            {/* Value 3 */}
                            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                                <div style={{ 
                                    background: "rgba(204, 85, 0, 0.08)", 
                                    padding: "10px", 
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CC5500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 7.5 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"></path>
                                        <line x1="9" y1="18" x2="15" y2="18"></line>
                                        <line x1="10" y1="22" x2="14" y2="22"></line>
                                    </svg>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <h4 style={{ fontSize: "15px", fontWeight: "600", color: "#111111", fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
                                        Founding-team culture
                                    </h4>
                                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.5, fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
                                        Low ego, high trust, and a bias toward shipping.
                                    </p>
                                </div>
                            </div>

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
                                Get In Touch
                            </div>

                            <h2 style={{
                                fontSize: "clamp(22px, 3.5vw, 28px)",
                                fontWeight: "normal",
                                color: "#111111",
                                marginBottom: "16px",
                                fontFamily: '"IBM Plex Mono", ui-monospace, monospace'
                            }}>
                                Introduce yourself
                            </h2>

                            <p style={{
                                fontSize: "14px",
                                lineHeight: 1.6,
                                color: "#6B7280",
                                marginBottom: "28px",
                                fontFamily: '"IBM Plex Sans", system-ui, sans-serif'
                            }}>
                                Leave your details and we'll be in touch.
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
                                        name="fullname"
                                        placeholder="Jane Builder"
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
                                        name="email"
                                        placeholder="jane@email.com"
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

                                {/* What's your superpower? */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <label style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", letterSpacing: "0.05em" }}>
                                        WHAT'S YOUR SUPERPOWER?
                                    </label>
                                    <input 
                                        required
                                        type="text" 
                                        name="superpower"
                                        placeholder="The one thing you're unreasonably good at"
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

                                {/* Tell us about yourself */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <label style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", letterSpacing: "0.05em" }}>
                                            TELL US ABOUT YOURSELF
                                        </label>
                                        <span style={{ fontSize: "11px", color: "#9CA3AF" }}>
                                            {aboutText.length}/250
                                        </span>
                                    </div>
                                    <textarea 
                                        required
                                        name="about"
                                        maxLength={250}
                                        value={aboutText}
                                        onChange={(e) => setAboutText(e.target.value)}
                                        placeholder="A few lines on who you are and what you'd love to work on."
                                        rows={4}
                                        style={{ 
                                            padding: "12px 16px", 
                                            borderRadius: "8px", 
                                            border: "1px solid #E5E7EB", 
                                            background: "#FFFFFF", 
                                            fontSize: "14px", 
                                            color: "#111111",
                                            outline: "none",
                                            resize: "none",
                                            transition: "border-color 0.2s"
                                        }}
                                        className="focus:border-orange focus:outline-none"
                                    />
                                </div>

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
                                    Reach out to us
                                </button>
                            </form>

                            <div style={{ 
                                marginTop: "24px", 
                                textAlign: "center", 
                                fontSize: "10px", 
                                letterSpacing: "0.18em", 
                                color: "#9CA3AF",
                                fontFamily: '"Good Times", system-ui, sans-serif'
                            }}>
                                ELIGE EXIMIUS ESSE
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}