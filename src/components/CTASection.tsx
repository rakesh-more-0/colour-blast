
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, Check } from 'lucide-react';

const CTASection = () => {
  const [copied, setCopied] = useState(false);
  const [animateWhatsApp, setAnimateWhatsApp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  // Add intersection observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('cta-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  const handleCopyNumber = () => {
    navigator.clipboard.writeText('9607820101');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleWhatsAppClick = () => {
    setAnimateWhatsApp(true);
    setTimeout(() => setAnimateWhatsApp(false), 1000);
  };

  const handleNavigate = (path: string) => {
    if (path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const id = path.substring(2);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    <section id="cta-section" className="py-20 relative overflow-hidden">
      {/* Enhanced background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-holi-blue/5 via-holi-purple/5 to-holi-pink/5"></div>
      
      {/* Color powder decorations with staggered animations */}
      <div className={`absolute top-1/4 left-1/6 w-32 h-32 bg-holi-pink rounded-full opacity-20 blur-3xl ${isVisible ? 'animate-soft-bounce' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}></div>
      <div className={`absolute bottom-1/3 right-1/5 w-40 h-40 bg-holi-purple rounded-full opacity-20 blur-3xl ${isVisible ? 'animate-soft-bounce' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}></div>
      <div className={`absolute top-2/3 left-1/3 w-24 h-24 bg-holi-yellow rounded-full opacity-20 blur-3xl ${isVisible ? 'animate-soft-bounce' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Ready to Experience the Most Colorful Day?
          </h2>
          <p className={`text-xl text-muted-foreground mb-10 max-w-2xl mx-auto ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            Join us for an unforgettable celebration of colors, music, dance, and joy at Pune's biggest Colour Blast
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div 
              onClick={() => handleNavigate('/#tickets')} 
              className="holi-btn-gradient px-8 py-4 text-lg relative overflow-hidden group cursor-pointer hover-lift"
            >
              <span className="relative z-10">Book Your Tickets Now!</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-20"></span>
            </div>
            <a 
              href="https://wa.me/919607820101" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`holi-btn-secondary px-8 py-4 text-lg transition-all hover-lift ${animateWhatsApp ? 'scale-95' : ''}`}
              onClick={handleWhatsAppClick}
            >
              WhatsApp Booking
            </a>
          </div>
          
          {/* Contact Number with Copy - Enhanced with animation */}
          <div className={`mt-6 flex items-center justify-center ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="relative inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 shadow-sm border border-purple-100 hover-lift">
              <span className="text-holi-purple font-medium mr-2">Call: 9607820101</span>
              <button 
                onClick={handleCopyNumber} 
                className="p-1 rounded-full hover:bg-purple-50 transition-colors"
                aria-label="Copy phone number"
              >
                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-holi-purple" />}
              </button>
              
              {/* Enhanced tooltip */}
              <div 
                className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded transition-all ${
                  copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDuration: '0.3s' }}
              >
                Copied!
              </div>
            </div>
          </div>
          
          <p className={`mt-2 text-holi-purple font-medium ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            Limited Passes Available – Get Yours Today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
