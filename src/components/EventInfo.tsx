
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
            <p className="text-muted-foreground">10:30 AM Onwards</p>
          </div>
          
          {/* Location */}
          <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 colorful-shadow">
            <div className="w-16 h-16 rounded-full bg-holi-orange/10 flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-holi-orange" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Venue</h3>
            <p className="text-muted-foreground">
              Mahalaxhmi Lawns, Kharadi & Meadows, The Orchid Hotel, Balewadi
            </p>
          </div>
          
          {/* Performances */}
          <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 colorful-shadow">
            <div className="w-16 h-16 rounded-full bg-holi-pink/10 flex items-center justify-center mb-4">
              <Music className="w-8 h-8 text-holi-pink" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Performances</h3>
            <p className="text-muted-foreground">
              Live DJ, Folk Dances, Traditional Drumming & Special Guest Artists
            </p>
          </div>
          
          {/* Crowd */}
          <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 colorful-shadow">
            <div className="w-16 h-16 rounded-full bg-holi-blue/10 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-holi-blue" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Attendees</h3>
            <p className="text-muted-foreground">
              Join thousands of color enthusiasts in Pune's Biggest Holi Festival
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
