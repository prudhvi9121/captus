"use client";

import { useState, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Image from "next/image";

export default function OwnerValue() {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

    const features = [
        {
            label: "Protects Capital",
            desc: "Each avoided rework event preserves margin and reduces contingency drawdown.",
        },
        {
            label: "Strengthens Accountability",
            desc: "Positions owners upstream with data-driven visibility across all project parties.",
        },
        {
            label: "Supports Sustainability",
            desc: "Reduces material waste and schedule overruns inherent in reactive project oversight.",
        },
    ];

    const slides = [
        { src: "/ownerValue/ownerValueImage.png", alt: "Captus platform — owner view" },
        { src: "/ownerValue/ownerValueImage1.png", alt: "Captus platform — owner view" },
        { src: "/ownerValue/ownerValueImage2.png", alt: "Captus platform — owner view" }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section
            className="owner-value-section"
            style={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
                backgroundImage: `
                    linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                    linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0, 0, 0, 0.012) 1px, transparent 1px),
                    linear-gradient(rgba(0, 0, 0, 0.012) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px",
            }}
        >
            <style>{`
                @media (min-width: 768px) {
                    .owner-value-section {
                        background-image:
                            linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                            linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 0, 0, 0.012) 1px, transparent 1px),
                            linear-gradient(rgba(0, 0, 0, 0.012) 1px, transparent 1px),
                            linear-gradient(90deg, #FFFFFF 50%, var(--surface-1) 50%) !important;
                        background-size: 80px 80px, 80px 80px, 20px 20px, 20px 20px, auto !important;
                    }
                    .owner-value-container {
                        max-width: 1440px !important;
                        margin: 0 auto !important;
                        flex-wrap: nowrap !important;
                    }
                    .owner-value-left {
                        flex: 0 0 50% !important;
                        min-height: 600px !important;
                    }
                    .owner-value-right {
                        flex: 0 0 50% !important;
                        background-color: transparent !important;
                        background-image: none !important;
                    }
                }
            `}</style>
            <div
                className="owner-value-container"
                style={{
                    display: "flex",
                    flexDirection: "row" as const,
                    flexWrap: "wrap" as const,
                    minHeight: "600px",
                    width: "100%",
                }}
            >
                {/* ── LEFT: Image panel with Carousel ── */}
                <div
                    className="owner-value-left"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        flex: "1 1 380px",
                        position: "relative",
                        minHeight: "480px",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            height: "100%",
                            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {slides.map((slide, idx) => (
                            <div
                                key={idx}
                                style={{
                                    flex: "0 0 100%",
                                    width: "100%",
                                    height: "100%",
                                    position: "relative",
                                }}
                            >
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: "cover", objectPosition: "center top" }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Gradient overlay */}
                    <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(105deg, rgba(10,10,10,0.18) 0%, rgba(10,10,10,0.05) 100%)",
                        zIndex: 2,
                        pointerEvents: "none",
                    }} />

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: "absolute",
                            left: "16px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255, 255, 255, 0.25)",
                            color: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            opacity: isHovered ? 1 : 0,
                            pointerEvents: isHovered ? "auto" : "none",
                            zIndex: 3,
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        style={{
                            position: "absolute",
                            right: "16px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.15)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(255, 255, 255, 0.25)",
                            color: "#FFFFFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            opacity: isHovered ? 1 : 0,
                            pointerEvents: isHovered ? "auto" : "none",
                            zIndex: 3,
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>

                    {/* Dots indicators */}
                    <div style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "8px",
                        zIndex: 3,
                        background: "rgba(10, 10, 10, 0.25)",
                        backdropFilter: "blur(8px)",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}>
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentSlide(idx);
                                }}
                                style={{
                                    width: idx === currentSlide ? "24px" : "6px",
                                    height: "6px",
                                    borderRadius: "3px",
                                    background: idx === currentSlide ? "#CC5500" : "rgba(255, 255, 255, 0.4)",
                                    border: "none",
                                    cursor: "pointer",
                                    padding: 0,
                                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                                }}
                            />
                        ))}
                    </div>

                    {/* Orange accent bar at bottom */}
                    <div style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        height: "4px",
                        background: "linear-gradient(90deg, #CC5500, #FF7B1A)",
                        zIndex: 4,
                    }} />
                </div>

                {/* ── RIGHT: Content ── */}
                <div
                    className="owner-value-right"
                    style={{
                        flex: "1 1 380px",
                        display: "flex",
                        flexDirection: "column" as const,
                        justifyContent: "center",
                        padding: "clamp(56px, 8vw, 100px) clamp(32px, 5vw, 80px)",
                        backgroundColor: "var(--surface-1)",
                        backgroundImage: `
                            linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                            linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 0, 0, 0.012) 1px, transparent 1px),
                            linear-gradient(rgba(0, 0, 0, 0.012) 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px, 80px 80px, 20px 20px, 20px 20px",
                    }}
                >
                    <div ref={ref} className="reveal" data-revealed="true">
                        <span className="section-tag">For Construction Owners</span>

                        <h2
                            className="reveal-child"
                            style={{
                                fontFamily: "'Good Times', sans-serif",
                                fontSize: "clamp(28px, 4vw, 52px)",
                                color: "#111111",
                                lineHeight: 1.05,
                                letterSpacing: "-0.5px",
                                marginBottom: "24px",
                            }}
                        >
                            DESIGNED FOR
                            <br />
                            CAPITAL{" "}
                            <span style={{ color: "#CC5500" }}>PRESERVATION</span>
                        </h2>

                        <p
                            className="reveal-child"
                            style={{
                                fontFamily: "Nexa, sans-serif",
                                color: "#6B7280",
                                fontSize: "clamp(14px, 1.4vw, 17px)",
                                lineHeight: 1.75,
                                marginBottom: "44px",
                                maxWidth: "460px",
                            }}
                        >
                            General contractors have project management tools. Owners need predictive
                            oversight. Captus is positioned upstream to focus strictly on identifying
                            financial exposure across the project lifecycle.
                        </p>

                        {/* Feature list */}
                        <div
                            className="reveal-child"
                            style={{ display: "flex", flexDirection: "column" as const, gap: "0" }}
                        >
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "20px",
                                        paddingTop: "24px",
                                        paddingBottom: "24px",
                                        borderBottom: i < features.length - 1 ? "1px solid #cc550030" : "none",
                                    }}
                                >
                                    {/* Orange check */}
                                    <div style={{
                                        width: "24px", height: "24px",
                                        borderRadius: "50%",
                                        background: "rgba(204,85,0,0.1)",
                                        border: "1px solid rgba(204,85,0,0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        marginTop: "2px",
                                    }}>
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                            <path d="M1 4L3.5 6.5L9 1" stroke="#CC5500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontFamily: "'Good Times', sans-serif",
                                            fontSize: "12px",
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase" as const,
                                            color: "#111111",
                                            marginBottom: "6px",
                                        }}>
                                            {f.label}
                                        </div>
                                        <div style={{
                                            fontFamily: "Nexa, sans-serif",
                                            fontSize: "13px",
                                            color: "#6B7280",
                                            lineHeight: 1.6,
                                        }}>
                                            {f.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
