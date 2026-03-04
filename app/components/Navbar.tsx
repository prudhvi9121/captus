"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Founder", href: "/founder" },
        { label: "Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "Investors", href: "/investors" },
    ];

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 40px",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                    }}
                >
                    <span
                        className="font-display"
                        style={{
                            color: "#CC5500",
                            fontSize: "22px",
                            fontWeight: "normal",
                            letterSpacing: "0.05em",
                        }}
                    >
                        C
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ display: 'inline-block', margin: '0 2px', verticalAlign: 'text-bottom' }}>
                            <path d="M12 2L2 22H22L12 2Z" fill="url(#gradLogo)" />
                            <defs>
                                <linearGradient id="gradLogo" x1="0" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                                    <stop offset="50%" stopColor="#CC5500" />
                                    <stop offset="50%" stopColor="#222222" />
                                </linearGradient>
                            </defs>
                        </svg>
                        PTUS<span style={{ color: "#222222" }}>.AI</span>
                    </span>
                </Link>

                {/* Links - hidden on mobile */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                    className="nav-links hidden md:flex"
                >
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                style={{
                                    color: isActive ? "#CC5500" : "var(--text-secondary)",
                                    fontSize: "14px",
                                    fontWeight: isActive ? 700 : 400,
                                    textDecoration: "none",
                                    padding: "8px 16px",
                                    borderRadius: "4px",
                                    transition: "all 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.target as HTMLElement).style.color = "#CC5500";
                                }}
                                onMouseLeave={(e) => {
                                    (e.target as HTMLElement).style.color = isActive ? "#CC5500" : "var(--text-secondary)";
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA */}
                <Link href="/book-demo" style={{ textDecoration: 'none' }}>
                    <button
                        className="btn-primary"
                        style={{
                            padding: "10px 24px",
                            fontSize: "14px",
                            letterSpacing: "0.02em",
                        }}
                    >
                        <span>Book Demo</span>
                    </button>
                </Link>
            </div>
        </nav>
    );
}
