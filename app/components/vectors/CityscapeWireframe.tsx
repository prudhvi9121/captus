"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function CityscapeWireframe() {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className="reveal"
            style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                width: "1200px",
                height: "600px",
                marginLeft: "-600px", // Center it
                opacity: 0.04,
                pointerEvents: "none",
                zIndex: 0,
                color: "#111827",
                transform: "translateY(60px)", // Base transform for slide up
                transition: "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 800 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Isometric Building 1 */}
                <g stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none">
                    {/* Left Face */}
                    <polygon points="400,200 350,225 350,350 400,325" />
                    {/* Right Face */}
                    <polygon points="400,200 450,225 450,350 400,325" />
                    {/* Top Face */}
                    <polygon points="400,200 350,175 400,150 450,175" />

                    {/* Floors */}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <g key={`b1-${i}`}>
                            <line x1="350" y1={235 + i * 10} x2="400" y2={210 + i * 10} />
                            <line x1="400" y1={210 + i * 10} x2="450" y2={235 + i * 10} />
                        </g>
                    ))}
                </g>

                {/* Isometric Building 2 (Taller, behind) */}
                <g stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none">
                    {/* Left Face */}
                    <polygon points="300,150 240,180 240,350 300,320" />
                    {/* Right Face */}
                    <polygon points="300,150 360,180 360,350 300,320" />
                    {/* Top Face */}
                    <polygon points="300,150 240,120 300,90 360,120" />

                    {/* Window grids */}
                    <line x1="260" y1="170" x2="260" y2="340" />
                    <line x1="280" y1="160" x2="280" y2="330" />
                    <line x1="320" y1="160" x2="320" y2="330" />
                    <line x1="340" y1="170" x2="340" y2="340" />

                    {/* Cross braces */}
                    <line x1="240" y1="200" x2="300" y2="250" />
                    <line x1="300" y1="250" x2="360" y2="200" />
                </g>

                {/* Isometric Building 3 (Shorter, right) */}
                <g stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none">
                    {/* Left Face */}
                    <polygon points="500,240 460,260 460,350 500,330" />
                    {/* Right Face */}
                    <polygon points="500,240 540,260 540,350 500,330" />
                    {/* Top Face */}
                    <polygon points="500,240 460,220 500,200 540,220" />

                    {/* Horizontal stripes */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <g key={`b3-${i}`}>
                            <line x1="460" y1={270 + i * 15} x2="500" y2={250 + i * 15} />
                            <line x1="500" y1={250 + i * 15} x2="540" y2={270 + i * 15} />
                        </g>
                    ))}
                </g>

                {/* Ground Plane / Foundation lines */}
                <g stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" fill="none">
                    <line x1="100" y1="250" x2="400" y2="400" />
                    <line x1="400" y1="400" x2="700" y2="250" />

                    <line x1="150" y1="225" x2="400" y2="350" />
                    <line x1="400" y1="350" x2="650" y2="225" />

                    <line x1="200" y1="200" x2="400" y2="300" />
                    <line x1="400" y1="300" x2="600" y2="200" />
                </g>

                {/* Data Pointers */}
                <g stroke="currentColor" strokeWidth="1" fill="none">
                    <line x1="300" y1="90" x2="300" y2="40" strokeDasharray="2 2" />
                    <circle cx="300" cy="40" r="3" />

                    <line x1="400" y1="150" x2="400" y2="100" strokeDasharray="2 2" />
                    <circle cx="400" cy="100" r="3" />
                </g>
            </svg>
        </div>
    );
}
