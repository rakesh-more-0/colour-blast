
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin, Copy, Check } from 'lucide-react';

const Footer = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('9607820101');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('richpointdigital@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Balaji Ramji Alhat Ground, Shreeram Chowk, Near River Residency, Jadhavwadi, Chikhali 411062');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <footer className="bg-white border-t border-muted pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="rounded-full overflow-hidden border-2 border-holi-purple/30 shadow-lg h-10 w-10">
                <img 
                  src="/lovable-uploads/6f31c3ec-1d10-47f5-91d6-e7f8967bc385.png" 
                  alt="Colour Blast Logo" 
                  className="h-full w-full object-cover"
                />
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
              <li><a href="/#tickets" className="text-muted-foreground hover:text-holi-purple transition-colors">Tickets</a></li>
              <li><Link to="/venue" className="text-muted-foreground hover:text-holi-purple transition-colors">Venue</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-holi-purple transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start group relative">
                <MapPin size={18} className="mt-1 mr-3 text-holi-purple flex-shrink-0" />
                <div className="flex-grow flex items-start justify-between">
                  <span className="text-muted-foreground pr-2">Balaji Ramji Alhat Ground, Shreeram Chowk, Near River Residency, Jadhavwadi, Chikhali 411062</span>
                  <button 
                    onClick={handleCopyAddress}
                    className="p-1 rounded-full opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-muted/50 transition"
                    aria-label="Copy address"
                  >
                    {copiedAddress ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
                {copiedAddress && (
                  <span className="absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </li>
              <li className="flex items-center group relative">
                <Phone size={18} className="mr-3 text-holi-purple" />
                <div className="flex items-center justify-between w-full">
                  <a href="tel:+919607820101" className="text-muted-foreground hover:text-holi-purple transition-colors">+91 9607820101</a>
                  <button 
                    onClick={handleCopyPhone}
                    className="p-1 rounded-full opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-muted/50 transition"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
                {copiedPhone && (
                  <span className="absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </li>
              <li className="flex items-center group relative">
                <Mail size={18} className="mr-3 text-holi-purple" />
                <div className="flex items-center justify-between w-full">
                  <a href="mailto:richpointdigital@gmail.com" className="text-muted-foreground hover:text-holi-purple transition-colors">richpointdigital@gmail.com</a>
                  <button 
                    onClick={handleCopyEmail}
                    className="p-1 rounded-full opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-muted/50 transition"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-muted-foreground text-sm mb-1">© 2025 Colour Blast. All rights reserved.</p>
            <p className="text-muted-foreground text-sm">Created by <a href="https://www.instagram.com/richpointdigital?igsh=MWFzN2djcXlxdjd4cg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="font-medium text-holi-purple hover:underline">RichPoint Digital</a></p>
          </div>
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
