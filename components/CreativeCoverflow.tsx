"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, MotionValue, PanInfo } from "framer-motion";

const items = [
  { type: "image", src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80", title: "Creative Narrative", author: "Alex Rivers", role: "Director" },
  { type: "image", src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80", title: "Vanguard Fashion", author: "Sophia Stark", role: "Cinematographer" },
  { type: "video", src: "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-32120-large.mp4", title: "Stay Cool with Vice", author: "Nik Arthur", role: "Animator, Director" },
  { type: "image", src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&q=80", title: "Cinematic Overlays", author: "Marcus Vance", role: "VFX Artist" },
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
  
  const cardWidth = 260; 
  const gap = 140; 
  const step = cardWidth + gap;

  // Track coordinates via MotionValue smoothly
  const dragX = useMotionValue(-activeIndex * step);
  const springDragX = useSpring(dragX, { stiffness: 120, damping: 24, mass: 0.8 });

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

  // Performance Fix: Dragging ke dauran baar-baar activeIndex change karne ke bajaye, 
  // drag start/end aur physics completion par index control karein.
  useEffect(() => {
    const unsubscribe = springDragX.on("change", (latest) => {
      const calculatedIndex = Math.round(-latest / step);
      const clampedIndex = Math.max(0, Math.min(items.length - 1, calculatedIndex));
      setActiveIndex(clampedIndex);
    });
    return () => unsubscribe();
  }, [step]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    
    const swipeVelocity = info.velocity.x;
    const currentOffset = dragX.get();
    let targetIndex = Math.round(-currentOffset / step);

    // Speed base alignment logic
    if (swipeVelocity < -300) {
      targetIndex = Math.min(items.length - 1, targetIndex + 1);
    } else if (swipeVelocity > 300) {
      targetIndex = Math.max(0, targetIndex - 1);
    }

    targetIndex = Math.max(0, Math.min(items.length - 1, targetIndex));
    dragX.set(-targetIndex * step);
    setActiveIndex(targetIndex);
  };

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setIsDragging(false); }}
      className={`w-full bg-[#0a0a0a] text-white py-24 overflow-hidden relative flex flex-col items-center justify-center select-none ${
        isDragging ? "cursor-grabbing" : "cursor-none"
      }`}
    >
      {/* Dynamic Cursor */}
      <AnimatePresence>
        {isHovering && !isDragging && (
          <motion.div
            className="hidden md:flex fixed w-11 h-11 bg-white/10 backdrop-blur-md border border-white/20 rounded-full items-center justify-center pointer-events-none z-50 text-white shadow-[0_0_15px_rgba(255,255,255,0.08)]"
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
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="flex items-center gap-1 text-sm font-light text-zinc-300 tracking-tighter">
              <span>‹</span>
              <span>›</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Descriptions */}
      <div className="text-center max-w-3xl mb-20 px-4 relative z-10 pointer-events-none">
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-normal tracking-tight text-zinc-100 leading-snug max-w-xl mx-auto">
          Trusted by industry leading creatives to showcase their work
        </h2>
        <p className="text-xs md:text-sm text-zinc-500 font-normal max-w-md mt-3 leading-relaxed opacity-50 mx-auto">
          The NOVA portfolio was built to give clients the right information for hiring and allow creatives to showcase their work to a world-class audience.
        </p>
      </div>

      {/* ================= GLOBAL DRAG SURFACE ================= */}
      <motion.div 
        drag="x"
        style={{ x: dragX }}
        dragConstraints={{ left: -(items.length - 1) * step, right: 0 }}
        dragElastic={0.1}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        className="absolute inset-x-0 bottom-16 top-64 z-30 cursor-grab active:cursor-grabbing"
      />

      {/* ================= LINEAR 3D CYLINDER HORIZON ================= */}
      <div className="w-full h-[450px] flex items-center justify-center relative perspective-[2000px] perspective-origin-center pointer-events-none">
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
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ================= ISOLATED CARD ENGINE =================
interface CardProps {
  item: typeof items[0];
  idx: number;
  springDragX: MotionValue<number>;
  activeIndex: number;
  step: number;
  cardWidth: number;
}

function CoverflowCard({ item, idx, springDragX, activeIndex, step, cardWidth }: CardProps) {
  const basePosition = idx * step;

  // Optimized Transform Range for smoother 3D interpolation
  const transformRange = [
    -basePosition - step, 
    -basePosition, 
    -basePosition + step
  ];

  const rotateY = useTransform(springDragX, transformRange, [35, 0, -35]);
  const translateZ = useTransform(springDragX, transformRange, [0, 120, 0]);
  const scale = useTransform(springDragX, transformRange, [0.85, 1.05, 0.85]);
  
  const opacity = useTransform(
    springDragX, 
    [-basePosition - 2 * step, -basePosition - step, -basePosition, -basePosition + step, -basePosition + 2 * step],
    [0.2, 0.6, 1, 0.6, 0.2]
  );

  const isActive = idx === activeIndex;

  return (
    <motion.div
      style={{
        position: "absolute",
        transformOrigin: "center center",
        width: cardWidth,
        x: basePosition, // CSS Left se behtar hai 'x' use karna, GPU acceleration milti hai
        rotateY: rotateY,
        z: translateZ,
        scale: scale,
        opacity: opacity,
        zIndex: isActive ? 40 : 20 - Math.abs(idx - activeIndex),
        willChange: "transform",
      }}
      className="aspect-[4/4.6] rounded-2xl overflow-hidden bg-[#131315] border border-zinc-900/80 shadow-[0_45px_90px_rgba(0,0,0,0.9)] flex flex-col justify-end p-0"
    >
      {/* Asset Render Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        {item.type === "video" ? (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/10 z-10" />
      </div>

      {/* Sliding Glass Info Drawer */}
      <div className="w-full z-20 relative">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="w-full bg-[#141416]/95 backdrop-blur-xl border-t border-white/[0.06] p-4 flex flex-col"
            >
              <h4 className="text-sm font-medium text-zinc-100 tracking-wide mb-1.5">
                {item.title}
              </h4>
              
              <div className="flex items-center gap-2 pt-2 border-t border-white/[0.04]">
                <div className="w-5 h-5 rounded-full bg-emerald-700/80 border border-emerald-500/30 text-[9px] flex items-center justify-center font-bold text-white uppercase shrink-0">
                  {item.author[0]}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-normal text-zinc-300 leading-none mb-0.5">{item.author}</span>
                  <span className="text-[10px] text-zinc-500 font-light leading-none">{item.role}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}