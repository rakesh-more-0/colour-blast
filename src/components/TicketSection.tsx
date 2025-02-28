
import React from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TicketSection = () => {
  const tickets = [
    {
      name: "Standard",
      price: "₹999",
      features: [
        "Access to Holi celebration",
        "Organic colors",
        "Live DJ performances",
        "Food & beverages (to be purchased)",
      ],
      highlight: false,
      buttonText: "Get Tickets",
    },
    {
      name: "Premium",
      price: "₹1999",
      features: [
        "Everything in Standard",
        "Premium area access",
        "1 Food & drinks coupon",
        "Express entry",
        "Holi merchandise pack",
      ],
      highlight: true,
      buttonText: "Get Premium",
    },
    {
      name: "VIP",
      price: "₹4999",
      features: [
        "Everything in Premium",
        "VIP lounge access",
        "Unlimited food & drinks",
        "Meet & greet with artists",
        "Exclusive after-party access",
        "Professional photoshoot",
      ],
      highlight: false,
      buttonText: "Get VIP",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Get Your Tickets</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Secure your spot at Pune's most vibrant Holi celebration with our ticket packages designed for every festival-goer
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {tickets.map((ticket, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border ${
                ticket.highlight 
                  ? 'border-holi-purple shadow-xl relative z-10 scale-105' 
                  : 'border-muted shadow-lg'
              } opacity-0 animate-fade-in`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {ticket.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-holi-purple text-white text-sm font-bold py-1 px-4 rounded-full flex items-center">
                  <Star size={14} className="mr-1" /> Most Popular
                </div>
              )}
              <div className={`p-8 ${ticket.highlight ? 'bg-white' : 'bg-white'}`}>
                <h3 className="text-2xl font-display font-bold mb-2">{ticket.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{ticket.price}</span>
                  <span className="text-muted-foreground ml-1">per person</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {ticket.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={18} className={`mr-2 flex-shrink-0 mt-1 ${ticket.highlight ? 'text-holi-purple' : 'text-holi-blue'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/tickets" 
                  className={`w-full block text-center py-3 px-6 rounded-xl font-medium hover:shadow-lg transition-all ${
                    ticket.highlight
                      ? 'bg-holi-gradient text-white'
                      : 'bg-white border border-muted-foreground/30 text-foreground hover:bg-muted/20'
                  }`}
                >
                  {ticket.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-10">
          Group discounts available for bookings of 10+ people. <Link to="/contact" className="text-holi-purple font-medium">Contact us</Link> for details.
        </p>
      </div>
    </section>
  );
};

export default TicketSection;
