
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-muted pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-holi-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="ml-3 text-xl font-display font-bold">Colour<span className="text-holi-purple">Blast</span></span>
            </div>
            <p className="text-muted-foreground mb-6">
              Pune's biggest and most vibrant Holi celebration, bringing together people for a day of colors, music, dance, and joy.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/varad_event" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-holi-purple transition-colors">About Event</Link></li>
              <li><Link to="/tickets" className="text-muted-foreground hover:text-holi-purple transition-colors">Tickets</Link></li>
              <li><Link to="/venue" className="text-muted-foreground hover:text-holi-purple transition-colors">Venue</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-holi-purple transition-colors">Gallery</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-holi-purple transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-holi-purple" />
                <span className="text-muted-foreground">Balaji Ramji Alhat Ground, Shreeram Chowk, Near River Residency, Jadhavwadi, Chikhali 411062</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-holi-purple" />
                <span className="text-muted-foreground">+91 9607820101</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-holi-purple" />
                <span className="text-muted-foreground">richpointdigital@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2025 Colour Blast. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
