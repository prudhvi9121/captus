"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
            <main style={{ flex: 1, padding: "180px 24px 100px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: "800px" }}>
                    <div style={{ marginBottom: "48px" }}>
                        <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "var(--text-primary)", marginBottom: "16px" }}>
                            Terms of Service
                        </h1>
                        <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.6 }}>
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.7 }}>
                        <p>
                            These Terms of Service ("Terms") govern your access to and use of the Captus platform and website. By accessing or using our services, you agree to be bound by these Terms.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>1. Information We Collect Use of the Platform</h2>
                        <p>
                            Captus is a predictive risk intelligence platform for construction owners. You agree to use the platform only for lawful purposes, and you are responsible for any data you ingest or connect to our services.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>2. Intellectual Property</h2>
                        <p>
                            The technology, methodology, risk intelligence models, and predictive analytics that comprise Captus are the exclusive property of Captus. Nothing in these Terms shall be construed as a transfer of proprietary rights.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>3. Data and Security</h2>
                        <p>
                            While Captus implements rigorous security and data protection protocols, we do not warrant that the platform will be entirely uninterrupted or error-free. You are responsible for ensuring your source documentation is accurate before ingestion into our predictive tools.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>4. Modifications</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Continued use of the platform after changes implies acceptance of the updated terms. If you have questions, please reach out directly at <a href="mailto:info@captus.ai" style={{ color: "#CC5500", textDecoration: "none" }}>info@captus.ai</a>.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
