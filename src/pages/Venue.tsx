
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Navigation, Copy, Check } from 'lucide-react';

const Venue = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('Balaji Ramji Alhat Ground, Shreeram Chowk, Near River Residency, Jadhavwadi, Chikhali 411062');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
              Event Venue
            </h1>
            
            <div className="max-w-4xl mx-auto mb-16">
              <div className="glass-card p-8 relative">
                <div className="w-16 h-16 rounded-full bg-holi-gradient absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                
                <div className="pt-8 text-center">
                  <h2 className="text-2xl font-display font-bold mb-4">Venue Address</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Balaji Ramji Alhat Ground, Shreeram Chowk, Near River Residency, Jadhavwadi, Chikhali 411062
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                    <button 
                      onClick={handleCopyAddress}
                      className="inline-flex items-center justify-center px-4 py-2 border border-holi-purple text-holi-purple rounded-lg hover:bg-holi-purple/10 transition-colors"
                    >
                      {copied ? <Check className="mr-2" size={18} /> : <Copy className="mr-2" size={18} />}
                      {copied ? "Address Copied!" : "Copy Address"}
                    </button>
                    
                    <a 
                      href="https://goo.gl/maps/5fXcRBWXJ7SDRKmL7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-holi-gradient text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <Navigation className="mr-2" size={18} />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto mb-12 aspect-video">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4015543573907!2d73.82259551489353!3d18.661760987326146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b987beee4e9d%3A0x5d70a548c8a5c01c!2sJadhavwadi%2C%20Chikhali%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411062!5e0!3m2!1sen!2sin!4v1620731726373!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Event Location Map"
              ></iframe>
            </div>
            
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-display font-bold mb-6">Getting Here</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="glass-card p-6">
                  <h3 className="font-bold mb-4">By Car</h3>
                  <p className="text-muted-foreground">
                    Ample parking available on-site. Use navigation apps for the best route.
                  </p>
                </div>
                <div className="glass-card p-6">
                  <h3 className="font-bold mb-4">Public Transport</h3>
                  <p className="text-muted-foreground">
                    Multiple bus routes available. The nearest bus stop is Jadhavwadi Bus Stop.
                  </p>
                </div>
              </div>
              
              <Link to="/#tickets" className="holi-btn-gradient">
                Book Your Tickets Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Venue;
