"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerSection} style={{ zIndex: 15 }}>
            {/* MAIN FOOTER */}
            <div className={styles.mainContainer}>
                <div className={styles.contentGrid}>
                    {/* LEFT COLUMN - Logo & Pitch */}
                    <div className={styles.leftCol}>
                        <Link href="/" className={styles.logoLink}>
                            <Image
                                src="/captus-footer-logo.png"
                                alt="Captus Logo"
                                width={150}
                                height={38}
                                className={styles.logoImage}
                                priority
                            />
                        </Link>
                        <p className={styles.pitchText}>
                            The early-warning platform for construction. See<br />
                            cost and schedule risk before it costs you.
                        </p>

                        {/* LinkedIn Button */}
                        <a
                            href="https://www.linkedin.com/company/captus-ai/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkedinBtn}
                        >
                            <span className={styles.linkedinIcon}>in</span>
                            <span className={styles.linkedinText}>Follow on LinkedIn</span>
                        </a>
                    </div>

                    {/* RIGHT COLUMN - Links Grid */}
                    <div className={styles.linksGrid}>
                        {/* PRODUCT */}
                        <div className={styles.linkCol}>
                            <span className={styles.colHeader}>Product</span>
                            <div className={styles.linkList}>
                                <Link href="/#platform" className={styles.footerLink}>Platform</Link>
                                <Link href="/#how-it-works" className={styles.footerLink}>How it works</Link>
                                <Link href="/#risk-dashboard" className={styles.footerLink}>Risk Dashboard</Link>
                            </div>
                        </div>

                        {/* COMPANY */}
                        <div className={styles.linkCol}>
                            <span className={styles.colHeader}>Company</span>
                            <div className={styles.linkList}>
                                <Link href="/team" className={styles.footerLink}>Team</Link>
                                <Link href="/careers" className={styles.footerLink}>Careers</Link>
                                <Link href="/investors" className={styles.footerLink}>Investors</Link>
                            </div>
                        </div>

                        {/* GET STARTED */}
                        <div className={styles.linkCol}>
                            <span className={styles.colHeader}>Get Started</span>
                            <div className={styles.linkList}>
                                <Link href="/book-demo" className={styles.footerLink}>Join the waitlist</Link>
                                <Link href="/book-demo" className={styles.footerLink}>Book a demo</Link>
                                <Link href="/book-demo" className={styles.footerLink}>Log in</Link>
                                <a href="mailto:info@captus.ai" className={styles.footerLink}>info@captus.ai</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className={styles.bottomBar}>
                    <div className={styles.bottomBarContainer}>
                        {/* Copyright */}
                        <p className={styles.copyrightText}>
                            © {new Date().getFullYear()} Captus AI. All rights reserved.
                        </p>

                        {/* Privacy & Terms */}
                        <div className={styles.bottomLinks}>
                            <Link href="/privacy-policy" className={styles.bottomLink}>Privacy</Link>
                            <Link href="/terms-and-conditions" className={styles.bottomLink}>Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
