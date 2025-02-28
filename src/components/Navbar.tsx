
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Venue", path: "/venue" },
    { name: "Stalls", path: "/stalls" },
    { name: "About Event", path: "/about" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 bg-holi-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="ml-3 text-xl font-display font-bold">Colour<span className="text-holi-purple">Blast</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="nav-link"
              >
                {link.name}
              </Link>
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
            <Link to="/tickets" className="holi-btn-gradient">
              Book Tickets
            </Link>
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
              <Link 
                key={link.name} 
                to={link.path} 
                className="py-3 px-4 text-foreground hover:bg-muted rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
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
              <Link 
                to="/tickets" 
                className="holi-btn-gradient text-center py-2"
                onClick={() => setIsOpen(false)}
              >
                Book Tickets
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
