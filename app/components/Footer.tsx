"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ background: '#111827', color: '#FFFFFF', padding: 'clamp(48px, 7vw, 80px) clamp(16px, 5vw, 24px) 40px', borderTop: '1px solid #374151' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'space-between' }}>
                <div style={{ maxWidth: '340px' }}>
                    <div className="font-display" style={{ fontSize: '24px', color: '#CC5500', marginBottom: '16px', letterSpacing: '0.05em' }}>
                        CAPTUS.AI
                    </div>
                    <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: 1.6 }}>
                        Predictive risk intelligence platform for construction owners.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: 'clamp(32px, 6vw, 80px)', flexWrap: 'wrap' }}>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '20px', fontSize: '14px', letterSpacing: '0.05em', color: '#FFFFFF', textTransform: 'uppercase' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><Link href="/founder" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>Founder</Link></li>
                            <li><Link href="/team" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>Team</Link></li>
                            <li><Link href="/careers" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>Careers</Link></li>
                            <li><Link href="/investors" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>Investors</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '20px', fontSize: '14px', letterSpacing: '0.05em', color: '#FFFFFF', textTransform: 'uppercase' }}>Legal</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><Link href="/privacy-policy" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: 700, marginBottom: '20px', fontSize: '14px', letterSpacing: '0.05em', color: '#FFFFFF', textTransform: 'uppercase' }}>Contact</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><a href="mailto:info@captus.ai" style={{ color: '#CC5500', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>info@captus.ai</a></li>
                            <li><Link href="/book-demo" style={{ color: '#CC5500', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>Book a Demo</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '60px auto 0', paddingTop: '32px', borderTop: '1px solid #374151', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <p style={{ color: '#6B7280', fontSize: '14px' }}>© {new Date().getFullYear()} Captus AI. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#9CA3AF', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
