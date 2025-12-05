"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
    alt: "Campus Building with Fall Foliage",
    category: "Campus"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    alt: "Students in Classroom",
    category: "Academics"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop",
    alt: "Athletic Field",
    category: "Athletics"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    alt: "School Library Interior",
    category: "Facilities"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    alt: "Students Collaborating",
    category: "Student Life"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    alt: "Campus Aerial View",
    category: "Campus"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop",
    alt: "Music Performance",
    category: "Arts"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
    alt: "Mountain View from Campus",
    category: "Campus"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    alt: "Science Laboratory",
    category: "Academics"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <>
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-5 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#580B57] font-display italic text-lg md:text-xl mb-4">
              Explore our world
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#580B57] mb-6">
              CAMPUS GALLERY
            </h2>
            <div className="w-24 h-1 bg-[#D1A3FF] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed">
              Discover the beauty of our 400-acre campus nestled in the Mysore International School Mountains. 
              From state-of-the-art facilities to breathtaking natural landscapes, experience 
              the environment where our students learn, grow, and thrive.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-[#F9F4FB]"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#580B57]/80 via-[#580B57]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-[#D1A3FF] text-[#580B57] text-xs font-semibold uppercase tracking-wider mb-2">
                      {image.category}
                    </span>
                    <p className="text-white font-semibold text-sm md:text-base">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12 md:mt-16">
            <button className="px-8 py-3 border-2 border-[#580B57] text-[#580B57] font-semibold text-base md:text-lg rounded-full hover:bg-[#580B57] hover:text-white transition-all duration-300 hover:scale-105">
              View All Photos
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-[#D1A3FF] transition-colors duration-200"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X size={32} className="md:w-10 md:h-10" />
          </button>
          
          <div className="relative w-full max-w-6xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain"
              priority
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
              <span className="inline-block px-3 py-1 bg-[#D1A3FF] text-[#580B57] text-xs font-semibold uppercase tracking-wider mb-2">
                {selectedImage.category}
              </span>
              <p className="text-white font-semibold text-lg md:text-xl">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
