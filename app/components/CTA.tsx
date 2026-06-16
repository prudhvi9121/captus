"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function useInView(threshold = 0.15) {
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

export default function CTA() {
    const [ref, visible] = useInView(0.1);

    return (
        <section
            style={{
                position: "relative",
                overflow: "hidden",
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Full-bleed background */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <Image
                    src="/500image.png"
                    alt="Construction site"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 60%" }}
                />
                {/* Heavy dark overlay */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.75) 100%)",
                }} />
                {/* Orange glow */}
                <div style={{
                    position: "absolute",
                    top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "600px", height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(204,85,0,0.15) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
            </div>

            {/* Content */}
            <div
                ref={ref}
                style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "clamp(80px, 10vw, 140px) clamp(20px, 6vw, 96px)",
                    textAlign: "center",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
                }}
            >
                <span className="section-tag-light">Get Started</span>

                <h2
                    style={{
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "clamp(32px, 5.5vw, 72px)",
                        color: "#FFFFFF",
                        lineHeight: 1.0,
                        letterSpacing: "-1px",
                        marginBottom: "28px",
                    }}
                >
                    EVALUATE OUR
                    <br />
                    <span style={{ color: "#CC5500" }}>PLATFORM</span>
                </h2>

                <p
                    style={{
                        fontFamily: "Nexa, sans-serif",
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "clamp(14px, 1.5vw, 18px)",
                        lineHeight: 1.75,
                        maxWidth: "520px",
                        margin: "0 auto 48px",
                    }}
                >
                    Qualified owners and developers can request a private demo to evaluate how
                    predictive risk intelligence can strengthen portfolio performance.
                </p>

                <div style={{
                    display: "flex",
                    flexWrap: "wrap" as const,
                    gap: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Link href="/book-demo" style={{ textDecoration: "none" }}>
                        <span
                            className="btn-enterprise"
                            style={{ padding: "16px 40px", fontSize: "11px" }}
                        >
                            Book a Demo
                        </span>
                    </Link>
                    <a
                        href="mailto:info@captus.ai"
                        className="btn-enterprise-ghost"
                        style={{ padding: "16px 40px", fontSize: "11px" }}
                    >
                        Contact Us
                    </a>
                </div>

                {/* Bottom divider */}
                <div style={{
                    marginTop: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "16px",
                }}>
                    <div style={{ flex: 1, maxWidth: "120px", height: "1px", background: "rgba(255,255,255,0.12)" }} />
                    <span style={{
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase" as const,
                        color: "rgba(255,255,255,0.25)",
                    }}>
                        captus.ai
                    </span>
                    <div style={{ flex: 1, maxWidth: "120px", height: "1px", background: "rgba(255,255,255,0.12)" }} />
                </div>
            </div>
        </section>
    );
}
