import { Metadata } from 'next'
import HeaderNavigation from '@/components/sections/header-navigation'
import Footer from '@/components/sections/footer'
import MobileNewsEventsWrapper from '@/components/mobile-news-events-wrapper'

export const metadata: Metadata = {
  title: 'Our Campus - Mysore International School',
  description: 'Explore the state-of-the-art campus facilities at Mysore International School',
}

export default function OurCampusPage() {
  const facilities = [
    {
      title: "Academic Buildings",
      description: "Modern classrooms with interactive smart boards and technology-enabled learning spaces.",
      icon: "🏫"
    },
    {
      title: "Science Laboratories",
      description: "Well-equipped physics, chemistry, and biology labs for hands-on scientific exploration.",
      icon: "🔬"
    },
    {
      title: "Computer Labs",
      description: "Advanced computing facilities with latest software and programming tools.",
      icon: "💻"
    },
    {
      title: "Library",
      description: "Comprehensive library with extensive collection of books, digital resources, and study areas.",
      icon: "📚"
    },
    {
      title: "Arts & Music Studios",
      description: "Dedicated spaces for visual arts, music, dance, and creative expression.",
      icon: "🎨"
    },
    {
      title: "Sports Complex",
      description: "Basketball courts, football field, swimming pool, and fitness facilities.",
      icon: "⚽"
    },
    {
      title: "Auditorium",
      description: "State-of-the-art auditorium for performances, assemblies, and cultural events.",
      icon: "🎭"
    },
    {
      title: "Cafeteria",
      description: "Nutritious meals and healthy snacks in a welcoming dining environment.",
      icon: "🍽️"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <HeaderNavigation />
      <MobileNewsEventsWrapper />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-secondary to-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
              Our Campus
            </h1>
            <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto">
              A Safe and Stimulating Learning Environment
            </p>
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Located on HD Kote Road, Rayanakere Post, Mysore, our 4-acre campus is thoughtfully
              designed to create a safe and stimulating learning environment. The campus features
              modern infrastructure designed to support holistic development across all age groups.
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4 text-center">{facility.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3 text-center">
                  {facility.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

          {/* Campus Features */}
          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Location & Accessibility</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">📍</span>
                  <span>92/1-5, HD Kote Road, Rayanakere Post, SH 33</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">🚗</span>
                  <span>Easy access via major roads and public transport</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">🛡️</span>
                  <span>Secure campus with 24/7 surveillance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">🌳</span>
                  <span>4 acres of green, eco-friendly campus</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-primary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Inclusive Design</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">♿</span>
                  <span>Ramp access and inclusive infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">🚑</span>
                  <span>On-campus medical facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">🅿️</span>
                  <span>Ample parking for staff and visitors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">💧</span>
                  <span>Clean drinking water and sanitation facilities</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
