'use client'

import { useState } from 'react'
import MobileNewsEventsWrapper from '@/components/mobile-news-events-wrapper'
import NewsEventsSidebar from '@/components/sections/news-events-sidebar'
import Image from 'next/image'
import Link from 'next/link'

export default function EventGalleryPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const events = [
    {
      id: 'color-carnival-2025',
      title: 'Color Carnival',
      description: 'Color carnival celebration',
      date: 'September 16, 2025',
      category: 'Festival',
      photoCount: 5,
      thumbnail: '/images/events/color-carnival-thumb.jpg'
    },
    {
      id: 'chocolate-alien-day',
      title: 'Chocolate Alien Day',
      description: 'Chocolate Alien Day',
      date: 'June 17, 2025',
      category: 'Cultural',
      photoCount: 4,
      thumbnail: '/images/events/chocolate-alien-thumb.jpg'
    },
    {
      id: 'fathers-day-2025',
      title: 'Fathers Day',
      description: 'Fathers Day Celebration',
      date: 'June 15, 2025',
      category: 'Cultural',
      photoCount: 5,
      thumbnail: '/images/events/fathers-day-thumb.jpg'
    }
  ]

  const categories = ['All', 'Festival', 'Cultural', 'Sports', 'Academic', 'National', 'Competition']

  return (
    <main className="min-h-screen bg-white">
      <MobileNewsEventsWrapper />

      {/* Fixed Vertical News & Events Tab */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="hidden md:block fixed top-1/2 right-0 -translate-y-1/2 z-30 bg-[#D1A3FF] hover:bg-[#C0A2FF] text-[#580B57] font-display font-semibold text-sm tracking-[0.1em] py-4 px-3 transition-all duration-300 hover:px-4 shadow-lg"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        aria-label="Open News & Events"
      >
        NEWS & EVENTS
      </button>

      {/* News Events Sidebar */}
      <NewsEventsSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 tracking-tight">
            Event Gallery
          </h1>
          <p className="font-body text-2xl md:text-3xl text-gray-600 max-w-4xl leading-tight">
            Relive the joy, excitement, and achievements of our vibrant school community. 
            Browse through our collection of memorable events and celebrations.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 sticky top-0 bg-white z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`font-body px-6 py-2 border-2 transition-all duration-300 ${
                  index === 0 
                    ? 'border-primary bg-primary text-white' 
                    : 'border-gray-300 text-gray-700 hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Link 
                key={index}
                href={`/gallery/${event.id}`}
                className="group border border-gray-200 hover:border-primary transition-colors duration-300"
              >
                {/* Thumbnail */}
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Event Image
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">
                      {event.category}
                    </span>
                    <span className="font-body text-sm text-gray-500">
                      {event.photoCount} Photos
                    </span>
                  </div>

                  <div className="font-body text-sm text-gray-500 mb-2">
                    {event.date}
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-primary mb-2 group-hover:text-[#6B0F6B] transition-colors">
                    {event.title}
                  </h3>

                  <p className="font-body text-gray-600 mb-4">
                    {event.description}
                  </p>

                  <div className="font-body text-sm font-semibold text-primary group-hover:text-[#6B0F6B] transition-colors">
                    View Photos →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}