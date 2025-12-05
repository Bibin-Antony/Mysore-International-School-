import { Metadata } from 'next'
import HeaderNavigation from '@/components/sections/header-navigation'
import Footer from '@/components/sections/footer'
import MobileNewsEventsWrapper from '@/components/mobile-news-events-wrapper'

export const metadata: Metadata = {
  title: 'Athletics - Mysore International School',
  description: 'Discover our comprehensive athletics program and sports facilities at Mysore International School',
}

export default function AthleticsPage() {
  const sportsPrograms = [
    {
      name: "Basketball",
      description: "Competitive basketball program with professional coaching and training facilities.",
      icon: "🏀",
      levels: ["Beginner", "Intermediate", "Advanced", "Varsity"]
    },
    {
      name: "Football (Soccer)",
      description: "Comprehensive soccer program focusing on teamwork, skill development, and fitness.",
      icon: "⚽",
      levels: ["U-8", "U-10", "U-12", "U-14", "U-16", "U-18"]
    },
    {
      name: "Swimming",
      description: "Professional swimming instruction and competitive swimming program.",
      icon: "🏊",
      levels: ["Learn to Swim", "Competitive", "Water Polo", "Aquatics"]
    },
    {
      name: "Track & Field",
      description: "Complete athletics program including running, jumping, and throwing events.",
      icon: "🏃",
      levels: ["Sprints", "Middle Distance", "Field Events", "Cross Country"]
    },
    {
      name: "Volleyball",
      description: "Team-oriented volleyball program emphasizing strategy and athleticism.",
      icon: "🏐",
      levels: ["Beginner", "Intermediate", "Advanced", "Beach Volleyball"]
    },
    {
      name: "Tennis",
      description: "Individual and team tennis instruction with professional coaching.",
      icon: "🎾",
      levels: ["Beginner", "Intermediate", "Advanced", "Tournament"]
    }
  ]

  const facilities = [
    {
      name: "Sports Complex",
      features: ["Basketball Courts", "Volleyball Courts", "Indoor Gymnasium"],
      icon: "🏟️"
    },
    {
      name: "Football Field",
      features: ["Full-size Football Pitch", "Natural Grass", "Training Areas"],
      icon: "⚽"
    },
    {
      name: "Swimming Pool",
      features: ["Olympic-size Pool", "Diving Pool", "Aquatic Center"],
      icon: "🏊"
    },
    {
      name: "Track & Field",
      features: ["400m Track", "Field Events Area", "Training Equipment"],
      icon: "🏃"
    },
    {
      name: "Tennis Courts",
      features: ["Hard Court Surfaces", "Lighting for Evening Play", "Equipment Storage"],
      icon: "🎾"
    },
    {
      name: "Fitness Center",
      features: ["Weight Training", "Cardio Equipment", "Personal Training"],
      icon: "💪"
    }
  ]

  const achievements = [
    { title: "State Champions", count: "15+", description: "State-level championships" },
    { title: "National Finals", count: "25+", description: "National tournament appearances" },
    { title: "Individual Awards", count: "100+", description: "Student athlete achievements" },
    { title: "Team Records", count: "30+", description: "School athletic records" }
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
              Athletics
            </h1>
            <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto">
              Building Champions Through Sports Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Athletics Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Comprehensive Sports Program
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Our athletics program develops physical fitness, teamwork, leadership, and sportsmanship.
                We offer a wide range of sports with professional coaching, modern facilities, and
                opportunities for students of all skill levels to participate and excel.
              </p>
            </div>

            {/* Sports Programs */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {sportsPrograms.map((sport, index) => (
                <div key={index} className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{sport.icon}</div>
                    <h3 className="text-xl font-bold text-primary">
                      {sport.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 text-center">
                    {sport.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-primary mb-2 text-sm">Programs:</h4>
                    <div className="flex flex-wrap gap-1">
                      {sport.levels.map((level, levelIndex) => (
                        <span key={levelIndex} className="bg-secondary text-primary px-2 py-1 rounded text-xs">
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Facilities */}
            <div className="bg-secondary rounded-lg p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                World-Class Facilities
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facilities.map((facility, index) => (
                  <div key={index} className="bg-white rounded-lg p-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">{facility.icon}</div>
                      <h3 className="text-lg font-bold text-primary">
                        {facility.name}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {facility.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-700 flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white border-2 border-primary rounded-lg p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Our Achievements
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {achievement.count}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="text-center">
              <div className="bg-primary text-white rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Athletic Philosophy</h2>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  "Sports teach us about life. They teach us about teamwork, perseverance,
                  and the importance of practice. Through athletics, our students learn
                  discipline, develop character, and discover their potential to achieve greatness."
                </p>
                <cite className="block font-semibold">
                  — Athletics Department, Mysore International School
                </cite>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
