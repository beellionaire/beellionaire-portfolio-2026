import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import BlogSection from "./sections/Blog";
import Portfolio from "./sections/Portfolio";

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-orange-500/30">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <BlogSection />
      <Footer />
    </div>
  );
}
