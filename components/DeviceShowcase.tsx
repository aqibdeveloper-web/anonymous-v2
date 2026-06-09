"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DeviceShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for premium parallax depth
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Desktop thoda slow move karega aur mobile thoda fast upar slide hoga
  const desktopY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const mobileY = useTransform(scrollYProgress, [0, 1], [100, -120]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-4 pt-24 pb-40 md:pt-36 overflow-hidden relative border-b border-zinc-900/40"
    >
      {/* Background ambient light behind the text */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[150px] sm:h-[200px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none select-none z-0" />

      {/* ================= HEADER LAYER ================= */}
      <div className="w-full max-w-7xl flex flex-col items-center justify-center text-center relative z-10 mb-16 sm:mb-24">
        
        <span className="text-xs sm:text-sm font-medium tracking-wide bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Access from anywhere
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-100 mb-8">
          Available on web and iOS
        </h2>

        {/* Premium Neon-Border iOS Download Button */}
        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="relative flex items-center gap-2.5 bg-black border border-zinc-800 px-6 py-3 rounded-full text-sm font-medium text-zinc-200 shadow-[0_0_30px_rgba(168,85,247,0.15)] group transition-all duration-300 hover:border-purple-500/40"
        >
          {/* Subtle Backglow effect matching image_44e0de.png */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
          
          {/* Apple Icon */}
          <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.52-.64.74-1.2 1.88-1.05 3 .11.01.23.02.34.02.92 0 2.1-.64 2.66-1.48z" />
          </svg>
          Download the app
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
            <div className="w-full flex-1 rounded-2xl bg-gradient-to-b from-purple-900/30 via-zinc-900/40 to-zinc-900/60 border border-zinc-800/40 p-3 flex flex-col justify-end">
              <div className="w-16 h-3 rounded bg-purple-400/50 mb-1" />
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
  );
}