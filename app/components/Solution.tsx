"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
    {
        number: "01",
        label: "Step One",
        title: "Automated\nIngestion",
        desc: "Captus ingests and connects project data across documents, drawings, specifications, emails, models, and external systems like Procore and Autodesk. No manual configuration required.",
        stat: "40+",
        statLabel: "Data Sources Connected",
        color: "#CC5500",
        dim: "#7A3300",
        illustration: (active: boolean) => (
            <svg viewBox="0 0 360 280" fill="none" width="100%" height="100%" style={{ maxWidth: "420px" }}>
                {/* Hub */}
                <circle cx="180" cy="140" r="36" fill="rgba(204,85,0,0.12)" stroke="#CC5500" strokeWidth="2" />
                <circle cx="180" cy="140" r="18" fill="#CC5500" opacity={active ? 1 : 0.3}
                    style={{ transition: "opacity 0.8s ease 0.3s" }} />
                <text x="180" y="145" textAnchor="middle" fill="white" fontSize="12" fontFamily="'Good Times', sans-serif">AI</text>

                {/* Orbiting nodes */}
                {[
                    { cx: 180, cy: 56, label: "RFI" },
                    { cx: 264, cy: 96, label: "BIM" },
                    { cx: 264, cy: 184, label: "ERP" },
                    { cx: 180, cy: 224, label: "EMAIL" },
                    { cx: 96, cy: 184, label: "CAD" },
                    { cx: 96, cy: 96, label: "SPEC" },
                ].map((node, i) => (
                    <g key={i}>
                        <line
                            x1="180" y1="140"
                            x2={node.cx} y2={node.cy}
                            stroke="#CC5500"
                            strokeWidth="1"
                            strokeDasharray="4 3"
                            opacity={active ? 0.5 : 0.1}
                            style={{ transition: `opacity 0.6s ease ${i * 0.1}s` }}
                        />
                        <circle
                            cx={node.cx} cy={node.cy} r="22"
                            fill="rgba(204,85,0,0.08)"
                            stroke="#CC5500"
                            strokeWidth="1.5"
                            opacity={active ? 1 : 0.2}
                            style={{ transition: `opacity 0.6s ease ${0.2 + i * 0.1}s` }}
                        />
                        <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill="#CC5500"
                            fontSize="8" fontFamily="'Good Times', sans-serif"
                            opacity={active ? 1 : 0}
                            style={{ transition: `opacity 0.6s ease ${0.4 + i * 0.12}s` }}>
                            {node.label}
                        </text>
                    </g>
                ))}

                {/* Pulse rings */}
                {active && [1, 2, 3].map(n => (
                    <circle key={n} cx="180" cy="140" r="36"
                        stroke="#CC5500" strokeWidth="1" fill="none"
                        opacity="0"
                        style={{
                            animation: `pingRing 2.4s ease-out ${n * 0.6}s infinite`,
                        }}
                    />
                ))}
            </svg>
        ),
    },
    {
        number: "02",
        label: "Step Two",
        title: "Delta\nDetection",
        desc: "We map relationships between scope, trades, schedule dependencies, and communication records to surface inconsistencies instantly — before they become claims.",
        stat: "100K+",
        statLabel: "Document Relationships Mapped",
        color: "#FF7B1A",
        dim: "#8A4000",
        illustration: (active: boolean) => (
            <svg viewBox="0 0 400 280" fill="none" width="100%" height="100%" style={{ maxWidth: "420px" }}>
                {/* Left stack — front card at x=8, shadow cards fan LEFT (x decreases) */}
                {[0, 1, 2].map(i => (
                    <rect key={i} x={8 - i * 7} y={58 + i * 7} width="155" height="165" rx="6"
                        fill="rgba(204,85,0,0.05)" stroke="#FF7B1A" strokeWidth="1.5"
                        opacity={active ? 1 - i * 0.28 : 0.1}
                        style={{ transition: `opacity 0.5s ease ${i * 0.1}s` }}
                    />
                ))}

                {/* Right stack — front card right edge at ~392, shadow cards fan RIGHT (x increases) */}
                {[0, 1, 2].map(i => (
                    <rect key={i} x={237 + i * 7} y={58 + i * 7} width="155" height="165" rx="6"
                        fill="rgba(204,85,0,0.05)" stroke="#FF7B1A" strokeWidth="1.5"
                        opacity={active ? 1 - i * 0.28 : 0.1}
                        style={{ transition: `opacity 0.5s ease ${i * 0.1}s` }}
                    />
                ))}

                {/* Conflict zone — centered at x=200, in the gap between stacks */}
                <line x1="163" y1="140" x2="237" y2="140" stroke="#FF7B1A" strokeWidth="2" strokeDasharray="4 3"
                    opacity={active ? 1 : 0} style={{ transition: "opacity 0.6s ease 0.4s" }} />
                <circle cx="200" cy="140" r="18" fill="rgba(255,123,26,0.15)"
                    stroke="#FF7B1A" strokeWidth="2"
                    opacity={active ? 1 : 0}
                    style={{ transition: "opacity 0.6s ease 0.5s" }} />
                <path d="M193 133 L207 147 M207 133 L193 147" stroke="#FF7B1A" strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity={active ? 1 : 0}
                    style={{ transition: "opacity 0.6s ease 0.6s" }} />

                {/* Text lines on left doc */}
                {[84, 106, 126, 146, 166, 186].map((y, i) => (
                    <rect key={i} x="20" y={y} width={i % 3 === 0 ? 90 : 112} height="7" rx="3"
                        fill="#FF7B1A" opacity={active ? 0.15 : 0.03}
                        style={{ transition: `opacity 0.5s ease ${i * 0.05}s` }} />
                ))}

                {/* Text lines on right doc */}
                {[84, 106, 126, 146, 166, 186].map((y, i) => (
                    <rect key={i} x="249" y={y} width={i % 2 === 0 ? 95 : 110} height="7" rx="3"
                        fill="#FF7B1A" opacity={active ? 0.15 : 0.03}
                        style={{ transition: `opacity 0.5s ease ${i * 0.05}s` }} />
                ))}

                {/* Alert badge — centred at x=200 */}
                <rect x="144" y="18" width="112" height="26" rx="13"
                    fill="rgba(255,123,26,0.15)" stroke="#FF7B1A" strokeWidth="1"
                    opacity={active ? 1 : 0}
                    style={{ transition: "opacity 0.8s ease 0.7s" }} />
                <text x="200" y="35" textAnchor="middle" fill="#FF7B1A" fontSize="9"
                    fontFamily="'Good Times', sans-serif"
                    opacity={active ? 1 : 0}
                    style={{ transition: "opacity 0.8s ease 0.8s" }}>
                    CONFLICT DETECTED
                </text>
            </svg>
        ),
    },
    {
        number: "03",
        label: "Step Three",
        title: "Risk\nHeat Map",
        desc: "The platform visualizes risk and forecasts potential financial and scheduling consequences before they impact downstream trades. Monte Carlo simulations predict exposure with 92% accuracy.",
        stat: "92%",
        statLabel: "Financial Exposure Accuracy",
        color: "#CC5500",
        dim: "#7A3300",
        illustration: (active: boolean) => (
            <svg viewBox="0 0 360 280" fill="none" width="100%" height="100%" style={{ maxWidth: "420px" }}>
                {/* Grid */}
                {[0, 1, 2, 3, 4].map(row =>
                    [0, 1, 2, 3, 4, 5].map(col => {
                        const intensity = Math.max(0, 1 - (row * 0.2 + col * 0.1));
                        const x = 40 + col * 48;
                        const y = 40 + row * 44;
                        return (
                            <rect key={`${row}-${col}`}
                                x={x} y={y} width="42" height="38" rx="4"
                                fill={`rgba(204,85,0,${active ? intensity * 0.6 : 0.03})`}
                                stroke={`rgba(204,85,0,${active ? intensity * 0.4 + 0.1 : 0.05})`}
                                strokeWidth="1"
                                style={{ transition: `fill 0.6s ease ${(row + col) * 0.06}s, stroke 0.6s ease` }}
                            />
                        );
                    })
                )}

                {/* Trend line */}
                <polyline
                    points="64,200 112,168 160,132 208,88 256,56"
                    stroke="#CC5500" strokeWidth="2.5" fill="none" strokeLinecap="round"
                    opacity={active ? 1 : 0}
                    style={{
                        transition: "opacity 0.6s ease 0.5s",
                        strokeDasharray: active ? "none" : "300",
                        strokeDashoffset: active ? "0" : "300",
                    }}
                />
                <circle cx="256" cy="56" r="6" fill="#CC5500"
                    opacity={active ? 1 : 0}
                    style={{ transition: "opacity 0.5s ease 0.8s" }} />

                {/* Legend */}
                {[
                    { label: "HIGH", color: "rgba(204,85,0,0.8)", x: 44 },
                    { label: "MED", color: "rgba(204,85,0,0.4)", x: 100 },
                    { label: "LOW", color: "rgba(204,85,0,0.1)", x: 152 },
                ].map((l, i) => (
                    <g key={i} opacity={active ? 1 : 0} style={{ transition: `opacity 0.5s ease ${0.6 + i * 0.1}s` }}>
                        <rect x={l.x} y="250" width="36" height="10" rx="2" fill={l.color} />
                        <text x={l.x + 18} y="275" textAnchor="middle" fill="#CC5500"
                            fontSize="7" fontFamily="'Good Times', sans-serif" opacity="0.7">{l.label}</text>
                    </g>
                ))}
            </svg>
        ),
    },
    // {
    //     number: "04",
    //     label: "Step Four",
    //     title: "Accelerated\nDecisions",
    //     desc: "Route the identified conflict directly to the appropriate stakeholder with full context attached. Raw documentation transformed into intelligence — resolved before it cascades.",
    //     stat: "3×",
    //     statLabel: "Faster Resolution Speed",
    //     color: "#FF7B1A",
    //     dim: "#8A4000",
    //     illustration: (active: boolean) => (
    //         <svg viewBox="0 0 360 280" fill="none" width="100%" height="100%" style={{ maxWidth: "420px" }}>
    //             {/* Source node */}
    //             <rect x="20" y="110" width="80" height="60" rx="8"
    //                 fill="rgba(255,123,26,0.08)" stroke="#FF7B1A" strokeWidth="1.5"
    //                 opacity={active ? 1 : 0.2} style={{ transition: "opacity 0.5s ease" }} />
    //             <text x="60" y="137" textAnchor="middle" fill="#FF7B1A" fontSize="8"
    //                 fontFamily="'Good Times', sans-serif"
    //                 opacity={active ? 1 : 0} style={{ transition: "opacity 0.5s ease 0.2s" }}>CONFLICT</text>
    //             <text x="60" y="152" textAnchor="middle" fill="#FF7B1A" fontSize="8"
    //                 fontFamily="'Good Times', sans-serif"
    //                 opacity={active ? 1 : 0} style={{ transition: "opacity 0.5s ease 0.3s" }}>DETECTED</text>

    //             {/* Arrow flow */}
    //             <path d="M100 140 L148 140" stroke="#FF7B1A" strokeWidth="1.5"
    //                 strokeDasharray={active ? "none" : "60"} strokeDashoffset={active ? "0" : "60"}
    //                 markerEnd="url(#arrowhead)"
    //                 opacity={active ? 0.8 : 0} style={{ transition: "opacity 0.5s ease 0.4s" }} />

    //             {/* Central AI router */}
    //             <rect x="148" y="100" width="64" height="80" rx="8"
    //                 fill="rgba(255,123,26,0.15)" stroke="#FF7B1A" strokeWidth="2"
    //                 opacity={active ? 1 : 0.2} style={{ transition: "opacity 0.5s ease 0.3s" }} />
    //             <text x="180" y="136" textAnchor="middle" fill="#FF7B1A" fontSize="10"
    //                 fontFamily="'Good Times', sans-serif"
    //                 opacity={active ? 1 : 0} style={{ transition: "opacity 0.5s ease 0.5s" }}>CAPTUS</text>
    //             <text x="180" y="152" textAnchor="middle" fill="#FF7B1A" fontSize="8"
    //                 fontFamily="'Good Times', sans-serif"
    //                 opacity={active ? 0.7 : 0} style={{ transition: "opacity 0.5s ease 0.5s" }}>ROUTER</text>

    //             {/* Destination nodes */}
    //             {[
    //                 { y: 60, label: "OWNER", delay: "0.6s" },
    //                 { y: 120, label: "PM", delay: "0.7s" },
    //                 { y: 180, label: "GC", delay: "0.8s" },
    //             ].map((dest, i) => (
    //                 <g key={i}
    //                     opacity={active ? 1 : 0}
    //                     style={{ transition: `opacity 0.5s ease ${dest.delay}` }}>
    //                     <path d={`M212 140 L250 ${dest.y + 20}`}
    //                         stroke="#FF7B1A" strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
    //                     <rect x="250" y={dest.y} width="90" height="40" rx="6"
    //                         fill="rgba(255,123,26,0.08)" stroke="#FF7B1A" strokeWidth="1" />
    //                     <text x="295" y={dest.y + 22} textAnchor="middle" fill="#FF7B1A"
    //                         fontSize="9" fontFamily="'Good Times', sans-serif">{dest.label}</text>
    //                 </g>
    //             ))}

    //             {/* Checkmarks on destinations */}
    //             {active && [60, 120, 180].map((y, i) => (
    //                 <g key={i} opacity={active ? 1 : 0}
    //                     style={{ transition: `opacity 0.5s ease ${0.9 + i * 0.1}s` }}>
    //                     <circle cx="332" cy={y + 20} r="8" fill="#CC5500" opacity="0.7" />
    //                     <path d={`M327 ${y + 20} L330 ${y + 23} L337 ${y + 16}`}
    //                         stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    //                 </g>
    //             ))}

    //             <defs>
    //                 <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
    //                     <polygon points="0 0, 8 3, 0 6" fill="#FF7B1A" opacity="0.8" />
    //                 </marker>
    //             </defs>
    //         </svg>
    //     ),
    // },
];

function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const onScroll = () => {
            const rect = el.getBoundingClientRect();
            // progress goes 0→1 over the sticky scroll distance
            const scrolled = -rect.top;
            const total = rect.height - window.innerHeight;
            setProgress(Math.min(1, Math.max(0, scrolled / total)));
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return progress;
}

export default function Solution() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const progress = useScrollProgress(wrapperRef as React.RefObject<HTMLElement | null>);

    const stepIndex = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length));
    const stepProgress = (progress * STEPS.length) % 1;

    const step = STEPS[stepIndex];
    const nextStep = STEPS[Math.min(STEPS.length - 1, stepIndex + 1)];

    // Cross-fade: exiting step fades out in first 30%, entering step fades in after 30%
    const exitOpacity = stepProgress < 0.2 ? 1 : stepProgress < 0.4 ? 1 - (stepProgress - 0.2) / 0.2 : 0;
    const enterOpacity = stepProgress < 0.6 ? 0 : stepProgress < 0.8 ? (stepProgress - 0.6) / 0.2 : 1;
    const showCurrent = exitOpacity > enterOpacity || stepIndex === STEPS.length - 1;

    const displayStep = showCurrent ? step : nextStep;
    const displayOpacity = showCurrent ? exitOpacity : enterOpacity;

    // For the last step always show fully
    const finalOpacity = stepIndex === STEPS.length - 1 ? 1 : displayOpacity;

    return (
        <>
            <style>{`
                @keyframes pingRing {
                    0%   { transform-origin: center; transform: scale(1); opacity: 0.6; }
                    100% { transform-origin: center; transform: scale(2.5); opacity: 0; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideDown {
                    from { opacity: 1; transform: translateY(0); }
                    to   { opacity: 0; transform: translateY(-40px); }
                }
                @keyframes countShimmer {
                    0%,100% { opacity: 1; }
                    50%     { opacity: 0.6; }
                }

                /* ── Solution responsive utilities ── */
                .sol-header {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    padding: 20px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 10;
                    border-bottom: 1px solid rgba(255,255,255,0.06);
                }
                .sol-header-label {
                    font-family: 'Good Times', sans-serif;
                    font-size: 9px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.3);
                }
                .sol-left-spine {
                    display: none;
                }
                .sol-right-bar {
                    display: none;
                }
                .sol-fraction {
                    display: none;
                }
                .sol-main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 80px 20px 60px 20px;
                    gap: 32px;
                    overflow-y: auto;
                }
                .sol-text {
                    width: 100%;
                    max-width: 520px;
                    order: 1;
                }
                .sol-illus {
                    width: 100%;
                    max-width: 320px;
                    order: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                .sol-illus-inner {
                    width: 100%;
                    aspect-ratio: 4/3;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* Tablet: 640px+ */
                @media (min-width: 640px) {
                    .sol-header {
                        padding: 24px 32px;
                    }
                    .sol-header-label {
                        font-size: 10px;
                        letter-spacing: 3px;
                    }
                    .sol-main {
                        padding: 90px 40px 60px 40px;
                        gap: 40px;
                    }
                    .sol-illus {
                        max-width: 400px;
                    }
                }

                /* Desktop: 1024px+ — restore two-column layout with side decorators */
                @media (min-width: 1024px) {
                    .sol-header {
                        padding: 28px 48px;
                    }
                    .sol-header-label {
                        font-size: 11px;
                    }
                    .sol-left-spine {
                        display: flex;
                        position: absolute;
                        left: 48px;
                        top: 50%;
                        transform: translateY(-50%);
                        flex-direction: column;
                        gap: 24px;
                        z-index: 10;
                    }
                    .sol-right-bar {
                        display: block;
                        position: absolute;
                        right: 48px;
                        top: 50%;
                        transform: translateY(-50%);
                        height: 160px;
                        width: 2px;
                        background: rgba(255,255,255,0.07);
                        border-radius: 2px;
                    }
                    .sol-fraction {
                        display: block;
                        position: absolute;
                        right: 32px;
                        top: 50%;
                        transform: translateY(calc(-50% + 90px));
                        font-family: 'Good Times', sans-serif;
                        font-size: 10px;
                        color: rgba(255,255,255,0.2);
                        letter-spacing: 1px;
                    }
                    .sol-main {
                        flex-direction: row;
                        padding: 80px 130px 80px 130px;
                        gap: 80px;
                        overflow-y: hidden;
                    }
                    .sol-text {
                        flex: 0 0 45%;
                        max-width: 480px;
                        order: 1;
                    }
                    .sol-illus {
                        flex: 0 0 45%;
                        max-width: none;
                        order: 2;
                    }
                }

                /* Large Desktop: 1280px+ */
                @media (min-width: 1280px) {
                    .sol-main {
                        padding: 80px 160px;
                        gap: 100px;
                    }
                }
            `}</style>

            {/* Scroll driver — tall enough for 4 steps */}
            <div
                ref={wrapperRef}
                style={{ height: `${STEPS.length * 100}vh`, position: "relative" }}
            >
                {/* Sticky viewport */}
                <div style={{
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    overflow: "hidden",
                    background: "#0A0A0A",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    {/* ── TOP HEADER BAR ── */}
                    <div className="sol-header">
                        <div className="sol-header-label">
                            HOW CAPTUS WORKS
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            {STEPS.map((_, i) => (
                                <div key={i} style={{
                                    height: "2px",
                                    width: i === stepIndex ? "32px" : "16px",
                                    borderRadius: "2px",
                                    background: i === stepIndex ? STEPS[i].color : "rgba(255,255,255,0.15)",
                                    transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                                    boxShadow: i === stepIndex ? `0 0 8px ${STEPS[i].color}` : "none",
                                }} />
                            ))}
                        </div>
                    </div>

                    {/* ── LEFT SPINE: Vertical progress (desktop only) ── */}
                    <div className="sol-left-spine">
                        {STEPS.map((s, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div style={{
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "50%",
                                    border: `1.5px solid ${i === stepIndex ? s.color : "rgba(255,255,255,0.15)"}`,
                                    background: i === stepIndex ? `${s.color}20` : "transparent",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                                    boxShadow: i === stepIndex ? `0 0 12px ${s.color}60` : "none",
                                }}>
                                    <span style={{
                                        fontFamily: "'Good Times', sans-serif",
                                        fontSize: "9px",
                                        color: i === stepIndex ? s.color : "rgba(255,255,255,0.3)",
                                        letterSpacing: "0.5px",
                                        transition: "color 0.4s ease",
                                    }}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {/* Vertical line */}
                        <div style={{
                            position: "absolute",
                            left: "13px",
                            top: "28px",
                            bottom: "28px",
                            width: "1px",
                            background: "rgba(255,255,255,0.06)",
                            zIndex: -1,
                        }}>
                            <div style={{
                                width: "100%",
                                height: `${((stepIndex / (STEPS.length - 1)) * 100)}%`,
                                background: step.color,
                                transition: "height 0.6s cubic-bezier(0.16,1,0.3,1)",
                                boxShadow: `0 0 8px ${step.color}`,
                            }} />
                        </div>
                    </div>

                    {/* ── MAIN CONTENT ── */}
                    <div className="sol-main">

                        {/* Left / Top: Text block */}
                        <div className="sol-text">
                            {/* Title */}
                            <h2
                                key={`title-${stepIndex}`}
                                style={{
                                    fontFamily: "'Good Times', sans-serif",
                                    fontSize: "clamp(26px, 5vw, 60px)",
                                    color: "#FFFFFF",
                                    lineHeight: 1.1,
                                    marginBottom: "20px",
                                    whiteSpace: "pre-line",
                                    animation: "slideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.05s both",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            >
                                {step.title.split("\n")[0]}{" "}
                                <span style={{
                                    color: step.color,
                                    textShadow: `0 0 40px ${step.color}60`,
                                }}>
                                    {step.title.split("\n")[1]}
                                </span>
                            </h2>

                            {/* Description */}
                            <p
                                key={`desc-${stepIndex}`}
                                style={{
                                    color: "rgba(255,255,255,0.55)",
                                    fontSize: "clamp(13px, 1.5vw, 17px)",
                                    lineHeight: 1.75,
                                    fontFamily: "Nexa, sans-serif",
                                    marginBottom: "28px",
                                    maxWidth: "480px",
                                    animation: "slideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both",
                                }}
                            >
                                {step.desc}
                            </p>

                            {/* Stat callout */}
                            <div
                                key={`stat-${stepIndex}`}
                                style={{
                                    display: "inline-flex",
                                    flexDirection: "column",
                                    gap: "4px",
                                    borderLeft: `3px solid ${step.color}`,
                                    paddingLeft: "20px",
                                    animation: "slideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both",
                                }}
                            >
                                <span style={{
                                    fontFamily: "'Good Times', sans-serif",
                                    fontSize: "clamp(28px, 4vw, 44px)",
                                    color: step.color,
                                    lineHeight: 1,
                                    textShadow: `0 0 30px ${step.color}40`,
                                }}>
                                    {step.stat}
                                </span>
                                <span style={{
                                    fontFamily: "Nexa, sans-serif",
                                    fontSize: "12px",
                                    color: "rgba(255,255,255,0.35)",
                                    letterSpacing: "0.5px",
                                }}>
                                    {step.statLabel}
                                </span>
                            </div>
                        </div>

                        {/* Right / Bottom: Illustration */}
                        <div
                            key={`illus-${stepIndex}`}
                            className="sol-illus"
                            style={{ animation: "slideUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
                        >
                            {/* Glow halo */}
                            <div style={{
                                position: "absolute",
                                width: "260px",
                                height: "260px",
                                borderRadius: "50%",
                                background: `radial-gradient(circle, ${step.color}15 0%, transparent 70%)`,
                                pointerEvents: "none",
                            }} />
                            <div className="sol-illus-inner">
                                {step.illustration(true)}
                            </div>
                        </div>
                    </div>

                    {/* ── BOTTOM SCROLL HINT ── */}
                    <div style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "6px",
                        opacity: progress < 0.9 ? 0.4 : 0,
                        transition: "opacity 0.5s ease",
                    }}>
                        <span style={{
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "9px",
                            letterSpacing: "3px",
                            color: "rgba(255,255,255,0.5)",
                        }}>
                            SCROLL
                        </span>
                        <div style={{
                            width: "1px",
                            height: "32px",
                            background: "rgba(255,255,255,0.2)",
                        }} />
                    </div>

                    {/* ── BACKGROUND GRAIN / TEXTURE ── */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        background: `
                            radial-gradient(ellipse 60% 60% at 70% 50%, ${step.color}08 0%, transparent 70%),
                            radial-gradient(ellipse 40% 40% at 10% 80%, ${step.color}05 0%, transparent 60%)
                        `,
                        pointerEvents: "none",
                        transition: "background 0.8s ease",
                    }} />

                    {/* Grid lines */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px",
                        pointerEvents: "none",
                    }} />

                    {/* Step progress bar — right side (desktop only) */}
                    <div className="sol-right-bar">
                        <div style={{
                            width: "100%",
                            height: `${stepProgress * 100}%`,
                            background: step.color,
                            borderRadius: "2px",
                            boxShadow: `0 0 8px ${step.color}`,
                            transition: "height 0.05s linear",
                        }} />
                    </div>

                    {/* Step fraction label (desktop only) */}
                    <div className="sol-fraction">
                        {String(stepIndex + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")}
                    </div>
                </div>
            </div>
        </>
    );
}
