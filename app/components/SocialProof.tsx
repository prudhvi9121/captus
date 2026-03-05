"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
    {
        value: "500M+",
        label: "Projects Under Management",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
    },
    {
        value: "100x",
        label: "Cost Escalation Prevented",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ),
    },
    {
        value: "Early",
        label: "Risk Detection Before Capital Loss",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
    },
];

export default function SocialProof() {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

    return (
        <section
            style={{
                background: "#F8F9FA",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                padding: "0",
            }}
        >
            <div
                ref={ref}
                className="reveal"
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "0",
                }}
            >
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="reveal-child"
                        style={{
                            flex: "1 1 200px",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            padding: "clamp(20px, 4vw, 32px) clamp(20px, 4vw, 40px)",
                            borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
                            transition: "background 0.2s ease",
                            cursor: "default",
                            animationDelay: `${i * 100}ms`,
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "rgba(204,85,0,0.03)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = "transparent";
                        }}
                    >
                        <div
                            style={{
                                width: "44px",
                                height: "44px",
                                borderRadius: "10px",
                                background: "rgba(204,85,0,0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#CC5500",
                                flexShrink: 0,
                            }}
                        >
                            {stat.icon}
                        </div>
                        <div>
                            <div
                                className="font-display"
                                style={{
                                    fontSize: "clamp(22px, 3vw, 30px)",
                                    fontWeight: 700,
                                    color: "#CC5500",
                                    lineHeight: 1,
                                    marginBottom: "4px",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div
                                style={{
                                    fontSize: "clamp(12px, 1.2vw, 13px)",
                                    color: "var(--text-secondary)",
                                    fontWeight: 500,
                                    letterSpacing: "0.02em",
                                    textTransform: "uppercase",
                                }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
