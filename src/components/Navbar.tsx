
import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showVenueInfo, setShowVenueInfo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleNavClick = (path: string) => {
    setIsOpen(false);
    
    if (path === "/#venue") {
      setShowVenueInfo(true);
      return;
    }
    
    if (path.startsWith('/#')) {
      // Handle anchor links
      navigate('/');
      setTimeout(() => {
        const id = path.substring(2);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Regular navigation
      navigate(path);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Venue", path: "/#venue" },
    { name: "Stalls", path: "/stalls" },
    { name: "About Event", path: "/about" },
  ];

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div onClick={() => navigate('/')} className="flex items-center cursor-pointer group">
              <div className="w-12 h-12 bg-holi-gradient rounded-full flex items-center justify-center smooth-transition group-hover:scale-110">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="ml-3 text-xl font-display font-bold">Colour<span className="text-holi-purple">Blast</span></span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                onClick={() => handleNavClick(link.path)}
                className="nav-link cursor-pointer smooth-transition"
              >
                {link.name}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://instagram.com/varad_event" 
              target="_blank" 
              rel="noopener noreferrer"
              className="holi-btn-secondary hover-lift"
            >
              Follow Us
            </a>
            <div 
              onClick={() => handleNavClick('/#tickets')} 
              className="holi-btn-gradient hover-lift cursor-pointer"
            >
              Book Tickets
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-foreground hover:bg-white/30 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Improved Animation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{ 
          transitionProperty: 'max-height, opacity',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
        }}
      >
        <div className="bg-white/95 backdrop-blur-md shadow-lg pt-2 pb-4 px-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <div 
                key={link.name} 
                onClick={() => handleNavClick(link.path)}
                className="py-3 px-4 text-foreground hover:bg-muted rounded-lg font-medium cursor-pointer smooth-transition"
                style={{ 
                  animationDelay: `${0.1 * index}s`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  transitionDelay: `${0.05 * index}s`
                }}
              >
                {link.name}
              </div>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <a 
                href="https://instagram.com/varad_event" 
                target="_blank" 
                rel="noopener noreferrer"
                className="holi-btn-secondary text-center py-2 hover-lift"
                onClick={() => setIsOpen(false)}
              >
                Follow Us
              </a>
              <div 
                onClick={() => handleNavClick('/#tickets')}
                className="holi-btn-gradient text-center py-2 cursor-pointer hover-lift"
              >
                Book Tickets
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Venue Info Popup - Enhanced with smoother transitions */}
      {showVenueInfo && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowVenueInfo(false)}
          style={{ animationDuration: '0.4s' }}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-md w-full shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
            style={{ animationDuration: '0.4s', animationDelay: '0.1s' }}
          >
            <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-holi-blue/10 to-holi-purple/10">
              <h3 className="font-bold text-lg text-holi-purple">Event Venue</h3>
              <button 
                onClick={() => setShowVenueInfo(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start mb-4 opacity-0 animate-slide-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <MapPin className="text-holi-purple mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="font-medium">Balaji Ramji Alhat Ground, Shreeram Chowk, Near River Residency, Jadhavwadi, Chikhali 411062</p>
              </div>
              
              <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden shadow-md opacity-0 animate-slide-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3990541546357!2d73.8224977763633!3d18.66183868225945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sBalaji%20Ramji%20Alhat%20Ground!5e0!3m2!1sen!2sin!4v1620731726373!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Event Location Map"
                ></iframe>
              </div>
              
              <div className="flex space-x-4 opacity-0 animate-slide-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <button 
                  onClick={() => {
                    setShowVenueInfo(false);
                    navigate('/venue');
                  }}
                  className="flex-1 py-2.5 px-4 bg-holi-purple/10 text-holi-purple rounded-lg hover:bg-holi-purple/20 transition-colors font-medium hover-lift"
                >
                  Venue Details
                </button>
                <a 
                  href="https://maps.app.goo.gl/SPz5bDmxYZ7PGaxt6?g_st=com.google.maps.preview.copy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-holi-gradient text-white rounded-lg text-center font-medium hover:opacity-90 transition-opacity hover-lift"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
