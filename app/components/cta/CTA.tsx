"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CTA.module.css";

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

export default function CTA() {
    const [ref, visible] = useInView(0.1);

    return (
        <section className={styles.section}>
            {/* Full-bleed background image */}
            <div className={styles.bgWrapper}>
                <Image
                    src="/new/CTA_Image.jpeg"
                    alt="Construction professional on site"
                    fill
                    sizes="100vw"
                    className={styles.bgImage}
                    quality={75}
                    priority={false}
                />
                {/* Left-heavy dark overlay — fade to transparent right */}
                <div className={styles.darkOverlay} />
            </div>

            {/* Content — left-aligned, vertically centered */}
            <div
                ref={ref}
                className={styles.contentContainer}
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(28px)",
                    transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
                }}
            >
                {/* Eyebrow */}
                <div className={styles.eyebrowRow}>
                    <div className={styles.eyebrowLine} />
                    <span className={styles.eyebrow}>Protect your capital</span>
                </div>

                {/* Headline */}
                <h2 className={styles.headline}>
                    See the risk{" "}
                    <span className={styles.highlightText}>before</span>
                    <br />
                    it costs you
                </h2>

                {/* Subcopy */}
                <p className={styles.subcopy}>
                    Bring your project data into one clear risk picture. We will show
                    you how Captus surfaces financial and operational risk on your own portfolio.
                </p>

                {/* CTA Buttons */}
                <div className={styles.buttonsRow}>
                    <Link href="/book-demo" className={styles.btnPrimary}>
                        Book a demo
                    </Link>
                    <Link href="/waitlist" className={styles.btnGhost}>
                        Join the waitlist
                    </Link>
                </div>
            </div>
        </section>
    );
}
