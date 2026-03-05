"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function GridBlueprint() {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className="reveal"
            style={{
                position: "absolute",
                top: "5%",
                left: "10%",
                width: "120%",
                height: "120%",
                opacity: 0.05,
                pointerEvents: "none",
                zIndex: 0,
                color: "#CC5500", // Orange color for data focus
                transition: "opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1), transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: "scale(1.05)", // Base transform for scale reveal
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1000 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Grid Background */}
                <pattern id="dataGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dataGrid)" />

                {/* Large Connected Nodes */}
                <g stroke="currentColor" strokeWidth="1" fill="none">
                    {/* Node 1 */}
                    <circle cx="200" cy="150" r="8" />
                    <circle cx="200" cy="150" r="16" strokeDasharray="4 4" />
                    {/* Node 2 */}
                    <circle cx="450" cy="100" r="10" />
                    <circle cx="450" cy="100" r="20" />
                    {/* Node 3 */}
                    <circle cx="700" cy="250" r="12" />
                    <circle cx="700" cy="250" r="24" strokeDasharray="6 6" />
                    {/* Node 4 */}
                    <circle cx="350" cy="400" r="8" />
                    {/* Node 5 */}
                    <circle cx="850" cy="150" r="6" />
                    {/* Node 6 */}
                    <circle cx="150" cy="450" r="10" />

                    {/* Connecting Lines */}
                    <path d="M208 150 L440 100" />
                    <path d="M460 100 L688 250" />
                    <path d="M208 155 L342 395" />
                    <path d="M358 400 L688 255" />
                    <path d="M710 240 L845 155" />
                    <path d="M160 445 L342 405" />
                </g>

                {/* Simulated Data Streams */}
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 10">
                    <line x1="200" y1="150" x2="450" y2="100" />
                    <line x1="450" y1="100" x2="700" y2="250" />
                    <line x1="350" y1="400" x2="700" y2="250" />
                </g>

                <g stroke="currentColor" strokeWidth="0.5">
                    {/* Data brackets / technical markers */}
                    <path d="M180 130 L170 130 L170 170 L180 170" />
                    <path d="M220 130 L230 130 L230 170 L220 170" />

                    <path d="M670 220 L660 220 L660 280 L670 280" />
                    <path d="M730 220 L740 220 L740 280 L730 280" />

                    {/* Random precision lines */}
                    <line x1="450" y1="20" x2="450" y2="90" strokeDasharray="2 4" />
                    <line x1="450" y1="120" x2="450" y2="400" strokeDasharray="2 4" />
                    <line x1="700" y1="20" x2="700" y2="220" strokeDasharray="2 4" />
                </g>
            </svg>
        </div>
    );
}
