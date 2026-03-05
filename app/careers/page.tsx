"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Careers() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
            <main className="px-5 sm:px-8 md:px-12" style={{ flex: 1, paddingTop: "120px", paddingBottom: "80px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: "800px" }}>
                    <div style={{ textAlign: "center", marginBottom: "64px" }}>
                        <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "var(--text-primary)", marginBottom: "16px" }}>
                            Careers
                        </h1>
                        <p style={{ color: "var(--text-secondary)", fontSize: "18px", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
                            Join us in building predictive risk intelligence for the construction industry.
                        </p>
                    </div>

                    <div className="glass" style={{ padding: "48px", borderRadius: "12px", border: "1px solid var(--border)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
                        <div style={{ width: "64px", height: "64px", background: "rgba(204, 85, 0, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#CC5500", marginBottom: "8px" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <line x1="19" y1="8" x2="19" y2="14" />
                                <line x1="22" y1="11" x2="16" y2="11" />
                            </svg>
                        </div>
                        <h2 className="font-display" style={{ fontSize: "24px", color: "var(--text-primary)" }}>We are currently hiring</h2>
                        <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.6, maxWidth: "400px" }}>
                            We are consistently looking for exceptional engineers, AI specialists, and construction industry experts.
                        </p>
                        <div style={{ padding: "24px", background: "var(--surface-1)", borderRadius: "8px", border: "1px solid var(--border)", width: "100%", marginTop: "16px" }}>
                            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "8px" }}>Apply via Email</h3>
                            <p style={{ color: "var(--text-secondary)", fontSize: "15px", marginBottom: "16px" }}>
                                Please send your resume and a brief introduction to our team.
                            </p>
                            <a href="mailto:info@captus.ai" style={{ textDecoration: 'none' }}>
                                <button className="btn-primary" style={{ padding: "12px 24px", fontSize: "14px" }}>
                                    <span>info@captus.ai</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
