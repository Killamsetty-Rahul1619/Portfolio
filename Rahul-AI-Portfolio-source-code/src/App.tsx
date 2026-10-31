import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />

          {/* Temporary anchor target for the hero CTA + nav "AI Twin" link.
              Replaced with the full AI Twin section in a later task. */}
          <section
            id="ai-twin"
            aria-label="AI Twin"
            className="border-t border-border"
          >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              <h2 className="font-heading text-3xl font-bold">
                Meet my AI twin
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                A conversational, voice-enabled version of Rahul is coming
                together in a later step of this build.
              </p>
            </div>
          </section>
        </main>
      </div>
    </MotionConfig>
  );
}
