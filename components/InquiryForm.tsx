"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PremiumInquiryModal({ isOpen, onClose }: InquiryFormProps) {
  const [focusedField, setFocusedField] = useState<string | null>(null);
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
    // System Architecture Logic goes here
    console.log("VOID System Log: Project Blueprint Initiated", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-none">
          
          {/* ================= BACKDROP BLUR ENGINE ================= */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* ================= MODAL FRAME SYSTEM ================= */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-black border border-white/[0.08] w-full max-w-xl rounded-[28px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)] relative p-6 sm:p-8 md:p-10 z-10"
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
            <div className="flex flex-col gap-1.5 mb-8">
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

            {/* ================= INTERACTIVE FORM MATRIX ================= */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
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
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
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
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-zinc-950/60 border border-white/[0.06] focus:border-[#dfaed6]/40 text-sm text-zinc-200 placeholder-zinc-700 px-4 py-3 rounded-xl transition-all duration-300 outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Row 2: Core Division Segments Selector */}
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

              {/* Row 3: Operational Budgets Segment */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider pl-1">Allocated Resources Pool (Budget)</label>
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

              {/* Row 4: Specifications Blueprint */}
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

              {/* Action Vector Button Layout */}
              <button
                type="submit"
                className="group relative w-full py-4 mt-2 border border-white/10 hover:border-[#dfaed6]/40 bg-zinc-950 text-xs text-zinc-200 hover:text-white font-semibold uppercase tracking-[0.15em] rounded-xl transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_40px_rgba(223,174,214,0.12)] overflow-hidden"
              >
                <span className="relative z-10">Compile & Dispatch Blueprint</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#dfaed6]/10 to-[#c084fc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

            </form>

            {/* Modal Micro Stamp Footprint */}
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