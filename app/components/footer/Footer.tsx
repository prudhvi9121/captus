"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={`curved-section ${styles.footerSection}`} style={{ zIndex: 15 }}>
            {/* MAIN FOOTER */}
            <div className={styles.mainContainer}>
                <div className={styles.contentGrid}>
                    {/* LEFT SECTION - Logo & Pitch */}
                    <div className={styles.leftCol}>
                        <Link href="/" className={styles.logoLink}>
                            <div className={styles.logoContainer}>
                                <span className={styles.logoText}>CAPTUS</span>
                                <span className={styles.logoDotAi}>.AI</span>
                            </div>
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            Follow on LinkedIn
                        </a>
                    </div>

                    {/* RIGHT SECTION - Links Grid */}
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
        </footer>
    );
}
