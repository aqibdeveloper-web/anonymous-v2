"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PremiumStudioShowcase() {
  return (
    <section className="w-full bg-[#0D0D0D] py-12 sm:py-20 px-4 sm:px-8 md:px-16 flex justify-center items-center">
      <div className="max-w-7xl w-full rounded-[24px] overflow-hidden border border-white/[0.06] relative h-[480px] sm:h-[560px] group shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
        
        {/* ================= HIGH-END TECH ABSTRACT IMAGE LAYER ================= */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&q=90" 
            alt="Cyber High-Performance Network Mesh" 
            className="w-full h-full object-cover brightness-[0.35] contrast-[1.15] group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
          />
          
          {/* Cyber Glass Overlays - Center Focused Masking */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-black/40 to-[#050507] opacity-95 z-10" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-[#050507] z-10" />
          <div className="absolute inset-0 bg-purple-950/[0.03] mix-blend-color-dodge z-10" />
        </div>

        {/* ================= CONTENT STRUCTURE LAYER (FULLY CENTERED) ================= */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 sm:p-12 md:p-16 max-w-3xl mx-auto text-center">
          
          {/* Brand Header */}
          <div className="flex flex-col gap-1 items-center mb-8 sm:mb-10">
            <h3 className="text-lg sm:text-xl font-bold tracking-[0.25em] text-white font-sans uppercase">
              ANONYMOUS
            </h3>
            <span className="text-[9px] sm:text-[10px] tracking-[0.4em] text-purple-400 uppercase font-medium pl-0.5 animate-pulse">
              digital services
            </span>
          </div>

          {/* Main Description Block */}
          <div className="flex flex-col gap-6 sm:gap-8 items-center">
            <h4 className="text-base sm:text-xl md:text-2xl font-medium text-zinc-100 tracking-tight leading-relaxed max-w-2xl">
              Need a high-performance digital presence? Elevate your brand with our custom web architecture, fluid animations, and premium software solutions built for the next web generation.
            </h4>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-[11px] sm:text-xs font-medium text-white tracking-wider uppercase hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 shadow-[0_10px_30px_rgba(147,51,234,0.15)] mt-2"
            >
              Explore Services
            </motion.button>
          </div>

        </div>

        {/* Cinematic Crystal Border Reflection */}
        <div className="absolute inset-0 border border-white/[0.02] rounded-[24px] pointer-events-none z-30" />
      </div>
    </section>
  );
}