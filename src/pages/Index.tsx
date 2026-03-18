import Navbar from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import GameplaySection from "@/components/GameplaySection";
import EpisodesSection from "@/components/EpisodesSection";
import CharactersSection from "@/components/CharactersSection";
import TokenSection from "@/components/TokenSection";
import MultiplayerSection from "@/components/MultiplayerSection";
import VRSection from "@/components/VRSection";
import EventsSection from "@/components/EventsSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen font-body selection:bg-primary selection:text-primary-foreground">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AnimatedSection><AboutSection /></AnimatedSection>
      <AnimatedSection delay={0.05} direction="left"><GameplaySection /></AnimatedSection>
      <AnimatedSection delay={0.05}><EpisodesSection /></AnimatedSection>
      <AnimatedSection delay={0.05} direction="right"><CharactersSection /></AnimatedSection>
      <AnimatedSection delay={0.05}><TokenSection /></AnimatedSection>
      <AnimatedSection delay={0.05} direction="left"><MultiplayerSection /></AnimatedSection>
      <AnimatedSection delay={0.05}><VRSection /></AnimatedSection>
      <AnimatedSection delay={0.05} direction="right"><EventsSection /></AnimatedSection>
      <AnimatedSection delay={0.05}><DownloadSection /></AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;