"use client";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import SocialProof from "./components/socialproof/SocialProof";
import Problem from "./components/problem/Problem";
import Solution from "./components/solution/Solution";
import CTA from "./components/cta/CTA";

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
        {/* 1. Hero — "Deliver every project on time and on budget" */}
        <Hero />

        {/* 2. THE OPPORTUNITY — "Solve problems before they happen" */}
        <Problem />

        {/* 3. HOW CAPTUS WORKS + Platform dashboard */}
        <Solution />

        {/* 4. SELECTED PROJECTS — Social proof with real capital */}
        <SocialProof />

        {/* 5. PROTECT YOUR CAPITAL — "See the risk before it costs you" */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
