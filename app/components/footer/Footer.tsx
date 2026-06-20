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
                        <img
                            src="/Captus Logo_A7.png"
                            alt="Captus Logo"
                            className="h-8 sm:h-9"
                        />
                        <p className={styles.pitchText}>
                            Predictive risk intelligence platform for construction owners.
                            Intercepting financial exposure before it materializes in the field.
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
                        <div className={styles.contactCol}>
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

            {/* BACKGROUND BRAND TEXT */}
            <div className={styles.brandTextContainer}>
                <h1
                    className={styles.brandText}
                    style={{ fontSize: "clamp(5rem, 18vw, 18rem)" }}
                >
                    CAPTUS
                </h1>
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
