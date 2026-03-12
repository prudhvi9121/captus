"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Careers() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                background: "var(--bg)",
            }}
        >
            <Navbar />

            <main
                className="px-6 sm:px-10 md:px-12"
                style={{
                    flex: 1,
                    paddingTop: "clamp(90px, 10vw, 120px)",
                    paddingBottom: "80px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div style={{ width: "100%", maxWidth: "900px" }}>

                    {/* HERO */}
                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "clamp(48px, 6vw, 72px)",
                        }}
                    >
                        <h1
                            className="font-display"
                            style={{
                                fontSize: "clamp(32px, 5vw, 48px)",
                                color: "var(--text-primary)",
                                marginBottom: "16px",
                            }}
                        >
                            Careers
                        </h1>

                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "clamp(16px, 1.6vw, 18px)",
                                lineHeight: 1.6,
                                maxWidth: "560px",
                                margin: "0 auto",
                            }}
                        >
                            Join our team and help us build the future of construction AI.
                        </p>
                    </div>

                    {/* MAIN CARD */}
                    <div
                        className="glass"
                        style={{
                            borderRadius: "16px",
                            border: "1px solid var(--border)",
                            padding: "clamp(20px, 5vw, 48px)",
                            position: "relative",
                            overflow: "hidden",
                            marginLeft: "20px",
                            marginRight: "20px",
                        }}
                    >

                        {/* subtle glow accent */}
                        <div
                            style={{
                                position: "absolute",
                                width: "300px",
                                height: "300px",
                                background: "radial-gradient(circle, rgba(204,85,0,0.15), transparent 70%)",
                                top: "-80px",
                                right: "-80px",
                                pointerEvents: "none",
                            }}
                        />

                        {/* icon */}
                        <div
                            style={{
                                width: "64px",
                                height: "64px",
                                background: "rgba(204,85,0,0.1)",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#CC5500",
                                margin: "0 auto 20px auto",
                            }}
                        >
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="2" y="7" width="20" height="14" rx="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                        </div>

                        {/* heading */}
                        <h2
                            className="font-display"
                            style={{
                                fontSize: "clamp(22px, 5vw, 26px)",
                                textAlign: "center",
                                color: "var(--text-primary)",
                                marginBottom: "12px",
                            }}
                        >
                            We are currently hiring
                        </h2>

                        <p
                            style={{
                                textAlign: "center",
                                color: "var(--text-secondary)",
                                fontSize: "clamp(14px, 3vw, 16px)",
                                lineHeight: 1.6,
                                maxWidth: "520px",
                                margin: "0 auto 32px auto",
                            }}
                        >
                            We are actively looking for talented individuals to join our
                            growing team.
                        </p>

                        {/* JOB CARD */}
                        <div
                            style={{
                                background: "var(--surface-1)",
                                borderRadius: "12px",
                                border: "1px solid var(--border)",
                                padding: "clamp(20px, 4vw, 28px)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                gap: "16px",
                            }}
                        >
                            <h3
                                style={{
                                    fontSize: "clamp(16px, 4vw, 18px)",
                                    fontWeight: 700,
                                    color: "var(--text-primary)",
                                }}
                            >
                                Apply via Email
                            </h3>

                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "clamp(14px, 3vw, 15px)",
                                    lineHeight: 1.6,
                                    maxWidth: "420px",
                                }}
                            >
                                Please send your resume and a brief introduction to our team.
                            </p>

                            <a href="mailto:info@captus.ai" style={{ textDecoration: "none" }}>
                                <button
                                    className="btn-primary"
                                    style={{
                                        padding: "12px 26px",
                                        fontSize: "15px",
                                    }}
                                >
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