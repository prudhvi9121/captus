"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CaseStudy() {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

    return (
        <section
            style={{
                padding: "clamp(60px, 8vw, 100px) clamp(16px, 5vw, 24px)",
                background: "#111827",
                color: "#FFFFFF",
            }}
        >
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <div
                    ref={ref}
                    className="reveal"
                    style={{ borderLeft: "4px solid #CC5500", paddingLeft: "32px" }}
                >
                    <span style={{ color: "#FF7B1A", fontSize: "14px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        Current Engagement
                    </span>
                    <h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(24px, 3vw, 36px)",
                            marginTop: "16px",
                            marginBottom: "24px",
                            lineHeight: 1.3,
                        }}
                    >
                        $500M+ Portfolio Design Partner
                    </h2>
                    <p style={{ color: "#9CA3AF", fontSize: "clamp(15px, 1.8vw, 18px)", lineHeight: 1.6 }}>
                        Captus is actively utilized by a major strategic design partner to coordinate risk and exposure across sustainable life sciences and LEED-certified developments. We are validating predictive intelligence across institutional-grade capital projects.
                    </p>
                </div>
            </div>
        </section>
    );
}
