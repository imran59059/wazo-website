import { HeroStats } from "@/components/sections/HeroStats";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white">
      <HeroStats />
      <Testimonials />
    </main>
  );
}
