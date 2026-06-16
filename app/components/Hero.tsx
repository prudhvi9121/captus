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

export default function Hero() {
    const [ref, visible] = useInView(0.01);

    return (
        <section
            id="hero"
            ref={ref}
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                background: "#080808",
            }}
        >
            {/* ── Background ── */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <Image
                    src="/500image.png"
                    alt="Construction site"
                    fill
                    style={{ objectFit: "cover", objectPosition: "60% 30%" }}
                    priority
                    quality={90}
                />
                {/* Dark-left gradient — keeps left text always legible */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(108deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.92) 35%, rgba(8,8,8,0.65) 58%, rgba(8,8,8,0.22) 100%)",
                }} />
                {/* Subtle noise grain for depth */}
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
                    backgroundSize: "128px 128px",
                    opacity: 0.5,
                    mixBlendMode: "overlay",
                    pointerEvents: "none",
                }} />
                {/* Bottom page transition */}
                <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "200px",
                    background: "linear-gradient(to top, #080808 0%, transparent 100%)",
                }} />
                {/* Orange ambient — bottom-left */}
                <div style={{
                    position: "absolute", bottom: "-100px", left: "-100px",
                    width: "700px", height: "700px",
                    background: "radial-gradient(circle, rgba(204,85,0,0.09) 0%, transparent 65%)",
                    pointerEvents: "none",
                }} />
            </div>

            {/* ══════════════════════════════════════════════
                Content — true 50/50 grid, vertically centred
            ══════════════════════════════════════════════ */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    flex: 1,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",   /* perfect 50 / 50 */
                    alignItems: "center",
                    maxWidth: "1440px",
                    width: "100%",
                    margin: "0 auto",
                    paddingLeft: "clamp(24px, 6vw, 96px)",
                    paddingRight: "clamp(24px, 6vw, 96px)",
                    paddingTop: "clamp(100px, 11vw, 140px)",
                    paddingBottom: "clamp(60px, 7vw, 100px)",
                    columnGap: "clamp(48px, 6vw, 96px)",
                }}
            >
                {/* ════════════════════════════
                    LEFT — text
                ════════════════════════════ */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>

                    {/* Headline */}
                    <h1 style={{
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "clamp(22px, 2.8vw, 46px)",
                        lineHeight: 1.1,
                        letterSpacing: "0.01em",
                        color: "#FFFFFF",
                        margin: 0,
                        marginBottom: "28px",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(24px)",
                        transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
                    }}>
                        <span style={{ display: "block" }}>Identify Financial</span>
                        <span style={{ display: "block" }}>&amp; Operational Risk</span>

                        {/* Highlighted line */}
                        <span style={{ display: "block", position: "relative", paddingBottom: "10px", marginTop: "2px" }}>
                            {/* Animated underline */}
                            <span style={{
                                position: "absolute",
                                bottom: 0, left: 0,
                                width: visible ? "60%" : "0%",
                                height: "2px",
                                background: "linear-gradient(90deg, #CC5500 0%, #FF7B1A 55%, rgba(255,123,26,0.25) 100%)",
                                borderRadius: "2px",
                                transition: "width 1.1s cubic-bezier(0.16,1,0.3,1) 0.85s",
                                pointerEvents: "none",
                            }} />
                            <span style={{
                                background: "linear-gradient(90deg, #FF7B1A 0%, #CC5500 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}>
                                Before It Materializes.
                            </span>
                        </span>
                    </h1>

                    {/* Body */}
                    <p style={{
                        fontFamily: "Nexa, sans-serif",
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "clamp(13px, 1.05vw, 16px)",
                        lineHeight: 1.85,
                        fontWeight: 300,
                        marginBottom: "44px",
                        maxWidth: "460px",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(14px)",
                        transition: "all 0.75s cubic-bezier(0.16,1,0.3,1) 0.28s",
                    }}>
                        Captus connects fragmented project data to surface financial and
                        operational conflicts before they become costly problems. Protect
                        your capital with AI-powered early warning intelligence.
                    </p>

                    {/* CTAs */}
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "16px",
                        alignItems: "center",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(14px)",
                        transition: "all 0.75s cubic-bezier(0.16,1,0.3,1) 0.42s",
                    }}>
                        <Link href="/book-demo" style={{ textDecoration: "none" }}>
                            <span className="btn-enterprise" style={{
                                padding: "15px 36px",
                                fontSize: "10px",
                                letterSpacing: "0.16em",
                                display: "inline-block",
                            }}>
                                Schedule a Demo
                            </span>
                        </Link>
                        <a
                            href="#how-it-works"
                            className="btn-enterprise-ghost"
                            style={{
                                padding: "15px 36px",
                                fontSize: "10px",
                                letterSpacing: "0.16em",
                                display: "inline-block",
                            }}
                        >
                            See How It Works
                        </a>
                    </div>
                </div>

                {/* ════════════════════════════
                    RIGHT — platform mockup
                    Full-width of its grid cell
                ════════════════════════════ */}
                <div
                    className="hidden lg:flex"
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: visible ? 1 : 0,
                        transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 0.5s",
                    }}
                >
                    <div style={{
                        position: "relative",
                        width: "100%",           /* fills 50% grid column */
                        transform: visible
                            ? "perspective(1400px) rotateY(-5deg) translateY(0)"
                            : "perspective(1400px) rotateY(-5deg) translateY(20px)",
                        transition: "transform 1.1s cubic-bezier(0.16,1,0.3,1) 0.5s",
                    }}>

                        {/* Ambient glow */}
                        <div style={{
                            position: "absolute",
                            inset: "-24px",
                            background: "radial-gradient(ellipse at 45% 50%, rgba(204,85,0,0.13) 0%, transparent 62%)",
                            borderRadius: "24px",
                            pointerEvents: "none",
                            zIndex: 0,
                        }} />

                        {/* Drop shadow */}
                        <div style={{
                            position: "absolute",
                            top: "40px", bottom: "0",
                            left: "20px", right: "20px",
                            background: "rgba(0,0,0,0.65)",
                            filter: "blur(60px)",
                            borderRadius: "16px",
                            zIndex: -1,
                        }} />

                        {/* Browser card */}
                        <div style={{
                            position: "relative",
                            zIndex: 1,
                            borderRadius: "12px",
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.09)",
                            boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
                        }}>
                            {/* Chrome bar */}
                            <div style={{
                                height: "36px",
                                background: "#111111",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                padding: "0 16px",
                                borderBottom: "1px solid rgba(255,255,255,0.07)",
                                flexShrink: 0,
                            }}>
                                {["#FF5F57", "#FFBD2E", "#28C840"].map((c, i) => (
                                    <div key={i} style={{ width: "9px", height: "9px", borderRadius: "50%", background: c }} />
                                ))}
                                {/* URL pill */}
                                <div style={{
                                    flex: 1,
                                    height: "22px",
                                    background: "rgba(255,255,255,0.06)",
                                    borderRadius: "4px",
                                    marginLeft: "14px",
                                    marginRight: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    paddingLeft: "10px",
                                    gap: "7px",
                                }}>
                                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#28C840", flexShrink: 0 }} />
                                    <span style={{
                                        fontFamily: "Nexa, sans-serif",
                                        fontSize: "9px",
                                        color: "rgba(255,255,255,0.25)",
                                        letterSpacing: "0.02em",
                                    }}>
                                        app.captus.ai / dashboard
                                    </span>
                                </div>
                            </div>

                            {/* Dashboard image — fills full card width */}
                            <Image
                                src="/image.png"
                                alt="Captus Platform Dashboard"
                                width={900}
                                height={560}
                                style={{ width: "100%", height: "auto", display: "block" }}
                                priority
                            />
                        </div>

                        {/* "Live Platform" badge */}
                        <div style={{
                            position: "absolute",
                            top: "-14px",
                            left: "20px",
                            zIndex: 2,
                            background: "#CC5500",
                            color: "#fff",
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "7.5px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            padding: "5px 12px",
                            borderRadius: "2px",
                            boxShadow: "0 4px 18px rgba(204,85,0,0.5)",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                        }}>
                            <div style={{
                                width: "5px", height: "5px", borderRadius: "50%",
                                background: "#fff",
                                animation: "dotPulse 2s ease-in-out infinite",
                            }} />
                            Live Platform
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div style={{
                position: "absolute",
                bottom: "28px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "7px",
                zIndex: 10,
                opacity: visible ? 0.45 : 0,
                transition: "opacity 1s ease 1.3s",
            }}>
                <span style={{
                    fontFamily: "'Good Times', sans-serif",
                    fontSize: "7px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                }}>
                    Scroll
                </span>
                <div className="scroll-indicator">
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
                        <rect x="4.5" y="0" width="4" height="8" rx="2" fill="rgba(255,255,255,0.35)" />
                        <path d="M0 11.5L6.5 17L13 11.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            <style>{`
                @keyframes dotPulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.8); }
                }
            `}</style>
        </section>
    );
}