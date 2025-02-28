
import React from 'react';

const ColorfulBanner = ({ date, time }: { date: string; time: string }) => {
  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden animate-float">
      <div className="absolute -inset-1 bg-holi-gradient blur opacity-30 animate-spin-slow"></div>
      <div className="relative bg-white/80 backdrop-blur-md rounded-full py-4 px-8 text-center border border-white/50">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider">
          <span className="block">{date}</span>
          <span className="block font-normal">{time}</span>
        </h2>
      </div>
    </div>
  );
};

export default ColorfulBanner;
