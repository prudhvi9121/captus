"use client";

import { useEffect, useRef } from "react";
import GridBlueprint from "./vectors/GridBlueprint";

/* ── Hooks ── */
function useFadeUp(delay = 0) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const t = setTimeout(() => {
            if (el) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        }, delay);
        return () => clearTimeout(t);
    }, [delay]);
    return ref;
}

export default function CaseStudy() {
    const badgeRef = useFadeUp(100);
    const titleRef = useFadeUp(300);
    const textRef = useFadeUp(500);
    const dividerRef = useFadeUp(700);

    return (
        <section
            id="case-study"
            className="relative overflow-hidden bg-[#0A0A0A] py-16 sm:py-24 lg:py-32 flex items-center justify-center min-h-[60vh]"
        >
            {/* ── Ambient Background Animations ── */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Slow rotating large glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-[#CC5500]/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />

                {/* Secondary cool glow for depth */}
                <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-[0.03] text-white">
                    <GridBlueprint />
                </div>
            </div>

            <div className="w-full max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center text-center">

                {/* ── Eyebrow Badge ── */}
                {/* <div
                    ref={badgeRef}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm mb-6 sm:mb-8 opacity-0 translate-y-8"
                    style={{ transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)" }}
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_#CC5500]" />
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-orange-500 uppercase font-display">
                        $500M Engagement
                    </span>
                </div> */}

                {/* ── Main Cinematic Title ── */}
                <h2
                    ref={titleRef}
                    className="font-display text-3xl sm:text-4xl lg:text-[40px] tracking-tight leading-[1.05] mb-6 opacity-0 translate-y-8"
                    style={{ transition: "all 1s cubic-bezier(0.16,1,0.3,1)" }}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
                        $500M+ Portfolio
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
                        Design Partner
                    </span>
                </h2>

                {/* ── Subtle Divider ── */}
                <div
                    ref={dividerRef}
                    className="h-px w-24 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-8 sm:mb-10 opacity-0 scale-x-0"
                    style={{ transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.2s", transformOrigin: "center" }}
                    onTransitionEnd={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.transform = "scaleX(1)";
                    }}
                />

                {/* ── Elegant Body Text ── */}
                <p
                    ref={textRef}
                    className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-[600px] opacity-0 translate-y-8"
                    style={{ transition: "all 1s cubic-bezier(0.16,1,0.3,1)" }}
                >
                    Captus is actively used by a major strategic design partner to coordinate risk and exposure across sustainable life sciences and LEED-certified developments. We are validating predictive intelligence across institutional-grade capital projects.
                </p>

            </div>

            {/* Top/Bottom Fade Borders for seamless blending */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
        </section>
    );
}
