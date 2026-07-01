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
    },
    {
        number: "02",
        title: "Captus reads and analyzes everything",
        desc: "It works through every thread and file the way a sharp project lead would, then connects the dots across them.",
    },
    {
        number: "03",
        title: "Surface risk before it becomes a problem",
        desc: "Threats to budget and schedule land in your Risk Dashboard the moment they appear, scored and ready to act on.",
    },
];

export default function Solution() {
    const [headerRef, headerVisible] = useInView(0.15);
    const [cardsRef, cardsVisible] = useInView(0.1);
    const [softwareRef, softwareVisible] = useInView(0.05);
    const [mockupRef, mockupVisible] = useInView(0.05);

    return (
        <section id="how-it-works" className={styles.section}>
            {/* Right-side orange glow */}
            <div className={styles.glowRight} />

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
                {/* Eyebrow row */}
                <div className={styles.eyebrowRow}>
                    <div className={styles.eyebrowLine} />
                    <span className={styles.eyebrow}>How Captus works</span>
                </div>

                {/* Headline */}
                <h2 className={styles.headline}>
                    Understand and stay ahead<br />
                    of project risk, <span style={{ whiteSpace: "nowrap" }}>powered by AI</span>
                </h2>

                <p className={styles.subcopy}>
                    Captus turns the documents, emails, and records buried across your
                    projects into a live register of what could go wrong, and what to do about it.
                </p>
            </div>

            {/* ── 3-step cards — unified bordered grid ── */}
            <div ref={cardsRef} className={styles.cardsGrid}>
                {STEPS.map((step, i) => (
                    <div
                        key={step.number}
                        className={styles.card}
                        style={{
                            opacity: cardsVisible ? 1 : 0,
                            transform: cardsVisible ? "translateY(0)" : "translateY(28px)",
                            transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.11}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.11}s`,
                        }}
                    >
                        <div className={styles.stepNumber}>{step.number}</div>
                        <h3 className={styles.cardTitle}>{step.title}</h3>
                        <p className={styles.cardDesc}>{step.desc}</p>
                    </div>
                ))}
            </div>

            {/* ── Our Software ── */}
            <div
                ref={softwareRef}
                className={styles.softwareHeader}
                style={{
                    opacity: softwareVisible ? 1 : 0,
                    transform: softwareVisible ? "translateY(0)" : "translateY(24px)",
                    transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                }}
            >
                <div className={styles.softwareEyebrow}>Our software</div>
                <h3 className={styles.softwareTitle}>Understand project risk in 30 seconds</h3>
            </div>

            {/* ── Browser Mockup ── */}
            <div
                ref={mockupRef}
                className={styles.browserCard}
                style={{
                    opacity: mockupVisible ? 1 : 0,
                    transform: mockupVisible ? "translateY(0)" : "translateY(32px)",
                    transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.08s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.08s",
                }}
            >
                {/* Chrome toolbar */}
                <div className={styles.chromeBar}>
                    <div className={styles.chromeDots}>
                        <div className={styles.chromeDot} style={{ background: "rgb(224, 102, 74)" }} />
                        <div className={styles.chromeDot} style={{ background: "rgb(231, 177, 75)" }} />
                        <div className={styles.chromeDot} style={{ background: "rgb(95, 174, 107)" }} />
                    </div>
                    <div className={styles.chromeUrlBar}>
                        app.captus.ai/dashboard
                    </div>
                </div>

                {/* Dashboard screenshot */}
                <Image
                    src="/new/platform.avif"
                    alt="Captus Risk Dashboard"
                    width={1670}
                    height={912}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1240px"
                    className={styles.mockupImage}
                    quality={85}
                />
            </div>

        </section>
    );
}
