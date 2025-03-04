import React, { useState, useEffect } from 'react';
import { Check, Star, Ticket, X, BookOpen, MessagesSquare } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ColorBlast = ({ isActive, x, y, onAnimationEnd }: { isActive: boolean; x: number; y: number; onAnimationEnd: () => void }) => {
  const colors = [
    'bg-holi-pink',
    'bg-holi-purple',
    'bg-holi-blue',
    'bg-holi-orange',
    'bg-holi-yellow',
    'bg-holi-green',
  ];

  return isActive ? (
    <div className="fixed z-50 pointer-events-none" style={{ left: x, top: y }}>
      {Array.from({ length: 30 }).map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 20 + 10;
        const angle = Math.random() * 360;
        const distance = Math.random() * 150 + 50;
        const duration = Math.random() * 0.5 + 0.5;
        const delay = Math.random() * 0.2;
        
        return (
          <div 
            key={i}
            className={`absolute rounded-full ${randomColor} opacity-80`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: 'translate(-50%, -50%)',
              animation: `colorBlast ${duration}s ease-out ${delay}s forwards`
            }}
            onAnimationEnd={i === 0 ? onAnimationEnd : undefined}
          />
        );
      })}
    </div>
  ) : null;
};

const TicketSection = () => {
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);
  const [colorPowders, setColorPowders] = useState<Array<{ color: string; x: number; y: number; size: number; delay: number }>>([]);
  const [colorBlast, setColorBlast] = useState<{ active: boolean, x: number, y: number }>({ active: false, x: 0, y: 0 });

  useEffect(() => {
    const colors = [
      'bg-holi-pink',
      'bg-holi-purple',
      'bg-holi-blue',
      'bg-holi-orange',
      'bg-holi-yellow',
      'bg-holi-green',
    ];
    
    const powders = Array.from({ length: 12 }, (_, i) => ({
      color: colors[Math.floor(Math.random() * colors.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    
    setColorPowders(powders);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes colorBlast {
        0% {
          transform: translate(-50%, -50%) scale(0.1);
          opacity: 0.8;
        }
        100% {
          transform: translate(-50%, -50%) translateX(calc(cos(var(--angle)) * var(--distance))) 
                     translateY(calc(sin(var(--angle)) * var(--distance))) scale(1);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const tickets = [
    {
      id: "general",
      name: "General Pass",
      price: "₹299",
      features: [
        "Access to Colour Blast celebration",
        "Organic colors",
        "Live DJ performances",
        "Food & beverages (to be purchased)",
      ],
      highlight: false,
      buttonText: "Get Pass",
      priceSubtext: "per person"
    },
    {
      id: "couple",
      name: "Couple Pass",
      price: "₹499",
      features: [
        "Entry for 2 people",
        "Organic colors",
        "Live DJ performances",
        "Food & beverages (to be purchased)",
      ],
      highlight: false,
      buttonText: "Get Couple Pass",
      priceSubtext: "per couple"
    },
    {
      id: "group",
      name: "Group Of 5 Pass",
      price: "₹1299",
      features: [
        "Entry for 5 people",
        "Organic colors",
        "Live DJ performances",
        "Food & beverages (to be purchased)",
        "Group photo opportunity",
      ],
      highlight: false,
      buttonText: "Get Group Pass",
      priceSubtext: "group of 5"
    },
    {
      id: "vip",
      name: "VIP Pass",
      price: "₹499",
      features: [
        "Entry for 1 person",
        "Exclusive VIP lounge access",
        "Premium organic colors",
        "Better DJ near the stage for an immersive music experience",
        "Reserved area for comfort and a prime view of the action",
        "Priority entry",
      ],
      highlight: false,
      buttonText: "Get VIP Pass",
      priceSubtext: "per person"
    },
    {
      id: "vip-couple",
      name: "VIP Couple Pass",
      price: "₹799",
      features: [
        "Entry for 2 people",
        "Exclusive VIP lounge access",
        "Premium organic colors",
        "Better DJ near the stage for an immersive music experience",
        "Reserved area for comfort and a prime view of the action",
        "Priority entry",
      ],
      highlight: false,
      buttonText: "Get VIP Couple Pass",
      priceSubtext: "per couple"
    },
    {
      id: "vip-group",
      name: "VIP Group of 5 Pass",
      price: "₹1999",
      features: [
        "Entry for 5 people",
        "Exclusive VIP lounge access",
        "Premium organic colors",
        "VIP Lounge with premium perks",
        "Better DJ near the stage for an immersive music experience",
        "Reserved tables for comfort and a prime view of the action",
        "Priority entry",
      ],
      highlight: false,
      buttonText: "Get VIP Group Pass",
      priceSubtext: "group of 5"
    }
  ];

  const handleTicketClick = (ticketId: string, event: React.MouseEvent) => {
    setSelectedTicket(ticketId);
    setShowTicketModal(true);
    
    setColorBlast({
      active: true,
      x: event.clientX,
      y: event.clientY
    });
    
    toast({
      title: "Ticket Selected",
      description: `You've selected the ${tickets.find(t => t.id === ticketId)?.name}`,
      variant: "default",
    });
  };

  const handleColorBlastEnd = () => {
    setColorBlast({ ...colorBlast, active: false });
  };

  return (
    <section id="tickets" className="py-20 relative overflow-hidden">
      {colorPowders.map((powder, index) => (
        <div
          key={index}
          className={`absolute ${powder.color} opacity-20 rounded-full blur-3xl`}
          style={{
            width: `${powder.size}rem`,
            height: `${powder.size}rem`,
            left: `${powder.x}%`,
            top: `${powder.y}%`,
            animationDelay: `${powder.delay}s`,
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      <ColorBlast 
        isActive={colorBlast.active} 
        x={colorBlast.x} 
        y={colorBlast.y} 
        onAnimationEnd={handleColorBlastEnd} 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-center mx-auto mb-6">
            Get Your Tickets
            <span className="absolute -top-6 -right-6 w-12 h-12 bg-holi-yellow opacity-70 rounded-full blur-md animate-ping"></span>
            <span className="absolute -bottom-6 -left-6 w-10 h-10 bg-holi-pink opacity-70 rounded-full blur-md animate-pulse"></span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Secure your spot at Pune's most vibrant Holi celebration with our ticket packages designed for every festival-goer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {tickets.map((ticket, index) => (
            <div 
              key={index} 
              id={ticket.id}
              className={`rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border ${
                ticket.highlight 
                  ? 'border-holi-purple shadow-xl relative z-10' 
                  : 'border-white/50 shadow-lg'
              } opacity-0 animate-fade-in bg-white/70 backdrop-blur-md`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {ticket.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-holi-purple text-white text-sm font-bold py-1 px-4 rounded-full flex items-center">
                  <Star size={14} className="mr-1" /> Best Value
                </div>
              )}
              
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-holi-pink opacity-70 blur-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-holi-green opacity-70 blur-sm"></div>
              
              <div className="p-6 relative">
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-bold mb-2 text-gradient">{ticket.name}</h3>
                  <div className="mb-4 relative">
                    <span className="text-3xl font-bold">{ticket.price}</span>
                    <span className="text-muted-foreground ml-1 text-sm">{ticket.priceSubtext}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6 min-h-[180px]">
                    {ticket.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={16} className={`mr-2 flex-shrink-0 mt-1 ${
                          index % 6 === 0 ? 'text-holi-blue' :
                          index % 6 === 1 ? 'text-holi-purple' :
                          index % 6 === 2 ? 'text-holi-orange' :
                          index % 6 === 3 ? 'text-holi-green' :
                          index % 6 === 4 ? 'text-holi-pink' :
                          'text-holi-yellow'
                        }`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={(e) => handleTicketClick(ticket.id, e)}
                    className={`w-full block text-center py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all text-sm relative overflow-hidden group`}
                    style={{
                      background: 'linear-gradient(45deg, var(--tw-gradient-from), var(--tw-gradient-to))',
                      '--tw-gradient-from': index % 6 === 0 ? '#00D4F5' : 
                                           index % 6 === 1 ? '#AB20FD' : 
                                           index % 6 === 2 ? '#FF7747' : 
                                           index % 6 === 3 ? '#FFD233' :
                                           index % 6 === 4 ? '#FF3EA5' :
                                           '#00FF94',
                      '--tw-gradient-to': index % 6 === 0 ? '#AB20FD' : 
                                         index % 6 === 1 ? '#FF3EA5' : 
                                         index % 6 === 2 ? '#FFD233' : 
                                         index % 6 === 3 ? '#00FF94' :
                                         index % 6 === 4 ? '#00D4F5' :
                                         '#AB20FD',
                      color: 'white'
                    } as React.CSSProperties}
                  >
                    <span className="relative z-10">{ticket.buttonText}</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-10 relative">
          <span className="relative z-10">
            Early bird discounts available for a limited time. <a href="https://api.whatsapp.com/send/?phone=%2B919607820101&text=Hello+Colour+Blast,+I+want+to+inquire+about+tickets!" target="_blank" rel="noopener noreferrer" className="text-holi-purple font-medium hover:text-holi-pink transition-colors">Book directly via WhatsApp</a> 9607820101
          </span>
        </p>
      </div>

      {showTicketModal && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowTicketModal(false)}
        >
          <div 
            className="bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-holi-pink opacity-50 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-holi-blue opacity-50 rounded-full blur-xl"></div>
            
            <div className="p-4 border-b flex justify-between items-center relative">
              <h3 className="font-bold text-lg text-gradient">Purchase Tickets</h3>
              <button 
                onClick={() => setShowTicketModal(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 relative">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-holi-blue via-holi-purple to-holi-pink flex items-center justify-center">
                  <Ticket className="w-10 h-10 text-white animate-pulse" />
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-center mb-2 font-display">
                {tickets.find(t => t.id === selectedTicket)?.name}
              </h4>
              <p className="text-3xl font-bold text-center mb-6 text-gradient">
                {tickets.find(t => t.id === selectedTicket)?.price}
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="rounded-xl bg-purple-50 p-6 border border-purple-100">
                  <p className="text-sm text-center">
                    Tickets can be purchased through the following options. After purchase, you'll receive a QR code that will be scanned at the event entrance.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <a 
                  href="https://in.bookmyshow.com/events/colour-blast-2k25-holi-celebration-in-pune-2025/ET00436603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-red-500 text-red-500 py-3 px-4 rounded-xl font-medium text-center hover:bg-red-500 hover:text-white transition-colors transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    
                    const rect = e.currentTarget.getBoundingClientRect();
                    setColorBlast({
                      active: true,
                      x: rect.left + rect.width / 2,
                      y: rect.top + rect.height /2
                    });
                  }}
                >
                  <BookOpen size={18} />
                  <span>BookMyShow</span>
                </a>
                
                <a 
                  href="https://www.district.in/colour-blast-2k25-the-ultimate-holi-celebration-in-pune-mar14-2025/event" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-amber-600 text-amber-600 py-3 px-4 rounded-xl font-medium text-center hover:bg-amber-600 hover:text-white transition-colors transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    
                    const rect = e.currentTarget.getBoundingClientRect();
                    setColorBlast({
                      active: true,
                      x: rect.left + rect.width / 2,
                      y: rect.top + rect.height /2
                    });
                  }}
                >
                  <Star size={18} />
                  <span>District by Zomato</span>
                </a>
                
                <a 
                  href="https://mepass.in/events/color-blast" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-holi-gradient text-white py-3 px-4 rounded-xl font-medium text-center hover:shadow-lg hover:shadow-purple-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    
                    const rect = e.currentTarget.getBoundingClientRect();
                    setColorBlast({
                      active: true,
                      x: rect.left + rect.width / 2,
                      y: rect.top + rect.height / 2
                    });
                  }}
                >
                  <Ticket size={18} />
                  <span>Mepass</span>
                </a>
                
                <a 
                  href="https://api.whatsapp.com/send/?phone=%2B919607820101&text=Hello+Colour+Blast,+I+want+to+inquire+about+tickets!"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-full bg-white border-2 border-holi-purple text-holi-purple py-3 px-4 rounded-xl font-medium text-center hover:bg-holi-purple hover:text-white transition-colors transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    
                    const rect = e.currentTarget.getBoundingClientRect();
                    setColorBlast({
                      active: true,
                      x: rect.left + rect.width / 2,
                      y: rect.top + rect.height /2
                    });
                  }}
                >
                  <MessagesSquare size={18} />
                  <span>WhatsApp Booking</span>
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
