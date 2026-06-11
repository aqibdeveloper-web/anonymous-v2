"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ================= PREMIUM INQUIRY MODAL COMPONENT =================
interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function PremiumInquiryModal({ isOpen, onClose }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    division: "web",
    budget: "$5k - $10k",
    blueprint: "",
  });

  const divisions = [
    { id: "web", label: "Web Engineering" },
    { id: "mobile", label: "Mobile Products" },
    { id: "seo", label: "SEO & Growth Scaling" },
  ];

  const budgets = ["<$5k", "$5k - $10k", "$10k - $25k", "$25k+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("VOID System Log: Project Blueprint Initiated", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop Blur Engine */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Frame System */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-black border border-white/[0.08] w-full max-w-xl rounded-[28px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] relative p-6 sm:p-8 md:p-10 z-10 text-white"
          >
            {/* Ambient System Accent Glow Vector */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#c084fc]/[0.04] blur-[60px] pointer-events-none rounded-full" />

            {/* Close Button Trigger */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group"
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header Platform */}
            <div className="flex flex-col gap-1.5 mb-8 text-left">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfaed6] animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-[#dfaed6] uppercase tracking-[0.25em]">
                  SYSTEM BLUEPRINT PROTOCOL
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white leading-tight">
                Initiate Project Matrix
              </h2>
              <p className="text-zinc-500 text-xs font-sans leading-relaxed">
                Define your structural engineering needs. Our automated delivery vectors will compute parameters within 12 standard business cycles.
              </p>
            </div>

            {/* Interactive Form Matrix */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              {/* Row 1: Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 relative">
                  <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider pl-1">Identity/Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Maverick Systems"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-zinc-950/60 border border-white/[0.06] focus:border-[#dfaed6]/40 text-sm text-zinc-200 placeholder-zinc-700 px-4 py-3 rounded-xl transition-all duration-300 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider pl-1">Secure Vector Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="architecture@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-zinc-950/60 border border-white/[0.06] focus:border-[#dfaed6]/40 text-sm text-zinc-200 placeholder-zinc-700 px-4 py-3 rounded-xl transition-all duration-300 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Row 2: Divisions Selector */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider pl-1">Target Core Division</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {divisions.map((div) => (
                    <button
                      key={div.id}
                      type="button"
                      onClick={() => setFormData({...formData, division: div.id})}
                      className={`px-3 py-3 rounded-xl border text-xs font-medium transition-all duration-300 text-left relative overflow-hidden ${
                        formData.division === div.id 
                          ? "bg-[#dfaed6]/10 border-[#dfaed6]/40 text-white shadow-[0_0_15px_rgba(223,174,214,0.05)]"
                          : "bg-zinc-950/40 border-white/[0.05] text-zinc-400 hover:text-zinc-200 hover:border-white/10"
                      }`}
                    >
                      {div.label}
                      {formData.division === div.id && (
                        <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#c084fc]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 3: Budgets */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider pl-1">Allocated Resources Pool</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({...formData, budget: b})}
                      className={`py-2 px-1 rounded-lg border text-center text-xs transition-all duration-300 ${
                        formData.budget === b 
                          ? "bg-[#c084fc]/10 border-[#c084fc]/40 text-white font-medium"
                          : "bg-zinc-950/20 border-white/[0.03] text-zinc-500 hover:text-zinc-300 hover:border-white/10"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Specifications */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider pl-1">Project Specifications & Objectives</label>
                <textarea 
                  rows={3}
                  placeholder="Outline parameters, specific tech components, or scale models required..."
                  value={formData.blueprint}
                  onChange={(e) => setFormData({...formData, blueprint: e.target.value})}
                  className="w-full bg-zinc-950/60 border border-white/[0.06] focus:border-[#dfaed6]/40 text-sm text-zinc-200 placeholder-zinc-700 px-4 py-3 rounded-xl transition-all duration-300 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] resize-none"
                />
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="group relative w-full py-4 mt-2 border border-white/10 hover:border-[#dfaed6]/40 bg-zinc-950 text-xs text-zinc-200 hover:text-white font-semibold uppercase tracking-[0.15em] rounded-xl transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(223,174,214,0.12)] overflow-hidden"
              >
                <span className="relative z-10">Compile & Dispatch Blueprint</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#dfaed6]/10 to-[#c084fc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </form>

            <div className="mt-8 pt-4 border-t border-white/[0.04] flex justify-between items-center text-[8px] font-mono tracking-widest text-zinc-600">
              <span>VOID MODULAR PROTOCOL INT.</span>
              <span>SECURE ENCRYPTED PIPELINE</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ================= PRIMARY FOOTER LAYER =================
export default function PremiumCyberFooter() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      {/* Footer Specific Glitch Vector System to match Navbar exactly */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap');
        
        .footer-gaming-font {
          font-family: 'Syncopate', sans-serif;
          text-transform: uppercase;
        }

        .footer-glitch-container {
          position: relative;
          animation: footer-main-glow 3s infinite alternate;
        }

        .footer-glitch-layer-1 {
          animation: footer-glitch-skew-1 1.2s infinite linear alternate-reverse;
          mask-image: linear-gradient(to bottom, transparent 20%, black 20%, black 40%, transparent 40%, transparent 60%, black 60%);
        }

        .footer-glitch-layer-2 {
          animation: footer-glitch-skew-2 0.8s infinite linear alternate-reverse;
          mask-image: linear-gradient(to bottom, black 10%, transparent 10%, transparent 30%, black 30%, black 70%, transparent 70%);
        }

        @keyframes footer-main-glow {
          0% { filter: drop-shadow(0 0 4px rgba(223,174,214,0.4)) drop-shadow(0 0 10px rgba(192,132,252,0.2)); }
          100% { filter: drop-shadow(0 0 8px rgba(223,174,214,0.7)) drop-shadow(0 0 18px rgba(192,132,252,0.4)); }
        }

        @keyframes footer-glitch-skew-1 {
          0% { transform: skew(0deg) translateX(0); }
          10% { transform: skew(-2deg) translateX(-1px); }
          20% { transform: skew(3deg) translateX(2px); }
          25% { transform: skew(0deg) translateX(0); }
          70% { transform: skew(-1deg) translateX(-0.5px); }
          75% { transform: skew(4deg) translateX(3px); }
          80% { transform: skew(-4deg) translateX(-2px); }
          85% { transform: skew(0deg) translateX(0); }
          100% { transform: skew(1deg) translateX(0.5px); }
        }

        @keyframes footer-glitch-skew-2 {
          0% { transform: skew(0deg) translateX(0); }
          15% { transform: skew(4deg) translateX(2px); text-shadow: 2px 0 #22d3ee; }
          30% { transform: skew(-3deg) translateX(-2px); text-shadow: -2px 0 #dfaed6; }
          45% { transform: skew(0deg) translateX(0); }
          50% { transform: skew(2deg) translateX(1px); }
          55% { transform: skew(-5deg) translateX(-3px); }
          60% { transform: skew(0deg) translateX(0); }
          100% { transform: skew(-1deg) translateX(-1px); }
        }
      `}</style>

      <footer className="w-full bg-[#0D0D0D] border-t border-white/[0.06] pt-20 pb-12 px-6 sm:px-12 md:px-24 relative overflow-hidden select-none">
        
        {/* Background Cyber Ambient Glows matching VOID identity */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-[#c084fc]/[0.03] blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-[#dfaed6]/[0.02] blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* ================= TOP SECTION: HIGH-TECH BRANDING & APP INTERACTION ================= */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center pb-16 border-b border-white/[0.06]">
            
            {/* ================= HIGH-END CYBER GLITCH LOGO ENGINE ================= */}
            <div className="md:col-span-8 py-4 w-fit">
              <div className="footer-glitch-container flex items-center cursor-pointer select-none h-16 w-44 relative justify-start">
                
                {/* Base Text (Solid Background Layer) */}
                <span className="footer-gaming-font font-black text-4xl sm:text-5xl md:text-6xl tracking-[0.15em] scale-y-95 text-transparent bg-clip-text bg-gradient-to-r from-[#dfaed6] via-[#d6a2e8] to-[#c084fc] absolute left-0">
                  VOID
                </span>

                {/* Glitch Layer 1 - Cyan-tinted split shift */}
                <span className="footer-gaming-font footer-glitch-layer-1 font-black text-4xl sm:text-5xl md:text-6xl tracking-[0.15em] scale-y-95 text-[#22d3ee]/40 absolute left-0 mix-blend-screen select-none pointer-events-none">
                  VOID
                </span>

                {/* Glitch Layer 2 - Pink-tinted split shift */}
                <span className="footer-gaming-font footer-glitch-layer-2 font-black text-4xl sm:text-5xl md:text-6xl tracking-[0.15em] scale-y-95 text-[#dfaed6]/50 absolute left-0 mix-blend-screen select-none pointer-events-none">
                  VOID
                </span>
                
              </div>
            </div>

            {/* Magnetic Glass Card linked to popup modal */}
            <div className="md:col-span-4 flex md:justify-end">
              <motion.div 
                onClick={() => setIsInquiryOpen(true)}
                whileHover={{ 
                  y: -5,
                  rotateX: -5,
                  rotateY: 8,
                  borderColor: "rgba(223, 174, 214, 0.4)",
                  boxShadow: "0 25px 50px -12px rgba(192, 132, 252, 0.15)"
                }}
                style={{ transformStyle: "preserve-3d" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex items-center gap-4 bg-white/[0.01] border border-white/[0.04] p-5 rounded-[20px] backdrop-blur-xl cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative group/btn w-full max-w-[280px] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#c084fc]/0 via-[#dfaed6]/[0.06] to-[#c084fc]/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out" />
                
                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.05 }}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/btn:bg-white text-white group-hover/btn:text-black transition-colors duration-300"
                >
                  <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </motion.div>
                <div className="flex flex-col" style={{ transform: "translateZ(20px)" }}>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">System Core</span>
                  <span className="text-xs font-semibold text-zinc-200 group-hover/btn:text-white font-sans mt-0.5 transition-colors duration-300">Start Architecture</span>
                </div>
              </motion.div>
            </div>

          </div>

          {/* ================= BOTTOM SECTION: DYNAMIC MAGNETIC LINK MATRIX ================= */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-16 items-start">
            
            {/* Metadata */}
            <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
              <span className="text-[11px] font-bold tracking-widest text-zinc-400 font-sans uppercase">@2026</span>
              <span className="text-xs text-zinc-500 font-normal font-sans">Global Operations</span>
            </div>

            {/* Fluid Capsule Menu Structure */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold tracking-widest text-zinc-400 font-sans uppercase mb-2">Protocols</span>
              {["Terms of Service", "Privacy Policy", "SLA Architecture"].map((item) => (
                <a
                  key={item}
                  href="#"
                  onMouseEnter={() => setHoveredLink(item)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="text-xs text-zinc-500 hover:text-white font-medium font-sans w-fit px-3 py-1.5 -ml-3 rounded-xl relative transition-colors duration-300"
                >
                  <span className="relative z-10">{item}</span>
                  <AnimatePresence>
                    {hoveredLink === item && (
                      <motion.div
                        layoutId="activeGlowCapsule"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 bg-white/[0.03] border border-white/[0.05] rounded-xl z-0"
                      />
                    )}
                  </AnimatePresence>
                </a>
              ))}
            </div>

            {/* Social Links with Bouncing Dot Targets */}
            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-bold tracking-widest text-zinc-400 font-sans uppercase mb-1">Networks</span>
              <motion.a 
                href="#" 
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white font-medium font-sans w-fit group/soc"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/soc:bg-[#c084fc] group-hover/soc:scale-125 transition-all duration-300" />
                LinkedIn <span className="text-zinc-600 group-hover/soc:text-[#dfaed6]/80 pl-1 transition-colors">@void_eng</span>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white font-medium font-sans w-fit group/soc"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/soc:bg-[#c084fc] group-hover/soc:scale-125 transition-all duration-300" />
                GitHub <span className="text-zinc-600 group-hover/soc:text-[#dfaed6]/80 pl-1 transition-colors">@void_architecture</span>
              </motion.a>
            </div>

            {/* Connect Layout with Elastic Fill Line */}
            <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
              <span className="text-[11px] font-bold tracking-widest text-zinc-400 font-sans uppercase mb-1">Direct Connect</span>
              <motion.a 
                href="mailto:architecture@void.build" 
                className="text-xs text-zinc-400 hover:text-[#dfaed6] font-medium font-mono tracking-tight transition-colors duration-300 break-all relative w-fit pb-1 group/email"
              >
                architecture@void.build
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#dfaed6] to-[#c084fc] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              </motion.a>
            </div>

          </div>

          {/* Minimal Bottom Micro-Stamp */}
          <div className="mt-16 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-mono tracking-widest text-zinc-600">
            <span>VOID SYSTEMS ARCHITECTURE INT.</span>
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>

        </div>
      </footer>

      {/* Global Mounting Vector for Inquiry Portal */}
      <PremiumInquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </>
  );
}