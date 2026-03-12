"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-[#0A0A0A] text-white border-t border-white/10 overflow-hidden">

            {/* TOP SPACE */}
            <div className="h-12 sm:h-20 lg:h-16" />

            {/* MAIN FOOTER */}
            <div className=" mx-auto px-6 sm:px-10 lg:px-12 relative z-10 flex  justify-center">

                {/* THE FIX: Use flex-col (mobile) and flex-row (desktop).
                  w-fit ensures the container doesn't stretch to 100% width,
                  allowing justify-center on the parent to actually work.
                */}
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
            <div className="w-full flex justify-center mt-16 sm:mt-20 lg:mt-24 mb-12 sm:mb-16 pointer-events-none select-none opacity-[0.05]">
                <h1
                    className="font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent tracking-tighter text-center"
                    style={{ fontSize: "clamp(5rem, 18vw, 18rem)" }}
                >
                    CAPTUS
                </h1>
            </div>

            {/* BOTTOM BAR */}
            <div className="mx-auto px-6 sm:px-10 lg:px-12 pb-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
                <p className="text-white/40 text-[11px] text-center sm:text-left uppercase tracking-wider">
                    © {new Date().getFullYear()} Captus AI. All rights reserved.
                </p>

                <div className="flex items-center gap-8">
                    <a href="https://linkedin.com" className="text-white/40 hover:text-white text-[11px] uppercase tracking-wider transition">LinkedIn</a>
                    <a href="https://twitter.com" className="text-white/40 hover:text-white text-[11px] uppercase tracking-wider transition">Twitter (X)</a>
                </div>
            </div>
        </footer>
    );
}