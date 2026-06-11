"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";

const items = [
  { type: "image", src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80", title: "E-Commerce Core System", author: "VOID Dev", role: "Website Development" },
  { type: "image", src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80", title: "FinTech Neo-Banking App", author: "VOID Mobile", role: "Mobile App Development" },
  { type: "image", src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80", title: "Global Authority Strategy", author: "VOID SEO", role: "SEO Optimization" },
  { type: "image", src: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=600&q=80", title: "Cyber Gaming Identity", author: "VOID Brand", role: "Branding & Graphics" },
  { type: "video", src: "https://assets.mixkit.co/videos/preview/mixkit-retro-futuristic-sci-fi-background-42359-large.mp4", title: "Next-Gen Software Portal", author: "VOID Dev", role: "Website Development" },
  { type: "image", src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80", title: "SaaS Dashboard Architecture", author: "VOID UI", role: "UI/UX Architecture" },
  { type: "image", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80", title: "Enterprise Scaling Node", author: "VOID Growth", role: "SEO & Automation" },
];

export default function CreativeCoverflow() {
  const [activeIndex, setActiveIndex] = useState(3); 
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // High-End Micro Metrics
  const cardWidth = 290; 
  const gap = -30; // Intersecting negative margin for authentic Coverflow stacking
  const step = cardWidth + gap;

  const dragX = useMotionValue(-activeIndex * step);
  // Inertia dynamics are tuned for ultra-premium responsive control
  const springDragX = useSpring(dragX, { stiffness: 90, damping: 28, mass: 0.5 });

  // Custom Cursor Coordinate Sync
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeMouseMove || window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Frame-rate safe index transition engine
  useMotionValueEvent(springDragX, "change", (latest) => {
    const calculatedIndex = Math.round(-latest / step);
    const clampedIndex = Math.max(0, Math.min(items.length - 1, calculatedIndex));
    if (clampedIndex !== activeIndex) {
      setActiveIndex(clampedIndex);
    }
  });

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const swipeVelocity = info.velocity.x;
    const currentOffset = dragX.get();
    let targetIndex = Math.round(-currentOffset / step);

    if (swipeVelocity < -150) {
      targetIndex = Math.min(items.length - 1, targetIndex + 1);
    } else if (swipeVelocity > 150) {
      targetIndex = Math.max(0, targetIndex - 1);
    }

    targetIndex = Math.max(0, Math.min(items.length - 1, targetIndex));
    dragX.set(-targetIndex * step);
  };

  const handleCardClick = (idx: number) => {
    if (idx !== activeIndex) {
      dragX.set(-idx * step);
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setIsDragging(false); }}
      className={`w-full bg-[#0D0D0D] text-white py-24 overflow-hidden relative flex flex-col items-center justify-center min-h-screen select-none ${
        isDragging ? "cursor-grabbing" : "cursor-none"
      }`}
    >
      {/* High-End Ambient Studio Glow - Configured with Brand Hex Palette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-[#c084fc]/[0.03] to-transparent pointer-events-none z-0 blur-3xl rounded-full" />

      {/* Cyber-Minimalist Follower Cursor */}
      <AnimatePresence>
        {isHovering && !isDragging && (
          <motion.div
            className="hidden md:flex fixed w-12 h-12 bg-[#dfaed6]/[0.08] backdrop-blur-md border border-[#c084fc]/30 rounded-full items-center justify-center pointer-events-none z-50 text-white shadow-[0_0_25px_rgba(192,132,252,0.1)]"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              x: "-50%",
              y: "-50%",
              position: "absolute"
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 550, damping: 26 }}
          >
            <div className="flex items-center gap-1 text-xs font-light text-zinc-300 tracking-wider">
              <span>‹</span>
              <span>›</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Controls */}
      <div className="text-center max-w-3xl mb-16 px-6 relative z-10 pointer-events-none">
        <h2 className="text-3xl sm:text-4xl md:text-[38px] font-medium font-sans tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent leading-[1.2] max-w-xl mx-auto">
          Case Studies Built To Benchmark The Industry Standard
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 font-normal max-w-md mt-4 leading-relaxed mx-auto opacity-70 tracking-wide">
          The <span className="text-[#dfaed6]">VOID</span> portfolio showcases next-generation web architectures, responsive mobile systems, high-growth technical SEO, and cutting-edge visual identities.
        </p>
      </div>

      {/* Interactive Global Drag Deck */}
      <motion.div 
        drag="x"
        style={{ x: dragX }}
        dragConstraints={{ left: -(items.length - 1) * step, right: 0 }}
        dragElastic={0.12}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        className="absolute inset-x-0 bottom-24 top-72 z-40 cursor-grab active:cursor-grabbing"
      />

      {/* 3D Curved Perspective Horizon */}
      <div className="w-full h-[540px] flex items-center justify-center relative perspective-[1500px] perspective-origin-center pointer-events-none z-10">
        <motion.div 
          style={{ x: springDragX }} 
          className="relative flex items-center justify-center h-full transform-style-3d"
        >
          {items.map((item, idx) => (
            <CoverflowCard 
              key={idx} 
              item={item} 
              idx={idx} 
              springDragX={springDragX} 
              activeIndex={activeIndex} 
              step={step}
              cardWidth={cardWidth}
              onCardClick={() => handleCardClick(idx)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ================= COVERSHELL CARD SUB-ENGINE =================
interface CardProps {
  item: typeof items[0];
  idx: number;
  springDragX: MotionValue<number>;
  activeIndex: number;
  step: number;
  cardWidth: number;
  onCardClick: () => void;
}

function CoverflowCard({ item, idx, springDragX, activeIndex, step, cardWidth, onCardClick }: CardProps) {
  const basePosition = idx * step;
  
  // Deep transform mapping matrices for the exact replication
  const transformRange = [
    -basePosition - step * 2,
    -basePosition - step, 
    -basePosition, 
    -basePosition + step,
    -basePosition + step * 2
  ];

  // Precise cinematic rotation and space projection curves
  const rotateY = useTransform(springDragX, transformRange, [50, 40, 0, -40, -50]); 
  const translateZ = useTransform(springDragX, transformRange, [-180, -60, 180, -60, -180]); 
  const scale = useTransform(springDragX, transformRange, [0.75, 0.88, 1.04, 0.88, 0.75]);
  const xOffset = useTransform(springDragX, transformRange, [120, 60, 0, -60, -120]);

  // Combined functional transform engine to comply with strict Next.js deployment builds
  const dynamicX = useTransform(() => basePosition + xOffset.get());

  // True deep dark opacity drop for layered side-cards
  const opacity = useTransform(springDragX, transformRange, [0.15, 0.45, 1, 0.45, 0.15]);

  const isActive = idx === activeIndex;

  return (
    <motion.div
      style={{
        position: "absolute",
        transformOrigin: "center center",
        width: cardWidth,
        x: dynamicX, 
        rotateY: rotateY,
        z: translateZ,
        scale: scale,
        opacity: opacity,
        zIndex: isActive ? 50 : 30 - Math.abs(idx - activeIndex),
        willChange: "transform, opacity",
      }}
      onClick={onCardClick}
      className="aspect-[9/13.8] rounded-[22px] overflow-hidden bg-[#0a0a0c] border border-white/[0.05] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.98)] flex flex-col justify-end relative pointer-events-auto"
    >
      {/* Structural Glassmorphic Outer Rim Highlight */}
      <div className="absolute inset-0 border border-white/[0.07] rounded-[22px] pointer-events-none z-30" />

      {/* Asset Render Viewport */}
      <div className="absolute inset-0 w-full h-full z-0 bg-[#0c0c0e]">
        {item.type === "video" ? (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover select-none pointer-events-none filter brightness-[0.88] contrast-[1.05]"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover select-none pointer-events-none filter brightness-[0.92] contrast-[1.02]"
          />
        )}
        {/* Deep Studio Fade Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10" />
      </div>

      {/* Drawer Deck for Active Info Block */}
      <div className="w-full z-20 relative pointer-events-none">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
              className="w-full p-5 flex flex-col"
            >
              <h4 className="text-[15px] font-normal text-zinc-100 tracking-tight mb-2.5 transition-colors drop-shadow-[0_0_8px_rgba(223,174,214,0.1)]">
                {item.title}
              </h4>
              
              <div className="w-full h-[1px] bg-white/[0.06] mb-3.5" />
              
              <div className="flex items-center gap-2.5">
                {/* Minimalist Profile Initials Disc */}
                <div className="w-[26px] h-[26px] rounded-full bg-zinc-800/90 border border-[#dfaed6]/20 text-[10px] flex items-center justify-center font-medium text-zinc-300 uppercase shrink-0">
                  {item.author.substring(0, 2)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-zinc-200 leading-none">{item.author}</span>
                  <span className="text-[10px] text-[#c084fc] tracking-normal font-light mt-1">{item.role}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}