import { Headphones, ListMusic, Play } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect using framer-motion instead of gsap
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center bg-black text-white">
      {/* Background Glows */}
      <motion.div style={{ y: backgroundY }} className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-orange-600/30 to-red-900/0 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs font-medium mb-8 text-orange-200">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            EchoFi 2.0 is now live
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Tune into your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">senses.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">Immerse yourself in a world of high-fidelity sound. Discover new artists, curate your perfect playlists, and feel every beat.</p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-linear-to-r from-orange-600 to-red-600 text-white font-semibold text-lg overflow-hidden transition-transform hover:scale-105">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-2">
              Start Listening <Play className="w-5 h-5 fill-current" />
            </span>
          </button>
        </FadeIn>

        {/* Dashboard Mockup */}
        <FadeIn delay={0.5} direction="up" className="mt-20 w-full max-w-4xl relative">
          <div className="absolute -inset-1 bg-linear-to-r from-orange-600 to-red-600 rounded-3xl blur opacity-30"></div>
          <div className="relative bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
            {/* Mockup Header */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Now Playing Card */}
              <div className="col-span-2 bg-black/50 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center">
                <div className="w-48 h-48 rounded-xl overflow-hidden relative shadow-lg shadow-red-900/20 shrink-0">
                  <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop" alt="Album Art" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">Neon Genesis</h3>
                  <p className="text-orange-400 mb-6">Synthwave Syndicate</p>

                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-gray-700 rounded-full mb-3 overflow-hidden">
                    <div className="w-1/3 h-full bg-linear-to-r from-orange-500 to-red-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mb-6">
                    <span>1:24</span>
                    <span>4:05</span>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-6">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <ListMusic className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors rotate-180">
                      <Play className="w-6 h-6" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                      <Play className="w-6 h-6 fill-current" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Play className="w-6 h-6" />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Headphones className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Playlist sidebar */}
              <div className="bg-black/50 rounded-2xl p-4 flex flex-col gap-3 h-full overflow-hidden">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Up Next</h4>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <div className="w-10 h-10 rounded bg-gray-800 shrink-0 overflow-hidden">
                      <img src={`https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=100&auto=format&fit=crop&sig=${i}`} alt="track" className="w-full h-full object-cover opacity-70" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">Night Drive Pt. {i}</p>
                      <p className="text-xs text-gray-500 truncate">The Midnight</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
