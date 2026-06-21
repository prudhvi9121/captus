"use client";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Image from "next/image";

const teamMembers = [
    {
        name: "Alley (Tong) Wu",
        role: "Founding AI Engineer",
        image: "/Alley.avif",
        linkedin: "https://www.linkedin.com/in/alley-wu/",
        bio: "Alley is a Founding AI Engineer at Captus, where she designs the agentic systems that turn fragmented project data into clear, early risk signals. She works across the full stack of the platform, from retrieval and reasoning pipelines to the dashboards teams rely on every day. She is drawn to problems where messy, real-world data meets rigorous engineering, and focuses on making the agent both accurate and genuinely useful in the field. Outside of shipping product, she is a strong advocate for thoughtful, human-centered AI."
    },
    {
        name: "Khanak Agrawal",
        role: "Founding AI Engineer",
        image: "/Khanak.avif",
        linkedin: "https://www.linkedin.com/in/khanak-agrawal/",
        bio: "Khanak is a Founding AI Engineer at Captus, focused on the data infrastructure and machine learning that power the platform's knowledge base. She builds the pipelines that ingest emails, documents, and project records and make them queryable in seconds. With a sharp eye for reliability and detail, she ensures the answers Captus surfaces are trustworthy enough for high-stakes capital decisions. She is energized by early-stage building and the chance to shape a product from the ground up."
    },
    {
        name: "Youssef Benaouda",
        role: "AI Engineer",
        image: "/Youssef.avif",
        linkedin: "https://www.linkedin.com/in/youssef-benaouda-09327b233/",
        bio: "Youssef is an AI Engineer at Captus, working on the models and integrations that connect Captus to the tools project teams already use. He builds and refines the agent's reasoning capabilities, helping it understand the nuances of budgets, schedules, and operational risk. He thrives on fast iteration and shipping features that make a measurable difference for users. Curious and collaborative, he is always looking for the next way to make the platform smarter."
    }
];

function Section({ children }: { children: React.ReactNode }) {
    const ref = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
}

export default function Team() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                background: "var(--bg)",
            }}
        >
            <Navbar />

            <main
                className="px-4 sm:px-10 md:px-12"
                style={{
                    flex: 1,
                    paddingTop: "120px",
                    paddingBottom: "80px",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div className="w-full max-w-[1000px]">

                    {/* ── Page Header ── */}
                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "clamp(48px, 6vw, 72px)",
                        }}
                    >
                        <h1
                            className="font-display"
                            style={{
                                fontSize: "clamp(28px, 5vw, 48px)",
                                color: "var(--text-primary)",
                                marginBottom: "16px",
                            }}
                        >
                            Our Team
                        </h1>

                        <p
                            className="px-2 sm:px-0"
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "clamp(15px, 1.5vw, 18px)",
                                lineHeight: 1.6,
                                maxWidth: "600px",
                                margin: "0 auto",
                            }}
                        >
                            Captus is led by experienced industry operators with deep
                            expertise in AI, data systems, and complex construction workflows.
                        </p>
                    </div>

                    {/* ── Founder Section ── */}
                    <Section>
                        <div style={{ marginBottom: "clamp(56px, 8vw, 80px)" }}>
                            <p
                                className="text-center lg:text-left"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "#CC5500",
                                    marginBottom: "24px",
                                }}
                            >
                                Leadership
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12 items-start w-full">

                                {/* Left: portrait */}
                                <div className="flex flex-col items-center lg:items-start gap-4">
                                    <div
                                        className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none mx-auto lg:mx-0 relative"
                                        style={{
                                            aspectRatio: "1/1",
                                            background: "var(--surface-2)",
                                            borderRadius: "16px",
                                            border: "1px solid var(--border)",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <Image
                                            src="/Anatoly.jpg"
                                            alt="Anatoly Khen - Founder & CEO"
                                            fill
                                            style={{ objectFit: "cover" }}
                                            sizes="(max-width: 768px) 320px, 320px"
                                            quality={60}
                                        />
                                    </div>

                                    <div className="text-center lg:text-left">
                                        <h2
                                            className="font-display"
                                            style={{
                                                fontSize: "clamp(18px, 2.5vw, 24px)",
                                                color: "var(--text-primary)",
                                            }}
                                        >
                                            Anatoly Khen
                                        </h2>

                                        <p
                                            style={{
                                                color: "#CC5500",
                                                fontWeight: 700,
                                                fontSize: "15px",
                                                marginTop: "4px",
                                            }}
                                        >
                                            Founder & CEO
                                        </p>

                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                flexWrap: "wrap",
                                                gap: "10px",
                                                marginTop: "24px",
                                            }}
                                            className="justify-center lg:justify-start"
                                        >
                                            <a
                                                href="https://www.linkedin.com/in/anatolykhen/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    padding: "8px 16px",
                                                    borderRadius: "50px",
                                                    background: "#CC5500",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    color: "#FFFFFF",
                                                    textDecoration: "none",
                                                    fontSize: "11px",
                                                    fontFamily: '"Good Times", system-ui, sans-serif',
                                                    letterSpacing: "0.03em",
                                                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                                                    boxShadow: "0 4px 12px rgba(204, 85, 0, 0.12)",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = "translateY(-2px)";
                                                    e.currentTarget.style.backgroundColor = "#A34400";
                                                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(204, 85, 0, 0.2)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.backgroundColor = "#CC5500";
                                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(204, 85, 0, 0.12)";
                                                }}
                                                title="LinkedIn"
                                            >
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                    <rect x="2" y="9" width="4" height="12"></rect>
                                                    <circle cx="4" cy="4" r="2"></circle>
                                                </svg>
                                                <span style={{ paddingTop: "1px" }}>LINKEDIN</span>
                                            </a>
                                            <a
                                                href="https://anatoly.ai/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    padding: "8px 16px",
                                                    borderRadius: "50px",
                                                    background: "#CC5500",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    color: "#FFFFFF",
                                                    textDecoration: "none",
                                                    fontSize: "11px",
                                                    fontFamily: '"Good Times", system-ui, sans-serif',
                                                    letterSpacing: "0.03em",
                                                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                                                    boxShadow: "0 4px 12px rgba(204, 85, 0, 0.12)",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = "translateY(-2px)";
                                                    e.currentTarget.style.backgroundColor = "#A34400";
                                                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(204, 85, 0, 0.2)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = "translateY(0)";
                                                    e.currentTarget.style.backgroundColor = "#CC5500";
                                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(204, 85, 0, 0.12)";
                                                }}
                                                title="Personal Website"
                                            >
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                                </svg>
                                                <span style={{ paddingTop: "1px" }}>ANATOLY.AI</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: bio */}
                                <div
                                    className="w-full max-w-[720px] mx-auto lg:mx-0 px-2 sm:px-0 text-left"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "18px",
                                    }}
                                >
                                    <p
                                        style={{
                                            color: "var(--text-secondary)",
                                            fontSize: "clamp(15px, 1.5vw, 17px)",
                                            lineHeight: 1.75,
                                        }}
                                    >
                                        Captus is led by Anatoly Khen, Founder and CEO, with a
                                        proven background in product and go-to-market strategy
                                        across leading AI and technology organizations. He brings
                                        deep experience from past roles at innovative companies
                                        including Revelen.ai, Axon, Paylocity, and VIEVU.
                                    </p>

                                    <p
                                        style={{
                                            color: "var(--text-secondary)",
                                            fontSize: "clamp(15px, 1.5vw, 17px)",
                                            lineHeight: 1.75,
                                        }}
                                    >
                                        With an Executive MBA from MIT, Anatoly blends rigorous
                                        academic frameworks with practical operational expertise to
                                        solve complex systemic issues within the construction
                                        industry. He recognizes that owner returns are
                                        fundamentally eroded by preventable risk and has focused
                                        Captus exclusively on solving this upstream visibility
                                        problem.
                                    </p>

                                    {/* <div
                                        style={{
                                            padding: "clamp(16px, 3vw, 24px)",
                                            background: "var(--surface-1)",
                                            borderRadius: "10px",
                                            border: "1px solid var(--border)",
                                            marginTop: "8px",
                                        }}
                                    >
                                        <h3
                                            className="font-display"
                                            style={{
                                                fontSize: "clamp(14px, 1.8vw, 16px)",
                                                color: "var(--text-primary)",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            Professional Background
                                        </h3>

                                        <ul
                                            style={{
                                                color: "var(--text-secondary)",
                                                fontSize: "clamp(14px, 1.4vw, 15px)",
                                                lineHeight: 1.7,
                                                paddingLeft: "20px",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "6px",
                                            }}
                                        >
                                            <li><strong>MIT</strong> - Executive MBA</li>
                                            <li><strong>Revelen.ai</strong> - Leadership & Strategy</li>
                                            <li><strong>Axon</strong> - Product & Market Growth</li>
                                            <li><strong>Paylocity</strong> - Technology & Scale</li>
                                            <li><strong>VIEVU</strong> - Go-to-Market Expansion</li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* Divider */}
                    <div
                        style={{
                            height: "1px",
                            background: "var(--border)",
                            marginBottom: "clamp(48px, 6vw, 64px)",
                        }}
                    />

                    {/* Team Section */}
                    <Section>
                        <div style={{ marginBottom: "clamp(56px, 8vw, 80px)" }}>
                            <p
                                className="text-center"
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    color: "#CC5500",
                                    marginBottom: "16px",
                                }}
                            >
                                The Team
                            </p>

                            <p
                                className="text-center px-2 sm:px-0"
                                style={{
                                    color: "var(--text-secondary)",
                                    fontSize: "clamp(15px, 1.5vw, 18px)",
                                    lineHeight: 1.6,
                                    maxWidth: "600px",
                                    margin: "0 auto clamp(48px, 6vw, 64px) auto",
                                }}
                            >
                                The engineers building the intelligence behind Captus — turning
                                fragmented project data into early, actionable risk signals.
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "clamp(48px, 6vw, 64px)",
                                    width: "100%",
                                    margin: "0 auto",
                                }}
                            >
                                {teamMembers.map((member, i) => {
                                    const isOdd = i % 2 === 1;
                                    return (
                                        <div
                                            key={i}
                                            className={`grid grid-cols-1 ${
                                                isOdd
                                                    ? "lg:grid-cols-[1.8fr_1.2fr]"
                                                    : "lg:grid-cols-[1.2fr_1.8fr]"
                                            } gap-6 lg:gap-16 items-center w-full`}
                                        >
                                            {/* Image Column */}
                                            <div
                                                className={`w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none mx-auto lg:mx-0 relative ${
                                                    isOdd ? "lg:order-2" : "lg:order-1"
                                                }`}
                                                style={{
                                                    aspectRatio: "4/5",
                                                    background: "var(--surface-2)",
                                                    borderRadius: "16px",
                                                    border: "1px solid var(--border)",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                <Image
                                                    src={member.image}
                                                    alt={`${member.name} - ${member.role}`}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                    sizes="(max-width: 768px) 320px, 320px"
                                                    quality={60}
                                                />
                                            </div>

                                            {/* Text Column */}
                                            <div
                                                className={`w-full flex flex-col gap-4 text-left sm:px-0 ${
                                                    isOdd ? "lg:order-1" : "lg:order-2"
                                                }`}
                                            >
                                                <div className="text-center lg:text-left">
                                                    <h3
                                                        className="font-display"
                                                        style={{
                                                            fontSize: "clamp(20px, 2.5vw, 28px)",
                                                            color: "var(--text-primary)",
                                                            textTransform: "uppercase",
                                                            marginBottom: "4px",
                                                        }}
                                                    >
                                                        {member.name}
                                                    </h3>

                                                    <p
                                                        style={{
                                                            color: "#CC5500",
                                                            fontWeight: 700,
                                                            fontSize: "13px",
                                                            textTransform: "uppercase",
                                                            letterSpacing: "0.08em",
                                                        }}
                                                    >
                                                        {member.role}
                                                    </p>
                                                </div>

                                                <p
                                                    style={{
                                                        color: "var(--text-secondary)",
                                                        fontSize: "clamp(15px, 1.5vw, 17px)",
                                                        lineHeight: 1.75,
                                                    }}
                                                >
                                                    {member.bio}
                                                </p>

                                                <div className="flex justify-center lg:justify-start">
                                                    <a
                                                        href={member.linkedin}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "6px",
                                                            color: "#CC5500",
                                                            textDecoration: "none",
                                                            fontWeight: 700,
                                                            fontSize: "12px",
                                                            letterSpacing: "0.08em",
                                                            marginTop: "8px",
                                                            transition: "opacity 0.25s ease",
                                                        }}
                                                        className="hover:opacity-80"
                                                    >
                                                        <svg
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                            <rect x="2" y="9" width="4" height="12"></rect>
                                                            <circle cx="4" cy="4" r="2"></circle>
                                                        </svg>
                                                        <span>LINKEDIN</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Section>
                </div>
            </main>

            <Footer />
        </div>
    );
}