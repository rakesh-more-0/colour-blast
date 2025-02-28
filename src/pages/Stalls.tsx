
import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Utensils, Wine, ShoppingBag } from 'lucide-react';
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

const Stalls = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [colorBlast, setColorBlast] = useState<{ active: boolean, x: number, y: number }>({ active: false, x: 0, y: 0 });
  
  const { containerRef } = useMouseGlow<HTMLDivElement>({
    colors: [
      'rgba(171, 32, 253, 0.5)', // Purple
      'rgba(255, 119, 71, 0.5)'  // Orange
    ],
    selector: '.glass-card',
    maxDistance: 350
  });

  // Add keyframes for color blast animation if not already added
  useEffect(() => {
    if (!document.querySelector('style[data-color-blast]')) {
      const style = document.createElement('style');
      style.setAttribute('data-color-blast', 'true');
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
    }
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
      <main className="flex-grow pt-24" ref={containerRef}>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
              Food & Drink Stalls
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Liquor Stall */}
              <div 
                className="glass-card p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 mb-6 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <Wine className="w-8 h-8 text-holi-purple" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Liquor Bar</h3>
                <p className="text-muted-foreground mb-4">
                  Enjoy premium drinks at our dedicated liquor bar.
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="text-holi-purple mr-2">•</span>
                    <span>Premium alcoholic beverages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-purple mr-2">•</span>
                    <span>Special cocktail menu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-purple mr-2">•</span>
                    <span>All drinks available for separate purchase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-purple mr-2">•</span>
                    <span>Dedicated bar staff</span>
                  </li>
                </ul>
              </div>
              
              {/* Food Court */}
              <div 
                className="glass-card p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 mb-6 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <Utensils className="w-8 h-8 text-holi-orange" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Food Court</h3>
                <p className="text-muted-foreground mb-4">
                  A variety of delicious food options to keep your energy up throughout the celebration.
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="text-holi-orange mr-2">•</span>
                    <span>Street food favorites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-orange mr-2">•</span>
                    <span>Traditional Holi treats and Thandai</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-orange mr-2">•</span>
                    <span>Vegetarian and non-vegetarian options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-orange mr-2">•</span>
                    <span>Refreshing beverages and mocktails</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-orange mr-2">•</span>
                    <span>Multiple food vendors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Stalls;
