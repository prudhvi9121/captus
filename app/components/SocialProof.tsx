"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ── Animated counter hook ── */
function useCounter(target: number | null, duration = 1800, active = false) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!active || target === null) return;
        let start: number | null = null;
        const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(step);
            else setValue(target);
        };
        requestAnimationFrame(step);
    }, [active, target, duration]);
    return value;
}

const STATS = [
    {
        numericValue: 500,
        suffix: "M+",
        label: "Projects Under Management",
        sublabel: "Capital deployed across active portfolios",
        isNumeric: true,
        color: "#FF7B1A",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
    },
    {
        numericValue: 100,
        suffix: "×",
        label: "Cost Escalation Prevented",
        sublabel: "Before issues reach the field",
        isNumeric: true,
        color: "#CC5500",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ),
    },
    {
        numericValue: null,
        suffix: "",
        label: "Risk Detection Before Capital Loss",
        sublabel: "Predictive, not reactive intelligence",
        isNumeric: false,
        displayText: "Early",
        color: "#FF7B1A",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
    },
];

function StatItem({ stat, index, visible }: { stat: typeof STATS[0]; index: number; visible: boolean }) {
    const count = useCounter(stat.numericValue, 1800 + index * 200, visible);

    return (
        <div
            style={{
                flex: "1 1 200px",
                display: "flex",
                flexDirection: "column" as const,
                padding: "clamp(28px, 4vw, 48px) clamp(20px, 3vw, 36px)",
                borderLeft: index > 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s ease ${index * 0.18}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 0.18}s`,
            }}
        >
            {/* Icon */}
            <div style={{
                width: "44px", height: "44px",
                borderRadius: "8px",
                background: `${stat.color}20`,
                border: `1px solid ${stat.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: stat.color,
                marginBottom: "24px",
            }}>
                {stat.icon}
            </div>

            {/* Value */}
            <div style={{
                fontFamily: "'Good Times', sans-serif",
                fontSize: "clamp(44px, 5.5vw, 72px)",
                lineHeight: 1,
                color: stat.color,
                marginBottom: "14px",
                letterSpacing: "-2px",
            }}>
                {stat.isNumeric ? `${count.toLocaleString()}${stat.suffix}` : stat.displayText}
            </div>

            {/* Orange rule */}
            <div style={{
                width: "32px", height: "2px",
                background: stat.color,
                marginBottom: "14px",
                opacity: 0.6,
            }} />

            {/* Label */}
            <div style={{
                fontFamily: "'Good Times', sans-serif",
                fontSize: "clamp(11px, 1.1vw, 13px)",
                color: "#FFFFFF",
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                marginBottom: "8px",
                lineHeight: 1.3,
            }}>
                {stat.label}
            </div>
            <div style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                fontFamily: "Nexa, sans-serif",
                lineHeight: 1.5,
            }}>
                {stat.sublabel}
            </div>
        </div>
    );
}

export default function SocialProof() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                background: "#0A0A0A",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background image at very low opacity */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <Image
                    src="/500image.png"
                    alt=""
                    fill
                    style={{ objectFit: "cover", objectPosition: "center", opacity: 0.06 }}
                />
                <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(204,85,0,0.08) 0%, transparent 70%)",
                }} />
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto" }}>
                {/* Section header */}
                <div style={{
                    textAlign: "center",
                    padding: "clamp(56px, 7vw, 96px) clamp(20px, 5vw, 80px) clamp(32px, 4vw, 48px)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
                }}>
                    <span className="section-tag-light">Proven at Scale</span>
                    <h2 style={{
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "clamp(26px, 3.5vw, 44px)",
                        color: "#FFFFFF",
                        letterSpacing: "-0.5px",
                        lineHeight: 1.05,
                    }}>
                        MEASURABLE{" "}
                        <span style={{ color: "#FF7B1A" }}>IMPACT</span>
                    </h2>
                </div>

                {/* Stats row */}
                <div style={{
                    display: "flex",
                    flexWrap: "wrap" as const,
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                    paddingBottom: "clamp(56px, 7vw, 96px)",
                }}>
                    {STATS.map((stat, i) => (
                        <StatItem key={i} stat={stat} index={i} visible={visible} />
                    ))}
                </div>
            </div>
        </section>
    );
}
