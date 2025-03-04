
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy, Check } from 'lucide-react';

const CTASection = () => {
  const [copied, setCopied] = useState(false);
  const [animateWhatsApp, setAnimateWhatsApp] = useState(false);
  const navigate = useNavigate();
  
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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-holi-gradient opacity-10"></div>
      
      {/* Color powder decorations */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-holi-pink rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/5 w-40 h-40 bg-holi-purple rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-holi-yellow rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Experience the Most Colorful Day?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join us for an unforgettable celebration of colors, music, dance, and joy at Pune's biggest Colour Blast
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
            <div 
              onClick={() => handleNavigate('/#tickets')} 
              className="holi-btn-gradient px-8 py-4 text-lg relative overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">Book Your Tickets Now!</span>
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-20"></span>
            </div>
            <a 
              href="https://api.whatsapp.com/send/?phone=%2B919607820101&text=Hello+Colour+Blast,+I+want+to+inquire+about+tickets!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`holi-btn-secondary px-8 py-4 text-lg transition-transform ${animateWhatsApp ? 'scale-95' : ''}`}
              onClick={handleWhatsAppClick}
            >
              WhatsApp Booking
            </a>
            <a 
              href="https://in.bookmyshow.com/events/colour-blast-2k25-holi-celebration-in-pune-2025/ET00436603" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="holi-btn-tertiary px-8 py-4 text-lg transition-transform"
            >
              BookMyShow
            </a>
          </div>
          
          {/* Contact Number with Copy */}
          <div className="mt-6 flex items-center justify-center">
            <div className="relative inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 shadow-sm border border-purple-100">
              <span className="text-holi-purple font-medium mr-2">Call: 9607820101</span>
              <button 
                onClick={handleCopyNumber} 
                className="p-1 rounded-full hover:bg-purple-50 transition-colors"
                aria-label="Copy phone number"
              >
                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
              
              {/* Tooltip */}
              <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded transition-opacity ${copied ? 'opacity-100' : 'opacity-0'}`}>
                Copied!
              </div>
            </div>
          </div>
          
          <p className="mt-2 text-holi-purple font-medium">Limited Passes Available – Get Yours Today!</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
