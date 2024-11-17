import React, { useState, useEffect } from 'react';

const backgrounds = [
  'https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&q=80', // Ayasofya
  
 'https://images.unsplash.com/photo-1568797629192-50b12c50af2d?auto=format&fit=crop&q=80', // Tarihi Kale
];

function HistoricalBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000); // Her 10 saniyede bir değiş

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={bg}
            alt="Historical Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text readability */}
        </div>
      ))}
    </div>
  );
}

export default HistoricalBackground;