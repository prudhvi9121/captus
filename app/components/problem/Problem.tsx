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

        // Synchronous check if element is already in viewport on mount
        const rect = el.getBoundingClientRect();
        const inViewport = rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom > 0;
        if (inViewport) {
            setVisible(true);
            return;
        }

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
        image: "/new/financial_risk.avif",
        stat: "5–20%",
        statLabel: "Value lost to rework",
    },
    {
        id: "operational",
        category: "Operational Risk",
        headline: "Field Decisions Without Financial Visibility",
        body: "Superintendents make daily decisions with no view into cost implications. Operational gaps become financial liabilities before any report is ever filed.",
        image: "/new/operational_risk.avif",
        stat: "100×",
        statLabel: "Cost escalation if caught late",
    },
    {
        id: "detection",
        category: "Early Detection",
        headline: "The Most Important Thing Is Seeing It First",
        body: "Traditional tools are rearview mirrors. Captus surfaces conflicts before they become crises — giving owners the intelligence edge that protects capital at every stage.",
        image: "/new/early_detection.avif",
        stat: "Real-Time",
        statLabel: "Risk intelligence",
    },
];

const PANELS_9 = [...PANELS, ...PANELS, ...PANELS];

export default function Problem() {
    const [headerRef, headerVisible] = useInView(0.2);
    const [panelsRef, panelsVisible] = useInView(0.01);
    const [vActive, setVActive] = useState(4); // Start with Operational Risk (middle copy)
    const [isTransitioning, setIsTransitioning] = useState(true);
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
            setVActive((prev) => {
                const next = prev + 1;
                const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
                if (isMobile) {
                    return next >= 6 ? 3 : next;
                }
                return next;
            });
        }, 6000);
        return () => clearInterval(interval);
    }, [panelsVisible]);

    useEffect(() => {
        if (!isTransitioning) {
            // Force a reflow so browser applies jump instantly without animation
            const reflow = document.body.offsetHeight;
            setIsTransitioning(true);
        }
    }, [isTransitioning]);

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        if (e.target === e.currentTarget && e.propertyName === "transform") {
            const realIndex = vActive % 3;
            if (vActive < 3) {
                setIsTransitioning(false);
                setVActive(realIndex + 3);
            } else if (vActive >= 6) {
                setIsTransitioning(false);
                setVActive(realIndex + 3);
            }
        }
    };

    const handlePanelClick = (index: number) => {
        setVActive(index);
    };

    return (
        <section className={`curved-section ${styles.section}`} style={{ zIndex: 10 }}>
            {/* Subtle top separator */}
            <div className={styles.topSeparator} />

            {/* Subtle background texture */}
            <div className={styles.backgroundTexture} />

            {/* ── Section header ── */}
            <div ref={headerRef} className={styles.headerContainer}>
                {/* Left: headline block */}
                <div className={styles.headlineBlock}>
                    <span className={styles.eyebrow}>
                        The Problem
                    </span>

                    <h2
                        className={styles.headline}
                        style={{
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? "translateY(0)" : "translateY(28px)",
                        }}
                    >
                        Solving Problems <br></br> <span className={styles.headlineHighlight}>Before</span> They Happen
                    </h2>
                </div>
            </div>

            {/* ── Three-panel image strip with Infinite Scroll ── */}
            <div ref={panelsRef} className={styles.trackWrapper}>
                <div className={styles.clipContainer}>
                    <div
                        className={`${styles.problemGrid} ${!isTransitioning ? styles.noTransition : ""}`}
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            "--active-index": vActive,
                            transform: `translateX(calc(-1 * (var(--card-width) / 2) - var(--active-index) * (var(--card-width) + var(--card-gap))))`,
                            transition: isTransitioning ? "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
                        } as React.CSSProperties}
                    >
                        {PANELS_9.map((panel, i) => {
                            const isActive = i === vActive;
                            const delay = !hasRevealed && panelsVisible ? (i % 3) * 0.12 : 0;

                            return (
                                <div
                                    key={`${panel.id}-${i}`}
                                    onClick={() => handlePanelClick(i)}
                                    className={`${styles.problemPanel} ${isActive ? styles.problemPanelActive : styles.problemPanelInactive}`}
                                    style={{
                                        opacity: panelsVisible ? 1 : 0,
                                        transform: panelsVisible ? "translateY(0) scale(var(--panel-scale))" : "translateY(40px) scale(0.98)",
                                        "--panel-delay": `${delay}s`,
                                        "--panels-visible-opacity": panelsVisible ? "1" : "0",
                                        "--panels-visible-pointer-events": panelsVisible ? "auto" : "none",
                                        "--panels-visible-scale": panelsVisible ? "1" : "0.98",
                                    } as React.CSSProperties}
                                >
                                    {/* Top Image Container */}
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src={panel.image}
                                            alt={panel.category}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                                            className={`${styles.problemPanelImage} ${isActive ? styles.problemPanelImageActive : styles.problemPanelImageInactive}`}
                                            style={{
                                                transition: isTransitioning ? undefined : "none",
                                            }}
                                        />

                                        {/* Category Badge on Top-Left of Image */}
                                        <div className={styles.categoryBadge}>
                                            {panel.category}
                                        </div>
                                    </div>

                                    {/* Bottom Content Area */}
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardHeadline}>
                                            {panel.headline}
                                        </h3>

                                        <p className={styles.cardBodyText}>
                                            {panel.body}
                                        </p>

                                        {/* Collapsible Stats and Footer row */}
                                        <div className={`${styles.cardFooterRow} ${isActive ? styles.footerActive : styles.footerInactive}`}>
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
                </div>
            </div>

            {/* ── Panel selector dots ── */}
            <div className={styles.dotsContainer}>
                {PANELS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePanelClick(i + 3)}
                        className={`${styles.dot} ${i === (vActive % 3) ? styles.dotActive : styles.dotInactive}`}
                    />
                ))}
            </div>
        </section>
    );
}
