"use client"

import { CoverParticles } from "@/components/cover-particles";
import DefiSection from "@/components/defi-section";
import TransitionPage from "@/components/transition-page";

export default function DefiPage() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <DefiSection />
      </div>
    </main>
  );
}
