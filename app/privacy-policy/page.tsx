"use client";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MONO = '"IBM Plex Mono", monospace';
const SANS = '"IBM Plex Sans", sans-serif';

export default function PrivacyPolicy() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#ffffff" }}>
            <Navbar />

            <main style={{
                flex: 1,
                position: "relative",
                overflow: "hidden",
                background: "rgb(246, 243, 238)",
                paddingTop: "140px",
                paddingBottom: "100px",
                display: "flex",
                justifyContent: "center",
            }}>
                {/* Grid Background */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    backgroundImage: `
                        linear-gradient(rgba(26, 23, 20, 0.043) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(26, 23, 20, 0.043) 1px, transparent 1px)
                    `,
                    backgroundSize: "62px 62px",
                    backgroundPosition: "center top",
                }} />

                {/* Orange glow */}
                <div style={{
                    position: "absolute",
                    left: "-160px",
                    top: "80px",
                    width: "520px",
                    height: "520px",
                    pointerEvents: "none",
                    background: "radial-gradient(circle, rgba(204, 85, 0, 0.07) 0%, rgba(204, 85, 0, 0) 68%)",
                }} />

                <div 
                    style={{
                        position: "relative",
                        zIndex: 1,
                        width: "100%",
                        maxWidth: "800px",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                    }}
                >
                    {/* Header */}
                    <div style={{ marginBottom: "48px" }}>
                        <h1 style={{
                            margin: 0,
                            fontFamily: MONO,
                            fontSize: "44px",
                            fontWeight: 400,
                            lineHeight: 1.1,
                            color: "rgb(21, 17, 14)",
                            marginBottom: "16px",
                        }}>
                            Privacy Policy
                        </h1>
                        <p style={{
                            margin: 0,
                            fontFamily: SANS,
                            color: "rgb(107, 101, 95)",
                            fontSize: "15px",
                            fontWeight: 400,
                        }}>
                            Last updated: 24/03/2026
                        </p>
                    </div>

                    {/* Content */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px",
                        color: "rgb(74, 70, 66)",
                        fontFamily: SANS,
                        fontSize: "16px",
                        lineHeight: 1.7,
                        fontWeight: 300,
                    }}>
                        <p>
                            At Captus, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website, services, and products. By using our platform, you consent to the practices described in this policy.
                        </p>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            1. Information We Collect
                        </h2>
                        <p>We collect the following types of data when you use Captus:</p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "8px", fontWeight: 300 }}>
                            <li>Personal information such as name, email, company, and role, etc.</li>
                            <li>User input: Information you provide for AI modeling and output</li>
                            <li>Data generated from platform use such as interactions, feature usage, and system logs</li>
                            <li>Information from connected tools or integrations if you choose to link them</li>
                            <li>Technical data such as device, browser, and basic usage analytics</li>
                        </ul>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            2. How We Use Your Data
                        </h2>
                        <p>We use your information to:</p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "8px", fontWeight: 300 }}>
                            <li>Do predictive analysis</li>
                            <li>Improve the Service based on usage patterns</li>
                        </ul>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            3. AI &amp; Automated Processing
                        </h2>
                        <p>
                            Your data may be processed through AI systems to generate recommendations. These outputs are generated automatically and are intended to assist you, not replace human judgment.
                        </p>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            4. Data Sharing
                        </h2>
                        <p>
                            We do not sell your data. We may share it with trusted service providers (e.g., cloud hosting, analytics tools) strictly to support the operation of Captus, and only under confidentiality agreements.
                        </p>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            5. Data Retention
                        </h2>
                        <p>
                            We keep your data as long as your account is active or as needed to provide services. You may request deletion at any time by contacting us.
                        </p>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            6. Your Rights
                        </h2>
                        <p>You can:</p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "8px", fontWeight: 300 }}>
                            <li>Request access to the data we hold about you</li>
                            <li>Ask for corrections or updates</li>
                            <li>Delete your account and associated data</li>
                            <li>Withdraw consent for data processing</li>
                        </ul>
                        <p>
                            To exercise any of these rights, email us at <a href="mailto:info@captus.ai" style={{ color: "rgb(204, 85, 0)", fontWeight: 500, textDecoration: "none" }} className="hover:underline">info@captus.ai</a>.
                        </p>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            7. Security
                        </h2>
                        <p>
                            We use industry-standard encryption and security measures to protect your data.
                        </p>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            8. Children&apos;s Privacy
                        </h2>
                        <p>
                            Captus is not intended for children under 13. We do not knowingly collect data from anyone under this age.
                        </p>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            9. Updates to This Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy. If changes are made, you&apos;ll be notified through the app or email.
                        </p>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            10. Contact
                        </h2>
                        <p>
                            For questions or concerns, contact us at: <a href="mailto:info@captus.ai" style={{ color: "rgb(204, 85, 0)", fontWeight: 500, textDecoration: "none" }} className="hover:underline">info@captus.ai</a>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
