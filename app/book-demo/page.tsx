"use client";

import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function BookDemo() {
    const [step, setStep] = useState(1); // 1: Calendar, 2: Details Form, 3: Success
    
    // Calendar Navigation State
    const [navDate, setNavDate] = useState(() => {
        const today = new Date();
        return new Date(today.getFullYear(), today.getMonth(), 1);
    });
    
    // Selected Slot State
    const [selectedDate, setSelectedDate] = useState<Date>(() => {
        const date = new Date();
        // default select tomorrow or today (tomorrow is safer)
        date.setDate(date.getDate() + 1);
        return date;
    });
    const [selectedTime, setSelectedTime] = useState("");
    const [loading, setLoading] = useState(false);

    // Form inputs
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");

    const handleSelectSlot = (date: Date, time: string) => {
        setSelectedDate(date);
        setSelectedTime(time);
        setStep(2);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        
        // Map to Google Form fields:
        // entry.1481821760 -> Name
        // entry.45870342 -> Email
        // entry.1000089707 -> Company
        // entry.674157560 -> Title
        // entry.1607118228 -> Phone
        // entry.1568768636 -> Size
        // entry.858552139 -> Message (contains selected slot)
        
        const dateString = selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        formData.append("entry.1481821760", fullName);
        formData.append("entry.45870342", email);
        formData.append("entry.1000089707", company);
        formData.append("entry.674157560", "Attendee");
        formData.append("entry.1607118228", "N/A");
        formData.append("entry.1568768636", "N/A");
        formData.append("entry.858552139", `Scheduled 30-min call: ${dateString} at ${selectedTime}`);

        // Use URLSearchParams for reliable application/x-www-form-urlencoded format
        const searchParams = new URLSearchParams();
        formData.forEach((value, key) => {
            searchParams.append(key, value as string);
        });

        try {
            await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSeH_mTnyOwicTvWFX2rxyeAZOfPD9tmK4hq0R14B7iorSh_gA/formResponse",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: searchParams,
                }
            );

            setStep(3);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Calendar Generation Math
    const year = navDate.getFullYear();
    const month = navDate.getMonth();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[month];

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const prevTotalDays = new Date(year, month, 0).getDate();

    const daysArray = [];

    // Add grayed out days of previous month
    for (let i = firstDayIndex - 1; i >= 0; i--) {
        daysArray.push({
            dayNum: prevTotalDays - i,
            isCurrentMonth: false,
            date: new Date(year, month - 1, prevTotalDays - i)
        });
    }

    // Add days of current month
    for (let i = 1; i <= totalDays; i++) {
        daysArray.push({
            dayNum: i,
            isCurrentMonth: true,
            date: new Date(year, month, i)
        });
    }

    // Fill the grid up to 42 cells (6 rows)
    const remainingCells = 42 - daysArray.length;
    for (let i = 1; i <= remainingCells; i++) {
        daysArray.push({
            dayNum: i,
            isCurrentMonth: false,
            date: new Date(year, month + 1, i)
        });
    }

    // Helper to determine if date is today or future
    const isTodayOrFuture = (d: Date) => {
        const today = new Date();
        const compareDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        return compareDate >= todayDate;
    };

    // Helper to check if date is selected
    const isSelected = (d: Date) => {
        return d.getDate() === selectedDate.getDate() &&
               d.getMonth() === selectedDate.getMonth() &&
               d.getFullYear() === selectedDate.getFullYear();
    };

    const handlePrevMonth = () => {
        setNavDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setNavDate(new Date(year, month + 1, 1));
    };

    // Generate subsequent date for the second slots column
    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + 1);

    // Exact slots from mockup
    const day1Slots = ["1:45 AM", "2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM"];
    const day2Slots = ["1:45 AM", "2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM"];

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
            <Navbar />

            {/* Custom Webkit scrollbars styling */}
            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scroll::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scroll::-webkit-scrollbar-track {
                    background: #F1F3F5;
                    border-radius: 4px;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #CBD5E1;
                    border-radius: 4px;
                }
                .custom-scroll::-webkit-scrollbar-thumb:hover {
                    background: #94A3B8;
                }
            ` }} />

            <main style={{
                flex: 1,
                paddingTop: "140px",
                paddingBottom: "100px",
                paddingLeft: "clamp(24px, 6vw, 80px)",
                paddingRight: "clamp(24px, 6vw, 80px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundImage: `
                    linear-gradient(to right, rgba(204, 85, 0, 0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(204, 85, 0, 0.04) 1px, transparent 1px)
                `,
                backgroundSize: "56px 56px",
                backgroundColor: "var(--bg)",
            }}>
                <div 
                    className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start"
                >
                    {/* Left Column */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="section-tag" style={{ marginBottom: "16px" }}>
                            <span className="eyebrow-line" style={{ background: "#CC5500" }}></span>
                            Book a demo
                        </div>

                        <h1 style={{
                            fontSize: "clamp(28px, 4vw, 48px)",
                            fontWeight: "normal",
                            color: "#111111",
                            lineHeight: 1.1,
                            letterSpacing: "-0.01em",
                            marginBottom: "24px"
                        }}>
                            Book a 30-minute call
                        </h1>

                        <p style={{
                            color: "#4B5563",
                            fontSize: "16px",
                            lineHeight: 1.6,
                            marginBottom: "40px",
                            maxWidth: "480px"
                        }}>
                            Pick a time that works for you and we'll walk you through how Captus surfaces cost, schedule, and labor risk on your projects.
                        </p>

                        {/* Booking details list */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "28px", maxWidth: "520px", marginBottom: "40px" }}>
                            
                            {/* Point 1 */}
                            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                                <div style={{ 
                                    background: "rgba(204, 85, 0, 0.08)", 
                                    padding: "10px", 
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CC5500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <h4 style={{ fontSize: "15px", fontWeight: "normal", color: "#111111" }}>
                                        30 minutes
                                    </h4>
                                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.5 }}>
                                        A focused walkthrough, no slides required.
                                    </p>
                                </div>
                            </div>

                            {/* Point 2 */}
                            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                                <div style={{ 
                                    background: "rgba(204, 85, 0, 0.08)", 
                                    padding: "10px", 
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CC5500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <h4 style={{ fontSize: "15px", fontWeight: "normal", color: "#111111" }}>
                                        Talk to the founder
                                    </h4>
                                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.5 }}>
                                        You'll meet directly with the team building Captus.
                                    </p>
                                </div>
                            </div>

                            {/* Point 3 */}
                            <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                                <div style={{ 
                                    background: "rgba(204, 85, 0, 0.08)", 
                                    padding: "10px", 
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0
                                }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#CC5500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 11 12 14 22 4"></polyline>
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                                    </svg>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <h4 style={{ fontSize: "15px", fontWeight: "normal", color: "#111111" }}>
                                        Built for your projects
                                    </h4>
                                    <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.5 }}>
                                        We'll tailor the conversation to the work you run.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <p style={{ fontSize: "14px", color: "#6B7280" }}>
                            Prefer email? Reach us at <a href="mailto:info@captus.ai" style={{ color: "#CC5500", textDecoration: "none", fontWeight: "600" }}>info@captus.ai</a>.
                        </p>
                    </div>

                    {/* Right Column (Motion Booking Widget Card) */}
                    <div style={{
                        background: "#FFFFFF",
                        borderRadius: "24px",
                        border: "1px solid rgba(226, 226, 224, 0.8)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.01)",
                        overflow: "hidden",
                        width: "100%",
                        maxWidth: "760px",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "480px"
                    }}>
                        
                        {/* cobalt blue header banner */}
                        <div style={{
                            background: "#487ffeff",
                            color: "#FFFFFF",
                            padding: "24px 32px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        }}>
                            <h3 style={{ fontSize: "16px", fontWeight: "700", letterSpacing: "0.02em" }}>
                                30min Captus.ai with Anatoly
                            </h3>
                            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.9)", lineHeight: 1.4 }}>
                                Thanks for taking the time to meet! Please pick a time that works for you
                            </p>
                        </div>

                        {/* step content */}
                        <div style={{ flex: 1, padding: "32px", display: "flex", flexDirection: "column" }}>
                            {step === 1 && (
                                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_auto_1.6fr] gap-6 md:gap-8 items-start">
                                    
                                    {/* Sub-column 1: Calendar Date Picker */}
                                    <div style={{ display: "flex", flexDirection: "column", maxWidth: "260px", width: "100%" }}>
                                        <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#111111", marginBottom: "20px" }}>
                                            Select Date
                                        </h4>
                                        
                                        {/* calendar month selector */}
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                                            <button 
                                                onClick={handlePrevMonth}
                                                style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: "14px", color: "#6B7280", padding: "4px" }}
                                            >
                                                &lt;
                                            </button>
                                            <span style={{ fontSize: "13px", fontWeight: "700", color: "#111111" }}>
                                                {monthName} {year}
                                            </span>
                                            <button 
                                                onClick={handleNextMonth}
                                                style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: "14px", color: "#6B7280", padding: "4px" }}
                                            >
                                                &gt;
                                            </button>
                                        </div>

                                        {/* calendar week days */}
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "8px", textAlign: "center", fontSize: "11px", color: "#6B7280", fontWeight: "500", marginBottom: "8px" }}>
                                            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                                        </div>

                                        {/* calendar month days */}
                                        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "8px 4px", textAlign: "center", fontSize: "12px", alignItems: "center" }}>
                                            {daysArray.map((day, idx) => {
                                                const active = day.isCurrentMonth && isTodayOrFuture(day.date);
                                                const selected = isSelected(day.date);

                                                return (
                                                    <span 
                                                        key={idx}
                                                        onClick={() => {
                                                            if (active) {
                                                                setSelectedDate(day.date);
                                                            }
                                                        }}
                                                        style={{ 
                                                            cursor: active ? "pointer" : "default", 
                                                            fontWeight: active ? "600" : "400",
                                                            color: selected ? "#FFFFFF" : (active ? "#111111" : "#D1D5DB"),
                                                            background: selected ? "#111111" : "transparent",
                                                            borderRadius: "50%",
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            width: "24px",
                                                            height: "24px",
                                                            margin: "0 auto",
                                                            transition: "all 0.2s"
                                                        }}
                                                    >
                                                        {day.dayNum}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        <span style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", marginTop: "24px" }}>
                                            IST
                                        </span>
                                    </div>

                                    {/* Sub-column 2: Vertical Separator Line */}
                                    <div className="hidden md:block" style={{ width: "1px", alignSelf: "stretch", background: "#E5E7EB" }} />

                                    {/* Sub-column 3: Time Slot Lists */}
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                                            <h4 style={{ fontSize: "14px", fontWeight: "700", color: "#111111" }}>
                                                Select Time
                                            </h4>
                                            <span style={{ fontSize: "11px", color: "#9CA3AF", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                                                🕒 30 min
                                            </span>
                                        </div>

                                        {/* side-by-side double scroll lists */}
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                                            
                                            {/* Column 1: Selected Day Slots */}
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <div style={{ fontSize: "11px", fontWeight: "700", color: "#9CA3AF", textTransform: "uppercase", marginBottom: "8px" }}>
                                                    {selectedDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                                                </div>

                                                <div 
                                                    style={{ overflowY: "auto", maxHeight: "240px", paddingRight: "4px", display: "flex", flexDirection: "column", gap: "8px" }} 
                                                    className="custom-scroll"
                                                >
                                                    {day1Slots.map((time, idx) => {
                                                        const isPreferred = idx === 0;
                                                        return (
                                                            <button 
                                                                key={idx}
                                                                onClick={() => handleSelectSlot(selectedDate, time)}
                                                                style={{ 
                                                                    padding: "10px 8px", 
                                                                    borderRadius: "6px", 
                                                                    border: "1px solid #E5E7EB", 
                                                                    background: "#FFFFFF", 
                                                                    color: "#111111", 
                                                                    fontSize: "12px", 
                                                                    cursor: "pointer", 
                                                                    textAlign: "center", 
                                                                    display: "flex",
                                                                    flexDirection: "column",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    gap: "2px",
                                                                    transition: "all 0.2s"
                                                                }}
                                                                className="hover:border-orange hover:bg-orange-50"
                                                            >
                                                                <span style={{ fontWeight: "500" }}>{time}</span>
                                                                {isPreferred && (
                                                                    <span style={{ fontSize: "8px", color: "#2E66E5", fontWeight: "700", textTransform: "uppercase" }}>
                                                                        Preferred
                                                                    </span>
                                                                )}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Column 2: Next Day Slots */}
                                            <div style={{ display: "flex", flexDirection: "column" }}>
                                                <div style={{ fontSize: "11px", fontWeight: "700", color: "#9CA3AF", textTransform: "uppercase", marginBottom: "8px" }}>
                                                    {nextDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                                                </div>

                                                <div 
                                                    style={{ overflowY: "auto", maxHeight: "240px", paddingRight: "4px", display: "flex", flexDirection: "column", gap: "8px" }} 
                                                    className="custom-scroll"
                                                >
                                                    {day2Slots.map((time, idx) => {
                                                        return (
                                                            <button 
                                                                key={idx}
                                                                onClick={() => handleSelectSlot(nextDate, time)}
                                                                style={{ 
                                                                    padding: "10px 8px", 
                                                                    borderRadius: "6px", 
                                                                    border: "1px solid #E5E7EB", 
                                                                    background: "#FFFFFF", 
                                                                    color: "#111111", 
                                                                    fontSize: "12px", 
                                                                    cursor: "pointer", 
                                                                    textAlign: "center", 
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    minHeight: "38px",
                                                                    transition: "all 0.2s"
                                                                }}
                                                                className="hover:border-orange hover:bg-orange-50"
                                                            >
                                                                <span style={{ fontWeight: "500" }}>{time}</span>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                                        <button 
                                            onClick={() => setStep(1)}
                                            style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: "18px", color: "#6B7280" }}
                                        >
                                            ←
                                        </button>
                                        <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#111111" }}>
                                            Confirm your details
                                        </h4>
                                    </div>

                                    <div style={{ background: "rgba(46, 102, 229, 0.04)", border: "1px solid rgba(46, 102, 229, 0.1)", borderRadius: "8px", padding: "14px 18px", marginBottom: "24px", fontSize: "13px", color: "#4B5563" }}>
                                        📅 <strong>{selectedDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</strong> at <strong>{selectedTime} (IST)</strong>
                                    </div>

                                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <label style={{ fontSize: "10px", fontWeight: "700", color: "#6B7280" }}>FULL NAME</label>
                                            <input 
                                                required 
                                                type="text" 
                                                placeholder="Jane Builder"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                style={{ padding: "10px 14px", borderRadius: "6px", border: "1px solid #E5E7EB", outline: "none", fontSize: "13px" }}
                                            />
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <label style={{ fontSize: "10px", fontWeight: "700", color: "#6B7280" }}>EMAIL</label>
                                            <input 
                                                required 
                                                type="email" 
                                                placeholder="jane@email.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                style={{ padding: "10px 14px", borderRadius: "6px", border: "1px solid #E5E7EB", outline: "none", fontSize: "13px" }}
                                            />
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <label style={{ fontSize: "10px", fontWeight: "700", color: "#6B7280" }}>COMPANY</label>
                                            <input 
                                                required 
                                                type="text" 
                                                placeholder="Acme Corp"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                style={{ padding: "10px 14px", borderRadius: "6px", border: "1px solid #E5E7EB", outline: "none", fontSize: "13px" }}
                                            />
                                        </div>

                                        <button 
                                            type="submit"
                                            disabled={loading}
                                            style={{ 
                                                padding: "12px", 
                                                background: "#CC5500", 
                                                color: "#FFFFFF", 
                                                border: "none", 
                                                borderRadius: "6px", 
                                                fontSize: "13px", 
                                                fontWeight: "700", 
                                                cursor: "pointer", 
                                                marginTop: "12px",
                                                textAlign: "center"
                                            }}
                                            className="hover:bg-orange-dark active:scale-[0.98]"
                                        >
                                            {loading ? "Confirming..." : "Confirm Booking"}
                                        </button>
                                    </form>
                                </div>
                            )}

                            {step === 3 && (
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "20px 0" }}>
                                    <div style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "50%",
                                        background: "rgba(204, 85, 0, 0.08)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#CC5500",
                                        fontSize: "24px",
                                        marginBottom: "16px"
                                    }}>
                                        ✓
                                    </div>
                                    <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#111111", marginBottom: "8px" }}>
                                        Booking Confirmed!
                                    </h4>
                                    <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.5, marginBottom: "20px", maxWidth: "320px" }}>
                                        An invitation has been sent to your email address. We look forward to meeting with you.
                                    </p>
                                    <div style={{ background: "var(--surface-1)", border: "1px solid var(--border)", borderRadius: "8px", padding: "14px 20px", fontSize: "13px", color: "#4B5563", marginBottom: "24px" }}>
                                        📅 <strong>{selectedDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</strong> at <strong>{selectedTime}</strong> (30 mins)
                                    </div>
                                    <button 
                                        onClick={() => {
                                            setStep(1);
                                            setFullName("");
                                            setEmail("");
                                            setCompany("");
                                        }}
                                        style={{ padding: "8px 20px", border: "1px solid #E5E7EB", borderRadius: "6px", background: "#FFFFFF", color: "#4B5563", fontSize: "12px", cursor: "pointer" }}
                                        className="hover:bg-gray-50"
                                    >
                                        Book another meeting
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Powered by Motion logo bar */}
                        <div style={{
                            borderTop: "1px solid #F3F4F6",
                            padding: "16px 32px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#FAFAFA",
                            gap: "8px"
                        }}>
                            <span style={{ fontSize: "11px", color: "#9CA3AF" }}>Powered by</span>
                            <strong style={{ fontSize: "11px", color: "#111111", letterSpacing: "0.05em" }}>MOTION</strong>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}