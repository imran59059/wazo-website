import { CultureHero } from "@/components/sections/CultureHero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { FeatureTabs } from "@/components/sections/FeatureTabs";
import { ExpertInsights } from "@/components/sections/ExpertInsights";
import { BottomCTA } from "@/components/sections/BottomCTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <CultureHero />
      <LogoStrip />
      <FeatureTabs />
      <ExpertInsights />
      <BottomCTA />
    </div>
  );
}
