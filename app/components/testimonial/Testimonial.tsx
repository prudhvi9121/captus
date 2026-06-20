"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import styles from "./Testimonial.module.css";

const testimonials = [
    {
        quote:
            "We're doing about half a billion dollars of development and construction. I had the best data at my fingertips, especially when it came to risk, timing and budget.",
        name: "Anthony Maher",
        title: "Owner and Developer, University Place Associates",
        initial: "A",
    },
];

export default function Testimonial() {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section className={`curved-section ${styles.section}`}>
            {/* Large decorative quote mark */}
            <div className={styles.quoteMark}>
                &ldquo;
            </div>

            <div
                ref={ref}
                className={`reveal ${styles.contentContainer}`}
            >
                {/* Eyebrow */}
                <span className="section-tag-light">
                    <span className={styles.eyebrowLineLight} />
                    What Partners Say
                </span>

                {testimonials.map((t, i) => (
                    <div key={i} className={`reveal-child ${styles.testimonialItem}`}>
                        {/* The quote itself — large editorial style */}
                        <blockquote className={styles.blockquote}>
                            &ldquo;{t.quote}&rdquo;
                        </blockquote>

                        {/* Attribution */}
                        <div className={styles.attributionBlock}>
                            {/* Avatar */}
                            <div className={styles.avatar}>
                                {t.initial}
                            </div>
                            <div className={styles.info}>
                                <div className={styles.authorName}>
                                    {t.name}
                                </div>
                                <div className={styles.authorTitle}>
                                    {t.title}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
