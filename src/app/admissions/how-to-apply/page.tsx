import { Metadata } from 'next'
import HeaderNavigation from '@/components/sections/header-navigation'
import Footer from '@/components/sections/footer'
import MobileNewsEventsWrapper from '@/components/mobile-news-events-wrapper'
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'How to Apply - Mysore International School',
  description: 'Learn about the admission process and requirements at Mysore International School',
}

export default function HowToApplyPage() {
  const admissionProcess = [
    {
      step: "01",
      title: "Initial Inquiry",
      description: "Contact our admissions office to express interest and schedule a campus visit."
    },
    {
      step: "02",
      title: "Application Submission",
      description: "Complete and submit the online application form with required documents."
    },
    {
      step: "03",
      title: "Entrance Assessment",
      description: "Students undergo age-appropriate entrance tests and interviews."
    },
    {
      step: "04",
      title: "Parent Interview",
      description: "Parents meet with admissions team to discuss educational goals and partnership."
    },
    {
      step: "05",
      title: "Final Decision",
      description: "Admissions committee reviews applications and makes final decisions."
    }
  ]

  const requirements = [
    {
      category: "Academic Records",
      items: ["Previous school transcripts", "Report cards", "Transfer certificates"]
    },
    {
      category: "Personal Documents",
      items: ["Birth certificate", "Passport copy", "Medical records", "Address proof"]
    },
    {
      category: "Application Forms",
      items: ["Completed admission form", "Parent declaration", "Emergency contact information"]
    }
  ]

  const ageCriteria = [
    { grade: "Pre-K", age: "3-4 years" },
    { grade: "Kindergarten", age: "4-5 years" },
    { grade: "Grade 1", age: "5-6 years" },
    { grade: "Grade 2", age: "6-7 years" },
    { grade: "Grade 3+", age: "Based on previous grade completion" }
  ]

  return (
    <main className="min-h-screen bg-white   overflow-x-hidden">
      <HeaderNavigation />
      <MobileNewsEventsWrapper />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 tracking-tight">
            How to Apply
          </h1>
          <p className="font-body text-2xl md:text-3xl text-gray-600 max-w-3xl leading-tight">
            Join our community of lifelong learners
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal
            baseOpacity={0}
            baseRotation={0}
            blurStrength={6}
            rotationEnd="bottom center"
            wordAnimationEnd="bottom center"
            enableBlur={true}
            as="div"
          >
            <p className="font-body text-xl text-gray-700 leading-relaxed">
              Our admission process is designed to ensure the best fit between students, families, 
              and our educational community. We welcome applications throughout the year and are 
              committed to finding students who will thrive in our learning environment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-16 tracking-tight text-center">
            Admission Process
          </h2>

          <ScrollStack
            useWindowScroll={true}
            itemDistance={100}
            itemScale={0.05}
            itemStackDistance={40}
            stackPosition="50%"
            scaleEndPosition="30%"
            baseScale={0.88}
          >
            {admissionProcess.map((step, index) => (
              <ScrollStackItem key={index}>
                <div className="bg-white p-12 rounded-lg shadow-lg border border-gray-100 max-w-5xl mx-auto">
                  <div className="grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-2">
                      <div className="font-display text-6xl font-bold text-primary opacity-20">
                        {step.step}
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <h3 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-6 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="font-body text-xl text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* Age Criteria & Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Age Criteria */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12 tracking-tight">
                Age Criteria
              </h2>
              <div className="space-y-6">
                {ageCriteria.map((criteria, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-baseline pb-6 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="font-body text-xl font-semibold text-primary">
                      {criteria.grade}
                    </span>
                    <span className="font-body text-lg text-gray-700">
                      {criteria.age}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-12 tracking-tight">
                Required Documents
              </h2>
              <div className="space-y-10">
                {requirements.map((req, index) => (
                  <div key={index}>
                    <h3 className="font-display text-2xl font-semibold text-primary mb-5">
                      {req.category}
                    </h3>
                    <ul className="space-y-3">
                      {req.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex} 
                          className="font-body text-lg text-gray-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary border-t border-b border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-primary mb-8">
            Important Information
          </h2>
          <div className="space-y-6 font-body text-xl text-gray-700 leading-relaxed">
            <p>
              All documents must be original or certified copies. International applicants may need 
              to provide additional documentation as required by local regulations.
            </p>
            <p>
              Entrance assessments are tailored to the student's grade level and are designed to 
              understand their learning style and academic foundation, not to create barriers to entry.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight">
            Ready to Apply?
          </h2>
          <p className="font-body text-xl text-gray-700 mb-16 leading-relaxed">
            Contact our admissions team to begin your journey with Mysore International School.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="font-body text-sm text-gray-500 mb-3 uppercase tracking-widest">
                Call Us
              </div>
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="font-body text-2xl font-semibold text-primary hover:text-[#6B0F6B] transition-colors duration-300"
              >
                +91 XXX XXX XXXX
              </a>
            </div>

            <div>
              <div className="font-body text-sm text-gray-500 mb-3 uppercase tracking-widest">
                Email Us
              </div>
              <a 
                href="mailto:admissions@mis.edu.in" 
                className="font-body text-2xl font-semibold text-primary hover:text-[#6B0F6B] transition-colors duration-300"
              >
                admissions@mis.edu.in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <p className="font-body text-xl text-gray-700 mb-10 leading-relaxed">
            We encourage you to schedule a campus visit to experience our learning environment 
            firsthand and meet our dedicated faculty.
          </p>
          <a 
            href="mailto:admissions@mis.edu.in?subject=Campus%20Visit%20Request"
            className="inline-block font-body text-lg font-semibold text-white bg-primary px-10 py-5 hover:bg-[#6B0F6B] transition-colors duration-300"
          >
            Schedule a Visit
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}