"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
            <main style={{ flex: 1, padding: "180px 24px 100px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: "800px" }}>
                    <div style={{ marginBottom: "48px" }}>
                        <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "var(--text-primary)", marginBottom: "16px" }}>
                            Privacy Policy
                        </h1>
                        <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.6 }}>
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.7 }}>
                        <p>
                            At Captus, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website, services, and products. By using our platform, you consent to the practices described in this policy.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>1. Information We Collect</h2>
                        <p>We collect the following types of data when you use Captus:</p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li>Personal information such as name, email, company, and role</li>
                            <li><strong>User input:</strong> Information you provide for AI suggestions</li>
                            <li>Data generated from platform use such as interactions, feature usage, and system logs</li>
                            <li>Information from connected tools or integrations if you choose to link them</li>
                            <li>Technical data such as device, browser, and basic usage analytics</li>
                        </ul>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>2. How We Use Your Data</h2>
                        <p>We use your information to:</p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li>Provide personalized content and recommendations using AI</li>
                            <li>Improve the Service based on usage patterns</li>
                            <li>Communicate with you about updates, features, or support</li>
                            <li>Ensure security and prevent misuse</li>
                        </ul>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>3. AI & Automated Processing</h2>
                        <p>
                            Your data may be processed through AI systems to generate customized content suggestions. These outputs are generated automatically and are intended to assist you, not replace human judgment.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>4. Data Sharing</h2>
                        <p>
                            We do not sell your data. We may share it with trusted service providers (e.g., cloud hosting, analytics tools) strictly to support the operation of Captus, and only under confidentiality agreements.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>5. Data Retention</h2>
                        <p>
                            We keep your data as long as your account is active or as needed to provide services. You may request deletion at any time by contacting us.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>6. Your Rights</h2>
                        <p>You can:</p>
                        <ul style={{ paddingLeft: "20px", listStyleType: "disc", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li>Request access to the data we hold about you</li>
                            <li>Ask for corrections or updates</li>
                            <li>Delete your account and associated data</li>
                            <li>Withdraw consent for data processing</li>
                        </ul>
                        <p>
                            To exercise any of these rights, email us at <a href="mailto:info@captus.ai" style={{ color: "#CC5500", textDecoration: "none" }}>info@captus.ai</a>.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>7. Security</h2>
                        <p>
                            We use industry-standard encryption and security measures to protect your data.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>8. Children&apos;s Privacy</h2>
                        <p>
                            Captus is not intended for children under 13. We do not knowingly collect data from anyone under this age.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>9. Updates to This Policy</h2>
                        <p>
                            We may update this Privacy Policy. If changes are made, you&apos;ll be notified through the app or email.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>10. Contact</h2>
                        <p>
                            For questions or concerns, contact us at: <a href="mailto:info@captus.ai" style={{ color: "#CC5500", textDecoration: "none" }}>info@captus.ai</a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
