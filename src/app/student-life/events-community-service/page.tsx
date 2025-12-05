import { Metadata } from 'next'
import HeaderNavigation from '@/components/sections/header-navigation'
import Footer from '@/components/sections/footer'
import MobileNewsEventsWrapper from '@/components/mobile-news-events-wrapper'

export const metadata: Metadata = {
  title: 'Events & Community Service - Mysore International School',
  description: 'Discover our events and community service programs at Mysore International School',
}

export default function EventsCommunityServicePage() {
  const events = [
    {
      title: "Annual Sports Meet",
      description: "Inter-house sports competitions showcasing athletic excellence and teamwork.",
      icon: "🏆",
      type: "Sports"
    },
    {
      title: "Cultural Festival",
      description: "Celebration of diverse cultures through music, dance, and traditional performances.",
      icon: "🎭",
      type: "Cultural"
    },
    {
      title: "Science Fair",
      description: "Showcase of innovative science projects and experiments by our young scientists.",
      icon: "🔬",
      type: "Academic"
    },
    {
      title: "Art Exhibition",
      description: "Display of student artwork, crafts, and creative expressions.",
      icon: "🎨",
      type: "Arts"
    },
    {
      title: "Literary Fest",
      description: "Poetry recitals, storytelling competitions, and creative writing showcases.",
      icon: "📚",
      type: "Literary"
    },
    {
      title: "Leadership Summit",
      description: "Student-led conferences on leadership, ethics, and community service.",
      icon: "👑",
      type: "Leadership"
    }
  ]

  const communityService = [
    {
      title: "Environmental Conservation",
      description: "Tree planting, clean-up drives, and awareness campaigns for environmental protection.",
      icon: "🌳",
      impact: "500+ trees planted"
    },
    {
      title: "Education Support",
      description: "Tutoring programs and educational support for underprivileged children.",
      icon: "📖",
      impact: "200+ students supported"
    },
    {
      title: "Health & Wellness",
      description: "Health camps, blood donation drives, and wellness awareness programs.",
      icon: "🏥",
      impact: "1000+ people served"
    },
    {
      title: "Elder Care",
      description: "Visits to old age homes, assistance programs, and companionship activities.",
      icon: "👴",
      impact: "50+ elders supported"
    },
    {
      title: "Animal Welfare",
      description: "Animal shelter support, adoption drives, and wildlife conservation efforts.",
      icon: "🐾",
      impact: "300+ animals helped"
    },
    {
      title: "Disaster Relief",
      description: "Emergency response and relief efforts during natural disasters and crises.",
      icon: "🆘",
      impact: "5+ relief operations"
    }
  ]

  const studentClubs = [
    "Environment Club", "Red Cross Society", "Rotaract Club", "UNESCO Club",
    "Art & Culture Club", "Science & Technology Club", "Sports Club", "Literary Club"
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
              Events & Community Service
            </h1>
            <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto">
              Building Community and Creating Impact
            </p>
          </div>
        </div>
      </section>

      {/* Events & Activities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Events Section */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  School Events & Celebrations
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Throughout the year, we organize various events that celebrate student achievements,
                  promote cultural diversity, and foster school spirit. These events provide opportunities
                  for students to showcase their talents and develop leadership skills.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                  <div key={index} className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{event.icon}</div>
                      <span className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {event.type}
                      </span>
                      <h3 className="text-lg font-bold text-primary">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Service Section */}
            <div className="bg-secondary rounded-lg p-8 md:p-12 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Community Service Initiatives
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Our community service programs instill values of compassion, empathy, and social
                  responsibility. Students actively participate in various initiatives that make a
                  positive impact on our local and global communities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {communityService.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg p-6">
                    <div className="flex items-start mb-4">
                      <div className="text-3xl mr-3">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-primary mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          {service.description}
                        </p>
                        <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
                          {service.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Clubs */}
            <div className="bg-white border-2 border-primary rounded-lg p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Student-Led Clubs & Organizations
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {studentClubs.map((club, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-primary">{club}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  Our student-led clubs provide opportunities for leadership development,
                  special interest exploration, and community engagement.
                </p>
              </div>
            </div>

            {/* Impact Statement */}
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Making a Difference Together</h2>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  Through events and community service, our students learn the importance of
                  giving back to society. These experiences shape compassionate leaders who
                  understand their responsibility to create positive change in the world.
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-sm">Annual Events</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">10,000+</div>
                    <div className="text-sm">Community Members Helped</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm">Student Participation</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
