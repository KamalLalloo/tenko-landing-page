import Hero from "./Components/Hero";
import About from "./Components/About";
import Features from "./Components/Features";
import CallToAction from "./Components/CallToAction";
import Header from "./Components/Header";

export default function Home() {
  return (
    <main>
      <Hero />

      <About />
      <Features />
      <CallToAction />
    </main>
  );
}
