
import React, { useState, useRef } from 'react';
import { Music, Utensils, PaintBucket, Sparkles, Camera, Shield, X } from 'lucide-react';
import { useMouseGlow } from '../hooks/useMouseGlow';

const FeaturesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{title: string, description: string, icon: React.ReactNode}>({
    title: "", 
    description: "", 
    icon: null
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const { containerRef } = useMouseGlow<HTMLDivElement>({
    colors: [
      'rgba(171, 32, 253, 0.5)', // Purple
      'rgba(255, 119, 71, 0.5)', // Orange
      'rgba(0, 212, 245, 0.5)',  // Blue
    ],
    selector: '.glass-card', // Target all glass cards
    maxDistance: 350
  });

  const features = [
    {
      icon: <PaintBucket className="w-10 h-10 text-holi-pink" />,
      title: "Organic Colors",
      description: "Premium quality, skin-friendly, organic colors for a safe celebration",
      details: "Our festival features 100% eco-friendly, dermatologically tested colors that wash off easily. Safe for all skin types and environmentally conscious. We'll provide a variety of vibrant colors including pink, yellow, green, blue, and purple powders."
    },
    {
      icon: <Music className="w-10 h-10 text-holi-purple" />,
      title: "Music & Entertainment",
      description: "High-Quality DJ & Music System, Rain Dance Setup, LED Screens & Visual Effects",
      details: "Our high-energy DJ lineup will feature the latest Bollywood hits, EDM, and traditional Holi music. The sound system is state-of-the-art with powerful speakers strategically placed throughout the venue. LED screens will display colorful visuals synchronized with the music for an immersive experience."
    },
    {
      icon: <Utensils className="w-10 h-10 text-holi-orange" />,
      title: "Food & Drinks",
      description: "Food & beverage stalls with a variety of options plus Liquor Bar",
      details: "Multiple food stalls featuring a variety of cuisines including street food favorites, chaat, sandwiches, and traditional Holi specialties like gujiya and thandai. The dedicated liquor bar (with ID verification) will serve beer, cocktails, and other alcoholic beverages."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-holi-yellow" />,
      title: "Color Blast Countdown",
      description: "Join the exciting color blast countdown - a spectacular highlight of the event",
      details: "The Color Blast Countdown is our signature event happening at 12 noon. Everyone gathers in the central area as our MC leads a countdown, followed by thousands of attendees throwing colors in the air simultaneously, creating a breathtaking spectacle of colors against the sky."
    },
    {
      icon: <Camera className="w-10 h-10 text-holi-blue" />,
      title: "Photo Booths",
      description: "Capture colorful memories at our specially designed selfie & photo zones",
      details: "Multiple professionally designed photo booths with different Holi-themed backdrops and props. Our dedicated photographers will be available to take high-quality photos that you can download later from our website using your ticket number. Perfect for creating Instagram-worthy memories!"
    },
    {
      icon: <Shield className="w-10 h-10 text-holi-green" />,
      title: "Entry Process",
      description: "Convenient QR code scanning, wristbands for VIP & liquor access",
      details: "Smooth entry process with digital ticket validation. QR codes will be scanned at the entrance, and you'll receive colored wristbands based on your ticket type. VIP ticket holders get special wristbands for exclusive area access. Adults with proper ID will receive additional wristbands for liquor section access."
    }
  ];

  const openModal = (feature: typeof features[0]) => {
    setModalContent({
      title: feature.title,
      description: feature.details,
      icon: feature.icon
    });
    setModalOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50" ref={(el) => {
      sectionRef.current = el;
      containerRef(el);
    }}>
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Festival Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${0.2 * index}s` }}
              onClick={() => openModal(feature)}
            >
              <div className="w-16 h-16 mb-6 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <button className="mt-4 text-sm text-holi-purple font-medium flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Detail Modal */}
      {modalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold text-lg">{modalContent.title}</h3>
              <button 
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                  {modalContent.icon}
                </div>
              </div>
              
              <p className="text-muted-foreground">
                {modalContent.description}
              </p>
              
              <button
                onClick={() => setModalOpen(false)}
                className="w-full mt-6 bg-holi-gradient text-white py-3 px-4 rounded-xl font-medium"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturesSection;
