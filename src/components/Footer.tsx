
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-muted pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-holi-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="ml-3 text-xl font-display font-bold">Holi<span className="text-holi-purple">Party</span></span>
            </div>
            <p className="text-muted-foreground mb-6">
              Pune's biggest and most vibrant Holi celebration, bringing together people for a day of colors, music, dance, and joy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-holi-purple transition-colors">About Us</Link></li>
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
                <span className="text-muted-foreground">Dehu Alandi Road, Jadhavwadi, Chikhali, Pune</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-holi-purple" />
                <span className="text-muted-foreground">Contact Number</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-holi-purple" />
                <span className="text-muted-foreground">holiparty@example.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for updates and special offers</p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:ring-2 focus:ring-holi-purple/50 focus:border-holi-purple"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 px-4 bg-holi-gradient text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-muted mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2025 Holi Party. All rights reserved.</p>
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
