"use client";

import { useEffect, useRef } from "react";

/* Animation Hook */
function useFadeUp(delay = 0) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const t = setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, delay);

        return () => clearTimeout(t);
    }, [delay]);

    return ref;
}

export default function Hero() {
    const titleRef = useFadeUp(100);
    const subRef = useFadeUp(250);
    const ctaRef = useFadeUp(350);
    const mockRef = useFadeUp(500);

    return (
        <section
            style={{
                position: "relative",
                // Reduced top padding from 180px to move heading up
                paddingTop: "clamp(100px, 12vh, 140px)",
                paddingBottom: "clamp(60px, 10vh, 120px)",
                background: "#FFFFFF",
                overflow: "hidden",
            }}
        >
            {/* Soft Gradient Atmosphere */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at 20% 20%, rgba(204,85,0,0.08), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,123,26,0.05), transparent 40%)",
                    pointerEvents: "none",
                }}
            />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            {/* Radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(204,85,0,0.05) 0%, transparent 65%)",
                }}
            />

            {/* Decorative triangle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <svg width="680" height="680" viewBox="0 0 680 680" fill="none" className="opacity-[0.035]">
                    <polygon points="340,50 630,590 50,590" fill="none" stroke="#CC5500" strokeWidth="2.5" />
                    <polygon points="340,110 580,560 100,560" fill="none" stroke="#CC5500" strokeWidth="1" />
                    <polygon points="340,170 530,530 150,530" fill="#CC5500" opacity="0.05" />
                </svg>
            </div>

            {/* CONTAINER */}
            <div
                className=" mx-auto px-4 sm:px-8 md:px-12 lg:px-16"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    // Responsive gap: smaller on mobile, larger on desktop
                    gap: "clamp(40px, 8vw, 80px)",
                }}
            >
                {/* TEXT AREA */}
                <div
                    style={{
                        textAlign: "center",
                        maxWidth: "900px",
                        width: "100%",
                    }}
                >
                    {/* HEADLINE */}
                    <h1
                        ref={titleRef as any}
                        style={{
                            fontSize: "clamp(28px, 6vw, 52px)", // Fluid typography
                            lineHeight: 1.1,
                            fontWeight: 400,
                            letterSpacing: "-0.03em",
                            color: "var(--text-primary, #111)",
                            opacity: 0,
                            transform: "translateY(20px)",
                            transition: "all .8s cubic-bezier(.16,1,.3,1)",
                        }}
                    >
                        Identify Financial & Operational Risk{" "}
                        <span style={{ color: "#CC5500", display: "inline-block" }}>
                            Before It Materializes
                        </span>
                    </h1>

                    {/* SUBTEXT */}
                    <p
                        ref={subRef as any}
                        className="text-sm sm:text-base md:text-lg lg:text-xl"
                        style={{
                            marginTop: "24px",
                            color: "var(--text-secondary, #444)",
                            lineHeight: 1.6,
                            maxWidth: "680px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            opacity: 0,
                            transform: "translateY(20px)",
                            transition: "all .8s cubic-bezier(.16,1,.3,1)",
                        }}
                    >
                        Captus connects fragmented project data to surface early signals of
                        financial and operational risk — helping construction owners
                        intervene before exposure impacts the project.
                    </p>

                    {/* CTA */}
                    <div
                        ref={ctaRef as any}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        style={{
                            marginTop: "40px",
                            opacity: 0,
                            transform: "translateY(20px)",
                            transition: "all .8s cubic-bezier(.16,1,.3,1)",
                        }}
                    >
                        <a
                            href="/book-demo"
                            className="w-full sm:w-auto text-center"
                            style={{
                                padding: "16px 32px",
                                background: "#1F1F1F",
                                color: "#fff",
                                borderRadius: "12px",
                                fontWeight: 600,
                                fontSize: "15px",
                                textDecoration: "none",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                            }}
                        >
                            Schedule a Demo
                        </a>

                        {/* <a
                            href="/product"
                            className="w-full sm:w-auto text-center"
                            style={{
                                padding: "16px 32px",
                                border: "1px solid rgba(0,0,0,0.15)",
                                borderRadius: "12px",
                                color: "#111",
                                fontWeight: 500,
                                fontSize: "15px",
                                textDecoration: "none",
                            }}
                        >
                            View Platform
                        </a> */}
                    </div>
                </div>

                {/* PRODUCT MOCKUP */}
                <div
                    ref={mockRef as any}
                    style={{
                        width: "100%",
                        maxWidth: "1100px",
                        position: "relative",
                        opacity: 0,
                        transform: "translateY(30px)",
                        transition: "all .9s cubic-bezier(.16,1,.3,1)",
                    }}
                >
                    {/* Glow Effect */}
                    <div
                        style={{
                            position: "absolute",
                            inset: "-5%",
                            background: "radial-gradient(circle, rgba(204,85,0,0.12), transparent 70%)",
                            filter: "blur(40px)",
                            zIndex: -1,
                        }}
                    />

                    {/* Card Container */}
                    <div
                        style={{
                            borderRadius: "clamp(12px, 2vw, 24px)",
                            overflow: "hidden",
                            border: "1px solid rgba(0,0,0,0.08)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                            background: "#fff",
                        }}
                    >
                        <img
                            src="/Admin.png"
                            alt="Captus Platform"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}