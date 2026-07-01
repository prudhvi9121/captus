"use client";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MONO = '"IBM Plex Mono", monospace';
const SANS = '"IBM Plex Sans", sans-serif';

export default function BookDemo() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
            <Navbar />

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 980px) {
                    .cap-x {
                        padding-left: 24px !important;
                        padding-right: 24px !important;
                    }
                    .bk-grid {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
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
                {/* Grid background */}
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
                    className="cap-x" 
                    style={{
                        position: "relative",
                        zIndex: 1,
                        maxWidth: "1320px",
                        margin: "0 auto",
                        padding: "80px 56px 100px",
                    }}
                >
                    <div className="bk-grid" style={{ display: "grid", gridTemplateColumns: "330px 1fr", gap: "56px", alignItems: "start" }}>

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
                                    Book a demo
                                </div>
                            </div>

                            {/* Main Title */}
                            <h1 style={{
                                margin: "26px 0px 0px",
                                fontFamily: MONO,
                                fontSize: "46px",
                                fontWeight: 400,
                                lineHeight: 1.1,
                                letterSpacing: "0.002em",
                                color: "rgb(21, 17, 14)",
                            }}>
                                Book a 30-minute call
                            </h1>

                            {/* Subtitle */}
                            <p style={{
                                margin: "24px 0px 0px",
                                fontSize: "19px",
                                lineHeight: 1.64,
                                fontWeight: 300,
                                color: "rgb(74, 70, 66)",
                                maxWidth: "420px",
                                fontFamily: SANS,
                            }}>
                                Pick a time that works for you and we&apos;ll walk you through how Captus surfaces cost, schedule, and labor risk on your projects.
                            </p>

                            {/* Bullet List */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "38px" }}>
                                
                                {/* Bullet 1 */}
                                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#CC5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 auto", marginTop: "2px" }}>
                                        <circle cx="12" cy="12" r="9" />
                                        <path d="M12 7v5l3 2" />
                                    </svg>
                                    <div>
                                        <div style={{ fontSize: "15.5px", fontWeight: 600, color: "rgb(21, 17, 14)", fontFamily: SANS }}>
                                            30 minutes
                                        </div>
                                        <div style={{ marginTop: "3px", fontSize: "14.5px", lineHeight: "1.55", fontWeight: 300, color: "rgb(87, 81, 75)", fontFamily: SANS }}>
                                            A focused walkthrough, no slides required.
                                        </div>
                                    </div>
                                </div>

                                {/* Bullet 2 */}
                                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#CC5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 auto", marginTop: "2px" }}>
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <div>
                                        <div style={{ fontSize: "15.5px", fontWeight: 600, color: "rgb(21, 17, 14)", fontFamily: SANS }}>
                                            Talk to the founder
                                        </div>
                                        <div style={{ marginTop: "3px", fontSize: "14.5px", lineHeight: "1.55", fontWeight: 300, color: "rgb(87, 81, 75)", fontFamily: SANS }}>
                                            You&apos;ll meet directly with the team building Captus.
                                        </div>
                                    </div>
                                </div>

                                {/* Bullet 3 */}
                                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#CC5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flex: "0 0 auto", marginTop: "2px" }}>
                                        <path d="m9 11 3 3L22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                    </svg>
                                    <div>
                                        <div style={{ fontSize: "15.5px", fontWeight: 600, color: "rgb(21, 17, 14)", fontFamily: SANS }}>
                                            Built for your projects
                                        </div>
                                        <div style={{ marginTop: "3px", fontSize: "14.5px", lineHeight: "1.55", fontWeight: 300, color: "rgb(87, 81, 75)", fontFamily: SANS }}>
                                            We&apos;ll tailor the conversation to the work you run.
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <p style={{ margin: "34px 0px 0px", fontSize: "14.5px", lineHeight: "1.6", fontWeight: 300, color: "rgb(87, 81, 75)", fontFamily: SANS }}>
                                Prefer email? Reach us at <a href="mailto:info@captus.ai" style={{ color: "rgb(204, 85, 0)", fontWeight: 500, textDecoration: "none", fontFamily: SANS }}>info@captus.ai</a>.
                            </p>
                        </div>

                        {/* ─── RIGHT COLUMN — MOTION IFRAME CARD ─── */}
                        <div style={{
                            background: "rgb(255, 255, 255)",
                            border: "1px solid rgb(236, 233, 229)",
                            borderRadius: "24px",
                            padding: "12px",
                            boxShadow: "rgba(40, 30, 20, 0.1) 0px 14px 44px, rgba(206, 84, 0, 0.13) 0px 4px 16px",
                            overflow: "hidden",
                        }}>
                            <iframe 
                                data-dc-tpl="52" 
                                src="https://app.usemotion.com/meet/anatoly/captusai" 
                                title="Motion Booking Page" 
                                width="100%" 
                                height="700" 
                                frameBorder="0" 
                                style={{ display: "block", border: "0px", borderRadius: "14px", minHeight: "700px" }}
                            />
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}