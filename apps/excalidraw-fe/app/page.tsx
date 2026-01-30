import { Header, Hero, Features, UseCases, Stats, CTA, Footer } from "@/components/landing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
