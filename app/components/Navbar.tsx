"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMenuOpen]);

    const navLinks = [
        { label: "Home", href: "/" },
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
                background: scrolled || isMenuOpen ? "#FFFFFF" : "transparent",
                backdropFilter: scrolled || isMenuOpen ? "none" : "none",
                WebkitBackdropFilter: scrolled || isMenuOpen ? "none" : "none",
                borderBottom: scrolled || isMenuOpen ? "1px solid var(--border)" : "1px solid transparent",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    maxWidth: "1400px",
                    margin: "0 auto",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="px-8 md:px-16 lg:px-20"
            >
                {/* Logo */}
                <Link
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        zIndex: 1001,
                    }}
                >
                    <div className="hidden md:block">
                        <Image
                            src="/Captus Logo_A7.png"
                            alt="Captus Logo"
                            width={214}
                            height={54}
                            style={{
                                height: "54px",
                                width: "auto",
                                objectFit: "contain",
                            }}
                            priority
                        />
                    </div>
                    <div className="md:hidden">
                        <Image
                            src="/Captus Logo_A7.png"
                            alt="Captus Logo"
                            width={160}
                            height={40}
                            style={{
                                height: "40px",
                                width: "auto",
                                objectFit: "contain",
                            }}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div
                    style={{
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

                {/* CTA Desktop */}
                <div className="hidden md:block">
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

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "40px",
                        height: "40px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        zIndex: 1001,
                        padding: 0,
                    }}
                    className="flex md:hidden"
                    aria-label="Toggle menu"
                >
                    <span style={{
                        width: "24px",
                        height: "2px",
                        backgroundColor: "#1F1F1F",
                        transition: "all 0.3s ease",
                        transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                        marginBottom: isMenuOpen ? "0" : "6px"
                    }} />
                    <span style={{
                        width: "24px",
                        height: "2px",
                        backgroundColor: "#1F1F1F",
                        transition: "all 0.3s ease",
                        opacity: isMenuOpen ? 0 : 1,
                        marginBottom: isMenuOpen ? "0" : "6px"
                    }} />
                    <span style={{
                        width: "24px",
                        height: "2px",
                        backgroundColor: "#1F1F1F",
                        transition: "all 0.3s ease",
                        transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
                    }} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#FFFFFF",
                    zIndex: 2000,
                    display: isMenuOpen ? "flex" : "none",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px",
                }}
            >
                {/* Close Button in Overlay */}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "10px",
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <Link
                    href="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        zIndex: 2001,
                    }}
                >
                    <Image
                        src="/Captus Logo_A7.png"
                        alt="Captus Logo"
                        width={180}
                        height={45}
                        style={{
                            height: "45px",
                            width: "auto",
                            objectFit: "contain",
                        }}
                        priority
                    />
                </Link>

                <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center", width: "100%", marginTop: "40px" }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                color: pathname === link.href ? "#CC5500" : "#1F1F1F",
                                fontSize: "20px",
                                fontWeight: 600,
                                textDecoration: "none",
                                padding: "8px",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/book-demo" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', marginTop: '16px', width: "100%", maxWidth: "280px" }}>
                        <button
                            className="btn-primary"
                            style={{
                                padding: "14px",
                                fontSize: "16px",
                                width: "100%",
                            }}
                        >
                            Book Demo
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
