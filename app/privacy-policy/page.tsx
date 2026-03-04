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
                            Captus ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Captus when you visit our website (captus.ai) and use our predictive risk intelligence platform.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>1. Information We Collect</h2>
                        <p>
                            We collect information from you when you interact with our website, request a demo, or use our services. This may include your name, email address, company name, professional title, and project scale data necessary for establishing connectivity to our platform.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>2. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to operate, maintain, and provide the features of our platform, to communicate with you, and to personalize your experience. We do not sell your personal data to third parties.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>3. Data Security</h2>
                        <p>
                            We implement enterprise-grade security measures to protect your data. Given the sensitive nature of construction documentation and financial risk data, we employ industry-standard encryption protocols both in transit and at rest.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>4. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@captus.ai" style={{ color: "#CC5500", textDecoration: "none" }}>info@captus.ai</a>.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
