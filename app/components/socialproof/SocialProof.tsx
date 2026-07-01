"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./SocialProof.module.css";

const PROJECTS = [
    {
        id: "total",
        displayText: "$500M+",
        label: "Projects under management",
        sublabel: "Capital deployed across active portfolios",
        rightPanel: "quote", // show testimonial card
        image: null,
        imageCaption: null,
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CC5500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
    },
    {
        id: "lifesciences",
        displayText: "$300M",
        label: "Life Sciences Building",
        sublabel: "3.0 University Place Associates",
        rightPanel: "image",
        image: "/300m.jpg",
        imageCaption: "3.0 University Place — a $300M life sciences building for University Place Associates.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CC5500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12" />
                <path d="M14 9V3H10v6L4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2L14 9Z" />
            </svg>
        ),
    },
    {
        id: "parking",
        displayText: "$40M",
        label: "Precast Concrete Parking Garage",
        sublabel: "5.0 University Place Associates",
        rightPanel: "image",
        image: "/40m.jpg",
        imageCaption: "5.0 University Place — a $40M precast concrete parking garage for University Place Associates.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CC5500" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                <circle cx="7" cy="17" r="2" />
                <path d="M9 17h6" />
                <circle cx="17" cy="17" r="2" />
            </svg>
        ),
    },
];

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

export default function SocialProof() {
    const [sectionRef, visible] = useInView(0.1);
    const [activeTab, setActiveTab] = useState(0); // Default: $500M+ (shows testimonial)

    // Auto-advance
    useEffect(() => {
        if (!visible) return;
        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % PROJECTS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [visible, activeTab]);

    const activeProject = PROJECTS[activeTab];

    return (
        <section id="impact" ref={sectionRef} className={styles.section}>
            {/* Grid texture */}
            <div className={styles.gridTexture} />
            {/* Right-side glow */}
            <div className={styles.glowRight} />

            {/* Content */}
            <div className={styles.inner}>

                {/* ── Header ── */}
                <div
                    className={styles.headerContainer}
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(24px)",
                        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                    }}
                >
                    <div className={styles.eyebrowRow}>
                        <div className={styles.eyebrowLine} />
                        <span className={styles.eyebrow}>Proven on real capital</span>
                    </div>
                    <h2 className={styles.headline}>
                        Recent <span className={styles.headlineHighlight}>projects</span>
                    </h2>
                    <p className={styles.subcopy}>
                        Captus runs on live capital projects, from parking structures to life sciences buildings.
                    </p>
                </div>

                {/* ── Two-column layout ── */}
                <div className={styles.twoCol}>

                    {/* Left: stat cards */}
                    <div className={styles.leftCol}>
                        {PROJECTS.map((proj, i) => {
                            const isActive = activeTab === i;
                            return (
                                <div
                                    key={proj.id}
                                    className={`${styles.statCard} ${isActive ? styles.statCardActive : ""}`}
                                    onClick={() => setActiveTab(i)}
                                    style={{
                                        opacity: visible ? 1 : 0,
                                        transform: visible ? "translateY(0)" : "translateY(24px)",
                                        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 0.09}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 0.09}s`,
                                    }}
                                >
                                    {/* Icon + value row */}
                                    <div className={styles.cardTopRow}>
                                        <div className={styles.iconBox}>
                                            {proj.icon}
                                        </div>
                                        <div className={styles.statValue}>{proj.displayText}</div>
                                    </div>

                                    {/* Label */}
                                    <div className={styles.cardLabel}>{proj.label}</div>

                                    {/* Sublabel */}
                                    <div className={styles.cardSublabel}>{proj.sublabel}</div>

                                    {/* Progress bar at bottom */}
                                    <div className={styles.progressTrack}>
                                        <div
                                            key={`${proj.id}-${isActive}`}
                                            className={`${styles.progressFill} ${isActive ? styles.progressFillActive : ""}`}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: testimonial OR project image */}
                    <div
                        className={styles.rightCol}
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(30px)",
                            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
                        }}
                    >
                        <div className={styles.rightFrame}>

                            {/* Slide 0: Testimonial quote panel */}
                            <div className={`${styles.slide} ${activeTab === 0 ? styles.slideActive : styles.slideInactive}`}>
                                <div className={styles.quotePanel}>
                                    <div className={styles.quoteEyebrow}>What partners say</div>
                                    <div className={styles.quoteEyebrowUnderline} />
                                    <blockquote className={styles.quoteText}>
                                        "With Captus, I have the best data at my fingertips, especially when it came to risk, timing and budget."
                                    </blockquote>
                                    <div className={styles.quoteAuthorRow}>
                                        <div className={styles.quoteAvatar}>
                                            <Image
                                                src="/new/testimonial_person.avif"
                                                alt="Anthony Maher"
                                                width={44}
                                                height={44}
                                                className={styles.quoteAvatarImg}
                                                quality={70}
                                            />
                                        </div>
                                        <div>
                                            <div className={styles.quoteAuthorName}>Anthony Maher</div>
                                            <div className={styles.quoteAuthorTitle}>Owner and Developer, University Place Associates</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Slides 1+2: Project images */}
                            {PROJECTS.slice(1).map((proj, i) => (
                                <div
                                    key={proj.id}
                                    className={`${styles.slide} ${activeTab === i + 1 ? styles.slideActive : styles.slideInactive}`}
                                >
                                    {proj.image && (
                                        <>
                                            <Image
                                                src={proj.image}
                                                alt={proj.label!}
                                                fill
                                                className={styles.projectImage}
                                                sizes="(max-width: 860px) 90vw, 55vw"
                                                quality={75}
                                            />
                                            <div className={styles.captionOverlay} />
                                            <p className={styles.imageCaption}>{proj.imageCaption}</p>
                                        </>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
