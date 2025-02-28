
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Utensils, Wine, ShoppingBag } from 'lucide-react';

const Stalls = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-12">
              Food & Drink Stalls
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Liquor Stall */}
              <div className="glass-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 mb-6 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <Wine className="w-8 h-8 text-holi-purple" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Liquor Bar</h3>
                <p className="text-muted-foreground mb-4">
                  Enjoy premium drinks at our dedicated liquor bar. Valid ID required for entry.
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="text-holi-purple mr-2">•</span>
                    <span>Premium alcoholic beverages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-purple mr-2">•</span>
                    <span>Special cocktail menu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-purple mr-2">•</span>
                    <span>All drinks available for separate purchase</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-purple mr-2">•</span>
                    <span>Dedicated bar staff</span>
                  </li>
                </ul>
              </div>
              
              {/* Food Court */}
              <div className="glass-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 mb-6 rounded-lg bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
                  <Utensils className="w-8 h-8 text-holi-orange" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Food Court</h3>
                <p className="text-muted-foreground mb-4">
                  A variety of delicious food options to keep your energy up throughout the celebration.
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="text-holi-orange mr-2">•</span>
                    <span>Street food favorites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-orange mr-2">•</span>
                    <span>Traditional Holi treats and Thandai</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-orange mr-2">•</span>
                    <span>Vegetarian and non-vegetarian options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-orange mr-2">•</span>
                    <span>Refreshing beverages and mocktails</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-holi-orange mr-2">•</span>
                    <span>Multiple food vendors</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Stalls;
