import { ArrowRight } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { FEATURES } from "../constant/Features";

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <FadeIn direction="right">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Discover. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Experience.</span> <br />
                  Enjoy.
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-md">Everything you need to elevate your listening experience. Built for audiophiles and casual listeners alike.</p>
                <button className="flex items-center gap-2 text-white font-medium hover:text-orange-400 transition-colors">
                  Explore all features <ArrowRight className="w-4 h-4" />
                </button>
              </FadeIn>
            </div>
          </div>

          {/* Scrolling Right Column (Cards) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {FEATURES.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up" className="bg-neutral-900 border border-white/5 rounded-3xl p-8 hover:bg-neutral-800 transition-colors duration-300">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
