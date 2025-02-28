
import React from 'react';
import { Music, Utensils, PaintBucket, Sparkles, Camera, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <PaintBucket className="w-10 h-10 text-holi-pink" />,
      title: "Organic Colors",
      description: "Premium quality, skin-friendly, organic colors for a safe celebration"
    },
    {
      icon: <Music className="w-10 h-10 text-holi-purple" />,
      title: "Music & Entertainment",
      description: "High-Quality DJ & Music System, Rain Dance Setup, LED Screens & Visual Effects"
    },
    {
      icon: <Utensils className="w-10 h-10 text-holi-orange" />,
      title: "Food & Drinks",
      description: "Food & beverage stalls with a variety of options plus Liquor Bar (18+ Only)"
    },
    {
      icon: <Sparkles className="w-10 h-10 text-holi-yellow" />,
      title: "Color Blast Countdown",
      description: "Join the exciting color blast countdown - a spectacular highlight of the event"
    },
    {
      icon: <Camera className="w-10 h-10 text-holi-blue" />,
      title: "Photo Booths",
      description: "Capture colorful memories at our specially designed selfie & photo zones"
    },
    {
      icon: <Shield className="w-10 h-10 text-holi-green" />,
      title: "Entry Process",
      description: "Convenient QR code scanning, wristbands for VIP & liquor access"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Festival Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="w-16 h-16 mb-6 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
