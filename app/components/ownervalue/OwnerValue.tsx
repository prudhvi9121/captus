"use client";

import { useState, useEffect } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import Image from "next/image";
import Link from "next/link";
import styles from "./OwnerValue.module.css";

export default function OwnerValue() {
    const revealRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

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
        <section className={styles.section}>
            {/* ── Full-bleed background construction photo from CaseStudy ── */}
            <div className={styles.bgImageContainer}>
                <Image
                    src="/500image.png"
                    alt="Construction site background"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 40%" }}
                    sizes="100vw"
                    priority
                />
                {/* Heavy dark overlay for contrast */}
                <div className={styles.bgOverlay} />
                <div className={styles.bgGlowTop} />
                <div className={styles.bgGlowBottom} />
            </div>

            <div className={styles.container}>
                {/* ── LEFT: Platform Mockup Carousel ── */}
                <div className={styles.leftCol}>
                    <div className={styles.carouselContainer}>
                        <div
                            className={styles.carouselTrack}
                            style={{
                                "--current-slide": currentSlide,
                            } as React.CSSProperties}
                        >
                            {slides.map((slide, idx) => (
                                <div key={idx} className={styles.slide}>
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

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className={`${styles.navArrow} ${styles.navArrowLeft}`}
                            aria-label="Previous slide"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className={`${styles.navArrow} ${styles.navArrowRight}`}
                            aria-label="Next slide"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>



                        {/* Orange accent bar at bottom */}
                        <div className={styles.orangeAccentBar} />
                    </div>
                </div>

                {/* ── RIGHT: Value Proposition & Case Study CTA Card ── */}
                <div className={styles.rightCol} ref={revealRef}>
                    <span className="section-tag-light">Designed for Owners</span>

                    <h2 className={styles.headline}>
                        DESIGNED FOR
                        <br />
                        CAPITAL <span style={{ color: "#CC5500" }}>PRESERVATION</span>
                    </h2>

                    <p className={styles.bodyText}>
                        General contractors have project management tools. Owners need predictive
                        oversight. Captus is positioned upstream to focus strictly on identifying
                        financial exposure across the project lifecycle.
                    </p>

                    {/* Features list */}
                    <div className={styles.featureList}>
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className={`${styles.featureItem} ${i === features.length - 1 ? styles.featureItemLast : ""}`}
                            >
                                {/* Orange check */}
                                <div className={styles.checkCircle}>
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                        <path d="M1 4L3.5 6.5L9 1" stroke="#CC5500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <div className={styles.featureTitle}>
                                        {f.label}
                                    </div>
                                    <div className={styles.featureDesc}>
                                        {f.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Integrated Case Study CTA Card */}
                    <div className={styles.caseStudyCard}>
                        <div className={styles.caseStudyHeader}>
                            <span className={styles.caseStudyTag}>Active Partnership</span>
                            <span className={styles.caseStudyStat}>$500M+ Portfolio</span>
                        </div>
                        <h3 className={styles.caseStudyTitle}>
                            Institutional-Grade Risk Management
                        </h3>
                        <p className={styles.caseStudyText}>
                            Captus is actively used by a major strategic design partner to coordinate
                            risk and exposure across sustainable life sciences and LEED-certified developments.
                        </p>
                        <div className={styles.caseStudyFooter}>
                            <Link href="/book-demo" className={styles.ctaButton}>
                                Request a Demo
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
