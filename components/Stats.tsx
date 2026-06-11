"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// Count-up animation component taake counter smoothly upar jaye
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 70,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const statsData = [
    { value: 150, suffix: "+", label: "Projects Delivered" },
    { value: 40, suffix: "+", label: "Apps Launched" },
    { value: 500, suffix: "+", label: "Keywords Ranked" },
    { value: 80, suffix: "+", label: "Brands Transformed" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#0D0D0D] text-white flex flex-col items-center justify-center px-4 py-24 md:py-36 overflow-hidden border-t border-zinc-900/40 relative"
    >
      {/* GLOBAL LAYOUT BOUNDARY - Locked inside max-w-7xl exactly like Hero */}
      <div className="w-full max-w-7xl flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Heading Container wrapping both the text and its absolute center glow */}
        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
          
          {/* ================= DEAD CENTER RADIAL GLOW =================
            Heading container ke center par locked hai.
          */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[550px] h-[180px] sm:h-[280px] bg-gradient-to-r from-[#c084fc]/15 via-[#dfaed6]/10 to-[#c084fc]/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none select-none z-0" />

          {/* Main Heading Layer with Fade up */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.25] md:leading-[1.2] text-zinc-100 relative z-10 w-full"
          >
            <span className="bg-gradient-to-r from-[#dfaed6] via-[#c084fc] to-[#dfaed6] bg-clip-text text-transparent inline-block">
              $60M+
            </span>{" "}
            generated for <br className="sm:hidden" /> creatives in just{" "}
            <span className="bg-gradient-to-r from-[#dfaed6] via-[#c084fc] to-[#dfaed6] bg-clip-text text-transparent inline-block">
              16 months
            </span>
          </motion.h2>
        </div>

        {/* Stats Flex Grid block matching image_462e9c.png */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-16 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-2xl mx-auto relative z-10"
        >
          {statsData.map((stat, idx) => (
            <div 
              key={idx}
              className="w-full sm:w-1/4 bg-zinc-900/20 border border-zinc-800/40 rounded-2xl py-5 px-6 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/60 shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-center group"
            >
              <div className="text-xl md:text-2xl tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-xs md:text-xs text-zinc-500 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}