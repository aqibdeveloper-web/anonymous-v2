"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonialsRow1 = [
  {
    id: 1,
    quote: "We're shooting 24 campaigns a year now, so I'm having to build 2 crews a month, usually from scratch. NOVA is the only place to find those people quickly.",
    name: 'Alex "2Tone" Erdmann',
    role: "Born x Raised",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80"
  },
  {
    id: 2,
    quote: "Before NOVA, nothing like this by creatives had ever existed for us. It genuinely helped keep a roof over my head and keep me plugged into the industry!",
    name: "Rafael Avcioglu",
    role: "Photographer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  },
  {
    id: 3,
    quote: "NOVA has been a fundamental part of my small business for the last 2 years. It has been my secret weapon to pull off world-class productions on any budget.",
    name: "Jared Craft",
    role: "Craft Alan",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
  },
];

const testimonialsRow2 = [
  {
    id: 4,
    quote: "As a producer, I often need to hire someone within the hour. NOVA is the only app that works as quickly as my mind does. Essential tool for modern scaling.",
    name: "Xulani Akel",
    role: "Freelance Producer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    id: 5,
    quote: "I have to oversee almost a hundred artists and we have so many projects of varying sizes. NOVA has been the perfect place for my team to execute rapidly.",
    name: "Kevin Kloecker",
    role: "Capital Records",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&q=80"
  },
  {
    id: 6,
    quote: "NOVA has not only given me consistent work to build my portfolio, but it even helped me get the attention of agencies like CAA. Genuinely changes lives.",
    name: "Violet Smith",
    role: "Director of Photography",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80"
  },
];

export default function PremiumTestimonialsHorizon() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-32 overflow-hidden relative select-none flex flex-col justify-center">
      
      {/* ================= CYBER HIGH-END BACKGROUND AMBIENCE ================= */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-purple-500/[0.02] via-indigo-500/[0.02] to-transparent blur-[140px] pointer-events-none rounded-full z-0" />
      <div className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-white/[0.01] blur-[120px] pointer-events-none rounded-full z-0" />

      {/* ================= CENTER TYPOGRAPHY HEADER ================= */}
      <div className="text-center max-w-2xl mx-auto mb-20 px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium font-sans tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent leading-none">
          What are people saying
        </h2>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mx-auto mt-5" />
      </div>

      {/* ================= INFINITE GLASS MARQUEE ENGINE ================= */}
      <div className="w-full flex flex-col gap-6 relative z-10 mask-inline-fade">
        
        {/* Extreme Horizontal Blur Faders to block crisp cuts on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-44 bg-gradient-to-r from-[#050507] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-44 bg-gradient-to-l from-[#050507] to-transparent z-20 pointer-events-none" />

        {/* --- ROW 1: LEFT SWIPE INFINITE DECK --- */}
        <div className="w-full overflow-hidden flex whitespace-nowrap group/row1">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
            // Hover check leverages pure CSS variables to tap-hold smooth frame pausing
            className="flex gap-6 shrink-0 pr-6 will-change-transform hover:[animation-play-state:paused] [data-framer-animation]:paused group-hover/row1:[animation-play-state:paused]"
            style={{ animationPlayState: "running" }}
          >
            {/* Double Mapping duplicates contents seamlessly for seamless loops */}
            {[...testimonialsRow1, ...testimonialsRow1, ...testimonialsRow1].map((item, idx) => (
              <TestimonialGlassCard key={`r1-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>

        {/* --- ROW 2: RIGHT SWIPE INFINITE DECK --- */}
        <div className="w-full overflow-hidden flex whitespace-nowrap group/row2">
          <motion.div
            animate={{ x: [-1200, 0] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
            className="flex gap-6 shrink-0 pr-6 will-change-transform group-hover/row2:[animation-play-state:paused]"
          >
            {[...testimonialsRow2, ...testimonialsRow2, ...testimonialsRow2].map((item, idx) => (
              <TestimonialGlassCard key={`r2-${idx}`} item={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

// ================= PREMIUM GLASSMOURPHIC TESTIMONIAL CARD CARD STRUCT =================
function TestimonialGlassCard({ item }: { item: typeof testimonialsRow1[0] }) {
  return (
    <div className="w-[360px] sm:w-[410px] whitespace-normal shrink-0 rounded-[22px] bg-gradient-to-b from-zinc-900/30 to-zinc-950/20 border border-white/[0.04] p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 hover:border-purple-500/20 hover:bg-zinc-900/40 hover:-translate-y-1 hover:shadow-[0_40px_80px_-20px_rgba(147,51,234,0.06)] group/card">
      
      {/* Adaptive Internal Radial Flare */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-white/[0.01] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Structural Inner Border Accent Line */}
      <div className="absolute inset-0 border border-white/[0.02] rounded-[22px] pointer-events-none" />

      {/* Quote Frame Section */}
      <p className="text-[13.5px] sm:text-[14.5px] text-zinc-400 font-normal leading-[1.65] tracking-normal group-hover/card:text-zinc-300 transition-colors duration-300">
        “{item.quote}”
      </p>

      {/* Divider High-End Asset Rim */}
      <div className="w-full h-[1px] bg-white/[0.05] my-6 group-hover/card:bg-white/[0.08] transition-colors duration-300" />

      {/* Presenter Profile Cluster Block */}
      <div className="flex items-center gap-3.5">
        <div className="w-9 h-9 rounded-full overflow-hidden relative border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.4)] shrink-0 bg-zinc-900">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.02]"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs sm:text-[13px] font-medium text-zinc-200 tracking-tight truncate group-hover/card:text-white transition-colors duration-300">
            {item.name}
          </span>
          <span className="text-[10px] text-zinc-500 tracking-normal font-light mt-0.5 uppercase tracking-wider">
            {item.role}
          </span>
        </div>
      </div>
    </div>
  );
}