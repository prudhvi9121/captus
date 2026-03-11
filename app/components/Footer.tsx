"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-[#0A0A0A] text-white border-t border-white/10 overflow-hidden">

            {/* TOP SPACE */}
            <div className="h-16 sm:h-24 lg:h-15" />

            {/* MAIN FOOTER */}
            <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* LEFT SECTION */}
                    <div className="max-w-md space-y-6">

                        <img
                            src="/Captus Logo_A7.png"
                            alt="Captus Logo"
                            className="h-10 sm:h-12"
                        />

                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                            Predictive risk intelligence platform for construction owners.
                            Intercepting financial exposure before it materializes in the
                            field.
                        </p>

                    </div>

                    {/* RIGHT SECTION */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8">
                        {/* COMPANY */}
                        <div className="flex flex-col space-y-4">
                            <span className="text-xs tracking-[0.25em] text-white/40 uppercase">
                                Company
                            </span>

                            <Link href="/founder" className="text-gray-400 hover:text-orange-500 transition">
                                Founder
                            </Link>

                            <Link href="/team" className="text-gray-400 hover:text-orange-500 transition">
                                Team
                            </Link>

                            <Link href="/careers" className="text-gray-400 hover:text-orange-500 transition">
                                Careers
                            </Link>

                            <Link href="/investors" className="text-gray-400 hover:text-orange-500 transition">
                                Investors
                            </Link>
                        </div>

                        {/* LEGAL */}
                        <div className="flex flex-col space-y-4">
                            <span className="text-xs tracking-[0.25em] text-white/40 uppercase">
                                Legal
                            </span>

                            <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition">
                                Privacy Policy
                            </Link>

                            <Link href="/terms-of-service" className="text-gray-400 hover:text-orange-500 transition">
                                Terms of Service
                            </Link>
                        </div>

                        {/* CONTACT */}
                        <div className="flex flex-col space-y-4">
                            <span className="text-xs tracking-[0.25em] text-white/40 uppercase">
                                Contact
                            </span>

                            <a
                                href="mailto:info@captus.ai"
                                className="text-gray-400 hover:text-orange-500 transition"
                            >
                                info@captus.ai
                            </a>

                            <Link
                                href="/book-demo"
                                className="text-gray-400 hover:text-orange-500 transition"
                            >
                                Book a Demo
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* BACKGROUND BRAND TEXT */}
            <div className="w-full flex justify-center mt-16 sm:mt-20 lg:mt-24 mb-12 sm:mb-16 pointer-events-none select-none opacity-[0.10]">
                <h1
                    className="font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-[#0A0A0A] tracking-tight"
                    style={{ fontSize: "clamp(5rem, 20vw, 20rem)" }}
                >
                    CAPTUS
                </h1>
            </div>

            {/* BOTTOM BAR */}
            <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 pb-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">

                <p className="text-white/40 text-sm text-center sm:text-left">
                    © {new Date().getFullYear()} Captus AI. All rights reserved.
                </p>

                <div className="flex items-center gap-8">
                    <a
                        href="https://linkedin.com"
                        className="text-white/40 hover:text-white text-sm transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://twitter.com"
                        className="text-white/40 hover:text-white text-sm transition"
                    >
                        Twitter (X)
                    </a>
                </div>

            </div>
        </footer>
    );
}