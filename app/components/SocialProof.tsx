"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ── Animated counter hook ── */
function useCounter(target: number | null, duration = 1500, active = false) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!active || target === null) {
            setValue(0);
            return;
        }
        let start: number | null = null;
        const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(step);
            else setValue(target);
        };
        const animId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animId);
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
        image: "/socialProofImages/socialProof1.png",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        image: "/socialProofImages/socialProof2.png",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        image: "/socialProofImages/socialProof3.png",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
    },
];

interface StatTabProps {
    stat: typeof STATS[0];
    index: number;
    isActive: boolean;
    visible: boolean;
    onClick: () => void;
}

function StatTab({ stat, index, isActive, visible, onClick }: StatTabProps) {
    const count = useCounter(stat.numericValue, 1500, visible && isActive);

    return (
        <div
            onClick={onClick}
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                padding: "22px 26px",
                borderRadius: "8px",
                background: isActive ? "#FFFFFF" : "rgba(209, 209, 209, 0.65)",
                border: "1px solid",
                borderColor: isActive ? "rgba(255, 123, 26, 0.22)" : "rgba(0, 0, 0, 0.05)",
                boxShadow: isActive ? "0 10px 30px rgba(204, 85, 0, 0.06), inset 0 1px 0 rgba(255,255,255,0.8)" : "none",
                cursor: "pointer",
                transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                overflow: "hidden",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transform: visible ? "translateY(0)" : "translateY(24px)",
            }}
            className="group hover:bg-[rgba(0,0,0,0.015)]"
        >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
                {/* Icon Box */}
                <div style={{
                    width: "38px", height: "38px",
                    borderRadius: "6px",
                    background: isActive ? `${stat.color}20` : "rgba(0,0,0,0.02)",
                    border: `1px solid ${isActive ? `${stat.color}35` : "rgba(0,0,0,0.06)"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: isActive ? stat.color : "rgba(0,0,0,0.35)",
                    transition: "all 0.3s ease",
                }}>
                    {stat.icon}
                </div>

                {/* Stat value */}
                <div style={{
                    fontFamily: "'Good Times', sans-serif",
                    fontSize: "clamp(26px, 3.2vw, 38px)",
                    lineHeight: 1,
                    color: isActive ? stat.color : "rgba(0,0,0,0.65)",
                    letterSpacing: "-1px",
                    transition: "color 0.3s ease",
                }}>
                    {stat.isNumeric
                        ? `${(isActive ? count : (stat.numericValue ?? 0)).toLocaleString()}${stat.suffix}`
                        : stat.displayText
                    }
                </div>
            </div>

            {/* Title */}
            <div style={{
                fontFamily: "'Good Times', sans-serif",
                fontSize: "11px",
                color: isActive ? "#111111" : "rgba(0,0,0,0.75)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "4px",
                lineHeight: 1.3,
                transition: "color 0.3s ease",
            }}>
                {stat.label}
            </div>

            {/* Sublabel */}
            <div style={{
                fontSize: "12px",
                color: isActive ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.4)",
                fontFamily: "Nexa, sans-serif",
                lineHeight: 1.4,
                transition: "color 0.3s ease",
                lineHeight: 1.4,
                transition: "color 0.3s ease",
            }}>
                {stat.sublabel}
            </div>

            {/* Progress Line */}
            {isActive && visible && (
                <div
                    key={index} // Force remount to restart animation when tab index changes
                    style={{
                        height: "2.5px",
                        background: `linear-gradient(90deg, ${stat.color}, #FF7B1A)`,
                        width: "0%",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        animation: "progressAnimation 2s linear forwards",
                    }}
                />
            )}
        </div>
    );
}

export default function SocialProof() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

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

    useEffect(() => {
        if (!visible) return;
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % STATS.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [visible, activeTab]);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <section
            ref={sectionRef}
            style={{
                backgroundColor: "#FFFFFF",
                backgroundImage: `
                    linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                    linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 0, 0, 0.012) 1px, transparent 1px),
                    linear-gradient(rgba(0, 0, 0, 0.012) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px",
                position: "relative",
                overflow: "hidden",
                paddingTop: "clamp(60px, 8vw, 110px)",
                paddingBottom: "clamp(60px, 8vw, 110px)",
            }}
        >
            <style>{`
                @keyframes progressAnimation {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
            `}</style>

            {/* Background Glow spotlight */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
                <div style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(204,85,0,0.06) 0%, transparent 80%)",
                }} />
            </div>

            {/* Content Container */}
            <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", margin: "0 auto", paddingLeft: "clamp(20px, 5vw, 80px)", paddingRight: "clamp(20px, 5vw, 80px)" }}>

                {/* Section Header */}
                <div style={{
                    textAlign: "center",
                    marginBottom: "clamp(40px, 5vw, 64px)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
                }}>
                    <span className="section-tag">Proven at Scale</span>
                    <h2 style={{
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "clamp(26px, 3.5vw, 44px)",
                        color: "#111111",
                        letterSpacing: "-0.5px",
                        lineHeight: 1.05,
                    }}>
                        MEASURABLE{" "}
                        <span style={{ color: "#FF7B1A" }}>IMPACT</span>
                    </h2>
                </div>

                {/* Interactive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Vertical tabs stack */}
                    <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
                        {STATS.map((stat, i) => (
                            <StatTab
                                key={i}
                                stat={stat}
                                index={i}
                                isActive={activeTab === i}
                                visible={visible}
                                onClick={() => handleTabClick(i)}
                            />
                        ))}
                    </div>

                    {/* Right Column: Dynamic Mockup Preview */}
                    <div
                        className="lg:col-span-7 order-1 lg:order-2"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(30px)",
                            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)",
                            position: "relative",
                        }}
                    >
                        {/* Orange glow spotlight behind the browser mockup */}
                        <div style={{
                            position: "absolute",
                            inset: "-40px",
                            background: "radial-gradient(circle, rgba(255, 123, 26, 0.08) 0%, transparent 70%)",
                            filter: "blur(24px)",
                            pointerEvents: "none",
                            zIndex: 0,
                        }} />

                        {/* High-fidelity browser frame (Light Mode) */}
                        <div style={{
                            position: "relative",
                            width: "100%",
                            borderRadius: "12px",
                            overflow: "hidden",
                            border: "1px solid rgba(0, 0, 0, 0.08)",
                            boxShadow: "0 24px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.02)",
                            zIndex: 1,
                        }}>

                            {/* Mockup screen slot */}
                            <div style={{ position: "relative", width: "100%", aspectRatio: "1.5" }}>
                                {STATS.map((stat, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            opacity: activeTab === idx ? 1 : 0,
                                            transform: activeTab === idx ? "scale(1)" : "scale(1.025)",
                                            transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
                                            zIndex: activeTab === idx ? 2 : 1,
                                        }}
                                    >
                                        <Image
                                            src={stat.image}
                                            alt={stat.label}
                                            fill
                                            style={{ objectFit: "cover" }}
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            priority={idx === 0}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
