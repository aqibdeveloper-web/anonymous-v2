"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";

const row1Items = [
  { text: "Content", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=150&q=80" },
  { text: "Campaigns", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=150&q=80" },
  { text: "Commercials", img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=150&q=80" },
  { text: "Concert Coverage", img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=150&q=80" },
  { text: "Cover Artwork", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=150&q=80" },
  { text: "Documentaries", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=150&q=80" },
  { text: "Editorials", img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=150&q=80" },
  { text: "Events", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=150&q=80" },
];

const row2Items = [
  { text: "Social Media", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=150&q=80" },
  { text: "Stage Design", img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=150&q=80" },
  { text: "Website Design", img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=150&q=80" },
  { text: "Feature Films", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=150&q=80" },
  { text: "Lookbooks", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=150&q=80" },
  { text: "Music Videos", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=150&q=80" },
  { text: "Packaging Design", img: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=150&q=80" },
  { text: "Product", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&q=80" },
];

interface MarqueeRowProps {
  items: Array<{ text: string; img: string }>;
  baseVelocity: number; 
}

function MarqueeRow({ items, baseVelocity = 1 }: MarqueeRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  // High-end smooth velocity mapping. Scroll karne par thoda sa accelerate hoga bas.
  const velocityFactor = useTransform(scrollVelocity, [0, 1000], [1, 3], {
    clamp: true,
  });

 useAnimationFrame((time, delta) => {
    // let ko badal kar const kar diya hai taake linting error door ho jaye
    const moveBy = baseVelocity * (delta / 1000) * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
    
    if (baseX.get() <= -50) {
      baseX.set(0);
    } else if (baseX.get() > 0) {
      baseX.set(-50);
    }
  });

  const duplicatedItems = [...items, ...items, ...items, ...items];
  const x = useTransform(baseX, (v) => `${v}%`);

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap w-full relative my-3 sm:my-5">
      <motion.div style={{ x }} className="flex whitespace-nowrap gap-10 sm:gap-14 flex-nowrap">
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 sm:gap-6 select-none shrink-0"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-normal tracking-tight text-zinc-100">
              {item.text}
            </span>
            
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 aspect-square">
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-full object-cover brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function VelocityMarquee() {
  return (
    <section className="w-full bg-[#0d0d0d] py-16 md:py-24 overflow-hidden border-b border-zinc-900/40 relative flex flex-col justify-center">
      
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Leftwards movement set to ultra smooth slow factor (-0.8) */}
      <MarqueeRow items={row1Items} baseVelocity={-0.8} />

      {/* Row 2: Rightwards movement set to ultra smooth slow factor (0.8) */}
      <MarqueeRow items={row2Items} baseVelocity={0.8} />
      
    </section>
  );
}