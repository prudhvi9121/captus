"use client";

import { useEffect, useRef, useState } from "react";

/* ── Animated counter hook ── */
function useCounter(target: number | null, duration = 1800, active = false) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!active || target === null) return;
        let start: number | null = null;
        const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
            setValue(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(step);
            else setValue(target);
        };
        requestAnimationFrame(step);
    }, [active, target, duration]);
    return value;
}

/* ── Particle canvas ── */
function ParticleField({ color }: { color: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const W = canvas.offsetWidth;
        const H = canvas.offsetHeight;
        canvas.width = W;
        canvas.height = H;
        const particles = Array.from({ length: 28 }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.5 + 0.3,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            alpha: Math.random() * 0.5 + 0.1,
        }));
        let raf: number;
        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.globalAlpha = p.alpha;
                ctx.fill();
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > W) p.vx *= -1;
                if (p.y < 0 || p.y > H) p.vy *= -1;
            });
            ctx.globalAlpha = 1;
            raf = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(raf);
    }, [color]);
    return (
        <canvas
            ref={canvasRef}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        />
    );
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

function StatCard({ stat, index, visible }: { stat: typeof STATS[0]; index: number; visible: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const count = useCounter(stat.numericValue, 1800 + index * 200, visible);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        setTilt({ x: dy * -10, y: dx * 10 });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
            style={{
                flex: "1 1 280px",
                position: "relative",
                overflow: "hidden",
                background: hovered
                    ? `linear-gradient(135deg, rgba(255,123,26,0.08) 0%, rgba(204,85,0,0.04) 100%)`
                    : "rgba(255,255,255,0.02)",
                border: `1px solid ${hovered ? stat.color + "50" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "20px",
                padding: "clamp(28px, 4vw, 44px)",
                cursor: "default",
                transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${visible ? "0px" : "40px"})`,
                opacity: visible ? 1 : 0,
                transition: `transform 0.15s ease, opacity 0.8s ease ${index * 0.15}s, border-color 0.3s ease, background 0.3s ease`,
                boxShadow: hovered
                    ? `0 20px 60px rgba(204,85,0,0.15), 0 0 0 1px ${stat.color}20, inset 0 1px 0 rgba(255,255,255,0.05)`
                    : "0 4px 24px rgba(0,0,0,0.3)",
            }}
        >
            <ParticleField color={stat.color} />

            {/* Inner glow on hover */}
            <div style={{
                position: "absolute",
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${stat.color}15 0%, transparent 70%)`,
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.4s ease",
                pointerEvents: "none",
            }} />

            {/* Icon */}
            <div style={{
                width: "52px", height: "52px",
                borderRadius: "14px",
                background: `${stat.color}15`,
                border: `1px solid ${stat.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: stat.color,
                marginBottom: "24px",
                transform: hovered ? "scale(1.1) rotate(-5deg)" : "scale(1) rotate(0deg)",
                transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                boxShadow: hovered ? `0 0 20px ${stat.color}30` : "none",
            }}>
                {stat.icon}
            </div>

            {/* Value */}
            <div style={{
                fontFamily: "'Good Times', sans-serif",
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: 1,
                color: stat.color,
                marginBottom: "12px",
                textShadow: hovered ? `0 0 40px ${stat.color}60` : "none",
                transition: "text-shadow 0.3s ease",
                letterSpacing: "-1px",
            }}>
                {stat.isNumeric ? (
                    <>
                        <span style={{
                            display: "inline-block",
                            transform: visible ? "translateY(0)" : "translateY(20px)",
                            opacity: visible ? 1 : 0,
                            transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.3 + index * 0.15}s`,
                        }}>
                            {count.toLocaleString()}{stat.suffix}
                        </span>
                    </>
                ) : (
                    <span style={{
                        display: "inline-block",
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                        opacity: visible ? 1 : 0,
                        transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.3 + index * 0.15}s`,
                    }}>
                        {stat.displayText}
                    </span>
                )}
            </div>

            {/* Label */}
            <div style={{
                fontFamily: "'Good Times', sans-serif",
                fontSize: "clamp(12px, 1.2vw, 14px)",
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginBottom: "8px",
            }}>
                {stat.label}
            </div>

            {/* Sublabel */}
            <div style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                fontFamily: "Nexa, sans-serif",
                lineHeight: 1.5,
            }}>
                {stat.sublabel}
            </div>

            {/* Bottom accent line */}
            <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                opacity: hovered ? 0.8 : 0.2,
                transition: "opacity 0.3s ease",
            }} />
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
            { threshold: 0.2 }
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
                padding: "clamp(40px, 6vw, 80px) clamp(16px, 5vw, 48px)",
            }}
        >
            {/* Animated background grid */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(255,123,26,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,123,26,0.03) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
                pointerEvents: "none",
                animation: "gridDrift 20s linear infinite",
            }} />

            {/* Ambient glow blobs */}
            <div style={{
                position: "absolute", top: "-100px", left: "20%",
                width: "400px", height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(204,85,0,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
                animation: "blobFloat 8s ease-in-out infinite",
            }} />
            <div style={{
                position: "absolute", bottom: "-80px", right: "15%",
                width: "300px", height: "300px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,123,26,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
                animation: "blobFloat 10s ease-in-out 2s infinite reverse",
            }} />

            <style>{`
                @keyframes gridDrift {
                    from { background-position: 0 0; }
                    to   { background-position: 60px 60px; }
                }
                @keyframes blobFloat {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50%      { transform: translateY(-20px) scale(1.05); }
                }
                @keyframes scanLine {
                    0%   { top: 0%; opacity: 0; }
                    10%  { opacity: 0.6; }
                    90%  { opacity: 0.6; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>

            {/* Header */}
            <div style={{
                textAlign: "center",
                marginBottom: "clamp(40px, 6vw, 64px)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
            }}>
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(255,123,26,0.1)",
                    border: "1px solid rgba(255,123,26,0.2)",
                    borderRadius: "999px",
                    padding: "6px 16px",
                    marginBottom: "16px",
                }}>
                    <div style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: "#FF7B1A",
                        boxShadow: "0 0 8px #FF7B1A",
                        animation: "pulse 2s ease-in-out infinite",
                    }} />
                    <span style={{
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "2px",
                        color: "#FF7B1A",
                        textTransform: "uppercase",
                    }}>
                        Proven at Scale
                    </span>
                </div>
                <h2 style={{
                    fontFamily: "'Good Times', sans-serif",
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    color: "#FFFFFF",
                    letterSpacing: "-0.5px",
                }}>
                    Numbers That{" "}
                    <span style={{ color: "#FF7B1A", textShadow: "0 0 40px rgba(255,123,26,0.5)" }}>
                        Don't Lie
                    </span>
                </h2>
            </div>

            {/* Cards */}
            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                flexWrap: "wrap",
                gap: "clamp(16px, 2vw, 24px)",
                justifyContent: "center",
            }}>
                {STATS.map((stat, i) => (
                    <StatCard key={i} stat={stat} index={i} visible={visible} />
                ))}
            </div>
        </section>
    );
}
