import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";

const Portfolio = () => {
  // Generate some placeholder avatars
  const avatars = Array.from({ length: 8 }).map((_, i) => `https://i.pravatar.cc/300?img=${i + 10}`);

  return (
    <section className="py-32 bg-[#FF4500] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
        <FadeIn direction="left">
          <h2 className="text-5xl md:text-7xl font-bold max-w-md leading-none">Hear from our creators.</h2>
        </FadeIn>
        <FadeIn direction="right">
          <p className="text-orange-100 max-w-xs text-lg">Join thousands of artists and listeners who have made EchoFi their home for audio.</p>
        </FadeIn>
      </div>

      {/* Horizontal Scroll / Marquee area */}
      <div className="relative w-full pb-16">
        <div className="flex overflow-x-auto gap-6 px-6 pb-8 no-scrollbar snap-x snap-mandatory hide-scroll">
          {avatars.map((src, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0 snap-center rounded-3xl overflow-hidden bg-black/10 border-4 border-white/20">
              <img src={src} alt={`Creator ${idx}`} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <div className="inline-block p-6 md:p-10 bg-black/20 rounded-3xl backdrop-blur-sm border border-white/10">
            <p className="text-xl md:text-2xl font-medium mb-6 italic">"EchoFi gives me the tools to connect with my audience in high definition. The sound quality is unmatched."</p>
            <button className="px-8 py-3 bg-white text-[#FF4500] rounded-full font-bold hover:bg-orange-50 transition-colors">View All Stories</button>
          </div>
        </FadeIn>
      </div>

      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Portfolio;
