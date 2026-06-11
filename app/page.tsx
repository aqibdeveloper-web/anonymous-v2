import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import LogoMarquee from "@/components/LogoMarquee";
import DeviceShowcase from "@/components/DeviceShowcase";
import VelocityMarquee from "@/components/VelocityMarquee";
import CreativeCoverflow from "@/components/CreativeCoverflow";
import TabbedShowcase from "@/components/TabbedShowcase";
import Testimonials from "@/components/Testimonials";
import PremiumServiceStack from "@/components/PremiumServiceStack";
import PremiumStudioShowcase from "@/components/PremiumStudioShowcase";
import Footer from "@/components/Footer";

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
      <TabbedShowcase />
      <Testimonials />
      <PremiumServiceStack />
      <PremiumStudioShowcase />
      <Footer />
    </main>
  );
}