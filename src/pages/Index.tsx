
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EventInfo from '../components/EventInfo';
import FeaturesSection from '../components/FeaturesSection';
import TicketSection from '../components/TicketSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useMouseGlow } from '../hooks/useMouseGlow';

// Color Blast animation component
const ColorBlast = ({ isActive, x, y, onAnimationEnd }: { isActive: boolean; x: number; y: number; onAnimationEnd: () => void }) => {
  const colors = [
    'bg-holi-pink',
    'bg-holi-purple',
    'bg-holi-blue',
    'bg-holi-orange',
    'bg-holi-yellow',
    'bg-holi-green',
  ];

  return isActive ? (
    <div className="fixed z-50 pointer-events-none" style={{ left: x, top: y }}>
      {Array.from({ length: 30 }).map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 20 + 10;
        const angle = Math.random() * 360;
        const distance = Math.random() * 150 + 50;
        const duration = Math.random() * 0.5 + 0.5;
        const delay = Math.random() * 0.2;
        
        return (
          <div 
            key={i}
            className={`absolute rounded-full ${randomColor} opacity-80`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: 'translate(-50%, -50%)',
              animation: `colorBlast ${duration}s ease-out ${delay}s forwards`,
              '--angle': `${angle}deg`,
              '--distance': `${distance}px`
            } as React.CSSProperties}
            onAnimationEnd={i === 0 ? onAnimationEnd : undefined}
          />
        );
      })}
    </div>
  ) : null;
};

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [colorBlast, setColorBlast] = useState<{ active: boolean, x: number, y: number }>({ active: false, x: 0, y: 0 });
  
  const { containerRef } = useMouseGlow<HTMLDivElement>({
    colors: [
      'rgba(171, 32, 253, 0.5)', // Purple
      'rgba(255, 119, 71, 0.5)', // Orange
      'rgba(0, 212, 245, 0.5)'   // Blue
    ],
    selector: '.glass-card, .rounded-2xl, .hover\\:shadow-xl',
    maxDistance: 350
  });

  // Add keyframes for color blast animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes colorBlast {
        0% {
          transform: translate(-50%, -50%) scale(0.1);
          opacity: 0.8;
        }
        100% {
          transform: translate(-50%, -50%) translateX(calc(cos(var(--angle)) * var(--distance))) 
                     translateY(calc(sin(var(--angle)) * var(--distance))) scale(1);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Reset scroll position
    window.scrollTo(0, 0);
  }, []);

  const handleGlobalClick = (e: React.MouseEvent) => {
    // Trigger color blast at click position
    setColorBlast({
      active: true,
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleColorBlastEnd = () => {
    setColorBlast({ ...colorBlast, active: false });
  };

  return (
    <div className="min-h-screen flex flex-col" onClick={handleGlobalClick}>
      <Navbar />
      {/* Color blast animation */}
      <ColorBlast 
        isActive={colorBlast.active} 
        x={colorBlast.x} 
        y={colorBlast.y} 
        onAnimationEnd={handleColorBlastEnd} 
      />
      <main className="flex-grow" ref={containerRef}>
        <HeroSection />
        <div id="venue">
          <EventInfo />
        </div>
        <FeaturesSection />
        <div id="tickets">
          <TicketSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
