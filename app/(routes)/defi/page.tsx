"use client"

import { CoverParticles } from "@/components/main/cover-particles";
import DefiSection from "@/components/routes/defi-section";
import TransitionPage from "@/components/main/transition-page";

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
