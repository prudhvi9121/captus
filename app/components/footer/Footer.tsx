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
                            Early warning intelligence for capital projects.<br />
                            See financial and operational risk before it<br />
                            becomes a problem.
                        </p>
                    </div>

                    {/* RIGHT SECTION - Links Grid */}
                    <div className={styles.linksGrid}>
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

                        {/* LEGAL */}
                        <div className={styles.linkCol}>
                            <span className={styles.colHeader}>
                                Legal
                            </span>
                            <div className={styles.linkList}>
                                <Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
                                <Link href="/terms-and-conditions" className={styles.footerLink}>Terms and Conditions</Link>
                            </div>
                        </div>

                        {/* CONTACT */}
                        <div className={styles.linkCol}>
                            <span className={styles.colHeader}>
                                Contact
                            </span>
                            <div className={styles.linkList}>
                                <a href="mailto:info@captus.ai" className={styles.footerLink}>info@captus.ai</a>
                                <Link href="/book-demo" className={styles.footerLink}>Book a Demo</Link>
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
