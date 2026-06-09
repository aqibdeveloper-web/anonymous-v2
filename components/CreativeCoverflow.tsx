"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionValueEvent } from "framer-motion";

const items = [
  { type: "image", src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80", title: "Creative Narrative", author: "Alex Rivers", role: "Director" },
  { type: "image", src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80", title: "Vanguard Fashion", author: "Sophia Stark", role: "Cinematographer" },
  { type: "image", src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80", title: "Cinematic Overlays", author: "Marcus Vance", role: "VFX Artist" },
  { type: "image", src: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=600&q=80", title: "Altered States", author: "Dylan Chawles", role: "Groomer, Hair Stylist" },
  { type: "video", src: "https://assets.mixkit.co/videos/preview/mixkit-retro-futuristic-sci-fi-background-42359-large.mp4", title: "Neon Cyberpunk 2026", author: "Aqib Dev", role: "3D Artist" },
  { type: "image", src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80", title: "Ethereal Soundscapes", author: "Elena Rostova", role: "Producer" },
  { type: "image", src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80", title: "Visual Arts", author: "Chris Dawn", role: "Designer" },
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
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      {/* High-End Ambient Studio Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none z-0 blur-3xl rounded-full" />

      {/* Cyber-Minimalist Follower Cursor */}
      <AnimatePresence>
        {isHovering && !isDragging && (
          <motion.div
            className="hidden md:flex fixed w-12 h-12 bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-full items-center justify-center pointer-events-none z-50 text-white shadow-[0_0_25px_rgba(255,255,255,0.06)]"
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
          Trusted by industry leading creatives to showcase their work
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 font-normal max-w-md mt-4 leading-relaxed mx-auto opacity-70 tracking-wide">
          The NOVA portfolio was built to give clients the right information for hiring and allow creatives to showcase their work to a world-class audience.
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
  
  // Deep transform mapping matrices for the exact "image_35e0fc.jpg" replication
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

  // True deep dark opacity drop for layered side-cards
  const opacity = useTransform(springDragX, transformRange, [0.15, 0.45, 1, 0.45, 0.15]);

  const isActive = idx === activeIndex;

  return (
    <motion.div
      style={{
        position: "absolute",
        transformOrigin: "center center",
        width: cardWidth,
        x: useTransform(() => basePosition + xOffset.get()), 
        rotateY: rotateY,
        z: translateZ,
        scale: scale,
        opacity: opacity,
        zIndex: isActive ? 50 : 30 - Math.abs(idx - activeIndex),
        willChange: "transform, opacity",
      }}
      onClick={onCardClick}
      // Exact Proportional Elongated Ratio matching image_35e0fc.jpg 
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
              <h4 className="text-[15px] font-normal text-zinc-100 tracking-tight mb-2.5">
                {item.title}
              </h4>
              
              <div className="w-full h-[1px] bg-white/[0.06] mb-3.5" />
              
              <div className="flex items-center gap-2.5">
                {/* Minimalist Profile Initials Disc */}
                <div className="w-[26px] h-[26px] rounded-full bg-zinc-800/90 border border-white/10 text-[10px] flex items-center justify-center font-medium text-zinc-300 uppercase shrink-0">
                  {item.author.substring(0, 2)}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-zinc-200 leading-none">{item.author}</span>
                  <span className="text-[10px] text-zinc-500 tracking-normal font-light mt-1">{item.role}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}