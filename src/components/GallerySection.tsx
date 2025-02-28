
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GallerySection = () => {
  // Gallery images - using better Holi celebration images
  const images = [
    "https://images.unsplash.com/photo-1625596570079-76a1878fa26d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615553186910-e9084bed9ff2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580398626432-78a8ddcc6208?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536323760185-866191deb6ac?q=80&w=2070&auto=format&fit=crop",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const openModal = (image: string) => {
    setModalImage(image);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Festival Gallery</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Glimpses from our previous celebrations that captured the essence of joy and colors
        </p>

        <div className="relative max-w-5xl mx-auto mt-12">
          <div className="overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
            <div 
              className="flex transition-transform duration-500 ease-out h-full" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="w-full h-full flex-shrink-0 cursor-pointer relative group"
                  onClick={() => openModal(image)}
                >
                  <img 
                    src={image} 
                    alt={`Holi celebration ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-medium">Click to enlarge</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-holi-purple w-6' : 'bg-muted-foreground/40'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Image thumbnails that are clickable */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={`thumb-${index}`} 
              className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => openModal(image)}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-holi-gradient opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen image modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <X size={24} className="text-white" />
          </button>
          <img 
            src={modalImage} 
            alt="Enlarged gallery image" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
