"use client";
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-3xl bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/60 rounded-full py-3 px-6 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wider text-white flex items-center gap-1 cursor-pointer">
          <span className="font-black text-2xl">A</span>NONYMOUS
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
        </nav>

        {/* Action Button */}
        <button className="bg-white text-black text-xs md:text-sm font-semibold px-5 py-2 rounded-full hover:bg-zinc-200 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Sign up
        </button>
      </div>
    </header>
  );
}