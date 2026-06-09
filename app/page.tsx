import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0d0d0d] overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
    </main>
  );
}