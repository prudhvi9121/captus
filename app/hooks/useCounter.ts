"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Animates a number from 0 to `target` when the element enters the viewport.
 * Returns both the animated value and a ref to attach to the trigger element.
 */
export function useCounter(target: number, duration = 1800) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    observer.unobserve(el);

                    const start = performance.now();
                    const tick = (now: number) => {
                        const progress = Math.min((now - start) / duration, 1);
                        // easeOutQuart
                        const eased = 1 - Math.pow(1 - progress, 4);
                        setValue(Math.round(eased * target));
                        if (progress < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, duration]);

    return { value, ref };
}
