"use client";

import styles from "./Solution.module.css";

const STEPS = [
    {
        number: "01",
        label: "Step One",
        title: "Automated\nIngestion",
        desc: "Captus ingests and connects project data across documents, drawings, specifications, emails, models, and external systems like Procore and Autodesk.",
        stat: "40+",
        statLabel: "Data Sources Connected",
        color: "#CC5500",
    },
    {
        number: "02",
        label: "Step Two",
        title: "Delta\nDetection",
        desc: "We map relationships between scope, trades, schedule dependencies, and communication records to surface inconsistencies instantly — before they become claims.",
        stat: "100K+",
        statLabel: "Document Relationships Mapped",
        color: "#FF7B1A",
    },
    {
        number: "03",
        label: "Step Three",
        title: "Risk\nHeat Map",
        desc: "The platform visualizes risk and forecasts potential financial and scheduling consequences before they impact downstream trades.",
        stat: "Predictive",
        statLabel: "Financial Exposure Forecast",
        color: "#CC5500",
    },
];

export default function Solution() {
    return (
        <section id="how-it-works" className={`curved-section ${styles.section}`}>
            {/* Subtle background grid */}
            <div className={styles.backgroundGrid} />

            {/* Top ambient glow */}
            <div className={styles.topGlow} />

            {/* ── Section Header ── */}
            <div className={styles.headerContainer}>
                {/* Eyebrow */}
                <div className={styles.eyebrow}>
                    <span className={styles.eyebrowLine} />
                    Platform
                </div>

                {/* Headline */}
                <h2 className={styles.headline}>
                    HOW <span className={styles.headlineHighlight}>CAPTUS</span> WORKS
                </h2>

                <p className={styles.subcopy}>
                    Three steps from fragmented data to financial protection.
                </p>
            </div>

            {/* ── Cards ── */}
            <div className={styles.cardsGrid}>
                {STEPS.map((step) => (
                    <div
                        key={step.number}
                        className={styles.card}
                        style={{
                            "--card-accent": step.color,
                            "--hover-border-color": `${step.color}40`,
                        } as React.CSSProperties}
                    >
                        {/* Top accent line */}
                        <div className={styles.cardAccentLine} />

                        {/* Step number — large, outline */}
                        <div className={styles.stepNumber}>
                            {step.number}
                        </div>

                        {/* Step label */}
                        <div className={styles.stepLabel}>
                            {step.label}
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

                        {/* Stat */}
                        <div className={styles.cardStatBlock}>
                            <div className={styles.cardStatValue}>
                                {step.stat}
                            </div>
                            <div className={styles.cardStatLabel}>
                                {step.statLabel}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom separator */}
            <div className={styles.bottomSeparator} />
        </section>
    );
}
