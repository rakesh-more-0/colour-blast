
import React, { useState } from 'react';
import { Check, Star, Ticket, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const TicketSection = () => {
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const tickets = [
    {
      id: "single",
      name: "Single Ticket (Stag)",
      price: "₹299",
      features: [
        "Access to Colour Blast celebration",
        "Organic colors",
        "Live DJ performances",
        "Food & beverages (to be purchased)",
      ],
      highlight: false,
      buttonText: "Get Tickets",
    },
    {
      id: "couple",
      name: "Couple Ticket",
      price: "₹499",
      features: [
        "Entry for 2 people",
        "Organic colors",
        "Live DJ performances",
        "Food & beverages (to be purchased)",
      ],
      highlight: false,
      buttonText: "Get Couple Ticket",
    },
    {
      id: "group",
      name: "Group Ticket",
      price: "₹1249",
      features: [
        "Entry for 5 people",
        "Organic colors",
        "Live DJ performances",
        "Food & beverages (to be purchased)",
        "Group photo opportunity",
      ],
      highlight: true,
      buttonText: "Get Group Ticket",
    },
    {
      id: "vip",
      name: "VIP Ticket",
      price: "₹1999",
      features: [
        "Entry for 5 people",
        "Exclusive VIP lounge access",
        "Premium organic colors",
        "Special wristbands",
        "Access to liquor section (18+ only)",
        "Priority entry",
      ],
      highlight: false,
      buttonText: "Get VIP Ticket",
    }
  ];

  const handleTicketClick = (ticketId: string) => {
    setSelectedTicket(ticketId);
    setShowTicketModal(true);
  };

  return (
    <section id="tickets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Get Your Tickets</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Secure your spot at Pune's most vibrant Holi celebration with our ticket packages designed for every festival-goer
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {tickets.map((ticket, index) => (
            <div 
              key={index} 
              id={ticket.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border ${
                ticket.highlight 
                  ? 'border-holi-purple shadow-xl relative z-10' 
                  : 'border-muted shadow-lg'
              } opacity-0 animate-fade-in`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {ticket.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-holi-purple text-white text-sm font-bold py-1 px-4 rounded-full flex items-center">
                  <Star size={14} className="mr-1" /> Best Value
                </div>
              )}
              <div className={`p-6 ${ticket.highlight ? 'bg-white' : 'bg-white'}`}>
                <h3 className="text-xl font-display font-bold mb-2">{ticket.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{ticket.price}</span>
                  <span className="text-muted-foreground ml-1 text-sm">per group/person</span>
                </div>
                
                <ul className="space-y-2 mb-6 min-h-[180px]">
                  {ticket.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={16} className={`mr-2 flex-shrink-0 mt-1 ${ticket.highlight ? 'text-holi-purple' : 'text-holi-blue'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handleTicketClick(ticket.id)}
                  className={`w-full block text-center py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all text-sm ${
                    ticket.highlight
                      ? 'bg-holi-gradient text-white'
                      : 'bg-white border border-muted-foreground/30 text-foreground hover:bg-muted/20'
                  }`}
                >
                  {ticket.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-10">
          Early bird discounts available for a limited time. <Link to="/contact" className="text-holi-purple font-medium">Book directly via WhatsApp</Link> 9607820101
        </p>
      </div>

      {/* Ticket Purchase Modal */}
      {showTicketModal && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowTicketModal(false)}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-lg">Purchase Tickets</h3>
              <button 
                onClick={() => setShowTicketModal(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                  <Ticket className="w-8 h-8 text-holi-purple" />
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-center mb-2">
                {tickets.find(t => t.id === selectedTicket)?.name}
              </h4>
              <p className="text-2xl font-bold text-center mb-6">
                {tickets.find(t => t.id === selectedTicket)?.price}
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="rounded-lg bg-purple-50 p-4">
                  <p className="text-sm text-center">
                    Tickets can be purchased through the following options. After purchase, you'll receive a QR code that will be scanned at the event entrance.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <a 
                  href="https://bookmyshow.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-holi-gradient text-white py-3 px-4 rounded-xl font-medium text-center"
                >
                  BookMyShow
                </a>
                
                <a 
                  href="https://wa.me/919607820101"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-full bg-white border border-holi-purple text-holi-purple py-3 px-4 rounded-xl font-medium text-center"
                >
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TicketSection;
