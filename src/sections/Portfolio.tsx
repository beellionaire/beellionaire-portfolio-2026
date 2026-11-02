import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioData = [
  {
    id: 1,
    badge: "STRATEGY",
    title: "Get data from the most complete data marketplace",
    description:
      "One contract to buy data from 200+ data and AI vendors in our marketplace. Create intent signals from anything on the internet. Bring 1st and 3rd party data together.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    buttonText: "Explore data",
  },
  {
    id: 2,
    badge: "AUTOMATION",
    title: "Put agents that know your business to work",
    description:
      "Run GTM plays with agents that understand your business and accounts. Turn context into research, scoring, and personalized outreach, with shared learning that makes each play smarter.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    buttonText: "Start free trial",
  },
  {
    id: 3,
    badge: "ORCHESTRATION",
    title: "Build GTM plays on a visual canvas",
    description:
      "Use clicks, code, or chat to build plays you can easily see. Troubleshoot faster, collaborate across teams, and reuse logic across all of your runs.",
    image:
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop",
    buttonText: "Explore workflows",
  },
];

const PortfolioSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".portfolio-card");

      cards.forEach((card, index) => {
        // 1. KUNCI PERBAIKAN: Kartu terakhir JANGAN di-pin.
        // Biarkan ia scrolling natural agar menarik section putih di bawahnya.
        if (index === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          // 2. KUNCI PERBAIKAN: Hitung durasi pin secara dinamis
          // Kartu ke-1 akan menunggu selama 200vh, kartu ke-2 menunggu selama 100vh.
          end: () => `+=${card.offsetHeight * (cards.length - index - 1)}`,
          pin: true,
          pinSpacing: false,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white"
    >
      {portfolioData.map((item, index) => (
        <div
          key={item.id}
          // Tambahkan class 'portfolio-card' untuk target GSAP
          // Background HARUS solid bg-[#050505] agar menutupi kartu di bawahnya
          className="portfolio-card relative flex h-[100vh] w-full items-center justify-center bg-[#050505]"
          style={{ zIndex: index + 1 }} // Memastikan urutan tumpukan benar
        >
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Column: Text */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[#161616] border border-[#333] w-fit">
                <span className="text-[11px] font-bold tracking-wider text-[#c0d62e]">
                  {item.badge}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                {item.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                {item.description}
              </p>
              <button className="w-fit px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                {item.buttonText} &rarr;
              </button>
            </div>

            {/* Right Column: Image */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#111] border border-[#222]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PortfolioSection;
