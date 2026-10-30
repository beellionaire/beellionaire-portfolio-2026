import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { AudioLines, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const sections = ["Home", "About", "Features", "Pricing", "Blog", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const { scrollY, scrollYProgress } = useScroll();

  // Deteksi scroll untuk mengubah Navbar menjadi floating
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Opsional: Intersection Observer untuk mendeteksi section aktif secara otomatis
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const sectionName = sections.find((s) => s.toLowerCase() === id);
          if (sectionName) setActiveSection(sectionName);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
    sections.forEach((section) => {
      const element = document.getElementById(section.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-3 bg-linear-to-r from-sky-500 to-blue-500 origin-left z-60" style={{ scaleX: scrollYProgress }} />

      {/* Navbar Container */}
      <div className={`fixed top-0 w-full z-50 flex justify-center transition-all duration-300 ${isScrolled ? "pt-6 px-6" : "pt-2 px-2"}`}>
        <motion.nav className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-[#1a1a1a]/10 backdrop-blur-sm rounded-full px-6 py-4 w-full max-w-3xl border border-white/10 shadow-2xl" : "bg-transparent px-6 py-5 w-full max-w-7xl"}`}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <AudioLines className="w-7 h-7 text-white" />
            <span className="text-white font-semibold text-xl tracking-tight">Beellionaire</span>
          </div>

          {/* Desktop Nav: Teks vs Titik */}
          <div className="hidden md:flex items-center gap-4">
            {sections.map((section) => (
              <motion.a
                layout // Menambahkan transisi smooth saat lebar elemen berubah
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={() => setActiveSection(section)}
                className="flex items-center justify-center h-8"
              >
                <AnimatePresence mode="wait">
                  {activeSection === section ? (
                    <motion.span key="text" initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} transition={{ duration: 0.2 }} className="text-sm font-medium text-white px-2 whitespace-nowrap overflow-hidden">
                      {section}
                    </motion.span>
                  ) : (
                    <motion.div key="dot" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white/90 transition-colors mx-2" />
                  )}
                </AnimatePresence>
              </motion.a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-6 py-2 rounded-full bg-linear-to-r from-orange-600 to-red-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity">Hire Me</button>
            <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed top-24 left-4 right-4 z-40 bg-[#1a1a1a] rounded-2xl border border-white/10 shadow-xl overflow-hidden md:hidden">
            <div className="flex flex-col p-4 gap-2 text-gray-300">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  onClick={() => {
                    setActiveSection(section);
                    setIsOpen(false);
                  }}
                  className={`p-3 rounded-xl transition-colors ${activeSection === section ? "bg-white/10 text-white font-medium" : "hover:bg-white/5"}`}
                >
                  {section}
                </a>
              ))}
              <button className="w-full mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-500 text-white font-semibold">Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
