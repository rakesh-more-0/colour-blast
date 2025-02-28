
import React, { useState } from 'react';
import { Calendar, MapPin, Users, X } from 'lucide-react';

const EventInfo = () => {
  const [showMap, setShowMap] = useState(false);

  const scrollToVIPTickets = () => {
    // First scroll to tickets section
    const ticketsSection = document.getElementById('tickets');
    if (ticketsSection) {
      ticketsSection.scrollIntoView({ behavior: 'smooth' });
      
      // Then scroll to VIP ticket after a slight delay to ensure tickets section is loaded
      setTimeout(() => {
        const vipTicket = document.getElementById('vip');
        if (vipTicket) {
          vipTicket.scrollIntoView({ behavior: 'smooth' });
          
          // Highlight the VIP ticket with a pulse animation
          vipTicket.classList.add('animate-pulse');
          setTimeout(() => {
            vipTicket.classList.remove('animate-pulse');
          }, 2000);
        }
      }, 500);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Event Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Date */}
          <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 colorful-shadow">
            <div className="w-16 h-16 rounded-full bg-holi-purple/10 flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-holi-purple" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Date & Time</h3>
            <p className="text-lg font-medium">14th March 2025</p>
            <p className="text-muted-foreground">10:00 AM Onwards</p>
            
            {/* Add to Calendar button */}
            <button 
              className="mt-4 text-sm border border-holi-purple text-holi-purple rounded-full px-4 py-2 hover:bg-holi-purple hover:text-white transition-all"
              onClick={() => {
                // Create an iCalendar file URL
                const startTime = new Date('2025-03-14T10:00:00').toISOString();
                const endTime = new Date('2025-03-14T20:00:00').toISOString();
                const calEvent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:https://colourblast2025.com
DTSTART:${startTime.replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${endTime.replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:Colour Blast 2025
DESCRIPTION:Pune's Biggest Colour Blast celebration! Enjoy colors, music, food and more!
LOCATION:Balaji Ramji Alhat Ground, Shreeram Chowk, Near River Residency, Jadhavwadi, Chikhali 411062
END:VEVENT
END:VCALENDAR`;
                
                const data = new Blob([calEvent], { type: 'text/calendar' });
                const url = window.URL.createObjectURL(data);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'colour-blast-2025.ics');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Add to Calendar
            </button>
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
            
            {/* View Map button */}
            <button 
              className="mt-4 text-sm border border-holi-orange text-holi-orange rounded-full px-4 py-2 hover:bg-holi-orange hover:text-white transition-all"
              onClick={() => setShowMap(true)}
            >
              View on Map
            </button>
          </div>
          
          {/* VIP Experience */}
          <div className="glass-card p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 colorful-shadow">
            <div className="w-16 h-16 rounded-full bg-holi-blue/10 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-holi-blue" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">VIP Experience</h3>
            <p className="text-muted-foreground">
              Exclusive VIP Lounge access with premium amenities for VIP ticket holders
            </p>
            
            {/* VIP Tickets button */}
            <button 
              className="mt-4 text-sm border border-holi-blue text-holi-blue rounded-full px-4 py-2 hover:bg-holi-blue hover:text-white transition-all"
              onClick={scrollToVIPTickets}
            >
              Get VIP Tickets
            </button>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      {showMap && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowMap(false)}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-lg">Event Location</h3>
              <button 
                onClick={() => setShowMap(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video w-full">
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
            <div className="p-4 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Balaji Ramji Alhat Ground, Shreeram Chowk, Near River Residency, Jadhavwadi, Chikhali 411062
              </p>
              <a 
                href="https://maps.app.goo.gl/SPz5bDmxYZ7PGaxt6?g_st=com.google.maps.preview.copy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-holi-gradient text-white px-4 py-2 rounded-lg text-sm font-medium"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventInfo;
