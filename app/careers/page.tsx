"use client";

import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MONO = '"IBM Plex Mono", monospace';
const SANS = '"IBM Plex Sans", sans-serif';

export default function Careers() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [superpower, setSuperpower] = useState("");
    const [about, setAbout] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();

        if (!trimmedName) {
            setError("Please enter your name.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Simulating form submission
        setSubmitted(true);
        setError("");
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setSuperpower("");
        setAbout("");
        setSubmitted(false);
        setError("");
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
            <Navbar />

            <style dangerouslySetInnerHTML={{ __html: `
                .car-input:focus, .car-textarea:focus {
                    outline: none;
                    border-color: #CC5500 !important;
                    box-shadow: 0 0 0 3px rgba(204, 85, 0, 0.12);
                }
                @media (max-width: 980px) {
                    .car-formwrap {
                        grid-template-columns: 1fr !important;
                        gap: 48px !important;
                    }
                }
            ` }} />

            <main style={{
                flex: 1,
                position: "relative",
                overflow: "hidden",
                background: "rgb(246, 243, 238)",
                paddingTop: "120px",
                paddingBottom: "100px",
                display: "flex",
                alignItems: "center",
            }}>
                {/* Grid Background */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    backgroundImage: `
                        linear-gradient(rgba(26, 23, 20, 0.043) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(26, 23, 20, 0.043) 1px, transparent 1px)
                    `,
                    backgroundSize: "62px 62px",
                    backgroundPosition: "center top",
                }} />

                {/* Orange radial glow on the left */}
                <div style={{
                    position: "absolute",
                    left: "-160px",
                    top: "60px",
                    width: "520px",
                    height: "520px",
                    pointerEvents: "none",
                    background: "radial-gradient(circle, rgba(204, 85, 0, 0.07) 0%, rgba(204, 85, 0, 0) 68%)",
                }} />

                <div 
                    className="cap-x w-full"
                    style={{
                        position: "relative",
                        zIndex: 1,
                        maxWidth: "1180px",
                        margin: "0 auto",
                        paddingLeft: "56px",
                        paddingRight: "56px",
                    }}
                >
                    <div 
                        className="car-formwrap"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 470px",
                            gap: "80px",
                            alignItems: "start",
                        }}
                    >
                        {/* ─── LEFT COLUMN ─── */}
                        <div>
                            {/* Eyebrow tag */}
                            <div style={{ display: "flex", alignItems: "center", gap: "13px" }}>
                                <div style={{ width: "34px", height: "2px", background: "rgb(204, 85, 0)" }} />
                                <div style={{
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    color: "rgb(204, 85, 0)",
                                    fontFamily: SANS,
                                }}>
                                    Careers
                                </div>
                            </div>

                            {/* Heading */}
                            <h1 style={{
                                margin: "26px 0px 0px",
                                fontFamily: MONO,
                                fontSize: "54px",
                                fontWeight: 400,
                                lineHeight: 1.08,
                                letterSpacing: "0.002em",
                                color: "rgb(21, 17, 14)",
                            }}>
                                Build with us
                            </h1>

                            {/* Status tag */}
                            <div style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "11px",
                                marginTop: "24px",
                                background: "rgb(246, 230, 216)",
                                border: "1px solid rgb(234, 208, 187)",
                                padding: "10px 18px",
                                borderRadius: "9999px",
                            }}>
                                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgb(204, 85, 0)" }} />
                                <span style={{
                                    fontSize: "13.5px",
                                    fontWeight: 600,
                                    letterSpacing: "0.02em",
                                    color: "rgb(154, 63, 0)",
                                    fontFamily: SANS,
                                }}>
                                    Hiring in Seattle &amp; Remote
                                </span>
                            </div>

                            {/* Description paragraph */}
                            <p style={{
                                margin: "26px 0px 0px",
                                fontSize: "19px",
                                lineHeight: 1.64,
                                fontWeight: 300,
                                color: "rgb(74, 70, 66)",
                                maxWidth: "520px",
                                fontFamily: SANS,
                            }}>
                                We&apos;re a small team taking on a problem the construction industry has lived with for decades. If you want real ownership and work that ships to real projects, we should talk.
                            </p>

                            {/* Points list */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "38px", maxWidth: "480px" }}>
                                
                                {/* Point 1 */}
                                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#CC5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 auto", marginTop: "2px" }}>
                                        <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
                                    </svg>
                                    <div>
                                        <div style={{ fontSize: "15.5px", fontWeight: 600, color: "rgb(21, 17, 14)", fontFamily: SANS }}>
                                            Ownership from day one
                                        </div>
                                        <div style={{ marginTop: "3px", fontSize: "14.5px", lineHeight: "1.55", fontWeight: 300, color: "rgb(87, 81, 75)", fontFamily: SANS }}>
                                            Early team, early equity, and a direct hand in what we build.
                                        </div>
                                    </div>
                                </div>

                                {/* Point 2 */}
                                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#CC5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 auto", marginTop: "2px" }}>
                                        <path d="M3 3v18h18" />
                                        <path d="m7 14 4-4 3 3 5-6" />
                                    </svg>
                                    <div>
                                        <div style={{ fontSize: "15.5px", fontWeight: 600, color: "rgb(21, 17, 14)", fontFamily: SANS }}>
                                            Real work, real projects
                                        </div>
                                        <div style={{ marginTop: "3px", fontSize: "14.5px", lineHeight: "1.55", fontWeight: 300, color: "rgb(87, 81, 75)", fontFamily: SANS }}>
                                            What you ship goes straight to teams running active capital projects.
                                        </div>
                                    </div>
                                </div>

                                {/* Point 3 */}
                                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#CC5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 auto", marginTop: "2px" }}>
                                        <path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2z" />
                                        <path d="M9 22h6" />
                                    </svg>
                                    <div>
                                        <div style={{ fontSize: "15.5px", fontWeight: 600, color: "rgb(21, 17, 14)", fontFamily: SANS }}>
                                            Founding-team culture
                                        </div>
                                        <div style={{ marginTop: "3px", fontSize: "14.5px", lineHeight: "1.55", fontWeight: 300, color: "rgb(87, 81, 75)", fontFamily: SANS }}>
                                            Low ego, high trust, and a bias toward shipping.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ─── RIGHT COLUMN (FORM CARD) ─── */}
                        <div style={{
                            background: "rgb(255, 255, 255)",
                            border: "1px solid rgb(236, 233, 229)",
                            borderRadius: "24px",
                            padding: "38px",
                            boxShadow: "rgba(40, 30, 20, 0.1) 0px 14px 44px, rgba(206, 84, 0, 0.13) 0px 4px 16px",
                            width: "100%",
                        }}>
                            {!submitted ? (
                                <>
                                    <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
                                        <div style={{ width: "34px", height: "2px", background: "rgb(204, 85, 0)" }} />
                                        <div style={{
                                            fontSize: "11.5px",
                                            fontWeight: 600,
                                            letterSpacing: "0.18em",
                                            textTransform: "uppercase",
                                            color: "rgb(204, 85, 0)",
                                            fontFamily: SANS,
                                        }}>
                                            Get in touch
                                        </div>
                                    </div>
                                    
                                    <h2 style={{
                                        margin: "16px 0px 0px",
                                        fontFamily: MONO,
                                        fontSize: "24px",
                                        fontWeight: 400,
                                        lineHeight: 1.16,
                                        color: "rgb(21, 17, 14)",
                                    }}>
                                        Introduce yourself
                                    </h2>
                                    
                                    <p style={{
                                        margin: "16px 0px 0px",
                                        fontSize: "15.5px",
                                        lineHeight: 1.6,
                                        fontWeight: 300,
                                        color: "rgb(74, 70, 66)",
                                        fontFamily: SANS,
                                    }}>
                                        Leave your details and we&apos;ll be in touch.
                                    </p>

                                    <form onSubmit={handleSubmit} style={{ marginTop: "28px" }}>
                                        {/* Full Name */}
                                        <div style={{ marginBottom: "16px" }}>
                                            <label style={{
                                                display: "block",
                                                fontSize: "11.5px",
                                                fontWeight: 600,
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase",
                                                color: "rgb(87, 81, 75)",
                                                marginBottom: "9px",
                                                fontFamily: SANS,
                                            }}>
                                                Full name
                                            </label>
                                            <input 
                                                type="text" 
                                                placeholder="Jane Builder" 
                                                value={name}
                                                onChange={(e) => { setName(e.target.value); setError(""); }}
                                                className="car-input"
                                                style={{
                                                    width: "100%",
                                                    border: "1px solid rgb(216, 211, 204)",
                                                    borderRadius: "10px",
                                                    padding: "13px 15px",
                                                    fontFamily: SANS,
                                                    fontSize: "15px",
                                                    color: "rgb(21, 17, 14)",
                                                    background: "rgb(255, 255, 255)",
                                                    transition: "all 0.2s",
                                                }}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div style={{ marginBottom: "16px" }}>
                                            <label style={{
                                                display: "block",
                                                fontSize: "11.5px",
                                                fontWeight: 600,
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase",
                                                color: "rgb(87, 81, 75)",
                                                marginBottom: "9px",
                                                fontFamily: SANS,
                                            }}>
                                                Email
                                            </label>
                                            <input 
                                                type="email" 
                                                placeholder="jane@email.com" 
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                                                className="car-input"
                                                style={{
                                                    width: "100%",
                                                    border: "1px solid rgb(216, 211, 204)",
                                                    borderRadius: "10px",
                                                    padding: "13px 15px",
                                                    fontFamily: SANS,
                                                    fontSize: "15px",
                                                    color: "rgb(21, 17, 14)",
                                                    background: "rgb(255, 255, 255)",
                                                    transition: "all 0.2s",
                                                }}
                                            />
                                        </div>

                                        {/* Superpower */}
                                        <div style={{ marginBottom: "16px" }}>
                                            <label style={{
                                                display: "block",
                                                fontSize: "11.5px",
                                                fontWeight: 600,
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase",
                                                color: "rgb(87, 81, 75)",
                                                marginBottom: "9px",
                                                fontFamily: SANS,
                                            }}>
                                                What&apos;s your superpower?
                                            </label>
                                            <input 
                                                type="text" 
                                                placeholder="The one thing you're unreasonably good at" 
                                                value={superpower}
                                                onChange={(e) => setSuperpower(e.target.value)}
                                                className="car-input"
                                                style={{
                                                    width: "100%",
                                                    border: "1px solid rgb(216, 211, 204)",
                                                    borderRadius: "10px",
                                                    padding: "13px 15px",
                                                    fontFamily: SANS,
                                                    fontSize: "15px",
                                                    color: "rgb(21, 17, 14)",
                                                    background: "rgb(255, 255, 255)",
                                                    transition: "all 0.2s",
                                                }}
                                            />
                                        </div>

                                        {/* About yourself */}
                                        <div style={{ marginBottom: "16px" }}>
                                            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "9px" }}>
                                                <label style={{
                                                    fontSize: "11.5px",
                                                    fontWeight: 600,
                                                    letterSpacing: "0.1em",
                                                    textTransform: "uppercase",
                                                    color: "rgb(87, 81, 75)",
                                                    fontFamily: SANS,
                                                }}>
                                                    Tell us about yourself
                                                </label>
                                                <span style={{ fontSize: "11.5px", fontWeight: 400, color: "rgb(168, 162, 155)", fontFamily: SANS }}>
                                                    {about.length}/250
                                                </span>
                                            </div>
                                            <textarea 
                                                maxLength={250}
                                                rows={4}
                                                placeholder="A few lines on who you are and what you'd love to work on."
                                                value={about}
                                                onChange={(e) => setAbout(e.target.value.slice(0, 250))}
                                                className="car-textarea"
                                                style={{
                                                    width: "100%",
                                                    resize: "none",
                                                    border: "1px solid rgb(216, 211, 204)",
                                                    borderRadius: "10px",
                                                    padding: "13px 15px",
                                                    fontFamily: SANS,
                                                    fontSize: "15px",
                                                    lineHeight: "1.5",
                                                    color: "rgb(21, 17, 14)",
                                                    background: "rgb(255, 255, 255)",
                                                    transition: "all 0.2s",
                                                }}
                                            />
                                        </div>

                                        {error && (
                                            <p style={{ color: "#CC5500", fontSize: "13px", marginTop: "12px", fontFamily: SANS }}>
                                                {error}
                                            </p>
                                        )}

                                        <button 
                                            type="submit" 
                                            style={{
                                                width: "100%",
                                                marginTop: "24px",
                                                background: "rgb(204, 85, 0)",
                                                color: "rgb(255, 255, 255)",
                                                border: "none",
                                                cursor: "pointer",
                                                fontFamily: SANS,
                                                fontSize: "15px",
                                                fontWeight: 600,
                                                letterSpacing: "0.02em",
                                                padding: "15px 24px",
                                                borderRadius: "10px",
                                                transition: "background 0.2s, transform 0.1s"
                                            }}
                                            className="hover:bg-[#B54A00] active:scale-[0.98]"
                                        >
                                            Reach out to us
                                        </button>
                                        
                                        <div style={{
                                            marginTop: "20px",
                                            textAlign: "center",
                                            fontFamily: MONO,
                                            fontSize: "10px",
                                            letterSpacing: "0.34em",
                                            color: "rgb(204, 85, 0)",
                                        }}>
                                            ELIGE EXIMIUS ESSE
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div style={{ textAlign: "center", padding: "20px 0" }}>
                                    <div style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "50%",
                                        background: "rgba(204, 85, 0, 0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgb(204, 85, 0)",
                                        fontSize: "24px",
                                        marginBottom: "16px",
                                        marginLeft: "auto",
                                        marginRight: "auto"
                                    }}>
                                        ✓
                                    </div>
                                    <h4 style={{ fontSize: "20px", fontWeight: 600, color: "rgb(21, 17, 14)", marginBottom: "8px", fontFamily: SANS }}>
                                        Sent successfully!
                                    </h4>
                                    <p style={{ fontSize: "14.5px", color: "rgb(74, 70, 66)", lineHeight: 1.5, marginBottom: "24px", fontFamily: SANS }}>
                                        Thanks {name.split(" ")[0]}! We have received your details and we&apos;ll be in touch soon.
                                    </p>
                                    <button 
                                        onClick={handleReset}
                                        style={{
                                            padding: "10px 24px",
                                            border: "1px solid rgb(216, 211, 204)",
                                            borderRadius: "8px",
                                            background: "#FFFFFF",
                                            color: "rgb(87, 81, 75)",
                                            fontSize: "13px",
                                            cursor: "pointer",
                                            fontFamily: SANS
                                        }}
                                    >
                                        Back
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}