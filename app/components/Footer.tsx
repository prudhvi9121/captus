"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-[#0A0A0A] text-white border-t border-white/10 overflow-hidden">

            {/* TOP SPACE */}
            <div className="h-12 sm:h-20 lg:h-16" />

            {/* MAIN FOOTER */}
            <div className=" mx-auto px-6 sm:px-10 lg:px-12 relative z-10 flex  justify-center">

                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 lg:gap-100 w-fit">

                    {/* LEFT SECTION - Logo & Pitch */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-[320px]">
                        <img
                            src="/Captus Logo_A7.png"
                            alt="Captus Logo"
                            className="h-8 sm:h-9"
                        />
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            Predictive risk intelligence platform for construction owners.
                            Intercepting financial exposure before it materializes in the field.
                        </p>
                    </div>

                    {/* RIGHT SECTION - Links Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-10">

                        {/* COMPANY */}
                        <div className="flex flex-col items-center lg:items-start space-y-4">
                            <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase font-semibold">
                                Company
                            </span>
                            <div className="flex flex-col items-center lg:items-start space-y-2">
                                <Link href="/team" className="text-sm text-gray-400 hover:text-orange-500 transition">Team</Link>
                                <Link href="/careers" className="text-sm text-gray-400 hover:text-orange-500 transition">Careers</Link>
                                <Link href="/investors" className="text-sm text-gray-400 hover:text-orange-500 transition">Investors</Link>
                            </div>
                        </div>

                        {/* LEGAL */}
                        <div className="flex flex-col items-center lg:items-start space-y-4">
                            <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase font-semibold">
                                Legal
                            </span>
                            <div className="flex flex-col items-center lg:items-start space-y-2">
                                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-orange-500 transition">Privacy Policy</Link>
                                <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-orange-500 transition">Terms of Service</Link>
                            </div>
                        </div>

                        {/* CONTACT */}
                        <div className="flex flex-col items-center lg:items-start space-y-4 col-span-2 sm:col-span-1">
                            <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase font-semibold">
                                Contact
                            </span>
                            <div className="flex flex-col items-center lg:items-start space-y-2">
                                <a href="mailto:info@captus.ai" className="text-sm text-gray-400 hover:text-orange-500 transition">info@captus.ai</a>
                                <Link href="/book-demo" className="text-sm text-gray-400 hover:text-orange-500 transition">Book a Demo</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* BACKGROUND BRAND TEXT */}
            <div className="w-full flex justify-center mt-20 sm:mt-28 mb-[-12px] pointer-events-none select-none opacity-[0.05]">
                <h1
                    className="font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent tracking-tighter text-center"
                    style={{ fontSize: "clamp(5rem, 18vw, 18rem)" }}
                >
                    CAPTUS
                </h1>
            </div>

            {/* BOTTOM BAR — sits above brand text */}
            <div
                style={{
                    margin: "0",
                    borderTop: "1px solid rgba(204,85,0,0.25)",
                    borderBottom: "1px solid rgba(204,85,0,0.25)",
                    background: "linear-gradient(90deg, rgba(204,85,0,0.08) 0%, rgba(255,123,26,0.04) 50%, rgba(204,85,0,0.08) 100%)",
                    padding: "18px clamp(24px, 6vw, 64px)",
                    gap: "12px",
                }}
                className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center"
            >
                {/* Copyright */}
                <p
                    style={{
                        color: "rgba(255,255,255,0.75)",
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontFamily: "inherit",
                    }}
                    className="text-center sm:text-left"
                >
                    © {new Date().getFullYear()} Captus AI.&nbsp;&nbsp;All rights reserved.
                </p>

                {/* Social links */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {[
                        { label: "LinkedIn", href: "https://www.linkedin.com/company/captus-ai/about/", target: "_blank", rel: "noopener noreferrer" },
                        // { label: "Twitter (X)", href: "https://twitter.com" },
                    ].map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            style={{
                                color: "#CC5500",
                                fontSize: "11px",
                                padding: "7px 16px",
                                borderRadius: "9999px",
                                border: "1px solid rgba(204,85,0,0.45)",
                                background: "rgba(204,85,0,0.08)",
                                transition: "all 0.2s ease",
                                textDecoration: "none",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase" as const,
                                fontWeight: 600,
                            }}
                            onMouseEnter={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background = "#CC5500";
                                el.style.color = "#fff";
                                el.style.borderColor = "#CC5500";
                            }}
                            onMouseLeave={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background = "rgba(204,85,0,0.08)";
                                el.style.color = "#CC5500";
                                el.style.borderColor = "rgba(204,85,0,0.45)";
                            }}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>


        </footer>
    );
}