"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const programs = [
  {
    title: "Academic Excellence",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/AHRHomepage-12.jpg",
    alt: "Students engaged in academic learning",
  },
  {
    title: "Experiential Learning",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/AMSRHomepageimage-15.jpg",
    alt: "Students in hands-on learning activities",
  },
  {
    title: "Arts & Music",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/ProVitaHomepage-16.jpg",
    alt: "Students engaged in arts and music activities",
  },
  {
    title: "Sports & Athletics",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/RKMP_2-17.jpg",
    alt: "Students participating in sports",
  },
  {
    title: "Technology & Innovation",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/AviationScience-18.jpg",
    alt: "Students working with technology",
  },
  {
    title: "Leadership Development",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/SabinHeader-14.jpg",
    alt: "Students in leadership activities",
  },
];

const SignatureProgramsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 325 + 20; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="bg-primary text-white pt-24 pb-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="text-center max-w-[890px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display italic text-xl mb-4"
          >
            Holistic Education
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="font-display text-secondary font-bold text-4xl md:text-5xl lg:text-[56px] uppercase leading-tight tracking-wide"
          >
            Our Curriculum & Programs
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-[250px] h-1 bg-accent mx-auto mt-6 mb-10 origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="font-body text-lg leading-relaxed max-w-4xl mx-auto"
          >
            MIS curriculum blends academics with hands-on learning and innovative teaching methodologies. It integrates academics with social, emotional, and physical development, fostering critical thinking and creativity in every learner. Our approach focuses on academic excellence, experiential learning, and collaborative education in supportive, technology-enabled classrooms.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16"
        >
          <div className="flex justify-end mb-4 pr-1">
            <div className="flex space-x-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-5 -mb-5 space-x-5 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {programs.map((program, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                className="bg-white text-black flex-shrink-0 w-[325px] group transition-transform duration-300 ease-out hover:scale-[1.02]"
              >
                <a href="#" className="block cursor-pointer">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.alt}
                      fill
                      sizes="(max-width: 768px) 80vw, 325px"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 border-b-[8px] border-accent">
                    <h3 className="font-display font-bold text-xl leading-snug min-h-[55px]">
                      {program.title}
                    </h3>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureProgramsSection;