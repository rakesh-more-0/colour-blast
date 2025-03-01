
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
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Updated with the circular image */}
          <div className="flex-shrink-0 flex items-center">
            <div onClick={() => navigate('/')} className="flex items-center cursor-pointer">
              <div className="rounded-full overflow-hidden border-2 border-holi-purple/30 shadow-lg h-12 md:h-16 w-12 md:w-16">
                <img 
                  src="/lovable-uploads/6f31c3ec-1d10-47f5-91d6-e7f8967bc385.png" 
                  alt="Colour Blast Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                onClick={() => handleNavClick(link.path)}
                className="nav-link cursor-pointer"
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
              className="holi-btn-secondary"
            >
              Follow Us
            </a>
            <div 
              onClick={() => handleNavClick('/#tickets')} 
              className="holi-btn-gradient cursor-pointer"
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

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="bg-white/95 backdrop-blur-md shadow-lg pt-2 pb-4 px-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                onClick={() => handleNavClick(link.path)}
                className="py-3 px-4 text-foreground hover:bg-muted rounded-lg font-medium cursor-pointer"
              >
                {link.name}
              </div>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <a 
                href="https://instagram.com/varad_event" 
                target="_blank" 
                rel="noopener noreferrer"
                className="holi-btn-secondary text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                Follow Us
              </a>
              <div 
                onClick={() => handleNavClick('/#tickets')}
                className="holi-btn-gradient text-center py-2 cursor-pointer"
              >
                Book Tickets
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Venue Info Popup - Updated with smooth transition */}
      {showVenueInfo && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowVenueInfo(false)}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-md w-full shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
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
              <div className="flex items-start mb-4">
                <MapPin className="text-holi-purple mr-2 mt-1 flex-shrink-0" size={20} />
                <p className="font-medium">Balaji Ramji Alhat Ground, Shreeram Chowk, Near River Residency, Jadhavwadi, Chikhali 411062</p>
              </div>
              
              <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden shadow-md">
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
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => {
                    setShowVenueInfo(false);
                    navigate('/venue');
                  }}
                  className="flex-1 py-2.5 px-4 bg-holi-purple/10 text-holi-purple rounded-lg hover:bg-holi-purple/20 transition-colors font-medium"
                >
                  Venue Details
                </button>
                <a 
                  href="https://maps.app.goo.gl/SPz5bDmxYZ7PGaxt6?g_st=com.google.maps.preview.copy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 bg-holi-gradient text-white rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
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
