import { Metadata } from 'next'
import HeaderNavigation from '@/components/sections/header-navigation'
import Footer from '@/components/sections/footer'
import MobileNewsEventsWrapper from '@/components/mobile-news-events-wrapper'

export const metadata: Metadata = {
  title: 'Arts & Activities - Mysore International School',
  description: 'Discover the vibrant arts and creative activities program at Mysore International School',
}

export default function ArtsActivitiesPage() {
  const artPrograms = [
    {
      title: "Visual Arts",
      description: "Painting, drawing, sculpture, and digital art techniques taught by professional artists.",
      icon: "🎨",
      activities: ["Drawing & Painting", "Sculpture", "Digital Art", "Photography"]
    },
    {
      title: "Music & Performing Arts",
      description: "Comprehensive music education including instruments, vocals, and performance arts.",
      icon: "🎵",
      activities: ["Piano & Keyboard", "Guitar & Strings", "Vocal Training", "Drama & Theater"]
    },
    {
      title: "Dance & Movement",
      description: "Classical and contemporary dance forms promoting physical expression and rhythm.",
      icon: "💃",
      activities: ["Classical Dance", "Contemporary Dance", "Folk Dance", "Movement Therapy"]
    },
    {
      title: "Creative Writing",
      description: "Developing literary skills through poetry, storytelling, and creative expression.",
      icon: "✍️",
      activities: ["Poetry Writing", "Storytelling", "Journalism", "Creative Expression"]
    }
  ]

  const extracurriculars = [
    {
      category: "Clubs & Societies",
      items: ["Art Club", "Music Society", "Drama Club", "Literature Circle", "Photography Club"]
    },
    {
      category: "Competitions",
      items: ["Inter-school Arts Festival", "Music Competitions", "Art Exhibitions", "Talent Shows", "Creative Writing Contests"]
    },
    {
      category: "Workshops",
      items: ["Guest Artist Sessions", "Art Therapy Workshops", "Music Production", "Digital Design", "Performance Skills"]
    }
  ]

  const facilities = [
    { name: "Art Studios", icon: "🖌️" },
    { name: "Music Rooms", icon: "🎹" },
    { name: "Dance Studio", icon: "💃" },
    { name: "Auditorium", icon: "🎭" },
    { name: "Gallery Space", icon: "🖼️" },
    { name: "Recording Studio", icon: "🎙️" }
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
              Arts & Activities
            </h1>
            <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto">
              Nurturing Creativity and Self-Expression
            </p>
          </div>
        </div>
      </section>

      {/* Arts Programs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Creative Expression Through Arts
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Our comprehensive arts program fosters creativity, self-expression, and artistic skills
                in every student. From visual arts to performing arts, we provide opportunities for
                students to discover and develop their creative potential.
              </p>
            </div>

            {/* Art Programs Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {artPrograms.map((program, index) => (
                <div key={index} className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4">{program.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {program.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Activities:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {program.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="text-sm text-gray-600 flex items-center">
                              <span className="text-primary mr-1">•</span>
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Extracurricular Activities */}
            <div className="bg-secondary rounded-lg p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Extracurricular Opportunities
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {extracurriculars.map((category, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-xl font-bold text-primary mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 flex items-center justify-center">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white border-2 border-primary rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                State-of-the-Art Facilities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {facilities.map((facility, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-2">{facility.icon}</div>
                    <p className="font-semibold text-primary">{facility.name}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="bg-primary text-white rounded-lg p-6 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Creative Minds Thrive Here</h3>
                  <p className="mb-4">
                    Our arts program is designed to help every student discover their creative potential
                    and develop skills that will enrich their lives throughout their educational journey.
                  </p>
                  <p className="font-semibold">Join our creative community today!</p>
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
