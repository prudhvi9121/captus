"use client";

import Link from "next/link";

export default function CTA() {
    return (
        <section
            style={{
                padding: "clamp(40px, 5vw, 80px) clamp(16px, 5vw, 24px)",
                background: "#FFFFFF",
                textAlign: "center",
            }}
        >
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <h2 className="font-display" style={{ fontSize: "32px", marginBottom: "24px" }}>Evaluate Our Platform</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "16px", lineHeight: 1.6, marginBottom: "32px" }}>
                    Qualified owners and developers can request a private demo to evaluate how predictive risk intelligence can strengthen portfolio performance.
                </p>
                <Link href="/book-demo" style={{ textDecoration: 'none' }}>
                    <button className="btn-primary" style={{ padding: "14px 32px", fontSize: "16px" }}>
                        <span>Book a Demo</span>
                    </button>
                </Link>
            </div>
        </section>
    );
}
