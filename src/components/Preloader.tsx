import { useEffect } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  useEffect(() => {
    // Mencegah scroll selama preloader aktif
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      // Animasi exit: Meluncur ke atas layar sepenuhnya
      exit={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
    >
      {/* Background berkedip (hitam -> pink -> hijau -> hitam) */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        animate={{
          backgroundColor: [
            "#050505",
            "#050505",
            "#050505",
            "#050505",
            "#050505",
          ],
        }}
        transition={{
          duration: 3,
          times: [0, 0.7, 0.8, 0.9, 1],
          ease: "easeInOut",
        }}
      />

      {/* Teks Logo - mix-blend-difference agar teks menyesuaikan warna background */}
      <div className="relative z-10 flex flex-col items-center text-white mix-blend-difference">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            <div className="font-ritual font-bold">BEELLIONAIRE</div>
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-1">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.6 }}
            className="text-lg md:text-2xl font-medium tracking-widest text-center"
          >
            Portfolio ®
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
