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

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) setIsMenuOpen(false);
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

    const atTop = !scrolled && !isMenuOpen;

    return (
        <>
            {/* ── Utility bar ── */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1001,
                    height: "36px",
                    background: "#111111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingLeft: "clamp(20px, 5vw, 80px)",
                    paddingRight: "clamp(20px, 5vw, 80px)",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    transition: "opacity 0.3s ease",
                    opacity: atTop ? 1 : 0,
                    pointerEvents: atTop ? "auto" : "none",
                }}
            >
                <span
                    style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.35)",
                        whiteSpace: "nowrap",
                    }}
                >
                    Predictive Risk Intelligence Platform
                </span>
                <a
                    href="https://app.captus.ai/login"
                    style={{
                        fontFamily: "'Good Times', sans-serif",
                        fontSize: "9px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#FF7B1A")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                    Login →
                </a>
            </div>

            {/* ── Main nav ── */}
            <nav
                style={{
                    position: "fixed",
                    top: atTop ? "36px" : "0",
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    background: scrolled || isMenuOpen ? "#FFFFFF" : "transparent",
                    borderBottom: scrolled || isMenuOpen ? "1px solid #E2E2E0" : "1px solid transparent",
                    boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: scrolled ? "14px" : "18px",
                        paddingBottom: scrolled ? "14px" : "18px",
                        maxWidth: "1400px",
                        margin: "0 auto",
                        transition: "padding 0.35s ease",
                        paddingLeft: "clamp(20px, 5vw, 80px)",
                        paddingRight: "clamp(20px, 5vw, 80px)",
                    }}
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
                        {/* Desktop logo */}
                        <Image
                            src="/Captus Logo_A7.png"
                            alt="Captus Logo"
                            width={214}
                            height={54}
                            className="hidden md:block"
                            style={{
                                height: scrolled ? "44px" : "52px",
                                width: "auto",
                                objectFit: "contain",
                                transition: "height 0.35s ease",
                                filter: !scrolled && !isMenuOpen ? "brightness(0) invert(1)" : "none",
                            }}
                            priority
                        />
                        {/* Mobile logo */}
                        <Image
                            src="/Captus Logo_A7.png"
                            alt="Captus Logo"
                            width={160}
                            height={40}
                            className="md:hidden"
                            style={{
                                height: "38px",
                                width: "auto",
                                objectFit: "contain",
                                filter: !scrolled && !isMenuOpen ? "brightness(0) invert(1)" : "none",
                            }}
                            priority
                        />
                    </Link>

                    {/* Desktop nav links — hidden on mobile via className, flex on md+ */}
                    <div
                        className="hidden md:flex"
                        style={{ alignItems: "center", gap: "36px" }}
                    >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            const atTopPage = !scrolled && !isMenuOpen;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    style={{
                                        fontFamily: "'Good Times', sans-serif",
                                        fontSize: "11px",
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        color: atTopPage
                                            ? (isActive ? "#FF7B1A" : "rgba(255,255,255,0.85)")
                                            : (isActive ? "#CC5500" : "#111111"),
                                        textDecoration: "none",
                                        paddingBottom: "4px",
                                        borderBottom: isActive ? `2px solid ${atTopPage ? "#FF7B1A" : "#CC5500"}` : "2px solid transparent",
                                        transition: "color 0.2s ease, border-color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.color = atTopPage ? "#FF7B1A" : "#CC5500";
                                        el.style.borderBottomColor = atTopPage ? "#FF7B1A" : "#CC5500";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLElement;
                                        el.style.color = atTopPage
                                            ? (isActive ? "#FF7B1A" : "rgba(255,255,255,0.85)")
                                            : (isActive ? "#CC5500" : "#111111");
                                        el.style.borderBottomColor = isActive ? (atTopPage ? "#FF7B1A" : "#CC5500") : "transparent";
                                    }}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop CTA — hidden on mobile */}
                    <div className="hidden md:flex" style={{ alignItems: "center", gap: "16px" }}>
                        <a
                            href="https://app.captus.ai/login"
                            style={{
                                fontFamily: "'Good Times', sans-serif",
                                fontSize: "10px",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: !scrolled ? "rgba(255,255,255,0.7)" : "#111111",
                                textDecoration: "none",
                                transition: "color 0.2s ease",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = "#CC5500")}
                            onMouseLeave={e => (e.currentTarget.style.color = !scrolled ? "rgba(255,255,255,0.7)" : "#111111")}
                        >
                            Login
                        </a>
                        <Link href="/book-demo" style={{ textDecoration: "none" }}>
                            <span
                                className="btn-enterprise"
                                style={{ padding: "10px 22px", fontSize: "10px" }}
                            >
                                Book Demo
                            </span>
                        </Link>
                    </div>

                    {/* ── Mobile hamburger — ONLY visible below md, no inline display style ── */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
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
                            gap: "5px",
                        }}
                        aria-label="Toggle menu"
                    >
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                style={{
                                    display: "block",
                                    width: "22px",
                                    height: "2px",
                                    backgroundColor: scrolled || isMenuOpen ? "#111111" : "#FFFFFF",
                                    transition: "all 0.3s ease",
                                    transform:
                                        i === 0 && isMenuOpen ? "rotate(45deg) translate(5px, 5px)" :
                                        i === 2 && isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                                    opacity: i === 1 && isMenuOpen ? 0 : 1,
                                }}
                            />
                        ))}
                    </button>
                </div>
            </nav>

            {/* ── Mobile full-screen overlay ── */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#FFFFFF",
                    zIndex: 2000,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px",
                    transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
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
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <Link href="/" style={{ display: "flex", textDecoration: "none" }}>
                    <Image
                        src="/Captus Logo_A7.png"
                        alt="Captus Logo"
                        width={180}
                        height={45}
                        style={{ height: "42px", width: "auto", objectFit: "contain" }}
                        priority
                    />
                </Link>

                <div style={{ display: "flex", flexDirection: "column", gap: "32px", alignItems: "center", width: "100%", marginTop: "56px" }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                fontFamily: "'Good Times', sans-serif",
                                fontSize: "22px",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                color: pathname === link.href ? "#CC5500" : "#111111",
                                textDecoration: "none",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div style={{ width: "100%", maxWidth: "260px", height: "1px", background: "#E2E2E0", margin: "8px 0" }} />

                    <a
                        href="https://app.captus.ai/login"
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            fontFamily: "'Good Times', sans-serif",
                            fontSize: "13px",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: "#111111",
                            textDecoration: "none",
                        }}
                    >
                        Login
                    </a>

                    <Link href="/book-demo" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: "none", width: "100%", maxWidth: "260px" }}>
                        <span
                            className="btn-enterprise"
                            style={{ padding: "16px", fontSize: "13px", display: "block", textAlign: "center", width: "100%" }}
                        >
                            Book Demo
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
}
