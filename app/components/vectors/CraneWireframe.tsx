"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function CraneWireframe() {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className="reveal"
            style={{
                position: "absolute",
                top: "10%",
                right: "-5%",
                width: "600px",
                height: "600px",
                opacity: 0.04,
                pointerEvents: "none",
                zIndex: 0,
                color: "#111827", // Very dark color, relies on opacity
                transform: "translateY(40px)", // Base transform for reveal
                transition: "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Vertical Tower (Mast) */}
                <line x1="120" y1="50" x2="120" y2="380" stroke="currentColor" strokeWidth="2" />
                <line x1="150" y1="50" x2="150" y2="380" stroke="currentColor" strokeWidth="2" />

                {/* Horizontal connections on Mast */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <g key={i}>
                        <line x1="120" y1={70 + i * 20} x2="150" y2={70 + i * 20} stroke="currentColor" strokeWidth="1" />
                        <line x1="120" y1={70 + i * 20} x2="150" y2={90 + i * 20} stroke="currentColor" strokeWidth="0.5" />
                        <line x1="150" y1={70 + i * 20} x2="120" y2={90 + i * 20} stroke="currentColor" strokeWidth="0.5" />
                    </g>
                ))}

                {/* Horizontal Jib */}
                <line x1="50" y1="90" x2="350" y2="90" stroke="currentColor" strokeWidth="2" />
                <line x1="50" y1="110" x2="350" y2="110" stroke="currentColor" strokeWidth="2" />

                {/* Jib diagonals */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <g key={`jib-${i}`}>
                        <line x1={50 + i * 15} y1="90" x2={50 + i * 15} y2="110" stroke="currentColor" strokeWidth="1" />
                        <line x1={50 + i * 15} y1="90" x2={65 + i * 15} y2="110" stroke="currentColor" strokeWidth="0.5" />
                        <line x1={65 + i * 15} y1="90" x2={50 + i * 15} y2="110" stroke="currentColor" strokeWidth="0.5" />
                    </g>
                ))}

                {/* Cab */}
                <rect x="150" y="110" width="30" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="150" y1="130" x2="180" y2="130" stroke="currentColor" strokeWidth="1" />

                {/* Counter Jib & Weights */}
                <rect x="50" y="80" width="40" height="30" fill="none" stroke="currentColor" strokeWidth="1" />

                {/* Tie/Pendants (Cables holding the jib) */}
                <line x1="135" y1="50" x2="80" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                <line x1="135" y1="50" x2="250" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                <line x1="135" y1="50" x2="330" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />

                {/* Hook and Hoist */}
                <line x1="300" y1="110" x2="300" y2="220" stroke="currentColor" strokeWidth="1" />
                <circle cx="300" cy="225" r="5" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M300 230 Q290 240 300 245" fill="none" stroke="currentColor" strokeWidth="1.5" />

                {/* Contextual Grid Lines */}
                <line x1="20" y1="360" x2="380" y2="360" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
                <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
                <line x1="135" y1="20" x2="135" y2="380" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
            </svg>
        </div>
    );
}
