"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative bg-[#0A0A0A] text-white overflow-hidden pt-32 sm:pt-40 lg:pt-56 pb-16 sm:pb-24 border-t border-white/10">
            {/* ── Main Content Container ── */}
            <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row justify-between mb-32 sm:mb-40 lg:mb-56 gap-16 sm:gap-24 lg:gap-32">

                {/* ── Left Column: Branding & Mission ── */}
                <div className="max-w-md lg:max-w-[400px]">
                    <div className="font-display text-4xl sm:text-5xl font-bold tracking-wider text-orange-500 mb-6 sm:mb-8">
                        CAPTUS.AI
                    </div>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-sm">
                        Predictive risk intelligence platform for construction owners. Intercepting financial exposure before it materializes in the field.
                    </p>
                </div>

                {/* ── Right Column: Navigation Links ── */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-24 w-full lg:w-auto">
                    {/* Navigation Group: Company */}
                    <div className="flex flex-col gap-5">
                        <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Company</span>
                        <Link href="/founder" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Founder</Link>
                        <Link href="/team" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Team</Link>
                        <Link href="/careers" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Careers</Link>
                        <Link href="/investors" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Investors</Link>
                    </div>

                    {/* Navigation Group: Legal */}
                    <div className="flex flex-col gap-5">
                        <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Legal</span>
                        <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Terms of Service</Link>
                    </div>

                    {/* Navigation Group: Contact */}
                    <div className="flex flex-col gap-5">
                        <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Contact</span>
                        <a href="mailto:info@captus.ai" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">info@captus.ai</a>
                        <Link href="/book-demo" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">Book a Demo</Link>
                    </div>
                </div>

            </div>

            {/* ── Massive Edge-to-Edge Typography ── */}
            <div className="w-full flex justify-center items-center overflow-hidden pointer-events-none select-none my-24 sm:my-32 lg:my-48 opacity-[0.15] mix-blend-plus-lighter">
                <h1 className="font-display font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-[#0A0A0A] tracking-tighter"
                    style={{ fontSize: "clamp(3rem, 22vw, 24rem)" }}>
                    CAPTUS
                </h1>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/[0.05]">
                <p className="text-white/40 text-sm">
                    © {new Date().getFullYear()} Captus AI. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300 text-sm">
                        LinkedIn
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors duration-300 text-sm">
                        Twitter (X)
                    </a>
                </div>
            </div>
        </footer>
    );
}
