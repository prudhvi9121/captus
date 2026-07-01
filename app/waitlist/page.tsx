"use client";

import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MONO = '"IBM Plex Mono", monospace';
const SANS = '"IBM Plex Sans", sans-serif';

export default function Waitlist() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

        setError("");
        setSubmitted(true);
    };

    const handleReset = () => {
        setName("");
        setEmail("");
        setCompany("");
        setRole("");
        setSubmitted(false);
        setError("");
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
            <Navbar />

            <style dangerouslySetInnerHTML={{ __html: `
                .wt-input:focus, .wt-select:focus {
                    outline: none;
                    border-color: #CC5500 !important;
                    box-shadow: 0 0 0 3px rgba(204, 85, 0, 0.12);
                }
                @media (max-width: 980px) {
                    .wt-x {
                        padding-left: 24px !important;
                        padding-right: 24px !important;
                    }
                    .inv-formwrap {
                        grid-template-columns: 1fr !important;
                        gap: 36px !important;
                    }
                }
            ` }} />

            <main style={{
                flex: 1,
                position: "relative",
                overflow: "hidden",
                background: "rgb(246, 243, 238)",
                paddingTop: "60px",
                paddingBottom: "100px",
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

                {/* Orange glow */}
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
                    className="wt-x"
                    style={{
                        position: "relative",
                        zIndex: 1,
                        maxWidth: "1180px",
                        margin: "0 auto",
                        padding: "96px 56px 108px",
                    }}
                >
                    <div className="inv-formwrap" style={{ display: "grid", gridTemplateColumns: "1fr 470px", gap: "80px", alignItems: "start" }}>
                        
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
                                    Early access
                                </div>
                            </div>

                            {/* Heading */}
                            <h1 style={{
                                margin: "26px 0px 0px",
                                fontFamily: MONO,
                                fontSize: "58px",
                                fontWeight: 400,
                                lineHeight: 1.07,
                                letterSpacing: "0.002em",
                                color: "rgb(21, 17, 14)",
                            }}>
                                Get early<br />access
                            </h1>

                            {/* Badge */}
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
                                    First cohort is limited
                                </span>
                            </div>

                            {/* Subtitle */}
                            <p style={{
                                margin: "26px 0px 0px",
                                fontSize: "19px",
                                lineHeight: 1.64,
                                fontWeight: 300,
                                color: "rgb(74, 70, 66)",
                                maxWidth: "520px",
                                fontFamily: SANS,
                            }}>
                                We&apos;re rolling out Captus to a small group of owners and builders. Join the waitlist and we&apos;ll reach out as spots open in the first cohort.
                            </p>

                            {/* Feature list */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "38px", maxWidth: "480px" }}>
                                
                                {/* Point 1 */}
                                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#CC5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 auto", marginTop: "2px" }}>
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                    <div>
                                        <div style={{ fontSize: "15.5px", fontWeight: 600, color: "rgb(21, 17, 14)", fontFamily: SANS }}>
                                            Hands-on onboarding
                                        </div>
                                        <div style={{ marginTop: "3px", fontSize: "14.5px", lineHeight: "1.55", fontWeight: 300, color: "rgb(87, 81, 75)", fontFamily: SANS }}>
                                            We set Captus up around your projects with you, not a help doc.
                                        </div>
                                    </div>
                                </div>

                                {/* Point 2 */}
                                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#CC5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 auto", marginTop: "2px" }}>
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                    <div>
                                        <div style={{ fontSize: "15.5px", fontWeight: 600, color: "rgb(21, 17, 14)", fontFamily: SANS }}>
                                            A direct line to the roadmap
                                        </div>
                                        <div style={{ marginTop: "3px", fontSize: "14.5px", lineHeight: "1.55", fontWeight: 300, color: "rgb(87, 81, 75)", fontFamily: SANS }}>
                                            Early members shape what we build next.
                                        </div>
                                    </div>
                                </div>

                                {/* Point 3 */}
                                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#CC5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 auto", marginTop: "2px" }}>
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                    <div>
                                        <div style={{ fontSize: "15.5px", fontWeight: 600, color: "rgb(21, 17, 14)", fontFamily: SANS }}>
                                            Founding-user pricing
                                        </div>
                                        <div style={{ marginTop: "3px", fontSize: "14.5px", lineHeight: "1.55", fontWeight: 300, color: "rgb(87, 81, 75)", fontFamily: SANS }}>
                                            Preferred terms that carry past launch.
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
                                    {/* Eyebrow tag */}
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
                                            Join the waitlist
                                        </div>
                                    </div>

                                    <h2 style={{
                                        margin: "16px 0px 0px",
                                        fontFamily: MONO,
                                        fontSize: "25px",
                                        fontWeight: 400,
                                        lineHeight: 1.16,
                                        color: "rgb(21, 17, 14)",
                                    }}>
                                        Request your spot
                                    </h2>
                                    <p style={{
                                        margin: "16px 0px 0px",
                                        fontSize: "15.5px",
                                        lineHeight: 1.6,
                                        fontWeight: 300,
                                        color: "rgb(74, 70, 66)",
                                        fontFamily: SANS,
                                    }}>
                                        Tell us a bit about you and we&apos;ll be in touch as spots open up.
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
                                                className="wt-input"
                                                style={{
                                                    width: "100%",
                                                    border: "1px solid rgb(216, 211, 204)",
                                                    borderRadius: "10px",
                                                    padding: "13px 15px",
                                                    fontFamily: SANS,
                                                    fontSize: "15px",
                                                    color: "rgb(21, 17, 14)",
                                                    background: "rgb(255, 255, 255)",
                                                    transition: "all 0.2s"
                                                }}
                                            />
                                        </div>

                                        {/* Work Email */}
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
                                                Work email
                                            </label>
                                            <input 
                                                type="email" 
                                                placeholder="jane@company.com"
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                                                className="wt-input"
                                                style={{
                                                    width: "100%",
                                                    border: "1px solid rgb(216, 211, 204)",
                                                    borderRadius: "10px",
                                                    padding: "13px 15px",
                                                    fontFamily: SANS,
                                                    fontSize: "15px",
                                                    color: "rgb(21, 17, 14)",
                                                    background: "rgb(255, 255, 255)",
                                                    transition: "all 0.2s"
                                                }}
                                            />
                                        </div>

                                        {/* Company */}
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
                                                Company
                                            </label>
                                            <input 
                                                type="text" 
                                                placeholder="Acme Construction"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                className="wt-input"
                                                style={{
                                                    width: "100%",
                                                    border: "1px solid rgb(216, 211, 204)",
                                                    borderRadius: "10px",
                                                    padding: "13px 15px",
                                                    fontFamily: SANS,
                                                    fontSize: "15px",
                                                    color: "rgb(21, 17, 14)",
                                                    background: "rgb(255, 255, 255)",
                                                    transition: "all 0.2s"
                                                }}
                                            />
                                        </div>

                                        {/* Role */}
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
                                                Your role <span style={{ textTransform: "none", letterSpacing: "0px", fontWeight: 300, color: "rgb(168, 162, 155)" }}>(optional)</span>
                                            </label>
                                            <div style={{ position: "relative" }}>
                                                <select 
                                                    value={role}
                                                    onChange={(e) => setRole(e.target.value)}
                                                    className="wt-select"
                                                    style={{
                                                        width: "100%",
                                                        appearance: "none",
                                                        border: "1px solid rgb(216, 211, 204)",
                                                        borderRadius: "10px",
                                                        padding: "13px 15px",
                                                        fontFamily: SANS,
                                                        fontSize: "15px",
                                                        color: "rgb(21, 17, 14)",
                                                        background: "rgb(255, 255, 255)",
                                                        transition: "all 0.2s",
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    <option value="">Select one</option>
                                                    <option value="Owner / Developer">Owner / Developer</option>
                                                    <option value="General Contractor">General Contractor</option>
                                                    <option value="Construction Manager">Construction Manager</option>
                                                    <option value="Architect / Engineer">Architect / Engineer</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                {/* Down chevron arrow */}
                                                <div style={{
                                                    position: "absolute",
                                                    right: "15px",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    pointerEvents: "none",
                                                    color: "rgb(140, 134, 128)",
                                                    display: "flex",
                                                    alignItems: "center"
                                                }}>
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="6 9 12 15 18 9" />
                                                    </svg>
                                                </div>
                                            </div>
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
                                            Request access
                                        </button>
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
                                        Spot Requested!
                                    </h4>
                                    <p style={{ fontSize: "14.5px", color: "rgb(74, 70, 66)", lineHeight: 1.5, marginBottom: "24px", fontFamily: SANS }}>
                                        Thanks {name.split(" ")[0]}! We have added you to the waitlist and we&apos;ll be in touch as soon as a spot opens.
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
