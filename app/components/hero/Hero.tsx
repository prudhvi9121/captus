"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const heroImages = [
        "/image.png",
        "/risk-heatmap.png",
        "/Admin.png"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [heroImages.length]);

    return (
        <section id="hero" ref={ref} className={styles.heroSection}>
            {/* ── Background ── */}
            <div className={styles.bgContainer}>
                <Image
                    src="/500image.png"
                    alt="Construction site"
                    fill
                    className={styles.bgImage}
                    priority
                    quality={90}
                />
                {/* Dark-left gradient */}
                <div className={styles.bgGradientLeft} />
                {/* Subtle noise grain for depth */}
                <div className={styles.bgNoise} />
                {/* Bottom page transition */}
                <div className={styles.bgTransitionBottom} />
                {/* Orange ambient */}
                <div className={styles.bgGlow} />
            </div>

            {/* ── Content Grid ── */}
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${styles.contentGrid} ${visible ? styles.visible : ""}`}>
                {/* LEFT — Text column */}
                <div className={styles.leftCol}>
                    {/* Headline */}
                    <h1 className={styles.headline}>
                        <span style={{ display: "block" }}>Identify Financial</span>
                        <span style={{ display: "block" }}>&amp; Operational Risk</span>

                        {/* Highlighted line */}
                        <span style={{ display: "block", position: "relative", paddingBottom: "10px", marginTop: "2px" }}>
                            {/* Animated underline */}
                            <span className={styles.underline} />
                            <span className={styles.highlightText}>
                                Before It Materializes.
                            </span>
                        </span>
                    </h1>

                    {/* Body text */}
                    <p className={styles.bodyText}>
                        Captus connects fragmented project data to surface financial and
                        operational conflicts before they become costly problems. Protect
                        your capital with AI-powered early warning intelligence.
                    </p>

                    {/* CTA Actions */}
                    <div className={styles.ctaContainer}>
                        <Link href="/book-demo" style={{ textDecoration: "none" }}>
                            <span className="btn-enterprise" style={{ padding: "15px 36px", fontSize: "10px", letterSpacing: "0.16em", display: "inline-block" }}>
                                Schedule a Demo
                            </span>
                        </Link>
                        <a href="#how-it-works" className="btn-enterprise-ghost" style={{ padding: "15px 36px", fontSize: "10px", letterSpacing: "0.16em", display: "inline-block" }}>
                            See How It Works
                        </a>
                    </div>
                </div>

                {/* RIGHT — Platform mockup */}
                <div className={styles.rightCol}>
                    <div className={styles.mockupWrapper}>
                        {/* Ambient glow */}
                        <div className={styles.mockupGlow} />

                        {/* Drop shadow */}
                        <div className={styles.mockupShadow} />

                        {/* Browser card */}
                        <div className={styles.browserCard}>
                            {/* Chrome header bar */}
                            <div className={styles.chromeBar}>
                                {["#FF5F57", "#FFBD2E", "#28C840"].map((c, i) => (
                                    <div key={i} className={styles.chromeDot} style={{ background: c }} />
                                ))}
                                {/* URL Pill */}
                                <div className={styles.chromeUrlPill}>
                                    <div className={styles.chromeUrlDot} />
                                    <span className={styles.chromeUrlText}>
                                        app.captus.ai / dashboard
                                    </span>
                                </div>
                            </div>

                            {/* Sliding Images Container */}
                            <div className={styles.sliderContainer}>
                                <div
                                    className={styles.sliderTrack}
                                    style={{
                                        width: `${heroImages.length * 100}%`,
                                        transform: `translateX(-${currentImageIndex * (100 / heroImages.length)}%)`
                                    }}
                                >
                                    {heroImages.map((src, idx) => (
                                        <div
                                            key={idx}
                                            className={styles.sliderSlide}
                                            style={{ width: `${100 / heroImages.length}%` }}
                                        >
                                            <Image
                                                src={src}
                                                alt={`Captus Platform View ${idx + 1}`}
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

                        {/* Live Badge */}
                        <div className={styles.liveBadge}>
                            <div className={styles.pulseDot} />
                            Live Platform
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Hint */}
            <div className={`${styles.scrollHint} ${visible ? styles.visible : ""}`}>
                <span className={styles.scrollText}>
                    Scroll
                </span>
                <div className="scroll-indicator">
                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none">
                        <rect x="4.5" y="0" width="4" height="8" rx="2" fill="rgba(255,255,255,0.35)" />
                        <path d="M0 11.5L6.5 17L13 11.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
