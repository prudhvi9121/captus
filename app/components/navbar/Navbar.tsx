"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
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
        { label: "Platform", href: "/#platform" },
        { label: "How It Works", href: "/#how-it-works" },
        { label: "About", href: "/team" },
    ];

    const isSolidNavbar = scrolled || isMenuOpen || pathname !== "/";
    const atTopPage = !isSolidNavbar;

    return (
        <>
            {/* ── Main nav ── */}
            <nav className={`${styles.navbar} ${isSolidNavbar ? styles.navbarSolid : ""} ${scrolled ? styles.navbarScrolled : ""}`}>
                <div className={`${styles.navContainer} ${scrolled ? styles.navContainerScrolled : ""}`}>
                    {/* Logo */}
                    <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", zIndex: 1001 }}>
                        {/* Desktop logo */}
                        <Image
                            src="/Captus Logo_A7.png"
                            alt="Captus Logo"
                            width={214}
                            height={54}
                            className={`hidden md:block ${styles.logoDesktop} ${scrolled ? styles.logoDesktopScrolled : ""} ${atTopPage ? styles.logoInvert : ""}`}
                            priority
                        />
                        {/* Mobile logo */}
                        <Image
                            src="/Captus Logo_A7.png"
                            alt="Captus Logo"
                            width={160}
                            height={40}
                            className={`md:hidden ${styles.logoMobile} ${atTopPage ? styles.logoInvert : ""}`}
                            priority
                        />
                    </Link>

                    {/* Desktop nav links */}
                    <div className={`hidden md:flex ${styles.desktopNavLinks}`}>
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`${styles.desktopNavLink} ${isActive ? styles.desktopNavLinkActive : ""}`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop CTA */}
                    <div className={`hidden md:flex ${styles.desktopCtaContainer}`}>
                        <a href="https://app.captus.ai/login" className={styles.desktopCtaLogin}>
                            Login
                        </a>
                        <Link href="/book-demo" className={styles.desktopBookDemoBtn}>
                            Book Demo
                        </Link>
                    </div>

                    {/* ── Mobile hamburger ── */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`flex md:hidden flex-col justify-center items-center gap-[5px] ${styles.hamburger}`}
                        aria-label="Toggle menu"
                    >
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className={`${styles.hamburgerBar} ${isMenuOpen ? styles[`barOpen${i}`] : ""}`}
                            />
                        ))}
                    </button>
                </div>
            </nav>

            {/* ── Mobile full-screen overlay ── */}
            <div className={`${styles.mobileOverlay} ${isMenuOpen ? styles.mobileOverlayOpen : ""}`}>
                {/* Top header bar inside overlay */}
                <div className={styles.mobileOverlayHeader}>
                    <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }} onClick={() => setIsMenuOpen(false)}>
                        <Image
                            src="/Captus Logo_A7.png"
                            alt="Captus Logo"
                            width={160}
                            height={40}
                            className={styles.logoMobile}
                            priority
                        />
                    </Link>
                    <button onClick={() => setIsMenuOpen(false)} className={styles.mobileCloseBtn} aria-label="Close menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.8" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Middle: Left-aligned nav links */}
                <div className={styles.mobileLinksContainer}>
                    {navLinks.map((link, idx) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ""}`}
                            >
                                <span className={styles.mobileNavLinkNumber}>
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Bottom: Divider & CTA actions */}
                <div className={styles.mobileCtaContainer}>
                    <div className={styles.mobileDivider} />

                    <a
                        href="https://app.captus.ai/login"
                        onClick={() => setIsMenuOpen(false)}
                        className={styles.mobileLoginBtn}
                    >
                        Login
                    </a>

                    <Link href="/book-demo" onClick={() => setIsMenuOpen(false)} style={{ width: "100%", textDecoration: "none" }}>
                        <span className={styles.mobileBookDemoBtn}>
                            Book Demo
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
}
