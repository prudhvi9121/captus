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

    return (
        <section id="hero" ref={ref} className={styles.heroSection}>
            {/* ── Background ── */}
            <div className={styles.bgContainer}>
                <Image
                    src="/hero.png"
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

                    {/* Trusted Proof */}
                    <div className={styles.trustedDivider} />
                    <div className={styles.trustedContainer}>
                        <span className={styles.trustedLabel}>TRUSTED ON</span>
                        <span className={styles.trustedValue}>$500M+</span>
                        <span className={styles.trustedSub}>in active development</span>
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
