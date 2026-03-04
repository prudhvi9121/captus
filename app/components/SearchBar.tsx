"use client";

import { useState, useEffect, useRef } from "react";

const PLACEHOLDER_CYCLE = [
    "Search anything...",
    "AI, design, products...",
    "Ideas worth exploring...",
    "The future of technology...",
];

export default function SearchBar() {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");
    const [placeholderIdx, setPlaceholderIdx] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (focused || value) return;
        const interval = setInterval(() => {
            setPlaceholderIdx((i) => (i + 1) % PLACEHOLDER_CYCLE.length);
        }, 2800);
        return () => clearInterval(interval);
    }, [focused, value]);

    return (
        <div
            className="search-bar"
            style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 20px",
                width: "min(100%, 560px)",
                cursor: "text",
            }}
            onClick={() => inputRef.current?.focus()}
        >
            {/* Search icon */}
            <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                style={{
                    flexShrink: 0,
                    transition: "color 0.2s ease",
                    color: focused ? "#FF6B00" : "#525252",
                }}
            >
                <circle
                    cx="7.5"
                    cy="7.5"
                    r="5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <path
                    d="M13 13L16 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>

            <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={PLACEHOLDER_CYCLE[placeholderIdx]}
                style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "#FAFAFA",
                    fontSize: "15px",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    fontFamily: "inherit",
                }}
            />

            {/* Mic / enter icon */}
            {!value && (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ flexShrink: 0, color: "#404040" }}
                >
                    <rect x="5.5" y="1" width="5" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
                    <path
                        d="M2 8.5C2 11.538 4.686 14 8 14s6-2.462 6-5.5"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    />
                    <line
                        x1="8"
                        y1="14"
                        x2="8"
                        y2="16"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                    />
                </svg>
            )}

            {value && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setValue("");
                    }}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#525252",
                        padding: "0",
                        display: "flex",
                        alignItems: "center",
                        transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#A3A3A3")
                    }
                    onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#525252")
                    }
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                            d="M1 1l12 12M13 1L1 13"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}
