import { Metadata } from 'next'
import HeaderNavigation from '@/components/sections/header-navigation'
import Footer from '@/components/sections/footer'
import MobileNewsEventsWrapper from '@/components/mobile-news-events-wrapper'

export const metadata: Metadata = {
  title: 'Login - Mysore International School',
  description: 'Access your Mysore International School account - portal for students, parents, and staff',
}

export default function LoginPage() {
  const portals = [
    {
      title: "Student Portal",
      description: "Access grades, assignments, schedule, and school resources",
      icon: "🎓",
      features: ["Academic Records", "Assignment Portal", "School Calendar", "Resource Library"]
    },
    {
      title: "Parent Portal",
      description: "Monitor your child's progress and communicate with teachers",
      icon: "👨‍👩‍👧‍👦",
      features: ["Progress Reports", "Teacher Communication", "Fee Management", "Event Notifications"]
    },
    {
      title: "Staff Portal",
      description: "Access teaching resources, administrative tools, and professional development",
      icon: "👨‍🏫",
      features: ["Lesson Planning", "Student Management", "Professional Resources", "Administrative Tools"]
    },
    {
      title: "Alumni Portal",
      description: "Stay connected with your alma mater and fellow alumni",
      icon: "🎓",
      features: ["Alumni Directory", "Event Invitations", "Career Services", "News & Updates"]
    }
  ]

  const loginOptions = [
    { platform: "MIS Portal", description: "Main login for all users", status: "Active" },
    { platform: "Mobile App", description: "Access on-the-go", status: "Coming Soon" },
    { platform: "SSO Integration", description: "Single sign-on for multiple services", status: "Planned" }
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
              My MIS Portal
            </h1>
            <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto">
              Access Your Personalized Dashboard
            </p>
          </div>
        </div>
      </section>

      {/* Login Portals */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Choose Your Portal
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Access personalized portals designed for students, parents, staff, and alumni.
                Each portal provides relevant tools and information for your specific needs.
              </p>
            </div>

            {/* Portal Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {portals.map((portal, index) => (
                <div key={index} className="bg-white border-2 border-primary rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4">{portal.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {portal.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {portal.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {portal.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                    Access {portal.title}
                  </button>
                </div>
              ))}
            </div>

            {/* Login Options */}
            <div className="bg-secondary rounded-lg p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Login Options
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {loginOptions.map((option, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 text-center">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {option.platform}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4">
                      {option.description}
                    </p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      option.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : option.status === 'Coming Soon'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {option.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Help & Support */}
            <div className="bg-white border-2 border-primary rounded-lg p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                Need Help?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-4">🔑</div>
                  <h3 className="text-lg font-bold text-primary mb-2">Forgot Password</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Reset your password or recover your account access.
                  </p>
                  <button className="text-primary hover:underline font-medium">
                    Reset Password
                  </button>
                </div>

                <div>
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-lg font-bold text-primary mb-2">User Guide</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Learn how to navigate and use your portal effectively.
                  </p>
                  <button className="text-primary hover:underline font-medium">
                    View Guide
                  </button>
                </div>

                <div>
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-lg font-bold text-primary mb-2">Technical Support</h3>
                  <p className="text-gray-700 text-sm mb-4">
                    Get help with technical issues and system access.
                  </p>
                  <button className="text-primary hover:underline font-medium">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">🔒 Secure Access</h2>
              <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                All portal access is protected by advanced security measures. Your personal information
                and data privacy are our top priorities. We use industry-standard encryption and
                security protocols to protect your account.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
