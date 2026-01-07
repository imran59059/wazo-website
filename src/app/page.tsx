import { CultureHero } from "@/components/sections/CultureHero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { FeatureTabs } from "@/components/sections/FeatureTabs";
import { ExpertInsights } from "@/components/sections/ExpertInsights";
import { BottomCTA } from "@/components/sections/BottomCTA";

import { SectionWrapper } from "@/components/layout/SectionWrapper";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <CultureHero />
      <SectionWrapper delay={0.2}>
        <LogoStrip />
      </SectionWrapper>
      <SectionWrapper>
        <FeatureTabs />
      </SectionWrapper>
      <SectionWrapper>
        <ExpertInsights />
      </SectionWrapper>
      <SectionWrapper>
        <BottomCTA />
      </SectionWrapper>
    </div>
  );
}
