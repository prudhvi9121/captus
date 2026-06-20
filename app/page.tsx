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
        <Hero />

        <Problem />
        <Solution />
        <SocialProof />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
