"use client";

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import InquiryModal from './InquiryModal';

const DiscoverCtaSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Fog/mist effect overlay, blending the seam with the previous section */}
      <div 
        className="absolute bottom-full left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="container mx-auto text-center py-24 md:py-32">
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-display italic text-xl md:text-2xl text-primary"
        >
          Discover
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mt-2 font-display font-extrabold text-primary text-5xl sm:text-6xl md:text-[4.5rem] leading-none uppercase"
        >
          MYSORE INTERNATIONAL SCHOOL
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="#"
              onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
              className="w-full md:w-auto justify-center inline-flex items-center font-semibold text-lg text-primary border-2 border-primary rounded-[24px] py-3 px-10 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-[1.02]"
            >
              Inquire
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <Link
              href="#"
              onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
              className="w-full md:w-auto justify-center inline-flex items-center font-semibold text-lg text-primary border-2 border-primary rounded-[24px] py-3 px-10 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-[1.02]"
            >
              Visit
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              href="#"
              onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
              className="w-full md:w-auto justify-center inline-flex items-center font-semibold text-lg text-primary border-2 border-primary rounded-[24px] py-3 px-10 transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:scale-[1.02]"
            >
              Apply
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default DiscoverCtaSection;