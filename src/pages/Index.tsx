
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import EventInfo from '../components/EventInfo';
import FeaturesSection from '../components/FeaturesSection';
import TicketSection from '../components/TicketSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useMouseGlow } from '../hooks/useMouseGlow';

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const { containerRef } = useMouseGlow<HTMLDivElement>({
    colors: [
      'rgba(171, 32, 253, 0.5)', // Purple
      'rgba(255, 119, 71, 0.5)', // Orange
      'rgba(0, 212, 245, 0.5)'   // Blue
    ],
    selector: '.glass-card, .rounded-2xl, .hover\\:shadow-xl',
    maxDistance: 350
  });

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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
