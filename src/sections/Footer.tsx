import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  MessageCircleText,
  CodeXml,
  CircleDollarSign,
} from "lucide-react";

const words = ["Tweet", "video", "YouTube", "audience", "passion"];

const Footer = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative w-full bg-[#111111] text-white block">
      {/* ================= TOP SECTION: DYNAMIC CTA ================= */}
      <div className="relative w-full flex flex-col items-center justify-center px-6 pt-48 pb-32 lg:pt-40 lg:pb-32 overflow-hidden lg:min-h-[40vh]">
        {/* Efek Cahaya */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[90%] max-w-[800px] h-[300px] bg-[#c0d62e]/20 blur-[100px] md:blur-[120px] rounded-[100%] pointer-events-none" />

        {/* Teks Dinamis */}
        <h2 className="relative z-10 text-[32px] leading-[1.4] md:text-5xl lg:text-[54px] md:leading-tight font-medium tracking-tight text-center flex flex-wrap justify-center items-center gap-x-2 md:gap-x-3 gap-y-1">
          <span>Find affiliate programs to monetize your</span>
          <span className="inline-grid overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={index}
                initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -40, opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="col-start-1 row-start-1 text-[#c0d62e] font-semibold"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>
      </div>

      {/* ================= MIDDLE SECTION: 3-COLUMN CONTACT ================= */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-3 border-t border-[#3d3f28] bg-[#111111]">
        <div className="flex flex-col items-center lg:items-start justify-center px-8 py-14 lg:py-16 border-b lg:border-b-0 lg:border-r border-[#3d3f28] group cursor-pointer hover:bg-[#161616] transition-colors">
          <MapPin className="w-7 h-7 text-[#d1d562] mb-5 stroke-[1.5]" />
          <h3 className="text-2xl md:text-3xl font-light tracking-wide">
            Surakarta, Indonesia
          </h3>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center px-8 py-14 lg:py-16 border-b lg:border-b-0 lg:border-r border-[#3d3f28] group cursor-pointer hover:bg-[#161616] transition-colors">
          <Mail className="w-7 h-7 text-[#d1d562] mb-5 stroke-[1.5]" />
          <h3 className="text-2xl md:text-3xl font-light tracking-wide">
            nabielabiyuu@gmail.com
          </h3>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center px-8 py-14 lg:py-16 group cursor-pointer hover:bg-[#161616] transition-colors">
          <MessageCircleText className="w-7 h-7 text-[#d1d562] mb-5 stroke-[1.5]" />
          <h3 className="text-2xl md:text-3xl font-light tracking-wide">
            +62 87888049703
          </h3>
        </div>
      </div>

      {/* ================= BOTTOM SECTION: LEGAL & LINKS ================= */}
      <div className="relative z-10 w-full bg-[#111111]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-10 pt-10 pb-10 border-t border-[#3d3f28]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-10">
            <div className="flex items-center gap-2 shrink-0">
              <CircleDollarSign className="w-8 h-8 fill-white stroke-none" />
              <span className="text-2xl font-bold tracking-tight">
                Beellionaire
              </span>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-[14px] text-[#a1a1aa] font-medium max-w-md lg:max-w-none">
              {[
                "Home",
                "Services",
                "Pricing",
                "Our Work",
                "Contact",
                "Blog",
                "About Us",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="w-full h-px bg-[#3d3f28] mb-8" />

          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[13px] text-[#a1a1aa] text-center md:text-left">
              <span>©2023 Flow Sparrow Inc. All right reserved.</span>
              <div className="flex gap-5">
                <a
                  href="#"
                  className="underline underline-offset-4 decoration-[#a1a1aa]/40 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="underline underline-offset-4 decoration-[#a1a1aa]/40 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
