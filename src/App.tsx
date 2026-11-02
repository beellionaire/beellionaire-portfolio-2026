import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import BlogSection from "./sections/Blog";
import Portfolio from "./sections/Portfolio";
import Service from "./sections/Service";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./components/Preloader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          key="main-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="bg-[#050505] min-h-screen relative block"
        >
          <Navbar />
          <Hero />
          <About />
          <Service />
          <Portfolio />
          <BlogSection />
          <Footer />
        </motion.main>
      )}
    </>
  );
}
