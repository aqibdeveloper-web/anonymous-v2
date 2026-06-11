"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

// Digital Agency Services Array for Infinite Auto-Typing Loop
const DIGITAL_SERVICES = [
  "Website Development",
  "Mobile App Development",
  "SEO Optimization",
  "Branding & Identity",
  "Next-Gen UI/UX Systems",
  "Custom Digital Products"
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // Automatic Service Rotator Logic (Changes every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % DIGITAL_SERVICES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse absolute positions tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs adjustment for slow elegant movement
  const springConfig = { damping: 35, stiffness: 50, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Layering transforms for parallax depth
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
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 pb-24 pt-24 overflow-hidden bg-[#0D0D0D] text-white select-none"
    >
      {/* Ambient Radial Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,174,214,0.04),transparent_65%)] pointer-events-none" />

      {/* ======================================================================
        GLOBAL LAYOUT BOUNDARY CONTAINER (max-w-7xl)
        ======================================================================
      */}
      <div className="w-full max-w-7xl relative min-h-screen flex flex-col items-center justify-center py-24 md:py-0">
        
        {/* ================= MAIN CONTENT COMPONENT ================= */}
        <div className="w-full max-w-4xl text-center z-20 pointer-events-none select-none">
          <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.15] md:leading-[1.1] text-zinc-100 max-w-xs sm:max-w-xl md:max-w-3xl mx-auto font-sans font-medium">
            Connecting Leading Brands <br className="hidden sm:inline" /> with Top Creative Talent
          </h1>

          {/* Upgraded Dynamic Badge Container with Auto-Changing Services */}
          <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 px-2 h-10">
            <span>Deploy your</span>
            <div className="relative flex justify-center items-center h-full px-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="px-4 py-1.5 rounded-full border border-[#c084fc]/30 bg-[#c084fc]/10 text-[#dfaed6] font-medium backdrop-blur-sm shadow-[0_0_20px_rgba(223,174,214,0.15)] whitespace-nowrap block"
                >
                  {DIGITAL_SERVICES[index]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span>here ➔</span>
          </div>
        </div>

        {/* ================= FLOATING VISUAL LAYERS ================= */}

        {/* 1. Top Left Card: Goshi */}
        <motion.div 
          style={{ x: layer1X, y: layer1Y }}
          className="absolute top-24 left-[2%] md:left-[10%] max-w-[180px] md:max-w-[220px] bg-white/[0.01] border border-white/[0.05] p-3 md:p-4 rounded-2xl backdrop-blur-md hidden sm:block shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-4 h-4 rounded-full bg-[#dfaed6]/20 border border-[#dfaed6]/40 flex items-center justify-center text-[9px]">⚡</div>
            <span className="text-[11px] font-semibold text-zinc-400">Goshi</span>
          </div>
          <p className="text-[10px] md:text-[11px] text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200 font-medium">Website Development</strong> needed in Los Angeles.
          </p>
        </motion.div>

        {/* 2. Mid Right Card: PizzaSlime */}
        <motion.div 
          style={{ x: layer1X, y: layer1Y }}
          className="absolute top-32 right-[2%] md:right-[10%] max-w-[200px] md:max-w-[240px] bg-white/[0.01] border border-white/[0.05] p-3 md:p-4 rounded-2xl backdrop-blur-md hidden md:block shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-4 h-4 rounded-full bg-[#c084fc]/20 border border-[#c084fc]/40 flex items-center justify-center text-[9px]">🎨</div>
            <span className="text-[11px] font-semibold text-zinc-400">PizzaSlime</span>
          </div>
          <p className="text-[10px] md:text-[11px] text-zinc-400 leading-relaxed">
            Full-time <strong className="text-zinc-200 font-medium">Branding & UI Specialist</strong> needed in LA.
          </p>
        </motion.div>

        {/* 3. Left Side Editorial Image Component */}
        <motion.div 
          style={{ x: layer2X, y: layer2Y }}
          className="relative sm:absolute bottom-8 sm:bottom-16 left-auto sm:left-[2%] md:left-[5%] z-10 flex flex-row sm:flex-col gap-3 items-center mt-12 sm:mt-0 w-full sm:w-auto px-4 sm:px-0"
        >
          <div className="w-24 h-28 sm:w-40 sm:h-48 md:w-48 md:h-56 rounded-xl overflow-hidden border border-white/[0.05] bg-zinc-900 shadow-2xl shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" 
              alt="Talent Editorial"
              className="w-full h-full object-cover grayscale opacity-60 brightness-90"
            />
          </div>
          <div className="max-w-[200px] sm:max-w-[210px] bg-[#050507]/80 border border-white/[0.05] p-3 rounded-xl shadow-2xl backdrop-blur-md text-left">
            <span className="text-[10px] md:text-[11px] font-medium text-zinc-300 block">Conor Cunningham</span>
            <p className="text-[9px] md:text-[10px] text-zinc-400 mt-1">
              <strong className="text-zinc-300 font-medium">Mobile App Engineer</strong> needed in Miami.
            </p>
          </div>
        </motion.div>

        {/* 4. Right Side Action Image Component */}
        <motion.div 
          style={{ x: layer3X, y: layer3Y }}
          className="relative sm:absolute bottom-4 sm:bottom-12 right-auto sm:right-[2%] md:right-[5%] z-10 flex flex-row-reverse sm:flex-col items-center sm:items-end gap-3 w-full sm:w-auto px-4 sm:px-0 mt-4 sm:mt-0"
        >
          <div className="max-w-[200px] bg-[#050507]/80 border border-white/[0.05] p-3 rounded-xl shadow-2xl backdrop-blur-md text-left sm:translate-y-4 sm:-translate-x-4 z-20">
            <span className="text-[10px] md:text-[11px] font-medium text-zinc-300 block">Aidan Cullen</span>
            <p className="text-[9px] md:text-[10px] text-zinc-400 mt-1">
              <strong className="text-zinc-300 font-medium">SEO & Marketing Director</strong> needed for scale assets.
            </p>
          </div>
          <div className="w-24 h-28 sm:w-36 sm:h-52 md:w-44 md:h-60 rounded-xl overflow-hidden border border-white/[0.05] bg-zinc-900 shadow-2xl shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80" 
              alt="Talent Action"
              className="w-full h-full object-cover opacity-60 brightness-90"
            />
          </div>
        </motion.div>

        {/* 5. Bottom Center Tracker Card */}
        <motion.div
          style={{ x: layer2X, y: layer2Y }}
          className="absolute bottom-6 max-w-[240px] bg-white/[0.01] border border-white/[0.05] px-4 py-2.5 rounded-xl backdrop-blur-md hidden lg:block shadow-xl text-center"
        >
          <p className="text-[10px] text-zinc-400 font-mono tracking-tight">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#dfaed6] mr-1.5 animate-pulse" />
            SEO & Brand Strategy consultants needed globally.
          </p>
        </motion.div>

      </div>
    </section>
  );
}