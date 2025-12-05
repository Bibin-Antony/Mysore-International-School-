'use client'

import { useState } from 'react'
import StaggeredMenu from '@/components/StaggeredMenu'

export default function AdminAdmissionsPage() {
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [sortOrder, setSortOrder] = useState('newest')
  const [currentPage, setCurrentPage] = useState(1)
  const [showRemarksModal, setShowRemarksModal] = useState(false)
  const [selectedEnquiry, setSelectedEnquiry] = useState<any>(null)
  const [remarks, setRemarks] = useState('')

  const menuItems = [
    { label: 'Dashboard', ariaLabel: 'Go to dashboard', link: '/admin/dashboard' },
    { label: 'Admissions', ariaLabel: 'Manage admissions', link: '/admin/admissions' },
    { label: 'Event Gallery', ariaLabel: 'Manage events and gallery', link: '/admin/events' },
    { label: 'Analytics', ariaLabel: 'View analytics', link: '/admin/analytics' }
  ]

  const statusOptions = [
    { label: 'All', count: 458, color: 'bg-gray-100 text-gray-700' },
    { label: 'New', count: 323, color: 'bg-blue-100 text-blue-700' },
    { label: 'Contacted', count: 45, color: 'bg-yellow-100 text-yellow-700' },
    { label: 'Not Responding', count: 49, color: 'bg-orange-100 text-orange-700' },
    { label: 'Follow Up', count: 25, color: 'bg-purple-100 text-purple-700' },
    { label: 'Enrolled', count: 0, color: 'bg-green-100 text-green-700' },
    { label: 'Rejected', count: 16, color: 'bg-red-100 text-red-700' }
  ]

  // Sample data - replace with actual API call
  const enquiries = [
    {
      id: 1,
      studentName: 'Raj Kumar',
      parentName: 'Suresh Kumar',
      phone: '91086 94484',
      email: 'suresh@example.com',
      occupation: 'Business',
      category: 'other',
      message: 'Interested in admission for Grade 5',
      remarks: 'No remarks',
      date: '04/12/2025',
      time: '05:24 PM',
      status: 'New',
      source: 'Website'
    },
    // Add more sample data as needed
  ]

  const totalPages = Math.ceil(enquiries.length / 15)

  const handleStatusChange = (enquiryId: number, newStatus: string) => {
    console.log(`Changing status for ${enquiryId} to ${newStatus}`)
    // Add your API call here
  }

  const handleDelete = (enquiryId: number) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      console.log(`Deleting enquiry ${enquiryId}`)
      // Add your API call here
    }
  }

  const handleRemarksSubmit = () => {
    console.log(`Saving remarks for enquiry ${selectedEnquiry?.id}:`, remarks)
    setShowRemarksModal(false)
    setRemarks('')
    setSelectedEnquiry(null)
  }

  const getStatusBadgeColor = (status: string) => {
    const option = statusOptions.find(opt => opt.label === status)
    return option?.color || 'bg-gray-100 text-gray-700'
  }

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
        isFixed={true}
        displaySocials={false}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header */}
        <header className="mb-12 md:mt-20">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-4 tracking-tight">
            Admission Enquiries
          </h1>
          <p className="font-body text-xl text-gray-600">
            {statusOptions[0].count} enquiries
          </p>
        </header>

        {/* Status Filters */}
        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {statusOptions.map((status) => (
              <button
                key={status.label}
                onClick={() => setSelectedStatus(status.label)}
                className={`p-4 border-2 transition-all duration-300 ${
                  selectedStatus === status.label 
                    ? 'border-primary' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-display text-3xl font-bold text-primary mb-2">
                  {status.count}
                </div>
                <div className="font-body text-sm text-gray-600">
                  {status.label}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Controls */}
        <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
          <h2 className="font-display text-2xl font-semibold text-primary">
            Admission Enquiries
          </h2>
          <div className="flex items-center gap-4">
            <span className="font-body text-sm text-gray-600">Sort:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="font-body px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto border border-gray-200">
          <table className="w-full">
            <thead className="bg-secondary">
              <tr>
                <th className="font-body text-sm font-semibold text-primary text-left p-4 border-b border-gray-200">Student Info</th>
                <th className="font-body text-sm font-semibold text-primary text-left p-4 border-b border-gray-200">Parent Details</th>
                <th className="font-body text-sm font-semibold text-primary text-left p-4 border-b border-gray-200">Contact</th>
                <th className="font-body text-sm font-semibold text-primary text-left p-4 border-b border-gray-200">Category</th>
                <th className="font-body text-sm font-semibold text-primary text-left p-4 border-b border-gray-200">Message</th>
                <th className="font-body text-sm font-semibold text-primary text-left p-4 border-b border-gray-200">Remarks</th>
                <th className="font-body text-sm font-semibold text-primary text-left p-4 border-b border-gray-200">Date</th>
                <th className="font-body text-sm font-semibold text-primary text-left p-4 border-b border-gray-200">Status</th>
                <th className="font-body text-sm font-semibold text-primary text-left p-4 border-b border-gray-200">Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id} className="hover:bg-secondary/30 transition-colors border-b border-gray-200 last:border-b-0">
                  <td className="p-4 font-body text-sm text-gray-700">
                    {enquiry.studentName || '.'}
                  </td>
                  <td className="p-4">
                    <div className="font-body text-sm text-gray-700">{enquiry.parentName || '.'}</div>
                    <div className="font-body text-xs text-gray-500">{enquiry.occupation || '.'}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-body text-sm text-gray-700">{enquiry.phone}</div>
                    <div className="font-body text-xs text-gray-500">{enquiry.email || '.'}</div>
                  </td>
                  <td className="p-4 font-body text-sm text-gray-700">{enquiry.category}</td>
                  <td className="p-4 font-body text-sm text-gray-700 max-w-xs truncate">
                    {enquiry.message || '.'}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => {
                        setSelectedEnquiry(enquiry)
                        setRemarks(enquiry.remarks)
                        setShowRemarksModal(true)
                      }}
                      className="font-body text-sm text-primary hover:text-[#6B0F6B] underline"
                    >
                      {enquiry.remarks}
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="font-body text-sm text-gray-700">{enquiry.date}</div>
                    <div className="font-body text-xs text-gray-500">{enquiry.time}</div>
                  </td>
                  <td className="p-4">
                    <select
                      value={enquiry.status}
                      onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                      className={`font-body text-xs font-semibold px-3 py-1.5 rounded ${getStatusBadgeColor(enquiry.status)} border-0 focus:outline-none focus:ring-2 focus:ring-primary`}
                    >
                      {statusOptions.slice(1).map((status) => (
                        <option key={status.label} value={status.label}>
                          {status.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDelete(enquiry.id)}
                      className="font-body text-sm text-red-600 hover:text-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="font-body px-6 py-2 border-2 border-gray-300 text-gray-700 hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Prev
          </button>
          <span className="font-body text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="font-body px-6 py-2 border-2 border-gray-300 text-gray-700 hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>

      {/* Remarks Modal */}
      {showRemarksModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md">
            <div className="p-8">
              <h3 className="font-display text-3xl font-bold text-primary mb-6">
                Edit Remarks
              </h3>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary resize-none mb-6"
                placeholder="Add remarks..."
              />
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowRemarksModal(false)
                    setRemarks('')
                    setSelectedEnquiry(null)
                  }}
                  className="flex-1 font-body font-semibold px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRemarksSubmit}
                  className="flex-1 font-body font-semibold px-6 py-3 bg-primary text-white hover:bg-[#6B0F6B] transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
