
import React from 'react';
import { Calendar, MapPin, Music, Users } from 'lucide-react';

const EventInfo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Event Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {/* Date */}
          <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 colorful-shadow">
            <div className="w-16 h-16 rounded-full bg-holi-purple/10 flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-holi-purple" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Date & Time</h3>
            <p className="text-lg font-medium">14th March 2025</p>
            <p className="text-muted-foreground">10:00 AM Onwards</p>
          </div>
          
          {/* Location */}
          <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 colorful-shadow">
            <div className="w-16 h-16 rounded-full bg-holi-orange/10 flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-holi-orange" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Venue</h3>
            <p className="text-muted-foreground">
              Balaji Ramji Alhat Ground, Shreeram Chowk, Near River Residency, Jadhavwadi, Chikhali 411062
            </p>
          </div>
          
          {/* Performances */}
          <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 colorful-shadow">
            <div className="w-16 h-16 rounded-full bg-holi-pink/10 flex items-center justify-center mb-4">
              <Music className="w-8 h-8 text-holi-pink" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Music & Entertainment</h3>
            <p className="text-muted-foreground">
              High-Quality DJ & Music System, Rain Dance Setup, LED Screens & Visual Effects
            </p>
          </div>
          
          {/* Crowd */}
          <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 colorful-shadow">
            <div className="w-16 h-16 rounded-full bg-holi-blue/10 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-holi-blue" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">VIP Experience</h3>
            <p className="text-muted-foreground">
              Exclusive VIP Lounge access with premium amenities for VIP ticket holders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
