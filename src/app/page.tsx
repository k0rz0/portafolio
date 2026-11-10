import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AiBanner from "@/components/AiBanner";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectsGrid from "@/components/ProjectsGrid";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        <AiBanner />
        <FeaturedProject />
        <ProjectsGrid />
        <ServicesSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
