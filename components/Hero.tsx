"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse absolute positions tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs adjustment for slow elegant movement
  const springConfig = { damping: 35, stiffness: 50, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Layering transforms for parallax depth (Slightly reduced for tighter luxury control)
  const layer1X = useTransform(smoothX, [-400, 400], [-10, 10]);
  const layer1Y = useTransform(smoothY, [-400, 400], [-10, 10]);

  const layer2X = useTransform(smoothX, [-400, 400], [-20, 20]);
  const layer2Y = useTransform(smoothY, [-400, 400], [-20, 20]);

  const layer3X = useTransform(smoothX, [-400, 400], [-30, 30]);
  const layer3Y = useTransform(smoothY, [-400, 400], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const relativeX = e.clientX - rect.left - width / 2;
    const relativeY = e.clientY - rect.top - height / 2;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden bg-[#0d0d0d] text-white select-none"
    >
      {/* Ambient Radial Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015),transparent_60%)] pointer-events-none" />

      {/* ======================================================================
        GLOBAL LAYOUT BOUNDARY CONTAINER (max-w-7xl)
        Ab hum aage jitne bhi sections banayenge, sab isi content boundaries par locked honge.
        ======================================================================
      */}
      <div className="w-full max-w-7xl relative min-h-screen flex flex-col items-center justify-center py-24 md:py-0">
        
        {/* ================= MAIN CONTENT COMPONENT ================= */}
        <div className="w-full max-w-4xl text-center z-20 pointer-events-none select-none">
          <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.15] md:leading-[1.1] text-zinc-100 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto">
            Connecting Leading Brands <br className="hidden sm:inline" /> with Top Creative Talent
          </h1>

          {/* Responsive Badge Container */}
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 px-2">
            <span>Hire the perfect</span>
            <span className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-zinc-200 font-medium backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.15)] whitespace-nowrap">
              Hair & Makeup Artist
            </span>
            <span>here ➔</span>
          </div>
        </div>

        {/* ================= FLOATING VISUAL LAYERS (COMPRESSED POSITIONING) ================= */}

        {/* 1. Top Left Card: Goshi */}
        <motion.div 
          style={{ x: layer1X, y: layer1Y }}
          className="absolute top-24 left-[2%] md:left-[10%] max-w-[180px] md:max-w-[220px] bg-zinc-900/60 border border-zinc-800/60 p-3 md:p-4 rounded-2xl backdrop-blur-md hidden sm:block shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-4 h-4 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-[9px]">✨</div>
            <span className="text-[11px] font-semibold text-zinc-400">Goshi</span>
          </div>
          <p className="text-[10px] md:text-[11px] text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200 font-medium">Social Media Manager</strong> needed in Los Angeles.
          </p>
        </motion.div>

        {/* 2. Mid Right Card: PizzaSlime */}
        <motion.div 
          style={{ x: layer1X, y: layer1Y }}
          className="absolute top-32 right-[2%] md:right-[10%] max-w-[200px] md:max-w-[240px] bg-zinc-900/60 border border-zinc-800/60 p-3 md:p-4 rounded-2xl backdrop-blur-md hidden md:block shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-[9px]">🎨</div>
            <span className="text-[11px] font-semibold text-zinc-400">PizzaSlime</span>
          </div>
          <p className="text-[10px] md:text-[11px] text-zinc-400 leading-relaxed">
            Full-time <strong className="text-zinc-200 font-medium">Graphic Designer</strong> needed in LA.
          </p>
        </motion.div>

        {/* 3. Left Side Editorial Image Component (Brought closer from corner using 2% / 5% rules) */}
        <motion.div 
          style={{ x: layer2X, y: layer2Y }}
          className="relative sm:absolute bottom-8 sm:bottom-16 left-auto sm:left-[2%] md:left-[5%] z-10 flex flex-row sm:flex-col gap-3 items-center mt-12 sm:mt-0 w-full sm:w-auto px-4 sm:px-0"
        >
          <div className="w-24 h-28 sm:w-40 sm:h-48 md:w-48 md:h-56 rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-900 shadow-2xl shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" 
              alt="Talent Editorial"
              className="w-full h-full object-cover grayscale opacity-75"
            />
          </div>
          <div className="max-w-[200px] sm:max-w-[210px] bg-zinc-900/80 border border-zinc-800/50 p-3 rounded-xl shadow-2xl backdrop-blur-md text-left">
            <span className="text-[10px] md:text-[11px] font-medium text-zinc-300 block">Conor Cunningham</span>
            <p className="text-[9px] md:text-[10px] text-zinc-400 mt-1">
              <strong className="text-zinc-300 font-medium">Makeup Artist</strong> needed in Miami on 2/25.
            </p>
          </div>
        </motion.div>

        {/* 4. Right Side Action Image Component (Brought closer from corner using 2% / 5% rules) */}
        <motion.div 
          style={{ x: layer3X, y: layer3Y }}
          className="relative sm:absolute bottom-4 sm:bottom-12 right-auto sm:right-[2%] md:right-[5%] z-10 flex flex-row-reverse sm:flex-col items-center sm:items-end gap-3 w-full sm:w-auto px-4 sm:px-0 mt-4 sm:mt-0"
        >
          <div className="max-w-[200px] bg-zinc-900/80 border border-zinc-800/50 p-3 rounded-xl shadow-2xl backdrop-blur-md text-left sm:translate-y-4 sm:-translate-x-4 z-20">
            <span className="text-[10px] md:text-[11px] font-medium text-zinc-300 block">Aidan Cullen</span>
            <p className="text-[9px] md:text-[10px] text-zinc-400 mt-1">
              <strong className="text-zinc-300 font-medium">Creative Producer</strong> needed for an event.
            </p>
          </div>
          <div className="w-24 h-28 sm:w-36 sm:h-52 md:w-44 md:h-60 rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-900 shadow-2xl shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80" 
              alt="Talent Action"
              className="w-full h-full object-cover opacity-70 mix-blend-screen"
            />
          </div>
        </motion.div>

        {/* 5. Bottom Center Tracker Card */}
        <motion.div
          style={{ x: layer2X, y: layer2Y }}
          className="absolute bottom-6 max-w-[220px] bg-zinc-900/40 border border-zinc-800/60 px-4 py-2.5 rounded-xl backdrop-blur-md hidden lg:block shadow-xl text-center"
        >
          <p className="text-[10px] text-zinc-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5 animate-pulse" />
            Photographer needed in Paris.
          </p>
        </motion.div>

      </div>
    </section>
  );
}