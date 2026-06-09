import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LogoMarquee from "@/components/LogoMarquee";
import DeviceShowcase from "@/components/DeviceShowcase";
import VelocityMarquee from "@/components/VelocityMarquee";
import CreativeCoverflow from "@/components/CreativeCoverflow";
import { CreativeCommons } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0d0d0d] overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <LogoMarquee />
      <DeviceShowcase />
      <VelocityMarquee />
      <CreativeCoverflow />
    </main>
  );
}