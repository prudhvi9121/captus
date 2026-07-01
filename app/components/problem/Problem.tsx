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
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, visible] as const;
}

const CARDS = [
    {
        id: "budget",
        badge: "Protect the Budget",
        headline: "Catch costs before they move",
        body: "Contracts, change orders, and invoices live in different places. The gaps between them add up quietly, and owners usually find out once the money is already gone.",
        image: "/new/problemImage1.jpeg",
    },
    {
        id: "field",
        badge: "Smarter Field Decisions",
        headline: "Give the field the full picture",
        body: "Crews make calls on site every day without seeing the cost behind them. Schedule slips and labor gaps then show up in the budget weeks later.",
        image: "/new/problemImage2.jpeg",
    },
    {
        id: "detection",
        badge: "Early Detection",
        headline: "See risks before they compound",
        body: "Captus surfaces financial and operational threats the moment they appear — not after the damage is done. Act when it still matters.",
        image: "/new/problemImage3.jpeg",
    },
];

export default function Problem() {
    const [headerRef, headerVisible] = useInView(0.2);
    const [cardsRef, cardsVisible] = useInView(0.05);

    return (
        <section className={`curved-section ${styles.section}`} style={{ zIndex: 10 }}>
            {/* Subtle top separator */}
            <div className={styles.topSeparator} />

            {/* Subtle background texture */}
            <div className={styles.backgroundTexture} />

            {/* ── Section header ── */}
            <div
                ref={headerRef}
                className={styles.headerContainer}
                style={{
                    opacity: headerVisible ? 1 : 0,
                    transform: headerVisible ? "translateY(0)" : "translateY(24px)",
                    transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                }}
            >
                <span className={styles.eyebrow}>
                    The Opportunity
                </span>
                <h2 className={styles.headline}>
                    Solve problems{" "}
                    <span className={styles.headlineHighlight}>before</span>{" "}
                    they happen
                </h2>
            </div>

            {/* ── Three-card static grid ── */}
            <div ref={cardsRef} className={styles.cardsGrid}>
                {CARDS.map((card, i) => (
                    <Link
                        key={card.id}
                        href="/book-demo"
                        className={styles.card}
                        style={{
                            opacity: cardsVisible ? 1 : 0,
                            transform: cardsVisible ? "translateY(0)" : "translateY(32px)",
                            transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                        }}
                    >
                        {/* Image */}
                        <div className={styles.imageContainer}>
                            <Image
                                src={card.image}
                                alt={card.badge}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 500px"
                                className={styles.cardImage}
                                quality={65}
                            />
                            {/* Dark overlay */}
                            <div className={styles.imageOverlay} />
                            {/* Badge */}
                            <div className={styles.badge}>{card.badge}</div>
                        </div>

                        {/* Content */}
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardHeadline}>{card.headline}</h3>
                            <p className={styles.cardBody}>{card.body}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
