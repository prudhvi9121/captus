"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./SocialProof.module.css";



const STATS = [
    {
        numericValue: null,
        suffix: "",
        label: "Projects Under Management",
        sublabel: "Capital deployed across active portfolios",
        isNumeric: false,
        displayText: "$500M+",
        color: "#C44B00",
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
        numericValue: null,
        suffix: "",
        label: "Life Sciences Building",
        sublabel: "3.0 University Place Associates",
        isNumeric: false,
        displayText: "$300M",
        color: "#C44B00",
        image: "/new/socialproof3.avif",
        imageCaption: "3.0 University Place — a $300M life sciences building for University Place Associates.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12" />
                <path d="M14 9V3H10v6L4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2L14 9Z" />
            </svg>
        ),
    },
    {
        numericValue: null,
        suffix: "",
        label: "Precast Concrete Parking Garage",
        sublabel: "5.0 University Place Associates",
        isNumeric: false,
        displayText: "$40M",
        color: "#C44B00",
        image: "/new/socialproof2.avif",
        imageCaption: "5.0 University Place — a $40M precast concrete parking garage for University Place Associates.",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
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
                        Trusted on Real Capital
                    </span>
                    <h2 className={styles.headerTitle}>
                        SELECTED <span className={styles.highlightText}>PROJECTS</span>
                    </h2>
                    <p
                        style={{
                            fontFamily: "IBM Plex Mono, ui-monospace, monospace",
                            fontSize: "clamp(14px, 1.4vw, 16.5px)",
                            color: "var(--text-secondary)",
                            lineHeight: 1.6,
                            maxWidth: "520px",
                            marginTop: "18px",
                            marginBottom: "0",
                        }}
                    >
                        Captus runs on live capital projects across the University Place Associates portfolio &mdash; from parking structures to life sciences.
                        <br /><br />
                        Select one to explore.
                    </p>
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
                                                            src="/new/testimonial_person.avif"
                                                            alt="Anthony Maher"
                                                            width={48}
                                                            height={48}
                                                            className={styles.quoteAvatarImage}
                                                            quality={60}
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
                                                    sizes="(max-width: 1024px) 90vw, (max-width: 1440px) 50vw, 680px"
                                                    priority={false}
                                                    quality={60}
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
