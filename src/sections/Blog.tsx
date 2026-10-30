import { ArrowRight } from "lucide-react";
import FadeIn from "../components/FadeIn";

const BLOG_POSTS = [
  {
    tag: "Technology",
    title: "The Evolution of Spatial Audio",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
  },
  {
    tag: "Music",
    title: "Top 10 Emerging Artists of 2026",
    img: "https://images.unsplash.com/photo-1493225457124-a1a2a53fb939?q=80&w=600&auto=format&fit=crop",
  },
  {
    tag: "Platform",
    title: "Introducing EchoFi Connect",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section className="py-32 bg-gray-50 text-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest news & updates.</h2>
            <p className="text-gray-600 text-lg">Stay in the loop with what's happening at EchoFi.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-semibold hover:text-orange-600 transition-colors">
            View all posts <ArrowRight className="w-4 h-4" />
          </button>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider text-black">{post.tag}</div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition-colors">{post.title}</h3>
              <p className="text-gray-500 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Read Article <ArrowRight className="w-4 h-4" />
              </p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <button className="flex items-center gap-2 font-semibold hover:text-orange-600 transition-colors">
            View all posts <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
