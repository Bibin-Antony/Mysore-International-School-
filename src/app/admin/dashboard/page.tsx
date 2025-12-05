'use client'

import { useState } from 'react'
import StaggeredMenu from '@/components/StaggeredMenu'

export default function AdminDashboard() {
  const menuItems = [
    { label: 'Dashboard', ariaLabel: 'Go to dashboard', link: '/admin/dashboard' },
    { label: 'Admissions', ariaLabel: 'Manage admissions', link: '/admin/admissions' },
    { label: 'Event Gallery', ariaLabel: 'Manage events and gallery', link: '/admin/events' },
    { label: 'Analytics', ariaLabel: 'View analytics', link: '/admin/analytics' }
  ]

  const stats = [
    {
      title: 'Total Students',
      value: '1,248',
      change: '+12%',
      positive: true
    },
    {
      title: 'New Admissions',
      value: '156',
      change: '+8%',
      positive: true
    },
    {
      title: 'Upcoming Events',
      value: '24',
      change: '+3',
      positive: true
    },
    {
      title: 'Faculty Members',
      value: '78',
      change: '+2',
      positive: true
    }
  ]

  const recentActivities = [
    {
      title: 'New admission inquiry',
      description: 'John Doe submitted application for Grade 5',
      time: '10 minutes ago'
    },
    {
      title: 'Event published',
      description: 'Annual Sports Day 2025 added to gallery',
      time: '1 hour ago'
    },
    {
      title: 'Staff update',
      description: 'New mathematics teacher profile added',
      time: '3 hours ago'
    },
    {
      title: 'System update',
      description: 'Analytics dashboard data refreshed',
      time: '5 hours ago'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* StaggeredMenu Navigation */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        displayItemNumbering={false}
        menuButtonColor="#580B57"
        openMenuButtonColor="#580B57"
        changeMenuColorOnOpen={true}
        colors={['#D1A3FF', '#580B57']}
        accentColor="#580B57"
        logoUrl="/fulllogo.svg"
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
        isFixed={true}
        displaySocials={false}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header */}
        <header className="mb-12 md:mt-20">
          <div className="flex items-center justify-between mb-2">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary tracking-tight">
              Dashboard
            </h1>
            <div className="font-body text-sm text-gray-500">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>
          <p className="font-body text-xl text-gray-600">
            Welcome back, Admin
          </p>
        </header>

        {/* Stats Grid */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-semibold text-primary mb-8">
            Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="border border-gray-200 p-6 hover:border-primary transition-colors duration-300"
              >
                <div className="font-body text-sm text-gray-500 mb-2 uppercase tracking-widest">
                  {stat.title}
                </div>
                <div className="flex items-end justify-between">
                  <div className="font-display text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className={`font-body text-sm font-semibold ${
                    stat.positive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-semibold text-primary mb-8">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="border-2 border-primary p-6 hover:bg-primary hover:text-white transition-all duration-300 group text-left">
              <div className="font-display text-2xl font-semibold text-primary group-hover:text-white mb-2">
                Admissions
              </div>
              <div className="font-body text-gray-600 group-hover:text-white/90">
                Manage student applications and enrollment
              </div>
            </button>

            <button className="border-2 border-primary p-6 hover:bg-primary hover:text-white transition-all duration-300 group text-left">
              <div className="font-display text-2xl font-semibold text-primary group-hover:text-white mb-2">
                Event Gallery
              </div>
              <div className="font-body text-gray-600 group-hover:text-white/90">
                Upload and organize school events
              </div>
            </button>

            <button className="border-2 border-primary p-6 hover:bg-primary hover:text-white transition-all duration-300 group text-left">
              <div className="font-display text-2xl font-semibold text-primary group-hover:text-white mb-2">
                Analytics
              </div>
              <div className="font-body text-gray-600 group-hover:text-white/90">
                View detailed reports and insights
              </div>
            </button>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-semibold text-primary mb-8">
            Recent Activity
          </h2>
          <div className="border border-gray-200">
            {recentActivities.map((activity, index) => (
              <div 
                key={index}
                className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-secondary/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-body font-semibold text-primary mb-1">
                      {activity.title}
                    </h3>
                    <p className="font-body text-gray-600">
                      {activity.description}
                    </p>
                  </div>
                  <div className="font-body text-sm text-gray-500 ml-4 flex-shrink-0">
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Status */}
        <section className="mb-8">
          <div className="bg-secondary border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  System Status
                </h3>
                <p className="font-body text-gray-600">
                  All systems operational
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-body text-sm text-gray-600">Online</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
