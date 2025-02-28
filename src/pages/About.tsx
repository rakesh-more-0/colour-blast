
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Music, PaintBucket, Droplets, Camera, Utensils, Users, Wine } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
              COLOUR BLAST 2025 – PUNE'S BIGGEST HOLI CELEBRATION
            </h1>
            
            <div className="max-w-4xl mx-auto mb-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="glass-card p-6">
                  <h3 className="font-bold mb-2">Date</h3>
                  <p>Friday, 14th March 2025</p>
                </div>
                <div className="glass-card p-6">
                  <h3 className="font-bold mb-2">Venue</h3>
                  <p>Balaji Ramji Alhat Ground, Shreeram Chowk, Near River Residency, Jadhavwadi, Chikhali 411062</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground">
                Get ready to drench yourself in colors, dance to electrifying beats, and experience Holi like never before. This year, Colour Blast 2025 brings you an explosive festival of music, energy, and endless fun.
              </p>
              
              <div className="bg-holi-purple/10 p-6 rounded-xl">
                <h2 className="text-2xl font-display font-bold mb-4">Headlining Act – DJ SWAP INDIA</h2>
                <p className="text-muted-foreground">
                  Pune's hottest Holi party is about to get wild with DJ SWAP INDIA, setting the stage on fire with high-energy beats and mind-blowing drops. Get lost in the immersive festival atmosphere, where music meets madness.
                </p>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-display font-bold text-center mb-12">EVENT HIGHLIGHTS</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="glass-card p-6 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-lg bg-holi-pink/10 flex items-center justify-center mb-4">
                    <Music className="text-holi-pink" />
                  </div>
                  <p className="text-lg font-medium">Live DJ Set by DJ SWAP INDIA featuring non-stop EDM, Bollywood, and Holi anthems</p>
                </div>
                
                <div className="glass-card p-6 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-lg bg-holi-purple/10 flex items-center justify-center mb-4">
                    <PaintBucket className="text-holi-purple" />
                  </div>
                  <p className="text-lg font-medium">Immersive Holi Atmosphere with organic colors and a vibrant festival vibe</p>
                </div>
                
                <div className="glass-card p-6 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-lg bg-holi-blue/10 flex items-center justify-center mb-4">
                    <Droplets className="text-holi-blue" />
                  </div>
                  <p className="text-lg font-medium">Massive Rain Dance Party with an ultimate water splash experience</p>
                </div>
                
                <div className="glass-card p-6 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-lg bg-holi-yellow/10 flex items-center justify-center mb-4">
                    <Camera className="text-holi-yellow" />
                  </div>
                  <p className="text-lg font-medium">Selfie Booths and Insta-Worthy Zones to capture your most colorful moments</p>
                </div>
                
                <div className="glass-card p-6 flex flex-col items-start">
                  <div className="w-12 h-12 rounded-lg bg-holi-orange/10 flex items-center justify-center mb-4">
                    <Utensils className="text-holi-orange" />
                  </div>
                  <p className="text-lg font-medium">Delicious Food and Thandai Stalls offering festive treats and refreshing drinks</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-display font-bold text-center mb-12">EXCLUSIVE VIP EXPERIENCE</h2>
              
              <div className="bg-holi-gradient p-[1px] rounded-xl">
                <div className="bg-white rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-holi-purple/10 flex items-center justify-center mb-4 mx-auto">
                        <Users className="text-holi-purple" />
                      </div>
                      <p className="font-medium">VIP Lounge with premium perks</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-holi-purple/10 flex items-center justify-center mb-4 mx-auto">
                        <Music className="text-holi-purple" />
                      </div>
                      <p className="font-medium">Better DJ near the stage for an immersive music experience</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-holi-purple/10 flex items-center justify-center mb-4 mx-auto">
                        <Users className="text-holi-purple" />
                      </div>
                      <p className="font-medium">Reserved tables for comfort and a prime view of the action</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-holi-purple/10 flex items-center justify-center mb-4 mx-auto">
                        <Users className="text-holi-purple" />
                      </div>
                      <p className="font-medium">Exclusive access area to enjoy the festival in style</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-display font-bold text-center mb-12">LIQUOR BAR (21 plus)</h2>
              
              <div className="glass-card p-6 max-w-xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-holi-purple/10 flex items-center justify-center">
                    <Wine className="w-8 h-8 text-holi-purple" />
                  </div>
                </div>
                
                <ul className="space-y-3 text-center">
                  <li className="text-lg">Open to all attendees but requires separate purchase</li>
                  <li className="text-lg">Premium drinks available for purchase</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <Link to="/#tickets" className="holi-btn-gradient">Book Your Tickets Now</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
