import { Hero, About, Services, HowItWorks } from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Services />
      <HowItWorks />
    </main>
  );
}
