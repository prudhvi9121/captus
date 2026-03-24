"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />
            <main style={{ flex: 1, padding: "180px 24px 100px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: "800px" }}>
                    <div style={{ marginBottom: "48px" }}>
                        <h1 className="font-display" style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "var(--text-primary)", marginBottom: "16px" }}>
                            Terms and Conditions
                        </h1>
                        <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.6 }}>
                            Last updated: 24/3/2026
                        </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.7 }}>
                        <p>
                            Welcome to Captus. By accessing or using our website, products, or services, you agree to be bound by the following Terms and Conditions.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>1. Who can use Captus</h2>
                        <p>
                            You must be at least 18 years old to use Captus. By using the Service, you confirm that you meet this requirement and that all information you provide is accurate and up to date.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>2. Your Account</h2>
                        <p>
                            You may need to create an account to access certain features. You are responsible for keeping your login credentials secure and for all activity under your account.
                        </p>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>3. User Responsibilities</h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li>3.1. You agree to use our services for lawful purposes only.</li>
                            <li>3.2. You are responsible for ensuring that your use of our platform complies with all applicable laws and regulations.</li>
                            <li>3.3. Unauthorized use, such as reverse engineering, reselling, or tampering with our AI systems, is strictly prohibited.</li>
                        </ul>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>4. Privacy and Data Use</h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li>4.1. Your privacy is important to us. By using Captus AI, you agree to our Privacy Policy.</li>
                            <li>4.2. Data collected from your usage may be used to improve our AI algorithms and enhance our services.</li>
                            <li>4.3. Sensitive or personally identifiable information will never be shared without your consent, except as required by law.</li>
                        </ul>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>5. Intellectual Property</h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li>5.1. All AI models, algorithms, and underlying technology provided by Captus remain the intellectual property of Captus.</li>
                            <li>5.2. You may not duplicate, copy, distribute, or exploit any part of our services without prior written consent.</li>
                        </ul>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>6. Limitation of Liability</h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li>6.1. Captus is provided &quot;as is&quot; without warranties of any kind.</li>
                            <li>6.2. We are not responsible for any losses, damages, or liabilities arising from the use of our services.</li>
                            {/* <li>6.3. While we strive for accuracy, our AI outputs are not guaranteed to be error-free or appropriate for all use cases.</li> */}
                        </ul>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>7. Data Ownership</h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li>7.1. You keep full ownership of any data you upload to Captus.</li>
                            <li>7.2. You give Captus permission to use your data for the platform.</li>
                            <li>7.3. Captus does not sell or share your data outside of providing the service.</li>
                            <li>7.4. Captus may analyze your data to identify risks and generate insights.</li>
                            <li>7.6. All Captus software, technology, and systems remain the property of Captus.</li>
                            <li>7.7. Feedback you provide can be used by Captus without restriction.</li>
                        </ul>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>8. Termination</h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li>8.1. We reserve the right to suspend or terminate your access to our services if you violate these Terms and Conditions.</li>
                            <li>8.2. Upon termination, your right to use the platform ceases immediately.</li>
                        </ul>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>9. Changes to Terms</h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li>9.1. We may update these Terms and Conditions periodically. Any changes will be posted on this page with a new effective date.</li>
                            <li>9.2. Continued use of our services constitutes acceptance of the updated terms.</li>
                        </ul>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>10. Pricing</h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                            <li>10.1. Captus may change pricing at any time. For existing users, any changes will be communicated in advance and take effect at the start of the next billing cycle (if applicable).</li>
                        </ul>

                        <h2 className="font-display" style={{ fontSize: "20px", color: "var(--text-primary)", marginTop: "16px" }}>11. Contact Us</h2>
                        <p>
                            If you have questions or concerns about these Terms and Conditions, please contact us at: <a href="mailto:info@captus.ai" style={{ color: "#CC5500", textDecoration: "none" }}>info@captus.ai</a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
