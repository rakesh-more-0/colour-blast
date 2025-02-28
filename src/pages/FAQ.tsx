
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Copy, Check, Instagram, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FAQ = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const navigate = useNavigate();

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

  const handleNavigate = (path: string) => {
    if (path.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const id = path.substring(2);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(path);
    }
  };

  const faqs = [
    {
      question: "What makes Colour Blast 2025 special?",
      answer: "Colour Blast 2025 is Pune's biggest Holi celebration, featuring DJ SWAP INDIA, an epic rain dance party, organic colors, delicious food, and an exclusive VIP experience."
    },
    {
      question: "Where can I buy tickets?",
      answer: "Tickets are available online through BookMyShow and WhatsApp booking. Limited on-the-spot tickets will also be available at the venue."
    },
    {
      question: "Will organic colors be provided?",
      answer: "Yes, only organic and skin-friendly colors will be provided to ensure a safe and vibrant Holi experience."
    },
    {
      question: "What kind of music will be played at the event?",
      answer: "Get ready for an electrifying mix of Bollywood, EDM, and Holi anthems, played by DJ SWAP INDIA and other top DJs."
    },
    {
      question: "What is included in the VIP experience?",
      answer: "VIP ticket holders enjoy a premium DJ experience near the stage, reserved tables, an exclusive lounge, and priority access to the venue."
    },
    {
      question: "Is food available at the event?",
      answer: "Yes, a variety of food stalls will offer delicious snacks, festive Thandai, and refreshing beverages throughout the event."
    },
    {
      question: "Can I purchase alcohol at the event?",
      answer: "Yes, a dedicated liquor bar (21+) will offer premium drinks for purchase. Valid ID is required."
    },
    {
      question: "Is parking available at the venue?",
      answer: "Yes, on-site parking is available for attendees on a first-come, first-served basis."
    },
    {
      question: "Will there be fun activities apart from music?",
      answer: "Yes! Enjoy selfie booths, vibrant Holi celebrations, rain dance, and an immersive festival atmosphere."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
              Frequently Asked Questions
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="glass-card p-6">
                    <h3 className="text-xl font-display font-bold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
                
                {/* Contact FAQ */}
                <div className="glass-card p-6">
                  <h3 className="text-xl font-display font-bold mb-3">How can I contact event organizers for more details?</h3>
                  <p className="text-muted-foreground mb-6">
                    For any inquiries, you can contact us via:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                      <div className="flex items-center">
                        <Phone className="mr-3 text-holi-purple" size={18} />
                        <span>9607820101</span>
                      </div>
                      <button 
                        onClick={handleCopyPhone}
                        className="p-2 rounded-full hover:bg-muted/50 transition-colors relative"
                        aria-label="Copy phone number"
                      >
                        {copiedPhone ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                        {copiedPhone && (
                          <span className="absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            Copied!
                          </span>
                        )}
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                      <div className="flex items-center">
                        <Mail className="mr-3 text-holi-purple" size={18} />
                        <span>richpointdigital@gmail.com</span>
                      </div>
                      <button 
                        onClick={handleCopyEmail}
                        className="p-2 rounded-full hover:bg-muted/50 transition-colors relative"
                        aria-label="Copy email"
                      >
                        {copiedEmail ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                        {copiedEmail && (
                          <span className="absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            Copied!
                          </span>
                        )}
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                      <div className="flex items-center">
                        <Instagram className="mr-3 text-holi-purple" size={18} />
                        <span>Varad Event</span>
                      </div>
                      <a 
                        href="https://instagram.com/varad_event" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-muted/50 transition-colors"
                        aria-label="Visit Instagram"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-12">
                <div 
                  onClick={() => handleNavigate('/#tickets')}
                  className="holi-btn-gradient cursor-pointer"
                >
                  Book Your Tickets Now
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
