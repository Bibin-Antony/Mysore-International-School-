'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import NewsEventsSidebar from '@/components/sections/news-events-sidebar'

export default function NewsEventsTab() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  // Don't show on admin pages
  if (pathname?.startsWith('/admin')) {
    return null
  }

  return (
    <>
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
    </>
  )
}
