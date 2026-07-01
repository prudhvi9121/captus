"use client";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MONO = '"IBM Plex Mono", monospace';
const SANS = '"IBM Plex Sans", sans-serif';

const teamMembers = [
    {
        name: "Alley (Tong) Wu",
        role: "Founding AI Engineer",
        image: "/Alley.avif",
        linkedin: "https://www.linkedin.com/in/alley-wu/",
        bio: "Alley is a Founding AI Engineer at Captus, where she designs the agentic systems that turn fragmented project data into clear, early risk signals. She works across the full stack of the platform, from retrieval and reasoning pipelines to the dashboards teams rely on every day. She is drawn to problems where messy, real-world data meets rigorous engineering, and focuses on making the agent both accurate and genuinely useful in the field. Outside of shipping product, she is a strong advocate for thoughtful, human-centered AI.",
    },
    {
        name: "Khanak Agrawal",
        role: "Founding AI Engineer",
        image: "/Khanak.avif",
        linkedin: "https://www.linkedin.com/in/khanak-agrawal/",
        bio: "Khanak is a Founding AI Engineer at Captus, focused on the data infrastructure and machine learning that power the platform's knowledge base. She builds the pipelines that ingest emails, documents, and project records and make them queryable in seconds. With a sharp eye for reliability and detail, she ensures the answers Captus surfaces are trustworthy enough for high-stakes capital decisions. She is energized by early-stage building and the chance to shape a product from the ground up.",
    },
    {
        name: "Youssef Benaouda",
        role: "AI Engineer",
        image: "/Youssef.avif",
        linkedin: "https://www.linkedin.com/in/youssef-benaouda-09327b233/",
        bio: "Youssef is an AI Engineer at Captus, working on the models and integrations that connect Captus to the tools project teams already use. He builds and refines the agent's reasoning capabilities, helping it understand the nuances of budgets, schedules, and operational risk. He thrives on fast iteration and shipping features that make a measurable difference for users. Curious and collaborative, he is always looking for the next way to make the platform smarter.",
    },
];

export default function Team() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
            <Navbar />

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 980px) {
                    .cap-lead {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                    .cap-leadphoto {
                        max-width: 380px !important;
                        margin: 0 auto !important;
                    }
                    .cap-prow, .cap-prow-r {
                        grid-template-columns: 1fr !important;
                        gap: 26px !important;
                        max-width: 460px;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .cap-prow-img {
                        order: -1 !important;
                    }
                    .cap-grid2 {
                        grid-template-columns: 1fr !important;
                        gap: 24px !important;
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

                {/* Left glow */}
                <div style={{
                    position: "absolute",
                    left: "-160px",
                    top: "80px",
                    width: "520px",
                    height: "520px",
                    pointerEvents: "none",
                    background: "radial-gradient(circle, rgba(204, 85, 0, 0.07) 0%, rgba(204, 85, 0, 0) 68%)",
                }} />

                {/* Right glow */}
                <div style={{
                    position: "absolute",
                    right: "-180px",
                    top: "880px",
                    width: "520px",
                    height: "520px",
                    pointerEvents: "none",
                    background: "radial-gradient(circle, rgba(204, 85, 0, 0.05) 0%, rgba(204, 85, 0, 0) 68%)",
                }} />

                <div style={{ position: "relative", zIndex: 1 }}>

                    {/* ─── Leadership Section ─── */}
                    <div className="cap-x" style={{ maxWidth: "1180px", margin: "0 auto", padding: "64px 56px 0" }}>
                        <div style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "rgb(204, 85, 0)",
                            fontFamily: SANS,
                        }}>
                            Leadership
                        </div>

                        <div className="cap-lead" style={{ display: "grid", gridTemplateColumns: "404px 1fr", gap: "56px", alignItems: "start", marginTop: "32px" }}>
                            <div className="cap-leadphoto" style={{ width: "100%" }}>
                                <img 
                                    src="/Anatoly.jpg" 
                                    alt="Anatoly Khen" 
                                    style={{ 
                                        display: "block", 
                                        width: "100%", 
                                        aspectRatio: "1 / 1.12", 
                                        objectFit: "cover", 
                                        objectPosition: "center 38%", 
                                        borderRadius: "16px", 
                                        border: "1px solid rgb(236, 233, 229)" 
                                    }} 
                                />
                                <h2 style={{ fontFamily: MONO, fontSize: "29px", fontWeight: 400, lineHeight: 1.1, color: "rgb(21, 17, 14)", marginTop: "30px" }}>
                                    Anatoly Khen
                                </h2>
                                <div style={{ fontSize: "14px", fontWeight: 600, color: "rgb(204, 85, 0)", marginTop: "12px", fontFamily: SANS }}>
                                    Founder &amp; CEO
                                </div>
                                <div style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}>
                                    <a 
                                        href="https://www.linkedin.com/in/anatolykhen/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{ 
                                            display: "inline-flex", 
                                            alignItems: "center", 
                                            gap: "9px", 
                                            background: "rgb(204, 85, 0)", 
                                            color: "rgb(255, 255, 255)", 
                                            fontSize: "12px", 
                                            fontWeight: 600, 
                                            letterSpacing: "0.05em", 
                                            textTransform: "uppercase", 
                                            padding: "11px 20px", 
                                            borderRadius: "8px", 
                                            textDecoration: "none",
                                            fontFamily: SANS,
                                            transition: "background 0.2s"
                                        }}
                                        className="hover:bg-[#B54A00]"
                                    >
                                        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                                            <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V21H9z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                    <a 
                                        href="https://anatoly.ai" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{ 
                                            display: "inline-flex", 
                                            alignItems: "center", 
                                            gap: "9px", 
                                            background: "rgb(204, 85, 0)", 
                                            color: "rgb(255, 255, 255)", 
                                            fontSize: "12px", 
                                            fontWeight: 600, 
                                            letterSpacing: "0.05em", 
                                            textTransform: "uppercase", 
                                            padding: "11px 20px", 
                                            borderRadius: "8px", 
                                            textDecoration: "none",
                                            fontFamily: SANS,
                                            transition: "background 0.2s"
                                        }}
                                        className="hover:bg-[#B54A00]"
                                    >
                                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                                            <circle cx="12" cy="12" r="9" />
                                            <path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18" />
                                        </svg>
                                        anatoly.ai
                                    </a>
                                </div>
                            </div>

                            <div style={{ paddingTop: "6px", maxWidth: "620px" }}>
                                <p style={{ fontSize: "17px", lineHeight: 1.66, fontWeight: 300, color: "rgb(74, 70, 66)", margin: 0, fontFamily: SANS }}>
                                    Captus is led by Anatoly Khen, Founder and CEO, with a proven background in product and go-to-market strategy across leading AI and technology organizations. He brings deep experience from past roles at innovative companies including Revelen.ai, Axon, Paylocity, and VIEVU.
                                </p>
                                <p style={{ fontSize: "17px", lineHeight: 1.66, fontWeight: 300, color: "rgb(74, 70, 66)", margin: "22px 0 0", fontFamily: SANS }}>
                                    With an Executive MBA from MIT, Anatoly blends rigorous academic frameworks with practical operational expertise to solve complex systemic issues within the construction industry. He recognizes that owner returns are fundamentally eroded by preventable risk and has focused Captus exclusively on solving this upstream visibility problem.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="cap-x" style={{ maxWidth: "1180px", margin: "72px auto 0", padding: "0 56px" }}>
                        <div style={{ height: "1px", background: "rgb(236, 233, 229)" }} />
                    </div>

                    {/* ─── Team Members Section ─── */}
                    <div className="cap-x" style={{ maxWidth: "1180px", margin: "0 auto", padding: "56px 56px 88px" }}>
                        <div style={{ textAlign: "center", fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgb(204, 85, 0)", fontFamily: SANS }}>
                            The Team
                        </div>
                        <p style={{ textAlign: "center", maxWidth: "560px", margin: "16px auto 0", fontSize: "16px", lineHeight: 1.6, fontWeight: 300, color: "rgb(107, 101, 95)", fontFamily: SANS }}>
                            The engineers building the intelligence behind Captus — turning fragmented project data into early, actionable risk signals.
                        </p>

                        {/* List grid */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "68px" }}>
                            {teamMembers.map((member, i) => {
                                const isOdd = i % 2 === 1;
                                return (
                                    <div 
                                        key={i} 
                                        className={isOdd ? "cap-prow cap-prow-r" : "cap-prow"}
                                        style={{ 
                                            display: "grid", 
                                            gridTemplateColumns: isOdd ? "1fr 440px" : "440px 1fr", 
                                            gap: "56px", 
                                            alignItems: "center", 
                                            marginTop: i === 0 ? "56px" : "0" 
                                        }}
                                    >
                                        <img 
                                            className="cap-prow-img" 
                                            src={member.image} 
                                            alt={member.name} 
                                            style={{ 
                                                order: isOdd ? 2 : 1,
                                                display: "block", 
                                                width: "100%", 
                                                aspectRatio: "5 / 6", 
                                                objectFit: "cover", 
                                                objectPosition: "center top", 
                                                borderRadius: "16px", 
                                                border: "1px solid rgb(236, 233, 229)" 
                                            }} 
                                        />
                                        <div style={{ order: isOdd ? 1 : 2 }}>
                                            <h3 style={{ fontFamily: MONO, fontSize: "25px", fontWeight: 400, lineHeight: 1.12, color: "rgb(21, 17, 14)" }}>
                                                {member.name}
                                            </h3>
                                            <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgb(204, 85, 0)", marginTop: "11px", fontFamily: SANS }}>
                                                {member.role}
                                            </div>
                                            <p style={{ fontSize: "16px", lineHeight: 1.64, fontWeight: 300, color: "rgb(74, 70, 66)", margin: "18px 0 0", fontFamily: SANS }}>
                                                {member.bio}
                                            </p>
                                            <a 
                                                href={member.linkedin} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                style={{ 
                                                    display: "inline-flex", 
                                                    alignItems: "center", 
                                                    gap: "8px", 
                                                    marginTop: "20px", 
                                                    color: "rgb(204, 85, 0)", 
                                                    fontSize: "12px", 
                                                    fontWeight: 600, 
                                                    letterSpacing: "0.05em", 
                                                    textTransform: "uppercase", 
                                                    textDecoration: "none",
                                                    fontFamily: SANS 
                                                }}
                                                className="hover:underline"
                                            >
                                                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                                                    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V21H9z" />
                                                </svg>
                                                LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ─── Careers & Investors Bottom Cards ─── */}
                    <div style={{ background: "rgb(246, 243, 238)" }}>
                        <div className="cap-x" style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 56px 100px" }}>
                            <div style={{ height: "1px", background: "rgb(236, 233, 229)", marginBottom: "64px" }} />
                            
                            <div className="cap-grid2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", alignItems: "stretch" }}>
                                
                                {/* Careers Card */}
                                <a href="/careers" style={{ display: "flex", flexDirection: "column", background: "rgb(255, 255, 255)", border: "1px solid rgb(236, 233, 229)", borderRadius: "20px", padding: "40px 40px 36px", textDecoration: "none", boxShadow: "rgba(0, 0, 0, 0.04) 0px 1px 3px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "13px" }}>
                                        <div style={{ width: "34px", height: "2px", background: "rgb(204, 85, 0)" }} />
                                        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgb(204, 85, 0)", fontFamily: SANS }}>
                                            Careers
                                        </div>
                                    </div>
                                    <h3 style={{ margin: "22px 0 0", fontFamily: MONO, fontSize: "28px", fontWeight: 400, lineHeight: 1.12, color: "rgb(21, 17, 14)" }}>
                                        Build with us
                                    </h3>
                                    <p style={{ margin: "16px 0 0", fontSize: "16px", lineHeight: 1.62, fontWeight: 300, color: "rgb(74, 70, 66)", fontFamily: SANS }}>
                                        We&apos;re a small team taking on a problem the construction industry has lived with for decades. If you want real ownership and work that ships to real projects, let&apos;s talk.
                                    </p>
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "9px", marginTop: "auto", paddingTop: "30px", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "rgb(204, 85, 0)", fontFamily: SANS }}>
                                        See open roles
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </span>
                                </a>

                                {/* Investors Card */}
                                <a href="/investors" style={{ display: "flex", flexDirection: "column", background: "rgb(255, 255, 255)", border: "1px solid rgb(236, 233, 229)", borderRadius: "20px", padding: "40px 40px 36px", textDecoration: "none", boxShadow: "rgba(0, 0, 0, 0.04) 0px 1px 3px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "13px" }}>
                                        <div style={{ width: "34px", height: "2px", background: "rgb(204, 85, 0)" }} />
                                        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgb(204, 85, 0)", fontFamily: SANS }}>
                                            Investors
                                        </div>
                                    </div>
                                    <h3 style={{ margin: "22px 0 0", fontFamily: MONO, fontSize: "28px", fontWeight: 400, lineHeight: 1.12, color: "rgb(21, 17, 14)" }}>
                                        Backed to build
                                    </h3>
                                    <p style={{ margin: "16px 0 0", fontSize: "16px", lineHeight: 1.62, fontWeight: 300, color: "rgb(74, 70, 66)", fontFamily: SANS }}>
                                        Our pre-seed round was oversubscribed by partners who bet on early visibility into capital risk. See what we&apos;re building next and hear from us first.
                                    </p>
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: "9px", marginTop: "auto", paddingTop: "30px", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", color: "rgb(204, 85, 0)", fontFamily: SANS }}>
                                        Read the announcement
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}