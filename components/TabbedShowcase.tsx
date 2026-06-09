"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// High-end Mock Data for Both States
const hiringFeatures = [
  { id: 1, tag: "New", title: "Share jobs directly to socials", desc: "Share your job on other social platforms to maximize visibility and engagement.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80" },
  { id: 2, tag: "", title: "Post jobs in seconds", desc: "Post jobs with ease and customize to get exactly what you're looking for.", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500&q=80" },
  { id: 3, tag: "", title: "Message creatives", desc: "Communicate directly with creatives who might be a fit for your project.", img: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?w=500&q=80" },
  { id: 4, tag: "", title: "Discover new talent, curated by us", desc: "Curated lists that highlight creatives in the NOVA community who are pushing our industry forward.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80" },
  { id: 5, tag: "New", title: "Job tracking", desc: "Keep track of all your incoming applicants and potential hires on your Job dashboard.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" },
];

const findingWorkFeatures = [
  { id: 6, tag: "Hot", title: "Build an elite portfolio", desc: "Showcase your case studies with neo-futuristic layouts that grab agency attention immediately.", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80" },
  { id: 7, tag: "", title: "Direct inbound pitches", desc: "Receive high-ticket project scopes straight into your messaging deck without cold outreach.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80" },
  { id: 8, tag: "New", title: "Global Escrow Protection", desc: "Milestone based secure smart contracts so you never have to chase invoices again.", img: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=500&q=80" },
  { id: 9, tag: "", title: "Real-time tracking analytics", desc: "See exactly when an agency opens your profile, views your pricing sheet, or clicks your resume.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80" },
];

export default function PremiumFeaturesDeck() {
  const [activeTab, setActiveTab] = useState<"hiring" | "work">("hiring");
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentFeatures = activeTab === "hiring" ? hiringFeatures : findingWorkFeatures;

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    // Section se padding horizontal bilkul zero kardi taake full wide content stretch ho ske
    <section className="w-full bg-[#050507] text-white py-28 overflow-hidden relative select-none">
      
      {/* Cyberpunk Neo-Futuristic Ambient Lights */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[350px] bg-gradient-to-b from-purple-500/[0.02] to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-12 left-10 w-[600px] h-[450px] bg-gradient-to-tr from-zinc-500/[0.01] to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* ================= HEADER CONTROL BAR ================= */}
      {/* Is header box me screen paddings control ki hain taake text alignment standard max-width me align rahe */}
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 px-6 sm:px-12 md:px-20 relative z-20">
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest pl-0.5">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[38px] font-medium font-sans tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent leading-tight max-w-xl">
            A do-it-all tool for creative work
          </h2>
        </div>

        {/* Dynamic High-End Tab Filter Switch */}
        <div className="flex bg-zinc-950/80 border border-white/[0.05] p-1 rounded-full relative shadow-[0_10px_30px_rgba(0,0,0,0.5)] self-start md:self-auto shrink-0">
          <button
            onClick={() => setActiveTab("hiring")}
            className={`px-6 py-2 text-xs font-medium tracking-tight rounded-full relative z-10 transition-colors duration-300 ${
              activeTab === "hiring" ? "text-black font-semibold" : "text-zinc-400 hover:text-white"
            }`}
          >
            For hiring
            {activeTab === "hiring" && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-gradient-to-r from-purple-300 to-indigo-200 rounded-full -z-10 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab("work")}
            className={`px-6 py-2 text-xs font-medium tracking-tight rounded-full relative z-10 transition-colors duration-300 ${
              activeTab === "work" ? "text-black font-semibold" : "text-zinc-400 hover:text-white"
            }`}
          >
            For finding work
            {activeTab === "work" && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-gradient-to-r from-purple-300 to-indigo-200 rounded-full -z-10 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* ================= HIGH FIDELITY FULL-WIDTH SLIDER HORIZON ================= */}
      {/* Is module ki max-width boundary absolute screen-wide width (w-full) me swap kar di hai */}
      <div className="w-full relative group/deck">
        
        {/* Floating Controls with premium layout overlay indices */}
        <div className="absolute top-[35%] left-6 z-30 pointer-events-auto opacity-0 group-hover/deck:opacity-100 transition-opacity duration-300 hidden xl:flex">
          <button 
            onClick={() => scrollSlider("left")}
            className="w-11 h-11 rounded-full bg-zinc-900/90 border border-white/[0.08] backdrop-blur-xl flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/20 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          >
            ‹
          </button>
        </div>
        
        <div className="absolute top-[35%] right-6 z-30 pointer-events-auto opacity-0 group-hover/deck:opacity-100 transition-opacity duration-300 hidden xl:flex">
          <button 
            onClick={() => scrollSlider("right")}
            className="w-11 h-11 rounded-full bg-zinc-900/90 border border-white/[0.08] backdrop-blur-xl flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/20 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          >
            ›
          </button>
        </div>

        {/* Center Inline Navigation Indicators for Tablet / Mobile */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 z-30 flex gap-2 pointer-events-auto xl:hidden">
          <button onClick={() => scrollSlider("left")} className="w-9 h-9 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center text-sm">‹</button>
          <button onClick={() => scrollSlider("right")} className="w-9 h-9 rounded-full bg-zinc-900/80 border border-white/10 flex items-center justify-center text-sm">›</button>
        </div>

        {/* Infinite Fade Masks on screen extreme edges */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-[#050507] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-[#050507] to-transparent z-20 pointer-events-none" />

        {/* Full Wide Drag Scroll Track with custom padding start offset to make first card align perfectly */}
        <div 
          ref={sliderRef}
          className="w-full overflow-x-auto flex gap-6 scrollbar-none snap-x snap-mandatory py-6 pl-6 sm:pl-12 md:pl-20 pr-32"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          <AnimatePresence mode="wait">
            {currentFeatures.map((feat, index) => (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="w-[300px] sm:w-[335px] md:w-[360px] shrink-0 snap-start flex flex-col group/card"
              >
                
                {/* Glassmorphism Mock Canvas Visual Box */}
                <div className="w-full aspect-[4/3.4] rounded-[20px] bg-zinc-900/30 border border-white/[0.04] p-5 flex items-center justify-center relative overflow-hidden backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover/card:border-white/[0.09] group-hover/card:bg-zinc-900/40">
                  
                  {/* Subtle Inner Highlight Shadow */}
                  <div className="absolute inset-0 border border-white/[0.03] rounded-[20px] pointer-events-none z-10" />

                  {/* Absolute Glass Reflection Rim */}
                  <div className="absolute -top-1/2 left-0 w-full h-full bg-white/[0.01] transform rotate-12 pointer-events-none mix-blend-overlay transition-transform duration-700 group-hover/card:translate-y-4" />

                  {/* New/Hot Accent Badge */}
                  {feat.tag && (
                    <span className="absolute top-4 right-4 bg-white/[0.06] border border-white/10 text-[10px] font-medium tracking-wide text-zinc-300 px-2.5 py-1 rounded-md backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                      {feat.tag}
                    </span>
                  )}

                  {/* High Fidelity Asset Wrapper */}
                  <div className="w-full h-full rounded-xl overflow-hidden relative border border-white/[0.03] shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                    <img 
                      src={feat.img} 
                      alt={feat.title}
                      className="w-full h-full object-cover filter brightness-[0.88] group-hover/card:scale-105 transition-transform duration-700 select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60" />
                  </div>
                </div>

                {/* Typography Stack */}
                <div className="mt-5 px-1 flex flex-col gap-1.5">
                  <h3 className="text-base font-medium font-sans text-zinc-100 tracking-tight transition-colors duration-300 group-hover/card:text-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-500 font-normal leading-relaxed tracking-normal group-hover/card:text-zinc-400 transition-colors duration-300">
                    {feat.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}