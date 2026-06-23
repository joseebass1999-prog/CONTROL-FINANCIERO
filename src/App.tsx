/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { useUrgencyTimer } from "./useUrgencyTimer";
import UrgencyHeader from "./components/UrgencyHeader";
import HeroSection from "./components/HeroSection";
import TrustBar from "./components/TrustBar";
import ProblemSection from "./components/ProblemSection";
import SolutionSimulator from "./components/SolutionSimulator";
import VideosSection from "./components/VideosSection";
import BenefitsOffer from "./components/BenefitsOffer";
import HowItWorks from "./components/HowItWorks";
import TestimonialsSection from "./components/TestimonialsSection";
import WarrantySection from "./components/WarrantySection";
import FooterCTA from "./components/FooterCTA";
import ExitIntentModal from "./components/ExitIntentModal";
import LiveSalesNotifier from "./components/LiveSalesNotifier";
import { trackViewContent } from "./lib/pixel";

export default function App() {
  const { formattedTime, spotsLeft } = useUrgencyTimer();

  useEffect(() => {
    // Only track ViewContent after page load has stabilized and fbq is loaded.
    // We run it as soon as the App mounts.
    trackViewContent();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#edf7f2] via-[#f7fcf9] to-[#edf7f2] text-slate-800 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 0. Sticky Header Bar with Dynamic Urgency Sync */}
      <UrgencyHeader formattedTime={formattedTime} spotsLeft={spotsLeft} />

      {/* Main Structural Layout blocks */}
      <main id="main-sales-content-wrapper">
        
        {/* 1. Conversional Hero Section */}
        <HeroSection />

        {/* 2. Brand Trust indicators */}
        <TrustBar />

        {/* 3. Pain Point problem discovery */}
        <ProblemSection />

        {/* 4. Full interactive dashboard visual simulator & Global offer banner */}
        <SolutionSimulator />

        {/* 5. Mobile ready smartphone reels video tutorials */}
        <VideosSection />

        {/* 6. High stacked value bonuses & Bundle discount review */}
        <BenefitsOffer />

        {/* 7. Instruction Steps (How it works under 3 Steps) */}
        <HowItWorks />

        {/* 8. User Proof 5-Star testimonials */}
        <TestimonialsSection />

        {/* 9. Risk Free money-back guarantee seal */}
        <WarrantySection />

      </main>

      {/* 10. bottom footer conversions & compliance links */}
      <FooterCTA formattedTime={formattedTime} spotsLeft={spotsLeft} />

      {/* Humor-backed Raccoon Exit Intent pop-up dialog */}
      <ExitIntentModal />

      {/* Live Sales Real-time Notifier simulation */}
      <LiveSalesNotifier spotsLeft={spotsLeft} />

    </div>
  );
}
