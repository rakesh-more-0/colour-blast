
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  // Placeholder images - would be replaced with actual Holi celebration images
  const images = [
    "https://images.unsplash.com/photo-1625596570079-76a1878fa26d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615553186910-e9084bed9ff2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580398626432-78a8ddcc6208?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536323760185-866191deb6ac?q=80&w=2070&auto=format&fit=crop",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
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
                <img 
                  key={index} 
                  src={image} 
                  alt={`Holi celebration ${index + 1}`} 
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>

          <button 
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-all z-10"
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
      </div>
    </section>
  );
};

export default GallerySection;
