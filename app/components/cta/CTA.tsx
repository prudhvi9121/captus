"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CTA.module.css";

function useInView(threshold = 0.15) {
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

export default function CTA() {
    const [ref, visible] = useInView(0.1);

    return (
        <section className={`curved-section ${styles.section}`}>
            {/* Full-bleed background */}
            <div className={styles.bgWrapper}>
                <Image
                    src="/new/CTA_Image.jpeg"
                    alt="Construction site"
                    fill
                    sizes="100vw"
                    className={styles.bgImage}
                    quality={60}
                />
                {/* Heavy dark overlay */}
                <div className={styles.darkOverlay} />
                {/* Orange glow */}
                <div className={styles.orangeGlow} />
            </div>

            {/* Content */}
            <div
                ref={ref}
                className={styles.contentContainer}
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
                }}
            >
                <span className="section-tag-light">
                    Get Started
                </span>

                <h2 className={styles.headline}>
                    EVALUATE OUR
                    <br />
                    <span className={styles.highlightText}>PLATFORM</span>
                </h2>

                <p className={styles.subcopy}>
                    Qualified owners and developers can request a private demo to evaluate how
                    predictive risk intelligence can strengthen portfolio performance.
                </p>

                <div className={styles.buttonsRow}>
                    <Link href="/book-demo" style={{ textDecoration: "none" }} className={styles.buttonLink}>
                        <span className={`btn-enterprise ${styles.btnOverride}`}>
                            Book a Demo
                        </span>
                    </Link>
                    <a
                        href="mailto:info@captus.ai"
                        className={`btn-enterprise-ghost ${styles.btnOverride}`}
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
