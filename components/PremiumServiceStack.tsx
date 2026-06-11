"use client";
import React from "react";

const stackData = [
  {
    id: 1,
    title: "Web Engineering Stack",
    location: "Global Remote",
    brandLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&q=80",
    tags: ["React / Next.js", "TypeSafe Node"],
    creatives: [
      { name: "Alex Rivers", role: "Principal Web Architect", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80" },
      { name: "Jonah Habor", role: "Senior Backend Engineer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80" },
    ]
  },
  {
    id: 2,
    title: "Mobile Product Stack",
    location: "Hybrid Node",
    brandLogo: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=100&q=80",
    tags: ["React Native", "iOS / Android"],
    creatives: [
      { name: "Andrea Price", role: "Mobile UX Strategist", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80" },
      { name: "Sophia Stark", role: "Native Core Developer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" },
    ]
  },
  {
    id: 3,
    title: "Technical SEO & Growth",
    location: "Scale Matrix",
    brandLogo: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?w=100&q=80",
    tags: ["Programmatic SEO", "Automation"],
    creatives: [
      { name: "Tony Fernando", role: "Growth Director", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&q=80" },
      { name: "Marcus Vance", role: "Data & Schema Engineer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80" },
    ]
  }
];

export default function PremiumServiceGrid() {
  return (
    <section className="w-full bg-[#0D0D0D] py-24 px-6 sm:px-12 md:px-24 relative overflow-hidden select-none">
      
      {/* Ambient Premium Cyber Glows matched with Signature Identity Palette */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c084fc]/[0.03] blur-[150px] pointer-events-none rounded-full z-0" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[#dfaed6]/[0.02] blur-[100px] pointer-events-none rounded-full z-0" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10 mx-auto">
        
        {/* ================= LEFT SIDE: FIXED TEXT ENGINE ================= */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfaed6] animate-pulse" />
            <span className="text-[10px] font-bold text-[#dfaed6] uppercase tracking-[0.2em]">
              VOID Elite Divisions
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent leading-[1.15]">
            Dedicated teams.<br />Built for scale.
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-normal font-sans">
            Our specialized tech cohorts deliver comprehensive development blueprints without coordination overhead. From clean frontend codebases to high-ticket brand platforms.
          </p>
          
          <button className="group relative px-7 py-3.5 border border-white/10 hover:border-[#dfaed6]/40 bg-zinc-950 text-xs text-zinc-200 hover:text-white font-medium uppercase tracking-widest rounded-full self-start transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_30px_rgba(223,174,214,0.15)]">
            <span className="relative z-10">Initiate Project</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#dfaed6]/10 to-[#c084fc]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

        {/* ================= RIGHT SIDE: ULTRA-CLEAN CLEAN GRID ================= */}
        <div className="lg:col-span-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stackData.map((page, index) => (
            <div
              key={page.id}
              className={`w-full bg-gradient-to-b from-zinc-900/30 via-zinc-950/50 to-black/80 border border-white/[0.06] p-6 sm:p-7 rounded-[22px] backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col justify-between group/card transition-all duration-500 hover:border-[#dfaed6]/30 hover:-translate-y-1 hover:shadow-[0_40px_80px_-20px_rgba(192,132,252,0.04)] ${
                index === 2 ? "sm:col-span-2 sm:max-w-[calc(50%-12px)] sm:mx-auto w-full" : ""
              }`}
            >
              <div className="w-full flex flex-col h-full text-white">
                
                {/* Card Header */}
                <div className="flex justify-between items-start border-b border-white/[0.06] pb-4 mb-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.15em] font-medium text-zinc-500">Infrastructure</span>
                    <h3 className="text-lg font-medium tracking-tight text-zinc-100 mt-0.5 group-hover/card:text-white transition-colors duration-300">
                      {page.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {page.tags.map((tag, i) => (
                        <span key={i} className="text-[9px] bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded text-zinc-400 font-normal">
                          {tag}
                        </span>
                      ))}
                      <span className="text-[9px] bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded text-[#c084fc] font-normal">
                        {page.location}
                      </span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10 p-0.5 bg-zinc-950 shrink-0 shadow-md">
                    <img src={page.brandLogo} alt="brand tier" className="w-full h-full rounded-full object-cover filter brightness-90" />
                  </div>
                </div>

                {/* Creative Rows */}
                <div className="flex flex-col gap-3 grow">
                  {page.creatives.map((creative, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-zinc-900/10 border border-white/[0.02] rounded-[12px] hover:bg-zinc-900/30 hover:border-white/[0.05] transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <img src={creative.img} alt={creative.name} className="w-8 h-8 rounded-full object-cover border border-white/10" />
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-zinc-200 group-hover/card:text-white transition-colors duration-300">
                            {creative.name}
                          </span>
                          <span className="text-[10px] text-zinc-500 font-light mt-0.5">
                            {creative.role}
                          </span>
                        </div>
                      </div>
                      <button className="text-[9px] font-medium uppercase tracking-wider bg-white hover:bg-zinc-200 text-black px-3 py-1.5 rounded-lg transition-all duration-300">
                        Case Studies
                      </button>
                    </div>
                  ))}
                </div>

                {/* Card System Stamp Footer */}
                <div className="pt-4 mt-4 border-t border-white/[0.06] flex justify-between items-center text-[9px] font-mono tracking-widest text-zinc-500">
                  <span>VOID ARCHITECTURE INT.</span>
                  <span className="text-zinc-400 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded">
                    0{index + 1} / 0{stackData.length}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}