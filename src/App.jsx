import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#080808] text-[#f0ede6] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
