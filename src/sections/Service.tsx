import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    num: "01",
    title: "Web Development",
    desc: "One paragraph is enough. We reply within two business days with whether the shape is right for what we do.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    num: "02",
    title: "Graphic Design",
    desc: "You tell us where the brand is going. We give you a clear picture of the artifact, the timeline and the cost before you commit to anything.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    num: "03",
    title: "Editing Video",
    desc: "Both brothers on every project, custom-coded from the ground up. Engagements run six to twelve weeks. Motion is the medium, running through every transition, scroll moment and interaction.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    num: "04",
    title: "Socmed Management",
    desc: "The site lands as the brand's landmark online.",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 3}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          scrollYProgress.set(self.progress);

          const totalSteps = processSteps.length;
          let index = Math.floor(self.progress * totalSteps);
          if (index === totalSteps) index = totalSteps - 1;

          setActiveIndex(index);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [scrollYProgress]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f7f7f7] w-full h-[100vh] flex items-center overflow-hidden py-12 lg:py-0"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center w-full">
        <div className="relative flex flex-col gap-8 md:gap-10 lg:gap-14 py-4 order-2 lg:order-1">
          <div className="absolute left-[3px] top-6 bottom-6 w-[2px] bg-gray-200 z-0" />

          <motion.div
            className="absolute left-[3px] top-6 bottom-6 w-[2px] bg-red-600 z-0 origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          {processSteps.map((step, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={step.num}
                className="relative pl-12 md:pl-16 flex flex-col gap-1.5 md:gap-2"
              >
                <div className="absolute left-0 top-1.5 flex items-center gap-4 bg-[#f7f7f7] py-1 z-10">
                  <div className="w-2 h-2 relative">
                    <div className="absolute inset-0 bg-gray-300" />

                    {isActive && (
                      <motion.div
                        layoutId="activeRedSquare"
                        className="absolute inset-0 bg-red-600"
                        transition={{
                          type: "spring",
                          stiffness: 250,
                          damping: 30,
                        }}
                      />
                    )}
                  </div>

                  <motion.span
                    animate={{ color: isActive ? "#000000" : "#9ca3af" }}
                    className="text-xs md:text-sm font-medium tracking-widest"
                  >
                    {step.num}
                  </motion.span>
                </div>

                <motion.h3
                  animate={{
                    color: isActive ? "#000000" : "#9ca3af",
                    y: isActive ? 0 : 5,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl md:text-4xl font-light tracking-tight"
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  animate={{
                    color: isActive ? "#4b5563" : "#9ca3af",
                    opacity: isActive ? 1 : 0,
                    height: isActive ? "auto" : 0,
                    y: isActive ? 0 : 5,
                    marginTop: isActive ? 4 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm md:text-lg leading-relaxed max-w-md overflow-hidden lg:opacity-40 lg:h-auto lg:overflow-visible"
                >
                  {step.desc}
                </motion.p>
              </div>
            );
          })}
        </div>

        <div className="relative w-full h-[40vh] md:h-[45vh] lg:h-[80vh] max-h-125 bg-gray-200 overflow-hidden order-1 lg:order-2 rounded-lg lg:rounded-none">
          <AnimatePresence>
            <motion.img
              key={activeIndex}
              src={processSteps[activeIndex].img}
              alt={processSteps[activeIndex].title}
              initial={{ opacity: 0, y: 40, scale: 1.05 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Service;
