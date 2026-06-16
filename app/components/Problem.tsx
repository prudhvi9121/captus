"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function useInView(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible] as const;
}

const PANELS = [
    {
        id: "financial",
        category: "Financial Risk",
        headline: "Hidden Capital Exposure Across Every Project",
        body: "Fragmented contracts, unchecked change orders, and billing discrepancies silently erode owner returns. By the time the numbers surface, the damage is already compounding.",
        image: "/problem-images/p11.png",
        stat: "5–20%",
        statLabel: "Value lost to rework",
    },
    {
        id: "operational",
        category: "Operational Risk",
        headline: "Field Decisions Without Financial Visibility",
        body: "Superintendents make daily decisions with no view into cost implications. Operational gaps become financial liabilities before any report is ever filed.",
        image: "/problem-images/p22.png",
        stat: "100×",
        statLabel: "Cost escalation if caught late",
    },
    {
        id: "detection",
        category: "Early Detection",
        headline: "The Most Important Thing Is Seeing It First",
        body: "Traditional tools are rearview mirrors. Captus surfaces conflicts before they become crises — giving owners the intelligence edge that protects capital at every stage.",
        image: "/problem-images/p33.png",
        stat: "Real-Time",
        statLabel: "Risk intelligence",
    },
];

export default function Problem() {
    const [headerRef, headerVisible] = useInView(0.2);
    const [panelsRef, panelsVisible] = useInView(0.05);
    const [active, setActive] = useState(1);

    return (
        <section
            style={{
                position: "relative",
                backgroundColor: "#FFFFFF",
                backgroundImage: `
                    linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                    linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 0, 0, 0.012) 1px, transparent 1px),
                    linear-gradient(rgba(0, 0, 0, 0.012) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px",
                overflow: "hidden",
                paddingBottom: "clamp(80px, 10vw, 140px)",
            }}
        >
            {/* Subtle top separator */}
            <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(204,85,0,0.25) 40%, rgba(204,85,0,0.25) 60%, transparent)",
            }} />

            {/* Subtle background texture */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(204,85,0,0.04) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* ── Section header ── */}
            <div
                ref={headerRef}
                style={{
                    maxWidth: "1440px",
                    margin: "0 auto",
                    padding: "clamp(64px, 9vw, 120px) clamp(24px, 6vw, 96px) clamp(56px, 7vw, 90px)",
                }}
            >
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: "32px",
                }}>
                    {/* Left: headline block */}
                    <div style={{ maxWidth: "680px" }}>
                        <span style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "9px",
                            letterSpacing: "0.26em",
                            textTransform: "uppercase",
                            color: "#CC5500",
                            marginBottom: "20px",
                        }}>
                            <span style={{
                                display: "inline-block",
                                width: "20px", height: "1px",
                                background: "#CC5500",
                            }} />
                            The Problem
                        </span>

                        <h2
                            style={{
                                fontFamily: "'Good Times', sans-serif",
                                fontSize: "clamp(28px, 4vw, 58px)",
                                lineHeight: 1.0,
                                letterSpacing: "0.01em",
                                color: "#111111",
                                margin: 0,
                                opacity: headerVisible ? 1 : 0,
                                transform: headerVisible ? "translateY(0)" : "translateY(28px)",
                                transition: "all 0.85s cubic-bezier(0.16,1,0.3,1) 0.1s",
                            }}
                        >
                            <span style={{ display: "block" }}>Solving Problems</span>
                            <span style={{ display: "block" }}>
                                <span style={{ color: "#CC5500" }}>Before</span> They Happen
                            </span>
                        </h2>
                    </div>

                    {/* Right: sub-copy */}
                    <p
                        style={{
                            fontFamily: "Nexa, sans-serif",
                            fontSize: "clamp(13px, 1.1vw, 16px)",
                            color: "rgba(0,0,0,0.50)",
                            lineHeight: 1.8,
                            fontWeight: 300,
                            maxWidth: "380px",
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s",
                        }}
                    >
                        We combine predictive intelligence and connected project data to identify
                        financial and operational risks — saving capital on every project.
                    </p>
                </div>
            </div>

            {/* ── Three-panel image strip ── */}
            <div
                ref={panelsRef}
                style={{
                    maxWidth: "1440px",
                    margin: "0 auto",
                    paddingLeft: "clamp(24px, 6vw, 96px)",
                    paddingRight: "clamp(24px, 6vw, 96px)",
                    display: "grid",
                    gridTemplateColumns: PANELS.map((_, i) =>
                        i === active ? "1.8fr" : "1fr"
                    ).join(" "),
                    gap: "16px",
                    transition: "grid-template-columns 0.6s cubic-bezier(0.16,1,0.3,1)",
                    minHeight: "clamp(400px, 55vw, 680px)",
                }}
            >
                {PANELS.map((panel, i) => {
                    const isActive = i === active;
                    const delay = panelsVisible ? i * 0.12 : 0;

                    return (
                        <div
                            key={panel.id}
                            onClick={() => setActive(i)}
                            style={{
                                position: "relative",
                                borderRadius: "8px",
                                overflow: "hidden",
                                cursor: "pointer",
                                opacity: panelsVisible ? 1 : 0,
                                transform: panelsVisible ? "translateY(0)" : "translateY(40px)",
                                transition: `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
                                minWidth: 0,
                                boxShadow: isActive
                                    ? "0 8px 40px rgba(0,0,0,0.12), 0 2px 12px rgba(0,0,0,0.08)"
                                    : "0 2px 16px rgba(0,0,0,0.06)",
                            }}
                        >
                            {/* Full-bleed photo */}
                            <Image
                                src={panel.image}
                                alt={panel.category}
                                fill
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "center top",
                                    transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1), filter 0.5s ease",
                                    transform: isActive ? "scale(1.02)" : "scale(1.06)",
                                    filter: isActive ? "brightness(1.0) saturate(1.1)" : "brightness(0.88) saturate(0.95)",
                                }}
                            />

                            {/* Gradient overlay — only at the bottom for text legibility */}
                            <div style={{
                                position: "absolute", inset: 0,
                                background: isActive
                                    ? "linear-gradient(to top, rgba(255,252,248,0.98) 0%, rgba(255,252,248,0.80) 28%, rgba(255,252,248,0.15) 55%, transparent 100%)"
                                    : "linear-gradient(to top, rgba(255,252,248,0.92) 0%, rgba(255,252,248,0.40) 35%, rgba(255,252,248,0.05) 60%, transparent 100%)",
                                transition: "background 0.5s ease",
                            }} />

                            {/* Category tag — always visible */}
                            <div style={{
                                position: "absolute",
                                top: "20px",
                                left: "20px",
                            }}>
                                <span style={{
                                    fontFamily: "'Good Times', sans-serif",
                                    fontSize: "8px",
                                    letterSpacing: "0.24em",
                                    textTransform: "uppercase",
                                    color: isActive ? "#CC5500" : "rgba(255,255,255,0.85)",
                                    transition: "color 0.4s ease",
                                    textShadow: isActive ? "none" : "0 1px 4px rgba(0,0,0,0.4)",
                                }}>
                                    {panel.category}
                                </span>
                            </div>

                            {/* Inactive state — just show category name at bottom */}
                            {!isActive && (
                                <div style={{
                                    position: "absolute",
                                    bottom: "24px",
                                    left: "20px",
                                    right: "20px",
                                }}>
                                    <div style={{
                                        fontFamily: "'Good Times', sans-serif",
                                        fontSize: "clamp(11px, 1.2vw, 13px)",
                                        color: "#111111",
                                        letterSpacing: "0.04em",
                                        lineHeight: 1.3,
                                        textShadow: "0 1px 8px rgba(255,255,255,0.8)",
                                    }}>
                                        {panel.headline}
                                    </div>
                                </div>
                            )}

                            {/* Active panel — full content panel */}
                            {isActive && (
                                <div style={{
                                    position: "absolute",
                                    bottom: 0, left: 0, right: 0,
                                    padding: "32px 28px",
                                    background: "linear-gradient(to top, rgba(255,250,245,0.99) 60%, transparent 100%)",
                                }}>
                                    {/* Orange rule */}
                                    <div style={{
                                        width: "32px", height: "2px",
                                        background: "#CC5500",
                                        marginBottom: "16px",
                                    }} />

                                    <h3 style={{
                                        fontFamily: "'Good Times', sans-serif",
                                        fontSize: "clamp(15px, 1.6vw, 22px)",
                                        color: "#111111",
                                        lineHeight: 1.15,
                                        letterSpacing: "0.02em",
                                        marginBottom: "14px",
                                        textTransform: "uppercase",
                                    }}>
                                        {panel.headline}
                                    </h3>

                                    <p style={{
                                        fontFamily: "Nexa, sans-serif",
                                        fontSize: "clamp(12px, 0.95vw, 14px)",
                                        color: "rgba(0,0,0,0.55)",
                                        lineHeight: 1.75,
                                        fontWeight: 300,
                                        marginBottom: "24px",
                                        maxWidth: "440px",
                                    }}>
                                        {panel.body}
                                    </p>

                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "24px",
                                        flexWrap: "wrap",
                                    }}>
                                        {/* Stat */}
                                        <div>
                                            <div style={{
                                                fontFamily: "'Good Times', sans-serif",
                                                fontSize: "clamp(18px, 2vw, 28px)",
                                                color: "#CC5500",
                                                lineHeight: 1,
                                                marginBottom: "3px",
                                            }}>
                                                {panel.stat}
                                            </div>
                                            <div style={{
                                                fontFamily: "Nexa, sans-serif",
                                                fontSize: "10px",
                                                color: "rgba(0,0,0,0.38)",
                                                letterSpacing: "0.05em",
                                                fontWeight: 300,
                                            }}>
                                                {panel.statLabel}
                                            </div>
                                        </div>

                                        {/* Learn more */}
                                        <Link
                                            href="/book-demo"
                                            style={{ textDecoration: "none", marginLeft: "auto" }}
                                            onClick={e => e.stopPropagation()}
                                        >
                                            <span style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                fontFamily: "'Good Times', sans-serif",
                                                fontSize: "9px",
                                                letterSpacing: "0.18em",
                                                textTransform: "uppercase",
                                                color: "#111111",
                                                border: "1px solid rgba(0,0,0,0.2)",
                                                padding: "10px 18px",
                                                borderRadius: "2px",
                                                transition: "all 0.25s ease",
                                            }}
                                                onMouseEnter={e => {
                                                    (e.currentTarget as HTMLElement).style.borderColor = "#CC5500";
                                                    (e.currentTarget as HTMLElement).style.color = "#CC5500";
                                                }}
                                                onMouseLeave={e => {
                                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.2)";
                                                    (e.currentTarget as HTMLElement).style.color = "#111111";
                                                }}
                                            >
                                                Learn More
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M2 5h6M6 3l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            )}

                            {/* Hover indicator for inactive panels */}
                            {!isActive && (
                                <div style={{
                                    position: "absolute",
                                    inset: 0,
                                    border: "1px solid rgba(204,85,0,0)",
                                    borderRadius: "8px",
                                    transition: "border-color 0.3s ease",
                                }}
                                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,85,0,0.35)"}
                                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,85,0,0)"}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* ── Panel selector dots ── */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                marginTop: "32px",
            }}>
                {PANELS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        style={{
                            width: i === active ? "28px" : "7px",
                            height: "7px",
                            borderRadius: "4px",
                            background: i === active ? "#CC5500" : "rgba(0,0,0,0.18)",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
