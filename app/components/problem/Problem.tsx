"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Problem.module.css";

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

const PANELS = [
    {
        id: "financial",
        category: "Financial Risk",
        headline: "Hidden Capital Exposure Across Every Project",
        body: "Fragmented contracts, unchecked change orders, and billing discrepancies silently erode owner returns. By the time the numbers surface, the damage is already compounding.",
        image: "/problem-images/p11.png",
        stat: "5–20%",
        statLabel: "Value lost to rework",
    },
    {
        id: "operational",
        category: "Operational Risk",
        headline: "Field Decisions Without Financial Visibility",
        body: "Superintendents make daily decisions with no view into cost implications. Operational gaps become financial liabilities before any report is ever filed.",
        image: "/problem-images/p22.png",
        stat: "100×",
        statLabel: "Cost escalation if caught late",
    },
    {
        id: "detection",
        category: "Early Detection",
        headline: "The Most Important Thing Is Seeing It First",
        body: "Traditional tools are rearview mirrors. Captus surfaces conflicts before they become crises — giving owners the intelligence edge that protects capital at every stage.",
        image: "/problem-images/p33.png",
        stat: "Real-Time",
        statLabel: "Risk intelligence",
    },
];

export default function Problem() {
    const [headerRef, headerVisible] = useInView(0.2);
    const [panelsRef, panelsVisible] = useInView(0.05);
    const [active, setActive] = useState(1);
    const [hasRevealed, setHasRevealed] = useState(false);

    useEffect(() => {
        if (panelsVisible) {
            const t = setTimeout(() => setHasRevealed(true), 1200);
            return () => clearTimeout(t);
        }
    }, [panelsVisible]);

    useEffect(() => {
        if (!panelsVisible) return;
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % PANELS.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [panelsVisible, active]);

    return (
        <section className={styles.section}>
            {/* Subtle top separator */}
            <div className={styles.topSeparator} />

            {/* Subtle background texture */}
            <div className={styles.backgroundTexture} />

            {/* ── Section header ── */}
            <div ref={headerRef} className={styles.headerContainer}>
                <div className={styles.headerFlex}>
                    {/* Left: headline block */}
                    <div className={styles.headlineBlock}>
                        <span className={styles.eyebrow}>
                            <span className={styles.eyebrowLine} />
                            The Problem
                        </span>

                        <h2
                            className={styles.headline}
                            style={{
                                opacity: headerVisible ? 1 : 0,
                                transform: headerVisible ? "translateY(0)" : "translateY(28px)",
                            }}
                        >
                            <span className={styles.headlineBlockSpan}>Solving Problems</span>
                            <span className={styles.headlineBlockSpan}>
                                <span className={styles.headlineHighlight}>Before</span> They Happen
                            </span>
                        </h2>
                    </div>

                    {/* Right: sub-copy */}
                    <p
                        className={styles.subcopy}
                        style={{
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
                        }}
                    >
                        We combine predictive intelligence and connected project data to identify
                        financial and operational risks — saving capital on every project.
                    </p>
                </div>
            </div>

            {/* ── Three-panel image strip ── */}
            <div
                ref={panelsRef}
                className={styles.problemGrid}
                style={{
                    "--grid-cols": PANELS.map((_, i) => i === active ? "1.8fr" : "1fr").join(" "),
                } as React.CSSProperties}
            >
                {PANELS.map((panel, i) => {
                    const isActive = i === active;
                    const delay = !hasRevealed && panelsVisible ? i * 0.12 : 0;

                    return (
                        <div
                            key={panel.id}
                            onClick={() => setActive(i)}
                            className={`${styles.problemPanel} ${isActive ? styles.problemPanelActive : styles.problemPanelInactive}`}
                            style={{
                                opacity: panelsVisible ? 1 : 0,
                                transform: panelsVisible ? "translateY(0)" : "translateY(40px)",
                                "--panel-delay": `${delay}s`,
                                "--panels-visible-opacity": panelsVisible ? "1" : "0",
                                "--panels-visible-pointer-events": panelsVisible ? "auto" : "none",
                                "--panels-visible-scale": panelsVisible ? "1" : "0.98",
                            } as React.CSSProperties}
                        >
                            {/* Full-bleed photo */}
                            <Image
                                src={panel.image}
                                alt={panel.category}
                                fill
                                className={`${styles.problemPanelImage} ${isActive ? styles.problemPanelImageActive : styles.problemPanelImageInactive}`}
                            />

                            {/* Gradient overlay — only at the bottom for text legibility */}
                            <div className={`${styles.gradientOverlay} ${isActive ? styles.gradientOverlayActive : styles.gradientOverlayInactive}`} />

                            {/* Category tag — always visible */}
                            <div className={styles.categoryTag}>
                                <span className={`${styles.categoryText} ${isActive ? styles.categoryTextActive : styles.categoryTextInactive}`}>
                                    {panel.category}
                                </span>
                            </div>

                            {/* Inactive state — just show category name at bottom */}
                            <div className={styles.inactiveContent}>
                                <div className={styles.inactiveHeadline}>
                                    {panel.headline}
                                </div>
                            </div>

                            {/* Active panel — full content panel */}
                            <div className={styles.activeContent}>
                                {/* Orange rule */}
                                <div className={styles.orangeRule} />

                                <h3 className={styles.activeHeadline}>
                                    {panel.headline}
                                </h3>

                                <p className={styles.activeBodyText}>
                                    {panel.body}
                                </p>

                                <div className={styles.activeFooterRow}>
                                    {/* Stat */}
                                    <div>
                                        <div className={styles.statValue}>
                                            {panel.stat}
                                        </div>
                                        <div className={styles.statLabel}>
                                            {panel.statLabel}
                                        </div>
                                    </div>

                                    {/* Learn more */}
                                    <Link
                                        href="/book-demo"
                                        className={styles.learnMoreLink}
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <span className={styles.learnMoreButton}>
                                            Learn More
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                <path d="M2 5h6M6 3l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {/* Hover indicator for inactive panels */}
                            {!isActive && (
                                <div className={styles.hoverIndicator} />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* ── Panel selector dots ── */}
            <div className={styles.dotsContainer}>
                {PANELS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`${styles.dot} ${i === active ? styles.dotActive : styles.dotInactive}`}
                    />
                ))}
            </div>
        </section>
    );
}
