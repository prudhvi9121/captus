"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
}

/**
 * Returns a ref. When the element enters the viewport, it sets
 * data-revealed="true" on the element so CSS can animate it in.
 */
export function useScrollReveal<T extends HTMLElement>(
    options: ScrollRevealOptions = {}
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.setAttribute("data-revealed", "true");
                    observer.unobserve(el);
                }
            },
            {
                threshold: options.threshold ?? 0.12,
                rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return ref;
}
