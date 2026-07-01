"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 60);
        return () => clearTimeout(t);
    }, []);

    return (
        <section id="top" className={styles.heroSection}>
            {/* ── Background Image ── */}
            <div className={styles.bgContainer}>
                <Image
                    src="/new/heroPageImage.jpeg"
                    alt="Wide active construction site"
                    fill
                    sizes="100vw"
                    className={styles.bgImage}
                    priority
                    quality={80}
                />
                {/* Top vignette */}
                <div className={styles.bgGradientTop} />
                {/* Left-side darkening */}
                <div className={styles.bgGradientLeft} />
            </div>

            {/* ── Hero Content ── */}
            <div className={`${styles.heroContent} ${mounted ? styles.heroContentVisible : ""}`}>
                {/* Headline */}
                <h1 className={styles.headline}>
                    Deliver every project<br />
                    <span className={styles.highlightOrange}>on time</span>
                    {" "}and{" "}
                    <span className={styles.highlightOrange}>on budget</span>
                </h1>

                {/* Body paragraph */}
                <p className={styles.bodyText}>
                    Captus is an AI early-warning system for commercial construction. It
                    surfaces cost, schedule, and labor risk across your projects{" "}
                    <span className={styles.bodyHighlight}>before it becomes a problem</span>,
                    {" "}so owners and developers can act in time.
                </p>

                {/* CTA Buttons */}
                <div className={styles.ctaRow}>
                    <Link href="/book-demo" className={styles.ctaBtnPrimary}>
                        Book a demo
                    </Link>
                    <a href="#how-it-works" className={styles.ctaBtnGhost}>
                        See how it works
                    </a>
                </div>

                {/* Social proof strip */}
                <div className={styles.proofDivider} />
                <div className={styles.proofRow}>
                    <span className={styles.proofLabel}>Monitoring risk across</span>
                    <span className={styles.proofValue}>$500M+</span>
                    <span className={styles.proofSub}>in active capital projects</span>
                </div>
            </div>

            {/* ── Scroll Hint ── */}
            <a href="#problem" className={styles.scrollHint}>
                <span className={styles.scrollText}>Scroll</span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,.72)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.scrollChevron}
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </a>
        </section>
    );
}
