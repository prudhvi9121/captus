"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./SocialProof.module.css";



const STATS = [
    {
        numericValue: 500,
        suffix: "M+",
        label: "Projects Under Management",
        sublabel: "Capital deployed across active portfolios",
        isNumeric: true,
        color: "#FF7B1A",
        image: "/socialProofImages/socialProof1.png",
        imageCaption: "Captus protects over $500M+ in active construction and development portfolios.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
    },
    {
        numericValue: 100,
        suffix: "×",
        label: "Cost Escalation Prevented",
        sublabel: "Before issues reach the field",
        isNumeric: true,
        color: "#CC5500",
        image: "/socialProofImages/socialProof2.png",
        imageCaption: "Preventing up to 100× cost escalation by resolving operational conflicts early.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        ),
    },
    {
        numericValue: null,
        suffix: "",
        label: "Risk Detection Before Capital Loss",
        sublabel: "Predictive, not reactive intelligence",
        isNumeric: false,
        displayText: "Early",
        color: "#FF7B1A",
        image: "/socialProofImages/socialProof3.png",
        imageCaption: "Early risk detection intercepts capital loss before it materializes.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        ),
    },
];

interface StatTabProps {
    stat: typeof STATS[0];
    index: number;
    isActive: boolean;
    visible: boolean;
    onClick: () => void;
}

function StatTab({ stat, index, isActive, visible, onClick }: StatTabProps) {
    return (
        <div
            onClick={onClick}
            className={`${styles.tabCard} ${isActive ? styles.tabCardActive : styles.tabCardInactive}`}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
            }}
        >
            <div className={styles.tabHeader}>
                {/* Icon Box */}
                <div
                    className={`${styles.iconBox} ${isActive ? styles.iconBoxActive : styles.iconBoxInactive}`}
                    style={{
                        "--icon-bg": `${stat.color}20`,
                        "--icon-border": `${stat.color}35`,
                        "--icon-color": stat.color,
                    } as React.CSSProperties}
                >
                    {stat.icon}
                </div>

                {/* Stat value */}
                <div
                    className={`${styles.statText} ${isActive ? styles.statTextActive : styles.statTextInactive}`}
                    style={{
                        "--stat-color": stat.color,
                    } as React.CSSProperties}
                >
                    {stat.isNumeric
                        ? `${(stat.numericValue ?? 0).toLocaleString()}${stat.suffix}`
                        : stat.displayText
                    }
                </div>
            </div>

            {/* Title */}
            <div className={`${styles.tabLabel} ${isActive ? styles.tabLabelActive : styles.tabLabelInactive}`}>
                {stat.label}
            </div>

            {/* Sublabel */}
            <div className={`${styles.tabSublabel} ${isActive ? styles.tabSublabelActive : styles.tabSublabelInactive}`}>
                {stat.sublabel}
            </div>

            {/* Progress Line */}
            {isActive && visible && (
                <div
                    key={index} // Force remount to restart animation when tab index changes
                    className={styles.progressBar}
                    style={{
                        "--stat-color": stat.color,
                    } as React.CSSProperties}
                />
            )}
        </div>
    );
}

export default function SocialProof() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % STATS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [visible, activeTab]);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <section ref={sectionRef} className={`curved-section ${styles.section}`} style={{ zIndex: 12 }}>
            {/* Background Glow spotlight */}
            <div className={styles.bgGlowSpotlight}>
                <div className={styles.bgGlowSpotlightInner} />
            </div>

            {/* Content Container */}
            <div className={styles.contentContainer}>

                {/* Section Header */}
                <div
                    className={styles.header}
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                    }}
                >
                    <span className="section-tag">
                        <span className="eyebrow-line" />
                        Proven at Scale
                    </span>
                    <h2 className={styles.headerTitle}>
                        MEASURABLE{" "}
                        <span className={styles.highlightText}>IMPACT</span>
                    </h2>
                </div>

                {/* Interactive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:items-stretch">

                    {/* Left Column: Vertical tabs stack */}
                    <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
                        {STATS.map((stat, i) => (
                            <StatTab
                                key={i}
                                stat={stat}
                                index={i}
                                isActive={activeTab === i}
                                visible={visible}
                                onClick={() => handleTabClick(i)}
                            />
                        ))}
                    </div>

                    {/* Right Column: Dynamic Mockup Preview */}
                    <div
                        className={`lg:col-span-7 order-1 lg:order-2 ${styles.previewWrapper}`}
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(30px)",
                        }}
                    >
                        {/* Orange glow spotlight behind the browser mockup */}
                        <div className={styles.previewGlow} />

                        {/* High-fidelity browser frame (Light Mode) */}
                        <div className={styles.browserFrame}>

                            {/* Mockup screen slot */}
                            <div className={styles.mockupScreen}>
                                {STATS.map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className={`${styles.mockupSlide} ${activeTab === idx ? styles.mockupSlideActive : styles.mockupSlideInactive}`}
                                    >
                                        {idx === 0 ? (
                                            <div className={styles.quoteCardContainer}>
                                                <span className={styles.quoteEyebrow}>WHAT PARTNERS SAY</span>
                                                <div className={styles.quoteEyebrowLine} />
                                                <blockquote className={styles.quoteBody}>
                                                    &ldquo;We're doing about half a billion dollars of development and construction. I had the best data at my fingertips, especially when it came to risk, timing and budget.&rdquo;
                                                </blockquote>
                                                <div className={styles.quoteAuthorBlock}>
                                                    <div className={styles.quoteAvatar}>
                                                        <Image
                                                            src="/Anatoly.jpg"
                                                            alt="Anthony Maher"
                                                            width={48}
                                                            height={48}
                                                            className={styles.quoteAvatarImage}
                                                        />
                                                    </div>
                                                    <div className={styles.quoteAuthorInfo}>
                                                        <div className={styles.quoteAuthorName}>ANTHONY MAHER</div>
                                                        <div className={styles.quoteAuthorTitle}>Owner and Developer, University Place Associates</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <Image
                                                    src={stat.image}
                                                    alt={stat.label}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                    priority={idx === 0}
                                                />
                                                
                                                {/* Bottom shadow overlay for legibility */}
                                                <div className={styles.captionOverlay} />
                                                
                                                {/* Image Caption Text */}
                                                <p className={styles.imageCaption}>
                                                    {stat.imageCaption}
                                                </p>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
