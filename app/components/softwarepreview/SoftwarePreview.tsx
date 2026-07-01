"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./SoftwarePreview.module.css";

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

const FEATURES = [
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

export default function SoftwarePreview() {
    const [ref, visible] = useInView(0.1);

    return (
        <section id="platform" className={`curved-section ${styles.section}`}>
            {/* Background */}
            <div className={styles.bgPattern} />

            {/* Content */}
            <div ref={ref} className={styles.container}>
                {/* Header */}
                <div
                    className={styles.header}
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(24px)",
                        transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                    }}
                >
                    <span className="section-tag">
                        <span className="eyebrow-line" />
                        Our Software
                    </span>
                    <h2 className={styles.headline}>
                        Understand project risk<br />
                        in 30 seconds
                    </h2>
                </div>

                {/* Two-column layout: features left, screenshot right */}
                <div className={styles.contentGrid}>
                    {/* Feature bullets */}
                    <div className={styles.featureList}>
                        {FEATURES.map((f, i) => (
                            <div
                                key={f.number}
                                className={styles.featureItem}
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(20px)",
                                    transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1 + 0.2}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.1 + 0.2}s`,
                                }}
                            >
                                <span className={styles.featureNumber}>{f.number}</span>
                                <div>
                                    <div className={styles.featureTitle}>{f.title}</div>
                                    <div className={styles.featureDesc}>{f.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Product screenshot */}
                    <div
                        className={styles.screenshotWrapper}
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(30px)",
                            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s",
                        }}
                    >
                        {/* Browser chrome */}
                        <div className={styles.browserFrame}>
                            <div className={styles.chromeBar}>
                                {["#FF5F57", "#FFBD2E", "#28C840"].map((c, i) => (
                                    <div key={i} className={styles.chromeDot} style={{ background: c }} />
                                ))}
                                <div className={styles.urlPill}>
                                    <div className={styles.urlDot} />
                                    <span className={styles.urlText}>app.captus.ai/dashboard</span>
                                </div>
                            </div>
                            <div className={styles.screenshotContainer}>
                                <Image
                                    src="/new/platform.avif"
                                    alt="Captus Risk Dashboard"
                                    width={1670}
                                    height={912}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 900px"
                                    className={styles.screenshot}
                                    quality={80}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
