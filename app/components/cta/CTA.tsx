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
                    <span style={{ display: "inline-block", width: "20px", height: "1px", background: "rgba(255,255,255,0.5)", marginRight: "8px", verticalAlign: "middle" }} />
                    Protect your capital
                </span>

                <h2 className={styles.headline}>
                    See the risk{" "}
                    <span className={styles.highlightText}>before</span>
                    <br />
                    it costs you
                </h2>

                <p className={styles.subcopy}>
                    Bring your project data into one clear risk picture. We will show
                    you how Captus surfaces financial and operational risk on your own portfolio.
                </p>

                <div className={styles.buttonsRow}>
                    <Link href="/book-demo" style={{ textDecoration: "none" }} className={styles.buttonLink}>
                        <span className={`btn-enterprise ${styles.btnOverride}`}>
                            Book a demo
                        </span>
                    </Link>
                    <Link
                        href="/book-demo"
                        className={`btn-enterprise-ghost ${styles.btnOverride}`}
                    >
                        Join the waitlist
                    </Link>
                </div>
            </div>
        </section>
    );
}
