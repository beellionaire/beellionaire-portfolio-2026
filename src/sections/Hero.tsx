import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

// --- 3D Interactive Grid Background Component ---
const InteractiveGrid = () => {
  const [boxes, setBoxes] = useState<number[]>([]);

  useEffect(() => {
    setBoxes(Array.from({ length: 300 }));
  }, []);

  return (
    // Reduced perspective from 1200px to 800px to make the 3D effect more extreme
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0B] [perspective:800px]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.04] blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] grid-rows-[repeat(auto-fill,minmax(100px,1fr))] w-[120vw] h-[120vh] -ml-[10vw] -mt-[10vh] [transform-style:preserve-3d]">
        {boxes.map((_, i) => (
          <div
            key={i}
            className="relative border-r border-b border-white/[0.03] transition-all duration-300 ease-out
                       hover:z-50 hover:bg-white/10 hover:border-white/40 hover:shadow-[0_20px_50px_rgba(45,212,191,0.2)] hover:rounded-xl
                       hover:[transform:translateZ(100px)_rotateX(25deg)_rotateY(-25deg)] cursor-crosshair"
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-transparent to-[#0A0A0B] pointer-events-none" />
    </div>
  );
};

// --- Main Hero Component ---
export default function PrestigeHero() {
  return (
    <div className="relative min-h-screen w-full bg-[#0A0A0B] text-white selection:bg-teal-500/30 overflow-hidden font-sans flex flex-col">
      {/* Background Interactive Grid */}
      <InteractiveGrid />
      {/* Hero Content */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 pt-10 pb-24 text-center pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 p-1 pr-4 rounded-full border border-[#163B30] bg-[#0A1A15]/80 backdrop-blur-md mb-8 cursor-pointer hover:bg-[#0A1A15] transition-colors"
          >
            <span className="px-3 py-1 text-[13px] font-semibold text-[#093524] bg-[#2DD4BF] rounded-full">
              New
            </span>
            <span className="text-[14px] font-medium text-[#2DD4BF] flex items-center gap-1.5">
              Introducing AI Editor <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[84px] leading-[1.05] font-semibold tracking-tight text-white mb-6 max-w-4xl"
          >
            The best way to build <br className="hidden md:block" /> your
            startup.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#9CA3AF] max-w-3xl mb-12 font-medium leading-relaxed"
          >
            Our app eliminates the need for complex spreadsheets, endless email
            threads, empowering businesses to achieve greater efficiency.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6 mb-20"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black text-[15px] font-semibold hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-2">
              Get started{" "}
              <span className="text-xl leading-none -mt-0.5">›</span>
            </button>
            <button className="w-full sm:w-auto px-6 py-4 text-[15px] font-medium text-white hover:text-gray-300 transition-colors flex items-center justify-center gap-2">
              Learn more <span className="text-xl leading-none -mt-0.5">›</span>
            </button>
          </motion.div>

          {/* Social Proof Avatars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center -space-x-2">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-[2px] border-[#0A0A0B] overflow-hidden bg-gray-800"
                >
                  <img
                    src={src}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-[13px] font-medium text-gray-500">
              1,200+ reviews <span className="text-gray-600">(4.9 of 5)</span>
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
