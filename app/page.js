import { Hero, FeaturesGrid, LaunchSteps, Testimonials, CTA } from './components';

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <FeaturesGrid />
      <LaunchSteps />
      <Testimonials />
      <CTA />
    </main>
  );
}
