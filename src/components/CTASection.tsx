
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
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
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/tickets" 
              className="holi-btn-gradient px-8 py-4 text-lg"
            >
              Book Your Tickets Now!
            </Link>
            <a 
              href="https://wa.me/919607820101" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="holi-btn-secondary px-8 py-4 text-lg"
            >
              WhatsApp Booking
            </a>
          </div>
          <p className="mt-6 text-holi-purple font-medium">Limited Passes Available – Get Yours Today!</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
