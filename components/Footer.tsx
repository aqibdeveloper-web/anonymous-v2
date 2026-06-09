"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PremiumCyberFooter() {
  return (
    <footer className="w-full bg-[#050507] border-t border-white/[0.06] pt-20 pb-12 px-6 sm:px-12 md:px-24 relative overflow-hidden select-none">
      
      {/* Background Cyber Glow Effects */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-purple-600/[0.03] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-indigo-500/[0.02] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= TOP SECTION: GIANT BRANDING & DOWNLOAD APP ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center pb-16 border-b border-white/[0.06]">
          
          {/* Giant Custom Typography Logo (Replaced flat logo from image_2a8f1c.png) */}
          <div className="md:col-span-8 group/logo cursor-pointer">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter bg-gradient-to-b from-white via-zinc-400 to-zinc-800 bg-clip-text text-transparent transition-all duration-700 group-hover/logo:tracking-normal font-sans">
            ANONYMOUS
            </h1>
          </div>

          {/* Premium Glass Download Card (Upgraded from image_2a8f1c.png app link) */}
          <div className="md:col-span-4 flex md:justify-end">
            <motion.div 
              whileHover={{ y: -4, border: "1px solid rgba(147, 51, 234, 0.3)" }}
              className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] p-5 rounded-[20px] backdrop-blur-xl cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group/btn w-full max-w-[280px]"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/btn:bg-white text-white group-hover/btn:text-black transition-all duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.1,16.67C20.08,16.74 19.67,18.11 18.71,19.5M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1C16,1.04 14.9,1.6 14.24,2.38C13.68,3.04 13.19,4.14 13.34,5.39C14.39,5.47 15.4,4.88 15.97,4.17Z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Available now</span>
                <span className="text-xs font-semibold text-zinc-200 group-hover/btn:text-white font-sans mt-0.5">Download the app</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* ================= BOTTOM SECTION: DYNAMIC LINKS & FOOTNOTE ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-16 items-start">
          
          {/* Metadata Row */}
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <span className="text-[11px] font-bold tracking-widest text-zinc-400 font-sans uppercase">@2026</span>
            <span className="text-xs text-zinc-500 font-normal font-sans">Los Angeles, CA</span>
          </div>

          {/* Upgraded Support Menu */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-bold tracking-widest text-zinc-400 font-sans uppercase mb-1">Help & Support</span>
            {["Terms of Service", "Privacy Policy", "FAQ"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-xs text-zinc-500 hover:text-purple-400 font-medium font-sans w-fit transition-colors duration-300 relative group/link"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-purple-500 transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-bold tracking-widest text-zinc-400 font-sans uppercase mb-1">Socials</span>
            <a 
              href="#" 
              className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white font-medium font-sans w-fit transition-colors duration-300 group/soc"
            >
              <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover/soc:bg-purple-500 transition-colors" />
              Instagram <span className="text-zinc-600 group-hover/soc:text-zinc-400 pl-1">@itsnova</span>
            </a>
          </div>

          {/* Connect Details */}
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <span className="text-[11px] font-bold tracking-widest text-zinc-400 font-sans uppercase mb-1">Email</span>
            <a 
              href="mailto:contact@itsnova.com" 
              className="text-xs text-zinc-300 hover:text-purple-400 font-medium font-mono tracking-tight transition-colors duration-300 break-all"
            >
              contact@itsnova.com
            </a>
          </div>

        </div>

        {/* Minimal Bottom Micro-Stamp */}
        <div className="mt-16 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-mono tracking-widest text-zinc-600">
          <span>NOVA ECOSYSTEM SYSTEMS INC.</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

      </div>
    </footer>
  );
}