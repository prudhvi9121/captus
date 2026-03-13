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
                paddingTop: "clamp(120px, 10vh, 220px)",
                paddingBottom: "clamp(120px, 10vh, 200px)",
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

            {/* CONTAINER — two-column on desktop, stacked on mobile */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "clamp(32px, 5vw, 64px)",
                    maxWidth: "1280px",
                    width: "100%",
                    margin: "0 auto",
                    paddingLeft: "clamp(24px, 6vw, 96px)",
                    paddingRight: "clamp(24px, 6vw, 96px)",
                }}
            >
                {/* LEFT — TEXT AREA */}
                <div
                    style={{
                        flex: "1 1 320px",
                        minWidth: "280px",
                        maxWidth: "520px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        textAlign: "left",
                    }}
                >
                    {/* HEADLINE */}
                    <h1
                        ref={titleRef as any}
                        style={{
                            fontSize: "clamp(23px, 5vw, 38px)",
                            lineHeight: 1.1,
                            fontWeight: 400,
                            letterSpacing: "-0.03em",
                            color: "var(--text-primary, #111)",
                            opacity: 0,
                            transform: "translateY(20px)",
                            transition: "all .8s cubic-bezier(.16,1,.3,1)",
                            margin: 0,
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
                        className="text-sm sm:text-sm md:text-md lg:text-lg"
                        style={{
                            marginTop: "24px",
                            color: "var(--text-secondary, #444)",
                            lineHeight: 1.6,
                            opacity: 0,
                            transform: "translateY(20px)",
                            transition: "all .8s cubic-bezier(.16,1,.3,1)",
                        }}
                    >
                        Captus connects fragmented project data to surface early signals of
                        financial and operational risk helping construction owners intervene
                        before exposure impacts the project.
                    </p>

                    {/* CTA */}
                    <div
                        ref={ctaRef as any}
                        style={{
                            marginTop: "40px",
                            opacity: 0,
                            transform: "translateY(20px)",
                            transition: "all .8s cubic-bezier(.16,1,.3,1)",
                        }}
                    >
                        <a
                            href="/book-demo"
                            className="font-display transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(204,85,0,0.6)] active:scale-95 active:shadow-[0_0_10px_rgba(204,85,0,0.4)]"
                            style={{
                                display: "inline-block",
                                padding: "clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)",
                                background: "linear-gradient(135deg, #CC5500 0%, #111111 100%)",
                                color: "#fff",
                                borderRadius: "12px",
                                fontWeight: 600,
                                fontSize: "clamp(8px, 3.5vw, 10px)",
                                textDecoration: "none",
                                boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
                                border: "1px solid rgba(204,85,0,0.5)",
                                letterSpacing: "0.05em",
                            }}
                        >
                            Schedule a Demo
                        </a>
                    </div>
                </div>

                {/* RIGHT — PRODUCT MOCKUP */}
                <div
                    ref={mockRef as any}
                    style={{
                        flex: "1 1 400px",
                        minWidth: "280px",
                        position: "relative",
                        opacity: 0,
                        transform: "translateY(10px)",
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
                            border: "1px solid rgba(204,85,0,0.5)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.1), 0 0 0 2px rgba(204,85,0,0.2), 0 0 40px rgba(204,85,0,0.3)",
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