"use client";
import React from "react";
import { motion } from "framer-motion";

// Aap yahan koi bhi icons ya placeholder SVGs/Images use kar sakte hain
const logos = [
  { name: "Adidas", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Nike", url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Atlantic Records", url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Atlantic_Records_logo.svg" },
  { name: "Skims", url: "https://upload.wikimedia.org/wikipedia/commons/5/58/Skims_logo.svg" },
  { name: "On Running", url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/On_Running_logo.svg" },
];

// Loop ko seamless banane ke liye hum array ko duplicate karenge
const duplicatedLogos = [...logos, ...logos, ...logos];

export default function LogoMarquee() {
  return (
    <section className="w-full bg-[#0d0d0d] py-12 flex flex-col items-center justify-center overflow-hidden border-b border-zinc-900/40 relative">
      
      {/* Small Section Label exactly like image_44e502.png */}
      <p className="text-1.5xl sm:text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-8">
        Trusted by
      </p>

      {/* 
        ================= GRADIENT FADE MASKING =================
        Yeh left aur right edges par smooth fade layer banata hai premium look ke liye
      */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="w-full max-w-7xl flex overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex items-center gap-16 sm:gap-24 pr-16 sm:pr-24 min-w-full"
          animate={{ x: [0, "-100%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Slider ki speed control karne ke liye (kam number matlab fast)
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center w-24 sm:w-32 h-12 opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer select-none shrink-0"
            >
              {/* Aap yahan direct <img> use kar sakte hain ya custom SVG */}
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-w-full max-h-full object-contain filter invert" 
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}