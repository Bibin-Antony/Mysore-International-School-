'use client'

import { Metadata } from 'next'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import HeaderNavigation from '@/components/sections/header-navigation'
import Footer from '@/components/sections/footer'
import MobileNewsEventsWrapper from '@/components/mobile-news-events-wrapper'
import founderImage from '@/assets/drjosephthomas.jpg'
import founderSvg from '@/assets/1x/foundersection.png'
import FounderVideoSection from '@/components/sections/founder-video'

export default function FounderChairmanPage() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const visionPoints = [
    "A school where every child feels inspired to learn",
    "A culture rooted in empathy, respect and discipline",
    "A future-ready education system aligned with global standards",
    "Strong partnerships between teachers, students and parents",
  ]

  const awards = [
    {
      title: "UN Goodwill Peace Ambassador",
      description: "Conferred during International Tolerance Conference at Center for Peace Studies, Sri Lanka (2019)",
      year: "2019"
    },
    {
      title: "Mahatma Award",
      description: "By Aditya Birla Foundation for contributions to Social Good, presented by Mrs. Rajashree Birla",
      year: "2019"
    },
    {
      title: "India's Fastest Growing Leader",
      description: "By Asia One Research, presented by Consul Generals of Italy and Malaysia",
      year: "2019"
    },
    {
      title: "Gem of India Award",
      description: "Conferred by All India Achiever's Conference, New Delhi",
      year: "2018"
    },
    {
      title: "Indian Achievers Award",
      description: "For Educational Excellence by Indian Achiever's Forum, New Delhi",
      year: "2018"
    },
    {
      title: "Edupreneur Award",
      description: "At World Education Summit, Bahrain by Education Minister Dr. Majed Bin Ali Al-Noaimi",
      year: "2017"
    },
    {
      title: "Global Achievers Award",
      description: "By Ambassador of India to UAE for outstanding achievements and distinguished global services",
      year: "2016"
    },
    {
      title: "Bharat Jyoti Award",
      description: "By Ambassador of Nepal to India for distinguished services to the Nation",
      year: "2014"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <HeaderNavigation />
      <MobileNewsEventsWrapper />

      {/* Hero Video Section */}
      <FounderVideoSection />

      {/* Main Content */}
      <section ref={sectionRef} className="py-18">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
    
          {/* Introduction with Image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 max-w-7xl mx-auto">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0 overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src={founderImage}
                  alt="Dr. Joseph K. Thomas - Founder & Chairman"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 -z-10 rounded-lg hidden lg:block" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/20 -z-10 rounded-lg hidden lg:block" />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                Dr. Joseph K. Thomas
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-display">
                A Visionary Educator Shaping the Future of Learning in Mysore
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Joseph K. Thomas is the driving force behind Mysore International School's mission and identity. 
                An army veteran turned educator, he blends discipline, compassion, and innovation to create an 
                environment where students learn with purpose and live with values.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With experience across leadership, community building, and educational reform, Dr. Joseph's work 
                reflects his deep belief that schools must develop not just exceptional scholars—but responsible, 
                empathetic human beings.
              </p>
            </motion.div>
          </div>

          {/* Transforming Education */}
          <div className="bg-secondary rounded-2xl p-8 md:p-12 lg:p-16 mb-20 max-w-7xl mx-auto">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
              Transforming Education with Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-display">
              From Service to Education: A Journey of Impact
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dr. Joseph's journey from the armed forces to the world of education is a story of resilience, 
              service, and unwavering commitment. His leadership is rooted in the profound belief that true 
              education must shape character, character must fuel purpose, and purpose must guide achievement.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Under his visionary stewardship, MIS has evolved into a thriving institution recognized for 
              academic excellence, holistic development, and uncompromising integrity. His approach combines 
              military precision with educational innovation, creating a learning environment that prepares 
              students for both academic success and life's challenges.
            </p>
          </div>

          {/* CSR Initiatives */}
          <div className="mb-20 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                Corporate Social Responsibility
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-display">
                Giving Back to Society
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Beyond education, Dr. Joseph is deeply committed to social welfare and community development,
                actively engaging in various CSR initiatives that create lasting positive impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white primary rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-primary mb-2">Blood Donation Camps</h3>
                <p className="text-gray-700 text-sm">Regular blood donation drives to save lives and promote health awareness</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white  rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-primary mb-2">Elder Care Support</h3>
                <p className="text-gray-700 text-sm">Supporting old age homes and destitute homes with essential supplies and care</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white  rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-primary mb-2">Orphanage Support</h3>
                <p className="text-gray-700 text-sm">Providing care, education, and resources for orphaned children</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white  rounded-xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-lg font-bold text-primary mb-2">Education Aid</h3>
                <p className="text-gray-700 text-sm">Supporting government school children with bags, books, shoes, and library setup</p>
              </motion.div>
            </div>

            <div className="bg-secondary rounded-2xl p-8 md:p-12 mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">Impact Through Action</h3>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Dr. Joseph's CSR initiatives reflect his belief that true leadership extends beyond
                  business success to encompass social responsibility. Through these programs, he continues
                  to make a meaningful difference in the lives of countless individuals and communities.
                </p>
              </div>
            </div>
          </div>
 {/* Founder Section SVG */}
          <div className=" pb-20 max-w-8xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center items-center"
            >
              <div className="w-full max-w-5xl">
                <Image
                  src={founderSvg}
                  alt="Dr. Joseph Thomas - Founder & Chairman"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>
          </div>
          {/* Awards & Recognition */}
          <div className="mb-20 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                Awards & Recognition
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-display">
                Honored for Excellence in Education
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                His dedication to transforming education has earned several prestigious national and
                international accolades that honor his contributions to leadership and educational innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span className="bg-accent/20 text-primary px-3 py-1 rounded-full text-xs font-bold">
                      {award.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3 leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {award.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-gray-600 italic">
                For Dr. Joseph, however, the greatest reward remains the transformation he witnesses
                in MIS students every day.
              </p>
            </div>
          </div>

          {/* Chairman's Message */}
          {/* <div className="bg-primary text-white rounded-2xl p-8 md:p-12 lg:p-16 mb-20 max-w-7xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 text-[200px] font-bold opacity-5 leading-none">"</div>
            <div className="relative z-10">
              <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                Message from the Chairman
              </div>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
                "Education must open minds, strengthen values, and build confidence to face the world 
                with courage. At MIS, we strive to provide every learner with opportunities that help 
                them grow academically, emotionally and personally. Watching our children evolve into 
                thoughtful, capable individuals is my proudest accomplishment."
              </blockquote>
              <cite className="text-lg font-semibold not-italic">
                — Dr. Joseph K. Thomas
              </cite>
            </div>
          </div> */}

          {/* Vision for MIS */}
          {/* <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider">
                His Vision for MIS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-display">
                Building Tomorrow's Leaders Today
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {visionPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start bg-secondary rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </div> */}

         

        </div>
      </section>

      <Footer />
    </main>
  )
}
