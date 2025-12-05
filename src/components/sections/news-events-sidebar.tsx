"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Play, Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

interface NewsEventsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

type FilterType = "all" | "news" | "events";

interface NewsItem {
  type: "news";
  title: string;
  imageUrl: string;
  excerpt: string;
  date: string;
  link: string;
  fullContent?: string;
}

interface EventItem {
  type: "events";
  title: string;
  imageUrl: string;
  excerpt: string;
  date: string;
  time?: string;
  location?: string;
  link: string;
  fullContent?: string;
}

type ContentItem = NewsItem | EventItem;

const newsItems: NewsItem[] = [
  {
    type: "news",
    title: "The Mysore International School Roots of No. 1 Recruit and UNC Commit James Holbrough '27",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/James-1.jpg",
    excerpt: "James Holbrough's journey from Mysore International School to becoming the nation's top basketball recruit.",
    date: "March 15, 2024",
    link: "#",
    fullContent: "James Holbrough '27 has taken the basketball world by storm, rising to become the nation's No. 1 recruit and committing to the University of North Carolina. His journey began right here at Mysore International School School, where he developed not only his athletic prowess but also his character and academic foundation.\n\nUnder the guidance of our coaching staff, James honed his skills on the court while maintaining academic excellence. His dedication to both his sport and his studies exemplifies the Mysore International School spirit of pursuing excellence in all endeavors.\n\n\"Mysore International School gave me the tools to succeed both on and off the court,\" James shared. \"The support from coaches, teachers, and my fellow students made all the difference in my development as a player and a person.\"\n\nWe couldn't be prouder of James and look forward to watching his continued success at UNC and beyond. Go Bears!",
  },
  {
    type: "news",
    title: "Alumni Spotlight: John Harker '97",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/JohnHarkerphoto1-2.jpg",
    excerpt: "Catching up with John Harker on his career journey and memories of life at Mysore International School.",
    date: "March 12, 2024",
    link: "#",
    fullContent: "John Harker '97 recently returned to campus to share his incredible career journey with current students. After graduating from Mysore International School, John went on to pursue environmental science at Yale University and has since become a leading voice in sustainable business practices.\n\nDuring his visit, John reflected on how his time at Mysore International School shaped his path. \"The Advanced Environmental Science Research program opened my eyes to the intersection of science and stewardship,\" he recalled. \"Those lessons stayed with me throughout my career.\"\n\nJohn now serves as the Chief Sustainability Officer at a Fortune 500 company, where he leads initiatives that have reduced carbon emissions by 40% over the past five years.\n\nHis message to current students: \"Take advantage of every opportunity Mysore International School offers. The connections you make and the skills you develop here will serve you well throughout your life.\"",
  },
  {
    type: "news",
    title: "Dr. Wysocki Brings Mindfulness To The Mountain",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/Wysockitrainingtoom-3.jpg",
    excerpt: "New mindfulness program launched to support student wellness and mental health.",
    date: "March 10, 2024",
    link: "#",
    fullContent: "Mysore International School School is thrilled to announce the launch of a comprehensive mindfulness program led by Dr. Sarah Wysocki. This initiative represents our ongoing commitment to supporting the holistic well-being of our students.\n\nThe program includes daily meditation sessions, stress management workshops, and integration of mindfulness practices into the academic curriculum. Students have already reported positive impacts on their focus, sleep quality, and overall sense of well-being.\n\n\"In today's fast-paced world, teaching our students to pause, breathe, and center themselves is more important than ever,\" Dr. Wysocki explained. \"These skills will serve them well beyond their time at Mysore International School.\"\n\nThe mindfulness center, located in the newly renovated wellness wing, offers a peaceful retreat space where students can practice meditation and participate in group sessions.\n\nParents interested in learning more about the program are encouraged to attend our upcoming information session during Parents' Weekend.",
  },
];

const eventsItems: EventItem[] = [
  {
    type: "events",
    title: "Spring Arts Showcase",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/Bear-10.jpg",
    excerpt: "Join us for an evening celebrating student creativity across all artistic disciplines.",
    date: "April 20, 2024",
    time: "7:00 PM",
    location: "Allen Theater",
    link: "#",
    fullContent: "The Spring Arts Showcase is Mysore International School's premier celebration of student creativity and artistic achievement. This year's event promises to be our most spectacular yet, featuring performances and exhibitions from all areas of our arts program.\n\nHighlights include:\n• Student theater productions\n• Orchestra and choir performances\n• Visual arts exhibition in the gallery\n• Dance ensemble performances\n• Film screenings from our media arts students\n\nThe evening will begin with a reception in the arts center lobby at 6:00 PM, where you can view student artwork and enjoy light refreshments before the main performances begin at 7:00 PM.\n\nTickets are complimentary for all Mysore International School community members. Please RSVP by April 15th to ensure seating availability.\n\nWe look forward to celebrating our talented student artists with you!",
  },
  {
    type: "events",
    title: "Admitted Students Day",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/AHRHomepage-12.jpg",
    excerpt: "Experience a day in the life of a Mysore International School student with campus tours and activities.",
    date: "April 5, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Campus Wide",
    link: "#",
    fullContent: "Congratulations on your admission to Mysore International School School! We invite you and your family to join us for Admitted Students Day, an immersive experience designed to help you envision your future at Mysore International School.\n\nSchedule:\n9:00 AM - Check-in and Continental Breakfast\n9:30 AM - Welcome Address from Head of School\n10:00 AM - Student-led Campus Tours\n11:30 AM - Academic Department Open Houses\n12:30 PM - Lunch with Current Students\n1:30 PM - Athletics and Arts Demonstrations\n2:30 PM - Closing Session and Q&A\n3:00 PM - Optional Dormitory Tours\n\nThis is your opportunity to:\n• Meet current students and faculty\n• Explore our 400-acre campus\n• Attend sample classes\n• Learn about our signature programs\n• Connect with other admitted families\n\nPlease register by April 1st. We can't wait to welcome you to the Mountain!",
  },
  {
    type: "events",
    title: "Mountain Day Celebration",
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87859ba7-84c9-4d54-a99e-419b59339f88-Mysore International Schoolschool-org/assets/icons/RKMP_2-17.jpg",
    excerpt: "Annual tradition of hiking, outdoor activities, and community building.",
    date: "May 15, 2024",
    time: "All Day",
    location: "Various Locations",
    link: "#",
    fullContent: "Mountain Day is one of Mysore International School's most treasured traditions—a surprise day when classes are cancelled and the entire community comes together for outdoor adventure and celebration.\n\nWhile the official date is kept secret until the morning of, we've provided a tentative date for planning purposes. When the bells ring and Mountain Day is announced, students and faculty will embark on an unforgettable day of activities.\n\nTypical Mountain Day activities include:\n• Group hikes to Mount Everett summit\n• Canoeing and kayaking on local lakes\n• Mountain biking on campus trails\n• Community picnic lunch\n• Traditional bonfire and s'mores\n• Student vs. Faculty volleyball tournament\n\nMountain Day embodies the Mysore International School spirit—our connection to nature, our sense of community, and our belief that learning extends far beyond the classroom.\n\nFor parents: If your student mentions \"Mountain Day might be coming soon,\" you'll know something special is in the air!",
  },
];

// Detail Modal Component
const DetailModal = ({ 
  item, 
  isOpen, 
  onClose 
}: { 
  item: ContentItem | null; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!item) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-70' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Content */}
      <div
        className={`fixed inset-0 z-[70] flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      >
        <div
          className={`bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 ${
            isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Modal Header Image */}
          <div className="relative h-56 md:h-72 w-full">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-105"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-brand-primary-purple" />
            </button>
            
            {/* Type Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg ${
                item.type === "news" 
                  ? "bg-brand-primary-purple text-white" 
                  : "bg-brand-accent-lime text-brand-primary-purple"
              }`}>
                {item.type === "news" ? "News" : "Event"}
              </span>
            </div>
            
            {/* Title on Image */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 
                id="modal-title"
                className="font-display font-bold text-xl md:text-2xl text-white leading-tight drop-shadow-lg"
              >
                {item.title}
              </h2>
            </div>
          </div>
          
          {/* Modal Body */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-18rem)]">
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 mb-6 pb-4 border-b border-brand-light-gray">
              <div className="flex items-center gap-2 text-sm text-brand-medium-gray">
                <Calendar className="h-4 w-4 text-brand-primary-purple" />
                <span>{item.date}</span>
              </div>
              {item.type === "events" && item.time && (
                <div className="flex items-center gap-2 text-sm text-brand-medium-gray">
                  <Clock className="h-4 w-4 text-brand-primary-purple" />
                  <span>{item.time}</span>
                </div>
              )}
              {item.type === "events" && item.location && (
                <div className="flex items-center gap-2 text-sm text-brand-medium-gray">
                  <MapPin className="h-4 w-4 text-brand-primary-purple" />
                  <span>{item.location}</span>
                </div>
              )}
            </div>
            
            {/* Content */}
            <div className="prose prose-sm max-w-none">
              {item.fullContent ? (
                <div className="space-y-4">
                  {item.fullContent.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-brand-dark-gray font-body leading-relaxed">
                      {paragraph.split('\n').map((line, lineIdx) => (
                        <span key={lineIdx}>
                          {line}
                          {lineIdx < paragraph.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-brand-dark-gray font-body leading-relaxed">
                  {item.excerpt}
                </p>
              )}
            </div>
            
            {/* CTA Button */}
            <div className="mt-8 pt-4 border-t border-brand-light-gray">
              <button 
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-brand-accent-lime hover:bg-[#B3C229] text-brand-primary-purple font-semibold py-3 px-6 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {item.type === "news" ? "Read Full Article" : "Register for Event"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FeaturedVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
        setIsPlaying(false);
      });
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleVideoEnd = () => setIsPlaying(false);
      videoElement.addEventListener('ended', handleVideoEnd);
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="font-display text-xl font-semibold text-brand-primary-purple mb-2">
          Featured Video
        </h3>
        <p className="text-sm text-brand-medium-gray font-body leading-relaxed">
          Mornings with Mr. Mulder
        </p>
      </div>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
        {!isPlaying && (
          <>
            <Image
              src="https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_5/v1758560946/Mysore International School/mnh4f799uabm8q8n4o7k/GoodMorningwithHOSPieterMulder-optimized.jpg"
              alt="Mornings with Mr. Mulder thumbnail"
              fill
              className="object-cover"
            />
            <button
              onClick={handlePlay}
              aria-label="Play video: Mornings with Mr. Mulder"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-10 group hover:bg-opacity-50 transition-all"
            >
              <div className="bg-brand-accent-lime p-4 rounded-full transition-transform group-hover:scale-110 shadow-lg">
                <Play className="h-6 w-6 text-brand-primary-purple fill-brand-primary-purple" />
              </div>
            </button>
          </>
        )}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'}`}
          controls={isPlaying}
          preload="metadata"
          playsInline
        >
          <source src="https://resources.finalsite.net/videos/t_video_mp4_1080/v1758560625/Mysore International School/cfydvcawjqkuuem9wbk4/GoodMorningwithHOSPieterMulder-optimized.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const NewsEventsSidebar: React.FC<NewsEventsSidebarProps> = ({ isOpen, onClose }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = [...newsItems, ...eventsItems].filter(item => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  const handleItemClick = (item: ContentItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-label="News & Events"
        role="dialog"
        aria-modal="true"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-brand-primary-purple px-6 py-6 flex-shrink-0">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">
                  News & Events
                </h2>
                <p className="text-brand-off-white text-sm font-body">
                  Stay connected with the Mysore International School community
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close news & events"
                className="text-white hover:text-brand-accent-lime transition-colors p-1 flex-shrink-0"
              >
                <X size={28} />
              </button>
            </div>
            
            {/* Filter Pills */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-full font-body font-semibold text-sm transition-all ${
                  activeFilter === "all"
                    ? "bg-brand-accent-lime text-white shadow-md"
                    : "bg-white bg-opacity-20 text-primary hover:bg-opacity-30"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter("news")}
                className={`px-4 py-2 rounded-full font-body font-semibold text-sm transition-all ${
                  activeFilter === "news"
                    ? "bg-brand-accent-lime text-white shadow-md"
                    : "bg-white bg-opacity-20 text-primary hover:bg-opacity-30"
                }`}
              >
                News
              </button>
              <button
                onClick={() => setActiveFilter("events")}
                className={`px-4 py-2 rounded-full font-body font-semibold text-sm transition-all ${
                  activeFilter === "events"
                    ? "bg-brand-accent-lime text-white shadow-md"
                    : "bg-white bg-opacity-20 text-primary hover:bg-opacity-30"
                }`}
              >
                Events
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-8">
              {/* Featured Video */}
              <FeaturedVideo />

              {/* Divider */}
              <div className="border-t border-brand-light-gray my-8"></div>

              {/* News & Events List */}
              <div className="space-y-6">
                {filteredItems.map((item, index) => (
                  <article 
                    key={index} 
                    className="group cursor-pointer"
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="block">
                      <div className="flex gap-4">
                        {/* Thumbnail */}
                        <div className="relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute top-2 left-2">
                            <span className={`px-2 py-1 rounded text-xs font-bold tracking-wider uppercase ${
                              item.type === "news" 
                                ? "bg-brand-primary-purple text-white" 
                                : "bg-brand-accent-lime text-brand-primary-purple"
                            }`}>
                              {item.type}
                            </span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display font-semibold text-base leading-tight text-brand-primary-purple mb-2 group-hover:text-brand-accent-lime transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <div className="flex flex-col gap-1 text-xs text-brand-medium-gray font-body">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-3 w-3" />
                              <span>{item.date}</span>
                            </div>
                            {item.type === "events" && item.time && (
                              <div className="flex items-center gap-1.5">
                                <Clock className="h-3 w-3" />
                                <span>{item.time}</span>
                              </div>
                            )}
                            {item.type === "events" && item.location && (
                              <div className="flex items-center gap-1.5">
                                <MapPin className="h-3 w-3" />
                                <span className="truncate">{item.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < filteredItems.length - 1 && (
                      <div className="border-t border-brand-light-gray mt-6"></div>
                    )}
                  </article>
                ))}
              </div>

              {/* Empty State */}
              {filteredItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-brand-medium-gray font-body text-sm">
                    No {activeFilter === "all" ? "items" : activeFilter} to display.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Detail Modal */}
      <DetailModal 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default NewsEventsSidebar;