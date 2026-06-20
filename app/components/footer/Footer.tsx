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
                        <div className={styles.logoContainer}>
                            <span className={styles.logoText}>CAPTUS</span>
                            <span className={styles.logoDotAi}>.AI</span>
                        </div>
                        <p className={styles.pitchText}>
                            Early warning intelligence for capital projects.<br />
                            See financial and operational risk before it<br />
                            becomes a problem.
                        </p>
                    </div>

                    {/* RIGHT SECTION - Links Grid */}
                    <div className={styles.linksGrid}>
                        {/* PRODUCT */}
                        <div className={styles.linkCol}>
                            <span className={styles.colHeader}>
                                Product
                            </span>
                            <div className={styles.linkList}>
                                <Link href="/" className={styles.footerLink}>Platform</Link>
                                <Link href="#how-it-works" className={styles.footerLink}>How it works</Link>
                                <Link href="/" className={styles.footerLink}>Risk Dashboard</Link>
                            </div>
                        </div>

                        {/* COMPANY */}
                        <div className={styles.linkCol}>
                            <span className={styles.colHeader}>
                                Company
                            </span>
                            <div className={styles.linkList}>
                                <Link href="/team" className={styles.footerLink}>Team</Link>
                                <Link href="/careers" className={styles.footerLink}>Careers</Link>
                                <Link href="/investors" className={styles.footerLink}>Investors</Link>
                            </div>
                        </div>

                        {/* GET STARTED */}
                        <div className={styles.linkCol}>
                            <span className={styles.colHeader}>
                                Get Started
                            </span>
                            <div className={styles.linkList}>
                                <Link href="/book-demo" className={styles.footerLink}>Book a demo</Link>
                                <a href="https://app.captus.ai/login" className={styles.footerLink}>Log in</a>
                                <a href="mailto:hello@captus.ai" className={styles.footerLink}>hello@captus.ai</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR — sits above brand text */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomBarContainer}>
                    {/* Copyright */}
                    <p className={styles.copyrightText}>
                        © {new Date().getFullYear()} Captus AI.&nbsp;&nbsp;All rights reserved.
                    </p>

                    {/* Social links */}
                    <div className={styles.socialContainer}>
                        {[
                            { label: "LinkedIn", href: "https://www.linkedin.com/company/captus-ai/about/", target: "_blank", rel: "noopener noreferrer" },
                        ].map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className={styles.socialLink}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
