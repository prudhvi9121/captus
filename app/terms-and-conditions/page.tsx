"use client";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MONO = '"IBM Plex Mono", monospace';
const SANS = '"IBM Plex Sans", sans-serif';

export default function TermsAndConditions() {
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
                            Terms and Conditions
                        </h1>
                        <p style={{
                            margin: 0,
                            fontFamily: SANS,
                            color: "rgb(107, 101, 95)",
                            fontSize: "15px",
                            fontWeight: 400,
                        }}>
                            Last updated: 24/3/2026
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
                            Welcome to Captus. By accessing or using our website, products, or services, you agree to be bound by the following Terms and Conditions.
                        </p>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            1. Who can use Captus
                        </h2>
                        <p>
                            You must be at least 18 years old to use Captus. By using the Service, you confirm that you meet this requirement and that all information you provide is accurate and up to date.
                        </p>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            2. Your Account
                        </h2>
                        <p>
                            You may need to create an account to access certain features. You are responsible for keeping your login credentials secure and for all activity under your account.
                        </p>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            3. User Responsibilities
                        </h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px", fontWeight: 300 }}>
                            <li>3.1. You agree to use our services for lawful purposes only.</li>
                            <li>3.2. You are responsible for ensuring that your use of our platform complies with all applicable laws and regulations.</li>
                            <li>3.3. Unauthorized use, such as reverse engineering, reselling, or tampering with our AI systems, is strictly prohibited.</li>
                        </ul>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            4. Privacy and Data Use
                        </h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px", fontWeight: 300 }}>
                            <li>4.1. Your privacy is important to us. By using Captus AI, you agree to our Privacy Policy.</li>
                            <li>4.2. Data collected from your usage may be used to improve our AI algorithms and enhance our services.</li>
                            <li>4.3. Sensitive or personally identifiable information will never be shared without your consent, except as required by law.</li>
                        </ul>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            5. Intellectual Property
                        </h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px", fontWeight: 300 }}>
                            <li>5.1. All AI models, algorithms, and underlying technology provided by Captus remain the intellectual property of Captus.</li>
                            <li>5.2. You may not duplicate, copy, distribute, or exploit any part of our services without prior written consent.</li>
                        </ul>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            6. Limitation of Liability
                        </h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px", fontWeight: 300 }}>
                            <li>6.1. Captus is provided &quot;as is&quot; without warranties of any kind.</li>
                            <li>6.2. We are not responsible for any losses, damages, or liabilities arising from the use of our services.</li>
                        </ul>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            7. Data Ownership
                        </h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px", fontWeight: 300 }}>
                            <li>7.1. You keep full ownership of any data you upload to Captus.</li>
                            <li>7.2. You give Captus permission to use your data for the platform.</li>
                            <li>7.3. Captus does not sell or share your data outside of providing the service.</li>
                            <li>7.4. Captus may analyze your data to identify risks and generate insights.</li>
                            <li>7.6. All Captus software, technology, and systems remain the property of Captus.</li>
                            <li>7.7. Feedback you provide can be used by Captus without restriction.</li>
                        </ul>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            8. Termination
                        </h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px", fontWeight: 300 }}>
                            <li>8.1. We reserve the right to suspend or terminate your access to our services if you violate these Terms and Conditions.</li>
                            <li>8.2. Upon termination, your right to use the platform ceases immediately.</li>
                        </ul>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            9. Changes to Terms
                        </h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px", fontWeight: 300 }}>
                            <li>9.1. We may update these Terms and Conditions periodically. Any changes will be posted on this page with a new effective date.</li>
                            <li>9.2. Continued use of our services constitutes acceptance of the updated terms.</li>
                        </ul>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            10. Pricing
                        </h2>
                        <ul style={{ paddingLeft: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "8px", fontWeight: 300 }}>
                            <li>10.1. Captus may change pricing at any time. For existing users, any changes will be communicated in advance and take effect at the start of the next billing cycle (if applicable).</li>
                        </ul>

                        <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "rgb(21, 17, 14)", marginTop: "16px", marginBottom: 0 }}>
                            11. Contact Us
                        </h2>
                        <p>
                            If you have questions or concerns about these Terms and Conditions, please contact us at: <a href="mailto:info@captus.ai" style={{ color: "rgb(204, 85, 0)", fontWeight: 500, textDecoration: "none" }} className="hover:underline">info@captus.ai</a>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
