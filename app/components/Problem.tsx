"use client";

import { useEffect, useRef, useState } from "react";

/* ── Scroll-triggered visibility ── */
function useInView(threshold = 0.2) {
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

/* ── Escalation bar animation ── */
function EscalationBar({ active }: { active: boolean }) {
    const stages = [
        { label: "Design", cost: "$1", pct: 5, color: "#4ade80" },
        { label: "Procurement", cost: "$10", pct: 25, color: "#facc15" },
        { label: "Installation", cost: "$100", pct: 100, color: "#FF7B1A" },
        { label: "Litigation", cost: "$1000+", pct: 100, color: "#ef4444" },
    ];
    return (
        <div style={{ marginTop: "32px" }}>
            {stages.map((s, i) => (
                <div key={i} style={{ marginBottom: "14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", alignItems: "center" }}>
                        <span style={{
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "10px",
                            letterSpacing: "1.5px",
                            color: active ? "#FFFFFF" : "rgba(255,255,255,0.3)",
                            textTransform: "uppercase",
                            transition: `color 0.5s ease ${i * 0.1}s`,
                        }}>{s.label}</span>
                        <span style={{
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "11px",
                            color: active ? s.color : "rgba(255,255,255,0.1)",
                            transition: `color 0.5s ease ${i * 0.15 + 0.4}s`,
                            textShadow: active ? `0 0 12px ${s.color}80` : "none",
                        }}>{s.cost}</span>
                    </div>
                    <div style={{
                        height: "6px",
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: "99px",
                        overflow: "hidden",
                    }}>
                        <div style={{
                            height: "100%",
                            width: active ? `${s.pct}%` : "0%",
                            background: `linear-gradient(90deg, ${s.color}80, ${s.color})`,
                            borderRadius: "99px",
                            transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.25}s`,
                            boxShadow: `0 0 10px ${s.color}60`,
                        }} />
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ── Rework cost counter ── */
function ReworkMeter({ active }: { active: boolean }) {
    const [pct, setPct] = useState(5);
    useEffect(() => {
        if (!active) return;
        const t = setTimeout(() => {
            let v = 5;
            const iv = setInterval(() => {
                v += 0.4;
                setPct(Math.min(v, 20));
                if (v >= 20) clearInterval(iv);
            }, 30);
            return () => clearInterval(iv);
        }, 400);
        return () => clearTimeout(t);
    }, [active]);

    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const dash = (pct / 100) * circumference;

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <div style={{ position: "relative", width: "180px", height: "180px" }}>
                <svg width="180" height="180" viewBox="0 0 180 180" style={{ transform: "rotate(-90deg)" }}>
                    <circle cx="90" cy="90" r={radius} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="10" />
                    <circle cx="90" cy="90" r={radius} fill="none"
                        stroke="#FF7B1A" strokeWidth="10"
                        strokeDasharray={`${dash} ${circumference}`}
                        strokeLinecap="round"
                        style={{
                            transition: "stroke-dasharray 1.5s cubic-bezier(0.16,1,0.3,1) 0.5s",
                            filter: "drop-shadow(0 0 8px #FF7B1A)",
                        }}
                    />
                </svg>
                <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    textAlign: "center",
                }}>
                    <span style={{
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "32px",
                        color: "#FF7B1A",
                        lineHeight: 1,
                        textShadow: "0 0 20px rgba(255,123,26,0.6)",
                    }}>
                        {pct.toFixed(0)}%
                    </span>
                    <span style={{ fontFamily: "Nexa, sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>
                        lost to rework
                    </span>
                </div>
            </div>
            <div style={{
                display: "flex", gap: "6px", alignItems: "center",
                fontFamily: "Nexa, sans-serif", fontSize: "11px",
                color: "rgba(255,255,255,0.5)",
            }}>
                <span style={{ color: "#4ade80" }}>5%</span>
                <div style={{ width: "60px", height: "1px", background: "rgba(255,255,255,0.1)" }} />
                <span style={{ color: "#FF7B1A" }}>20%</span>
                <span style={{ color: "rgba(255,255,255,0.4)", marginLeft: "4px" }}>contract value</span>
            </div>
        </div>
    );
}

/* ── Blind spot visualization ── */
function BlindSpotViz({ active }: { active: boolean }) {
    const [scanPos, setScanPos] = useState(0);
    useEffect(() => {
        if (!active) return;
        let v = 0;
        const iv = setInterval(() => {
            v = (v + 0.4) % 100;
            setScanPos(v);
        }, 16);
        return () => clearInterval(iv);
    }, [active]);

    return (
        <div style={{
            position: "relative",
            height: "160px",
            background: "rgba(255,255,255,0.02)",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
            marginTop: "24px",
        }}>
            {/* Scan line */}
            <div style={{
                position: "absolute",
                left: 0, right: 0,
                top: `${scanPos}%`,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(255,123,26,0.6), transparent)",
                boxShadow: "0 0 8px rgba(255,123,26,0.3)",
                transition: "none",
            }} />

            {/* Grid of "event dots" */}
            {Array.from({ length: 24 }, (_, i) => {
                const x = (i % 6) * 16.6 + 8;
                const y = Math.floor(i / 6) * 25 + 12;
                const isInPast = Math.random() > 0.4;
                return (
                    <div key={i} style={{
                        position: "absolute",
                        left: `${x}%`,
                        top: `${y}%`,
                        width: "6px",
                        height: "6px",
                        borderRadius: "2px",
                        background: active && isInPast ? "rgba(255,123,26,0.5)" : "rgba(255,255,255,0.08)",
                        transition: `background 0.3s ease ${i * 0.04}s`,
                    }} />
                );
            })}

            {/* "NOW" label */}
            <div style={{
                position: "absolute",
                bottom: "8px", right: "10px",
                fontFamily: "'Good Times', sans-serif",
                fontSize: "8px",
                letterSpacing: "2px",
                color: "rgba(255,123,26,0.8)",
                textTransform: "uppercase",
            }}>
                Documenting the Past →
            </div>

            {/* Overlay: "No predictive signal" */}
            <div style={{
                position: "absolute",
                top: "8px", left: "10px",
                fontFamily: "'Good Times', sans-serif",
                fontSize: "8px",
                letterSpacing: "1.5px",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
            }}>
                Zero Foresight
            </div>
        </div>
    );
}

const PROBLEMS = [
    {
        id: "rework",
        headline: "5–20%",
        title: "Value Lost to Rework",
        body: "Between 5% and 20% of every contract bleeds away through preventable rework, miscommunication, and broken data handoffs, silently, relentlessly, at scale.",
        accentColor: "#FF7B1A",
        viz: (active: boolean) => <ReworkMeter active={active} />,
    },
    {
        id: "escalation",
        headline: "100×",
        title: "The Escalation Curve",
        body: "A $1 fix at design becomes a $100 fix during installation. Wait for field discovery and you've multiplied the cost by orders of magnitude. Every day of delay compounds.",
        accentColor: "#CC5500",
        viz: (active: boolean) => <EscalationBar active={active} />,
    },
    {
        id: "visibility",
        headline: <span style={{ fontSize: "clamp(36px, 4vw, 52px)" }}>0</span>,
        title: "Predictive Visibility",
        body: "Traditional tools are rearview mirrors. They log what happened, not what's about to. By the time the data is entered, the damage is already in motion.",
        accentColor: "#FF7B1A",
        viz: (active: boolean) => <BlindSpotViz active={active} />,
    },
];

function ProblemCard({ prob, index, parentVisible }: { prob: typeof PROBLEMS[0]; index: number; parentVisible: boolean }) {
    const [ref, visible] = useInView(0.15);
    const [hovered, setHovered] = useState(false);
    const active = visible && parentVisible;

    return (
        <div
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: "relative",
                background: hovered
                    ? `linear-gradient(135deg, rgba(255,123,26,0.12) 0%, rgba(10,10,10,0.5) 100%)`
                    : "rgba(255,255,255,0.02)",
                border: `1px solid ${hovered ? prob.accentColor + "40" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "24px",
                padding: "clamp(28px, 4vw, 44px)",
                overflow: "hidden",
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0px)" : "translateY(50px)",
                transition: `opacity 0.9s ease ${index * 0.18}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${index * 0.18}s, border-color 0.3s ease, background 0.3s ease`,
                boxShadow: hovered
                    ? `0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px ${prob.accentColor}20, inset 0 1px 0 rgba(255,255,255,0.05)`
                    : "0 4px 24px rgba(0,0,0,0.2)",
            }}
        >
            {/* Corner accent */}
            <div style={{
                position: "absolute",
                top: 0, right: 0,
                width: "120px", height: "120px",
                background: `radial-gradient(circle at top right, ${prob.accentColor}12 0%, transparent 70%)`,
                pointerEvents: "none",
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.4s ease",
            }} />



            {/* Big stat */}
            <div style={{
                fontFamily: "'Good Times', sans-serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                lineHeight: 1,
                color: prob.accentColor,
                marginBottom: "12px",
                textShadow: hovered ? `0 0 60px ${prob.accentColor}50` : `0 0 20px ${prob.accentColor}20`,
                transition: "text-shadow 0.4s ease",
                letterSpacing: "-2px",
            }}>
                {prob.headline}
            </div>

            {/* Title */}
            <h3 style={{
                fontFamily: "'Good Times', sans-serif",
                fontSize: "clamp(15px, 1.8vw, 18px)",
                color: "#FFFFFF",
                marginBottom: "16px",
                letterSpacing: "0.5px",
            }}>
                {prob.title}
            </h3>

            {/* Body */}
            <p style={{
                fontFamily: "Nexa, sans-serif",
                fontSize: "clamp(13px, 1.3vw, 15px)",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.75,
                marginBottom: "0",
            }}>
                {prob.body}
            </p>

            {/* Visualization */}
            {prob.viz(active)}

            {/* Bottom line */}
            <div style={{
                position: "absolute",
                bottom: 0, left: "20%", right: "20%",
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${prob.accentColor}60, transparent)`,
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.4s ease",
            }} />
        </div>
    );
}

export default function Problem() {
    const [headerRef, headerVisible] = useInView(0.3);
    const [bodyRef, bodyVisible] = useInView(0.05);

    return (
        <section style={{
            position: "relative",
            overflow: "hidden",
            background: "#0A0A0A",
            padding: "clamp(60px, 7vw, 100px) clamp(16px, 5vw, 48px)",
        }}>
            <style>{`
                @keyframes glitchFlicker {
                    0%, 95%, 100% { opacity: 1; transform: translateX(0); }
                    96%  { opacity: 0.6; transform: translateX(-2px); }
                    97%  { opacity: 0.8; transform: translateX(2px); }
                    98%  { opacity: 0.5; transform: translateX(-1px); }
                    99%  { opacity: 0.9; transform: translateX(1px); }
                }
                @keyframes noiseShift {
                    0%   { background-position: 0 0; }
                    100% { background-position: 100px 100px; }
                }
                @keyframes orbitSpin {
                    from { transform: rotate(0deg) translateX(180px) rotate(0deg); }
                    to   { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
                }
                @keyframes problemPulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(255,123,26,0); }
                    50%      { box-shadow: 0 0 0 8px rgba(255,123,26,0.08); }
                }
            `}</style>

            {/* Background noise texture */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
                opacity: 0.15,
                pointerEvents: "none",
            }} />

            {/* Radial vignette */}
            <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(204,85,0,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            {/* Large orbital decoration */}
            {/* <div style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: "500px", height: "500px",
                marginTop: "-250px", marginLeft: "-250px",
                borderRadius: "50%",
                border: "1px solid rgba(255,123,26,0.1)",
                pointerEvents: "none",
            }}>
                <div style={{
                    position: "absolute",
                    top: "50%", left: "50%",
                    width: "8px", height: "8px",
                    marginTop: "-4px", marginLeft: "-4px",
                    borderRadius: "50%",
                    background: "#FF7B1A",
                    boxShadow: "0 0 12px #FF7B1A",
                    animation: "orbitSpin 12s linear infinite",
                }} />
            </div> */}

            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* ── Header ── */}
                <div ref={headerRef} style={{ textAlign: "center", marginBottom: "clamp(32px, 5vw, 64px)" }}>
                    {/* Pill tag */}
                    <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(204,85,0,0.1)",
                        border: "1px solid rgba(204,85,0,0.25)",
                        borderRadius: "999px",
                        padding: "6px 18px",
                        marginBottom: "24px",
                        opacity: headerVisible ? 1 : 0,
                        transform: headerVisible ? "translateY(0)" : "translateY(-20px)",
                        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
                    }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#CC5500" strokeWidth="2">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                        <span style={{
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "9px",
                            letterSpacing: "2px",
                            color: "#CC5500",
                            textTransform: "uppercase",
                        }}>The Problem</span>
                    </div>

                    {/* Headline */}
                    <h2 style={{
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "clamp(28px, 4vw, 48px)",
                        color: "#FFFFFF",
                        lineHeight: 1.05,
                        letterSpacing: "-1px",
                        marginBottom: "20px",
                        opacity: headerVisible ? 1 : 0,
                        transform: headerVisible ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
                        // animation: headerVisible ? "glitchFlicker 8s ease-in-out 2s infinite" : "none",
                    }}>
                        The Cost of{" "}
                        <span style={{
                            color: "#FF7B1A",
                            textShadow: "0 0 60px rgba(255,123,26,0.4)",
                            display: "inline-block",
                        }}>
                            Reactive
                        </span>
                        {" "}Oversight
                    </h2>

                    <p style={{
                        fontFamily: "Nexa, sans-serif",
                        fontSize: "clamp(15px, 1.6vw, 19px)",
                        color: "rgba(255,255,255,0.55)",
                        maxWidth: "560px",
                        margin: "0 auto",
                        lineHeight: 1.7,
                        opacity: headerVisible ? 1 : 0,
                        transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                        transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
                    }}>
                        Construction inefficiency continues to erode owner returns at scale.
                        Wait-and-see approaches drain contingency budgets silently.
                    </p>
                </div>

                {/* ── Problem Cards ── */}
                <div
                    ref={bodyRef}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                        gap: "clamp(16px, 2.5vw, 28px)",
                    }}
                >
                    {PROBLEMS.map((prob, i) => (
                        <ProblemCard key={prob.id} prob={prob} index={i} parentVisible={bodyVisible} />
                    ))}
                </div>

                {/* ── Bottom CTA strip ── */}
                {/* <div style={{
                    textAlign: "center",
                    marginTop: "clamp(48px, 6vw, 80px)",
                    opacity: bodyVisible ? 1 : 0,
                    transform: bodyVisible ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.8s ease 0.6s",
                }}>
                    <p style={{
                        fontFamily: "Nexa, sans-serif",
                        fontSize: "clamp(15px, 1.5vw, 18px)",
                        color: "rgba(0,0,0,0.5)",
                        marginBottom: "24px",
                    }}>
                        The question isn't whether these problems exist.{" "}
                        <span style={{ color: "#FF7B1A" }}>It's how long you can afford to ignore them.</span>
                    </p>
                    <a href="/demo" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        background: "linear-gradient(135deg, #CC5500, #FF7B1A)",
                        color: "#fff",
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "12px",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        padding: "16px 36px",
                        borderRadius: "999px",
                        textDecoration: "none",
                        animation: "problemPulse 3s ease-in-out infinite",
                        boxShadow: "0 8px 32px rgba(204,85,0,0.3)",
                        transition: "transform 0.2s ease",
                    }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
                    >
                        See How Captus Solves This
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div> */}
            </div>
        </section>
    );
}
