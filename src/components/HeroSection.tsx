
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ColorfulBanner from './ColorfulBanner';

const HeroSection = () => {
  const colorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const colors = [
      { color: 'bg-holi-pink', delay: 0 },
      { color: 'bg-holi-purple', delay: 1 },
      { color: 'bg-holi-yellow', delay: 2 },
      { color: 'bg-holi-orange', delay: 3 },
      { color: 'bg-holi-blue', delay: 1.5 },
      { color: 'bg-holi-green', delay: 2.5 },
    ];
    
    if (colorRef.current) {
      colors.forEach(({ color, delay }, index) => {
        const div = document.createElement('div');
        div.className = `color-powder ${color}`;
        div.style.left = `${Math.random() * 80 + 10}%`;
        div.style.top = `${Math.random() * 80 + 10}%`;
        div.style.animationDelay = `${delay}s`;
        colorRef.current?.appendChild(div);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden hero-pattern flex items-center">
      <div ref={colorRef} className="absolute inset-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <ColorfulBanner date="14TH MARCH" time="10:00 AM ONWARDS" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mt-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Pune's Biggest <br />
              <span className="text-gradient">Colour Blast</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              Ek Ticket, Hazaar Rang – Aajao Colour Blast Ke Sang!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <a href="#tickets" className="holi-btn-gradient">
                Book Tickets
              </a>
              <Link to="/about" className="holi-btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Image section - now visible on mobile */}
          <div className="block relative opacity-0 animate-fade-in mb-8 lg:mb-0" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-holi-gradient opacity-25 blur-2xl rounded-full animate-spin-slow"></div>
              <img 
                src="/lovable-uploads/a6b7dd7e-5266-4b6a-9924-15c76fb3b5ea.png" 
                alt="Holi Festival Celebration" 
                className="relative rounded-2xl shadow-2xl z-10 w-full h-auto"
              />
              <div className="absolute -bottom-5 -right-5 bg-white/80 backdrop-blur-md rounded-xl p-4 border border-white/50 shadow-xl z-20 opacity-0 animate-fade-in" style={{ animationDelay: '1.3s' }}>
                <div className="text-2xl font-bold text-gradient">
                  COLOUR BLAST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
