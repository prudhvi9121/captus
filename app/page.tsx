"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import OwnerValue from "./components/OwnerValue";
import CaseStudy from "./components/CaseStudy";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Hero />

        <Problem />
        <SocialProof />
        <Solution />
        <OwnerValue />
        <CaseStudy />
        <Testimonial />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
