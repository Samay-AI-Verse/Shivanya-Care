import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ── Hooks ── */
import { useLenis } from "./hooks/useLenis";
import { useCurtainGsap } from "./hooks/useCurtainGsap";
import { useSectionAnimations } from "./hooks/useSectionAnimations";
import { useBlackSectionGsap } from "./hooks/useBlackSectionGsap";
import { useWhatsAppSectionGsap } from "./hooks/useWhatsAppSectionGsap";
import { useSmsVoiceSectionGsap } from "./hooks/useSmsVoiceSectionGsap";

/* ── Layout ── */
import LoadingOverlay from "./components/effects/LoadingOverlay";
import CubeGrid from "./components/effects/CubeGrid";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

/* ── Sections ── */
import LandingHero from "./components/sections/LandingHero";
import FeaturesSection from "./components/sections/FeaturesSection";
import BlackSection from "./components/sections/BlackSection";
import WhatsAppSection from "./components/sections/WhatsAppSection";
import SmsVoiceSection from "./components/sections/SmsVoiceSection";
import DashboardSection from "./components/sections/DashboardSection";
import DeliverySection from "./components/sections/DeliverySection";
import FooterSection from "./components/sections/FooterSection";

/* ── Global styles & fonts ── */
import "remixicon/fonts/remixicon.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/900.css";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────── */

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Scroll-driven animations — start once overlay is gone */
  useLenis(showContent);
  useCurtainGsap(showContent);
  useSectionAnimations(showContent);
  useBlackSectionGsap(showContent);
  useWhatsAppSectionGsap(showContent);
  useSmsVoiceSectionGsap(showContent);

  return (
    <>
      {/*
        Loading overlay — cream bg, logo springs in,
        spins → burst → brand name fans in → wipes upward.
        Calls setShowContent(true) when it removes itself.
      */}
      <LoadingOverlay onComplete={() => setShowContent(true)} />

      {/* Global Navbar - Sticky across all pages */}
      <Navbar onMenuClick={() => setMenuOpen(true)} />

      {/* Main scrollable page */}
      <div className="w-full overflow-y-scroll scroll-smooth relative">

        {/*
          ╔══════════════════════════════════════════════════════════╗
          ║  ANIMATION BLOCK — pinned for the cube curtain wipe      ║
          ║  Layer 1 (z-10)   : Landing hero                        ║
          ║  Layer 2 (z-[60]) : Features — revealed by curtain      ║
          ║  Layer 3 (z-[70]) : Cube grid curtain overlay           ║
          ╚══════════════════════════════════════════════════════════╝
        */}
        <div className="animation-block relative h-screen w-full overflow-hidden">
          <LandingHero onMenuClick={() => setMenuOpen(true)} />
          <FeaturesSection />
          <CubeGrid />
        </div>

        {/* ── Content sections (normal scroll) ── */}
        <BlackSection />
        <WhatsAppSection />    {/* Page 3 — WhatsApp & Telegram ordering  */}

        {/* Page 4 — Medical Fill Effect section (3rd major logical section) */}

        <SmsVoiceSection />    {/* Page 5 — SMS & Voice Call channels     */}
        <DashboardSection />   {/* Page 6 — Pharmacist dashboard          */}
        <DeliverySection />    {/* Page 6 — Delivery & multi-user module  */}
        <FooterSection />      {/* Page 7 — Footer / contact (cream bg)   */}
      </div>

      {/* Slide-in navigation sidebar */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}