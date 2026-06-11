"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// ================= PREMIUM INQUIRY MODAL COMPONENT =================
interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function PremiumInquiryModal({ isOpen, onClose }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    division: "web",
    budget: "$5k - $10k",
    blueprint: "",
  });

  const divisions = [
    { id: "web", label: "Web Engineering" },
    { id: "mobile", label: "Mobile Products" },
    { id: "seo", label: "SEO & Growth Scaling" },
  ];

  const budgets = ["<$5k", "$5k - $10k", "$10k - $25k", "$25k+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("VOID System Log: Project Blueprint Initiated", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop Blur Engine */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Frame System */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-black border border-white/[0.08] w-full max-w-xl rounded-[28px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] relative p-6 sm:p-8 md:p-10 z-10 text-white"
          >
            {/* Ambient System Accent Glow Vector */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#c084fc]/[0.04] blur-[60px] pointer-events-none rounded-full" />

            {/* Close Button Trigger */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group"
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header Platform */}
            <div className="flex flex-col gap-1.5 mb-8 text-left">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfaed6] animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-[#dfaed6] uppercase tracking-[0.25em]">
                  SYSTEM BLUEPRINT PROTOCOL
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-tight">
                Initiate Project Matrix
              </h2>
              <p className="text-zinc-500 text-xs font-sans leading-relaxed">
                Define your structural engineering needs. Our automated delivery vectors will compute parameters within 12 standard business cycles.
              </p>
            </div>

            {/* Interactive Form Matrix */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              {/* Row 1: Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 relative">
                  <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider pl-1">Identity/Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Maverick Systems"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-zinc-950/60 border border-white/[0.06] focus:border-[#dfaed6]/40 text-sm text-zinc-200 placeholder-zinc-700 px-4 py-3 rounded-xl transition-all duration-300 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider pl-1">Secure Vector Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="architecture@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-zinc-950/60 border border-white/[0.06] focus:border-[#dfaed6]/40 text-sm text-zinc-200 placeholder-zinc-700 px-4 py-3 rounded-xl transition-all duration-300 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Row 2: Divisions Selector */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider pl-1">Target Core Division</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {divisions.map((div) => (
                    <button
                      key={div.id}
                      type="button"
                      onClick={() => setFormData({...formData, division: div.id})}
                      className={`px-3 py-3 rounded-xl border text-xs font-medium transition-all duration-300 text-left relative overflow-hidden ${
                        formData.division === div.id 
                          ? "bg-[#dfaed6]/10 border-[#dfaed6]/40 text-white shadow-[0_0_15px_rgba(223,174,214,0.05)]"
                          : "bg-zinc-950/40 border-white/[0.05] text-zinc-400 hover:text-zinc-200 hover:border-white/10"
                      }`}
                    >
                      {div.label}
                      {formData.division === div.id && (
                        <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#c084fc]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Budgets */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider pl-1">Allocated Resources Pool</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({...formData, budget: b})}
                      className={`py-2 px-1 rounded-lg border text-center text-xs transition-all duration-300 ${
                        formData.budget === b 
                          ? "bg-[#c084fc]/10 border-[#c084fc]/40 text-white font-medium"
                          : "bg-zinc-950/20 border-white/[0.03] text-zinc-500 hover:text-zinc-300 hover:border-white/10"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Specifications */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider pl-1">Project Specifications & Objectives</label>
                <textarea 
                  rows={3}
                  placeholder="Outline parameters, specific tech components, or scale models required..."
                  value={formData.blueprint}
                  onChange={(e) => setFormData({...formData, blueprint: e.target.value})}
                  className="w-full bg-zinc-950/60 border border-white/[0.06] focus:border-[#dfaed6]/40 text-sm text-zinc-200 placeholder-zinc-700 px-4 py-3 rounded-xl transition-all duration-300 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] resize-none"
                />
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="group relative w-full py-4 mt-2 border border-white/10 hover:border-[#dfaed6]/40 bg-zinc-950 text-xs text-zinc-200 hover:text-white font-semibold uppercase tracking-[0.15em] rounded-xl transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(223,174,214,0.12)] overflow-hidden"
              >
                <span className="relative z-10">Compile & Dispatch Blueprint</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#dfaed6]/10 to-[#c084fc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </form>

            <div className="mt-8 pt-4 border-t border-white/[0.04] flex justify-between items-center text-[8px] font-mono tracking-widest text-zinc-600">
              <span>VOID MODULAR PROTOCOL INT.</span>
              <span>SECURE ENCRYPTED PIPELINE</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ================= PRIMARY DEVICE SHOWCASE LAYER =================
export default function DeviceShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  // Scroll tracking for premium parallax depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Desktop thoda slow move karega aur mobile thoda fast upar slide hoga
  const desktopY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const mobileY = useTransform(scrollYProgress, [0, 1], [100, -120]);

  return (
    <>
      <section 
        ref={containerRef}
        className="w-full bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-4 pt-24 pb-40 md:pt-36 overflow-hidden relative border-b border-zinc-900/40"
      >
        {/* Background ambient light behind the text */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[150px] sm:h-[200px] bg-[#c084fc]/10 rounded-full blur-[100px] pointer-events-none select-none z-0" />

        {/* ================= HEADER LAYER ================= */}
        <div className="w-full max-w-7xl flex flex-col items-center justify-center text-center relative z-10 mb-16 sm:mb-24">
          
          <span className="text-xs sm:text-sm font-medium tracking-wide bg-gradient-to-r from-[#dfaed6] to-[#c084fc] bg-clip-text text-transparent mb-4">
            Our Craft In Action
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-100 mb-8">
            Products Engineered To Perfection
          </h2>

          {/* Premium Neon-Border View Work Button linked to popup modal */}
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsInquiryOpen(true)}
            className="relative flex items-center gap-2.5 bg-black border border-zinc-800 px-6 py-3 rounded-full text-sm font-medium text-zinc-200 shadow-[0_0_30px_rgba(223,174,214,0.15)] group transition-all duration-300 hover:border-[#dfaed6]/40 cursor-pointer"
          >
            {/* Subtle Backglow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#dfaed6]/30 to-[#c084fc]/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
            
            Inquire Now
          </motion.button>
        </div>

        {/* ================= DEVICES VIEWPORT INTERACTIVE CONTAINER ================= */}
        <div className="w-full max-w-5xl mx-auto relative flex flex-col items-center justify-center px-4 sm:px-6">
          
          {/* 1. Desktop Dashboard Mockup */}
          <motion.div 
            style={{ y: desktopY }}
            className="w-full bg-[#131315] border border-zinc-800/80 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.7)] overflow-hidden aspect-[16/10] relative z-0"
          >
            {/* Window Top Controls (The 3 standard mac dots) */}
            <div className="w-full h-11 bg-[#1a1a1e]/40 border-b border-zinc-900 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
            </div>
            
            {/* Placeholder/Dashboard Content Area */}
            <div className="w-full h-[calc(100%-2.75rem)] bg-[#0d0d0f] p-4 flex gap-4">
              {/* Left Minimal Sidebar */}
              <div className="w-12 h-full rounded-xl bg-[#131315] border border-zinc-900/60 hidden sm:block opacity-40" />
              {/* Main Mock Content */}
              <div className="flex-1 h-full flex flex-col gap-4">
                <div className="w-full h-12 rounded-xl bg-[#131315] border border-zinc-900/60 opacity-60" />
                <div className="w-full flex-1 rounded-xl bg-[#131315]/50 border border-zinc-900/40 p-4 flex flex-col gap-3">
                  <div className="w-2/3 h-6 rounded-lg bg-zinc-800/40" />
                  <div className="w-full h-24 rounded-lg bg-zinc-800/20" />
                  <div className="w-1/2 h-4 rounded-lg bg-zinc-800/20" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Overlapping iOS Mobile Mockup */}
          <motion.div 
            style={{ y: mobileY }}
            className="absolute right-[4%] sm:right-[6%] -bottom-[90px] w-[200px] sm:w-[280px] aspect-[9/19] bg-[#16161a] border-[5px] sm:border-[7px] border-zinc-800/90 rounded-[2.5rem] sm:rounded-[3.2rem] shadow-[0_30px_80px_rgba(0,0,0,0.9)] overflow-hidden z-20 flex flex-col"
          >
            {/* Phone Dynamic Island/Notch Bar */}
            <div className="w-full h-6 sm:h-8 flex justify-center items-center relative">
              <div className="w-16 sm:w-24 h-3.5 sm:h-4.5 bg-zinc-900 rounded-full mt-2" />
            </div>
            
            {/* Mobile Screen UI Placeholder */}
            <div className="flex-1 bg-[#0d0d0f] p-3 sm:p-4 flex flex-col gap-3 sm:gap-4">
              <div className="w-20 h-4 rounded-md bg-zinc-800/60" />
              <div className="w-full flex-1 rounded-2xl bg-gradient-to-b from-[#c084fc]/10 via-zinc-900/40 to-zinc-900/60 border border-zinc-800/40 p-3 flex flex-col justify-end">
                <div className="w-16 h-3 rounded bg-[#dfaed6]/40 mb-1" />
                <div className="w-28 h-5 rounded bg-zinc-100/90" />
              </div>
              {/* Small Bottom Navigation Tabs */}
              <div className="w-full h-8 sm:h-10 rounded-xl bg-[#131315] border border-zinc-900 flex items-center justify-around px-2">
                <div className="w-4 h-4 rounded-full bg-zinc-700" />
                <div className="w-4 h-4 rounded-full bg-zinc-800" />
                <div className="w-4 h-4 rounded-full bg-zinc-800" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Mounting Vector for Inquiry Portal */}
      <PremiumInquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  );
}