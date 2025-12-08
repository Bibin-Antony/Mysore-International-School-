'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import StaggeredMenu from '@/components/StaggeredMenu'
import { IEvent } from '@/types/event'

type EventCategory = 'Cultural' | 'Sports' | 'Academic' | 'National' | 'Festival' | 'Competition'

export default function AdminEventGalleryPage() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingEventId, setEditingEventId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    category: 'Cultural' as EventCategory,
    description: '',
    thumbnail: null as File | null,
    galleryImages: [] as File[],
    driveLink: ''
  })

  const menuItems = [
    { label: 'Dashboard', ariaLabel: 'Go to dashboard', link: '/admin/dashboard' },
    { label: 'Admissions', ariaLabel: 'Manage admissions', link: '/admin/admissions' },
    { label: 'Event Gallery', ariaLabel: 'Manage events and gallery', link: '/admin/events' },
    { label: 'News & Events', ariaLabel: 'Manage news and events', link: '/admin/news-events' } // CHANGED HERE
  ]

  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'BEO School visit',
      description: 'BEO School Visit',
      date: 'May 16, 2025',
      category: 'Academic',
      photoCount: 4,
      driveLink: 'https://drive.google.com/...'
    },
    {
      id: 2,
      title: 'Color Carnival',
      description: 'Color carnival celebration',
      date: 'September 16, 2025',
      category: 'Festival',
      photoCount: 5,
      driveLink: 'https://drive.google.com/...'
    },
    {
      id: 3,
      title: 'Chocolate Alien Day',
      description: 'Chocolate Alien Day',
      date: 'June 17, 2025',
      category: 'Cultural',
      photoCount: 4,
      driveLink: 'https://drive.google.com/...'
    },
    {
      id: 4,
      title: 'Fathers Day',
      description: 'Fathers Day Celebration',
      date: 'June 15, 2025',
      category: 'Cultural',
      photoCount: 5,
      driveLink: 'https://drive.google.com/...'
    }
  ])

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, thumbnail: file })
    }
  }

  const handleGalleryImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const filesArray = Array.from(files)
      setFormData({ ...formData, galleryImages: [...formData.galleryImages, ...filesArray] })
    }
  }

  const removeGalleryImage = (index: number) => {
    const newImages = formData.galleryImages.filter((_, i) => i !== index)
    setFormData({ ...formData, galleryImages: newImages })
  }

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl)
    setShowImageModal(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.thumbnail) {
      alert('Please select a thumbnail image')
      return
    }

    if (formData.galleryImages.length < 4 || formData.galleryImages.length > 12) {
      alert('Please upload 4-12 gallery images')
      return
    }

    try {
      setIsSubmitting(true)

      const form = new FormData()
      form.append('title', formData.title)
      form.append('date', formData.date)
      form.append('category', formData.category)
      form.append('description', formData.description)
      form.append('driveLink', formData.driveLink)
      form.append('thumbnail', formData.thumbnail)
      
      formData.galleryImages.forEach((file, index) => {
        form.append(`galleryImage${index}`, file)
      })

      const response = await fetch('/api/events', {
        method: 'POST',
        body: form,
      })

      const data = await response.json()

      if (data.success) {
        alert('Event created successfully!')
        setShowCreateModal(false)
        fetchEvents()
        setFormData({
          title: '',
          date: '',
          category: 'Cultural',
          description: '',
          thumbnail: null,
          galleryImages: [],
          driveLink: ''
        })
      } else {
        alert(data.message || 'Failed to create event')
      }
    } catch (error) {
      console.error('Create event error:', error)
      alert('Failed to create event')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEditClick = async (event: IEvent) => {
    setEditingEventId(event._id)
    setFormData({
      title: event.title,
      date: new Date(event.date).toISOString().split('T')[0],
      category: event.category,
      description: event.description,
      thumbnail: null,
      galleryImages: [],
      driveLink: event.driveLink
    })
    setShowEditModal(true)
  }

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Create event:', formData)
    alert('Event created successfully! (Backend integration pending)')
    setShowCreateModal(false)
    // Reset form
    setFormData({
      title: '',
      date: '',
      category: 'Cultural',
      description: '',
      thumbnail: null,
      galleryImages: Array(6).fill(null),
      driveLink: ''
    })
  }

  const handleEditClick = (event: typeof events[0]) => {
    setEditingEventId(event.id)
    setFormData({
      title: event.title,
      date: event.date,
      category: event.category,
      description: event.description,
      thumbnail: null,
      galleryImages: Array(6).fill(null),
      driveLink: event.driveLink
    })
    setShowEditModal(true)
  }

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Edit event:', editingEventId, formData)
    alert('Event updated successfully! (Backend integration pending)')
    setShowEditModal(false)
    setEditingEventId(null)
    // Reset form
    setFormData({
      title: '',
      date: '',
      category: 'Cultural',
      description: '',
      thumbnail: null,
      galleryImages: Array(6).fill(null),
      driveLink: ''
    })
  }

  const handleDelete = (eventId: number) => {
    if (confirm('Are you sure you want to delete this event?')) {
      console.log('Delete event:', eventId)
      setEvents(events.filter(e => e.id !== eventId))
      alert('Event deleted successfully!')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <StaggeredMenu
        position="right"
        items={menuItems}
        displayItemNumbering={true}
        menuButtonColor="#580B57"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#D1A3FF', '#580B57']}
        accentColor="#580B57"
      />

      {/* Main Content */}
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header */}
        <header className="mb-12 mt-25">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            Event Gallery Management
          </h1>
          <p className="font-body text-xl text-gray-600 mb-8">
            Create and manage school event galleries
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="font-body font-semibold text-white bg-primary px-8 py-4 hover:bg-[#6B0F6B] transition-colors duration-300 rounded-lg"
          >
            Create New Event
          </button>
        </header>

        {/* Events List */}
        <section>
          <div className="space-y-6">
            {events.map((event) => (
              <div 
                key={event.id}
                className="border border-gray-200 p-6 hover:border-primary transition-colors duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
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
                    <h3 className="font-display text-2xl font-semibold text-primary mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-gray-600 mb-4">
                      {event.description}
                    </p>
                    <a
                      href={event.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-primary hover:text-[#6B0F6B] transition-colors"
                    >
                      View Full Album →
                    </a>
                  </div>

                  <div className="flex gap-3 ml-6">
                    <button 
                      onClick={() => handleEditClick(event)}
                      className="font-body px-6 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(event.id)}
                      className="font-body px-6 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>

      {/* Create Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-8 overflow-y-auto flex-1">
              {/* Modal Header */}
              <div className="mb-8">
                <h2 className="font-display text-4xl font-bold text-primary mb-2">
                  Create New Event
                </h2>
                <p className="font-body text-gray-600">
                  Fill in the details below
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter event title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as EventCategory })}
                    disabled={isSubmitting}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Event Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Enter event description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Thumbnail Image *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      required
                      className="hidden"
                      id="thumbnail-upload"
                      onChange={handleThumbnailUpload}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="thumbnail-upload" className="cursor-pointer">
                      {formData.thumbnail ? (
                        <div className="font-body text-green-600 mb-2">
                          ✓ {formData.thumbnail.name}
                        </div>
                      ) : (
                        <>
                          <div className="font-body text-gray-600 mb-2">
                            Click to upload event thumbnail
                          </div>
                          <div className="font-body text-sm text-gray-500">
                            PNG, JPG up to 5MB
                          </div>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Gallery Images (4-12 images) *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer mb-4">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      id="gallery-upload"
                      onChange={handleGalleryImageUpload}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="gallery-upload" className="cursor-pointer">
                      <div className="font-body text-gray-600 mb-2">
                        Click to upload gallery images
                      </div>
                      <div className="font-body text-sm text-gray-500">
                        Select 4-12 images (PNG, JPG)
                      </div>
                    </label>
                  </div>
                  {formData.galleryImages.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-body text-sm text-gray-700">
                        Selected: {formData.galleryImages.length} image(s)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {formData.galleryImages.map((file, index) => (
                          <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                            <span>{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeGalleryImage(index)}
                              className="text-red-600 hover:text-red-800"
                              disabled={isSubmitting}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Google Drive Album Link *
                  </label>
                  <input
                    type="url"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Paste the shareable link to your Google Drive folder"
                    value={formData.driveLink}
                    onChange={(e) => setFormData({ ...formData, driveLink: e.target.value })}
                    disabled={isSubmitting}
                  />
                  <p className="font-body text-sm text-gray-500 mt-2">
                    Paste the shareable link to your Google Drive folder containing all event photos
                  </p>
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 font-body font-semibold px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-colors rounded-lg"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 font-body font-semibold px-6 py-3 bg-primary text-white hover:bg-[#6B0F6B] transition-colors rounded-lg disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Creating...' : 'Create Event'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal - keeping same as before */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowEditModal(false)}>
          <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-lg overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-8 overflow-y-auto flex-1 modal-scrollable">
              <div className="mb-8">
                <h2 className="font-display text-4xl font-bold text-primary mb-2">
                  Edit Event
                </h2>
                <p className="font-body text-gray-600">
                  Update the event details below
                </p>
              </div>

              <form onSubmit={handleEditSubmit} className="space-y-6">
                {/* Same fields as create modal */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter event title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as EventCategory })}
                    disabled={isSubmitting}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Event Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Enter event description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Update Thumbnail (optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="thumbnail-upload-edit"
                      onChange={handleThumbnailUpload}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="thumbnail-upload-edit" className="cursor-pointer">
                      {formData.thumbnail ? (
                        <div className="font-body text-green-600 mb-2">
                          ✓ {formData.thumbnail.name}
                        </div>
                      ) : (
                        <>
                          <div className="font-body text-gray-600 mb-2">
                            Click to upload new thumbnail
                          </div>
                          <div className="font-body text-sm text-gray-500">
                            Leave empty to keep existing
                          </div>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Update Gallery Images (optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer mb-4">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      id="gallery-upload-edit"
                      onChange={handleGalleryImageUpload}
                      disabled={isSubmitting}
                    />
                    <label htmlFor="gallery-upload-edit" className="cursor-pointer">
                      <div className="font-body text-gray-600 mb-2">
                        Click to upload new gallery images
                      </div>
                      <div className="font-body text-sm text-gray-500">
                        Leave empty to keep existing images
                      </div>
                    </label>
                  </div>
                  {formData.galleryImages.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-body text-sm text-gray-700">
                        New images: {formData.galleryImages.length}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {formData.galleryImages.map((file, index) => (
                          <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                            <span>{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeGalleryImage(index)}
                              className="text-red-600 hover:text-red-800"
                              disabled={isSubmitting}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Google Drive Album Link *
                  </label>
                  <input
                    type="url"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Paste the shareable link to your Google Drive folder"
                    value={formData.driveLink}
                    onChange={(e) => setFormData({ ...formData, driveLink: e.target.value })}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEditModal(false)
                      setEditingEventId(null)
                    }}
                    className="flex-1 font-body font-semibold px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-colors rounded-lg"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 font-body font-semibold px-6 py-3 bg-primary text-white hover:bg-[#6B0F6B] transition-colors rounded-lg disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Updating...' : 'Update Event'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Event Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-8 overflow-y-auto flex-1">
              {/* Modal Header */}
              <div className="mb-8">
                <h2 className="font-display text-4xl font-bold text-primary mb-2">
                  Edit Event
                </h2>
                <p className="font-body text-gray-600">
                  Update the event details below
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleEditSubmit} className="space-y-6">
                {/* Event Title */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter event title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                {/* Event Date */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Event Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Enter event description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                {/* Google Drive Link */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-2">
                    Google Drive Album Link *
                  </label>
                  <input
                    type="url"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Paste the shareable link to your Google Drive folder"
                    value={formData.driveLink}
                    onChange={(e) => setFormData({ ...formData, driveLink: e.target.value })}
                  />
                  <p className="font-body text-sm text-gray-500 mt-2">
                    Paste the shareable link to your Google Drive folder containing all event photos
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEditModal(false)
                      setEditingEventId(null)
                    }}
                    className="flex-1 font-body font-semibold px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 font-body font-semibold px-6 py-3 bg-primary text-white hover:bg-[#6B0F6B] transition-colors"
                  >
                    Update Event
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}