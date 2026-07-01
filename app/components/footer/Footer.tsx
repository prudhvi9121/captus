"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer style={{ background: "rgb(12, 10, 8)", borderTop: "1px solid rgba(255, 255, 255, 0.1)", zIndex: 15, position: "relative" }}>
            
            {styleTag}

            {/* Main Footer Container */}
            <div className="cap-x" style={{ maxWidth: "1180px", margin: "0 auto", display: "flex", justifyContent: "space-between", gap: "56px", flexWrap: "wrap", padding: "54px 56px 30px" }}>
                
                {/* Left Column: Branding */}
                <div style={{ maxWidth: "300px" }}>
                    <div style={{ display: "inline-flex", alignItems: "center" }}>
                        <Image 
                            src="/captus-footer-logo.png" 
                            alt="Captus.AI" 
                            width={112}
                            height={18}
                            style={{ height: "18px", width: "auto", display: "block" }} 
                        />
                    </div>
                    <p style={{ margin: "18px 0px 0px", fontSize: "14px", lineHeight: "1.6", fontWeight: 300, color: "rgba(255, 255, 255, 0.6)", fontFamily: '"IBM Plex Sans", sans-serif' }}>
                        The early-warning platform for construction. See cost and schedule risk before it costs you.
                    </p>
                    <a 
                        href="https://www.linkedin.com/company/captus-ai/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ 
                            display: "inline-flex", 
                            alignItems: "center", 
                            gap: "9px", 
                            marginTop: "24px", 
                            background: "rgb(204, 85, 0)", 
                            color: "rgb(255, 255, 255)", 
                            fontSize: "12.5px", 
                            fontWeight: 600, 
                            letterSpacing: "0.03em", 
                            padding: "11px 18px", 
                            borderRadius: "8px", 
                            textDecoration: "none",
                            fontFamily: '"IBM Plex Sans", sans-serif',
                            transition: "background 0.2s"
                        }}
                        className="hover:bg-[#B54A00]"
                    >
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                            <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.08 1.4-2.08 2.85V21H9z" />
                        </svg>
                        Follow on LinkedIn
                    </a>
                </div>

                {/* Right Columns: Links Grid */}
                <div style={{ display: "flex", gap: "64px", flexWrap: "wrap" }}>
                    
                    {/* Product */}
                    <div>
                        <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.4)", marginBottom: "18px", fontFamily: '"IBM Plex Sans", sans-serif' }}>
                            Product
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                            <Link href="/#platform" className="cap-footlink">
                                Platform
                            </Link>
                            <Link href="/#how-it-works" className="cap-footlink">
                                How it works
                            </Link>
                            <Link href="/#platform" className="cap-footlink">
                                Risk Dashboard
                            </Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.4)", marginBottom: "18px", fontFamily: '"IBM Plex Sans", sans-serif' }}>
                            Company
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                            <Link href="/team" className="cap-footlink">
                                Team
                            </Link>
                            <Link href="/careers" className="cap-footlink">
                                Careers
                            </Link>
                            <Link href="/investors" className="cap-footlink">
                                Investors
                            </Link>
                        </div>
                    </div>

                    {/* Get Started */}
                    <div>
                        <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.4)", marginBottom: "18px", fontFamily: '"IBM Plex Sans", sans-serif' }}>
                            Get started
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                            <Link href="/waitlist" className="cap-footlink">
                                Join the waitlist
                            </Link>
                            <Link href="/book-demo" className="cap-footlink">
                                Book a demo
                            </Link>
                            <a href="https://app.captus.ai/login" className="cap-footlink">
                                Log in
                            </a>
                            <a href="mailto:info@captus.ai" className="cap-footlink">
                                info@captus.ai
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            {/* Bottom copyright & policy bar */}
            <div className="cap-x" style={{ maxWidth: "1180px", margin: "0px auto", display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", padding: "22px 56px 32px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255, 255, 255, 0.45)", fontFamily: '"IBM Plex Sans", sans-serif' }}>
                    © {new Date().getFullYear()} Captus AI. All rights reserved.
                </div>
                <div style={{ display: "flex", gap: "28px" }}>
                    <Link href="/privacy-policy" className="cap-footlink" style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.45)" }}>
                        Privacy
                    </Link>
                    <Link href="/terms-and-conditions" className="cap-footlink" style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.45)" }}>
                        Terms
                    </Link>
                </div>
            </div>

        </footer>
    );
}

const styleTag = (
    <style dangerouslySetInnerHTML={{ __html: `
        .cap-footlink {
            font-family: "IBM Plex Sans", sans-serif;
            font-size: 14px;
            font-weight: 300;
            color: rgba(255, 255, 255, 0.78);
            text-decoration: none;
            transition: color 0.2s ease;
        }
        .cap-footlink:hover {
            color: rgb(254, 114, 11) !important;
        }
    ` }} />
);
