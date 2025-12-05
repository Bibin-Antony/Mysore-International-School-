"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Users,
  Scaling,
  School,
  Mountain,
  BookOpenText,
  Award,
  Flag,
  Globe,
  LucideProps,
  ChevronLeft,
  ChevronRight,
  TreePine,
  Trophy,
  GraduationCap,
} from 'lucide-react';

interface Stat {
  icon: React.ComponentType<LucideProps>;
  value: string;
  label: string;
}

const statsData: Stat[] = [
  { icon: TreePine, value: '4', label: 'Acres of Green Campus' },
  { icon: Scaling, value: '1:15', label: 'Student–Teacher Ratio' },
  { icon: School, value: '25', label: 'Average Students per Class' },
  { icon: Users, value: '1,000+', label: 'Total Student Capacity' },
  { icon: Award, value: '20+', label: 'Co-Scholastic Clubs & Activities' },
  { icon: BookOpenText, value: '3', label: 'Curricular Pathways' },
  { icon: Trophy, value: '10+', label: 'Competitive Exams & Olympiads' },
  { icon: GraduationCap, value: '15+', label: 'Years of Educational Legacy' },
];

const StatsByNumbersSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? statsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === statsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white"
      style={{
        backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/images/DSC_3314-2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-5 md:px-10 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white text-center py-16 md:py-20 px-6 sm:px-10 md:px-20 max-w-7xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-display italic text-primary text-lg mb-2"
          >
            At-A-Glance
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="font-display font-bold text-primary uppercase text-4xl lg:text-[3.5rem] leading-none mb-6"
          >
            Mysore International School by the numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="font-body text-lg text-primary max-w-3xl mx-auto mb-8 md:mb-16"
          >
            Located in Mysore, Karnataka, Mysore International School is rooted in excellence and guided by our core values: integrity, respect, collaboration, innovation, diversity, and holistic development. We are committed to nurturing empathetic and innovative global citizens.
          </motion.p>

          {/* Mobile Carousel Navigation */}
          <div className="flex justify-center items-center gap-4 mb-8 md:hidden">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Previous stat"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Next stat"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile: Single Stat Display */}
          <div className="md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              {React.createElement(statsData[currentIndex].icon, {
                className: "text-primary mb-4",
                size: 64,
                strokeWidth: 1,
              })}
              <div className="font-display font-bold text-primary text-6xl leading-none">
                {statsData[currentIndex].value}
              </div>
              <div className="font-body font-bold text-muted-foreground text-base uppercase tracking-wider mt-3 text-center">
                {statsData[currentIndex].label}
              </div>
            </motion.div>
          </div>

          {/* Desktop: Grid Display */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <stat.icon className="text-primary mb-4" size={48} strokeWidth={1} />
                <div className="font-display font-bold text-primary text-5xl leading-none">
                  {stat.value}
                </div>
                <div className="font-body font-bold text-muted-foreground text-sm uppercase tracking-wider mt-2 text-center">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsByNumbersSection;