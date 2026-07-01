"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Solution.module.css";

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

const STEPS = [
    {
        number: "01",
        title: "Connect your project data",
        desc: "Point Captus at your email, drawings, contracts, and project records. Nothing new to set up and no data entry.",
        color: "#CC5500",
    },
    {
        number: "02",
        title: "Captus reads and analyzes everything",
        desc: "It works through every thread and file the way a sharp project lead would, then connects the dots across them.",
        color: "#CC5500",
    },
    {
        number: "03",
        title: "Surface risk before it becomes a problem",
        desc: "Threats to budget and schedule land in your Risk Dashboard the moment they appear, scored and ready to act on.",
        color: "#CC5500",
    },
];

export default function Solution() {
    const [headerRef, headerVisible] = useInView(0.15);
    const [cardsRef, cardsVisible] = useInView(0.1);
    const [mockupRef, mockupVisible] = useInView(0.05);

    return (
        <section id="how-it-works" className={`curved-section ${styles.section}`}>
            {/* Subtle background grid */}
            <div className={styles.backgroundGrid} />

            {/* Top ambient glow */}
            <div className={styles.topGlow} />

            {/* ── Section Header ── */}
            <div
                ref={headerRef}
                className={styles.headerContainer}
                style={{
                    opacity: headerVisible ? 1 : 0,
                    transform: headerVisible ? "translateY(0)" : "translateY(24px)",
                    transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                }}
            >
                {/* Eyebrow */}
                <div className={styles.eyebrow}>
                    How Captus Works
                </div>

                {/* Headline */}
                <h2 className={styles.headline}>
                    Understand and stay ahead of project risk,{" "}
                    <span className={styles.headlineHighlight}>powered by AI</span>
                </h2>

                <p className={styles.subcopy}>
                    Captus turns the documents, emails, and records buried across your
                    projects into a live register of what could go wrong, and what to do about it.
                </p>
            </div>

            {/* ── Cards ── */}
            <div ref={cardsRef} className={styles.cardsGrid}>
                {STEPS.map((step, i) => (
                    <div
                        key={step.number}
                        className={styles.card}
                        style={{
                            "--card-accent": step.color,
                            "--hover-border-color": `${step.color}40`,
                            opacity: cardsVisible ? 1 : 0,
                            transform: cardsVisible ? "translateY(0)" : "translateY(28px)",
                            transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                        } as React.CSSProperties}
                    >
                        {/* Top accent line */}
                        <div className={styles.cardAccentLine} />

                        {/* Step number — large, outline */}
                        <div className={styles.stepNumber}>
                            {step.number}
                        </div>

                        {/* Title */}
                        <h3 className={styles.cardTitle}>
                            {step.title}
                        </h3>

                        {/* Divider */}
                        <div className={styles.cardDivider} />

                        {/* Description */}
                        <p className={styles.cardDesc}>
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* ── Platform Dashboard Mockup ── */}
            <div id="platform" ref={mockupRef} className={styles.mockupContainer}>
                <div className={styles.mockupInner}>
                    <div className={styles.mockupHeader}>
                        <span className={styles.mockupEyebrow}>OUR SOFTWARE</span>
                        <h3 className={styles.mockupTitle}>Understand project risk in 30 seconds</h3>
                    </div>

                    <div
                        className={styles.browserCard}
                        style={{
                            opacity: mockupVisible ? 1 : 0,
                            transform: mockupVisible ? "translateY(0)" : "translateY(32px)",
                            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
                        }}
                    >
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

                        <div className={styles.imageWrapper}>
                            <Image
                                src="/new/platform.avif"
                                alt="Captus Dashboard View"
                                width={1670}
                                height={912}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                className={styles.mockupImage}
                                quality={80}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom separator */}
            <div className={styles.bottomSeparator} />
        </section>
    );
}
