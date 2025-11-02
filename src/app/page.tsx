import { Hero, About, Services, HowItWorks, JoinAsServiceProvider, Footer } from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <JoinAsServiceProvider />
      <Footer />
    </main>
  );
}
