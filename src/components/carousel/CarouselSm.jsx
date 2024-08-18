import React, { useState, useEffect } from 'react';
import icon from './icon1.png';

const CarouselSm = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const delay = 3000; // Time in milliseconds

  const cards = [
    {
      image: icon,
      text: "Take care of your body. It’s the only place you have to live.",
    },
    {
      image: "https://storage.googleapis.com/offeringtree_tmp/1686029472832_logo_buddy.png",
      text: "Your health is your wealth.",
    },
    {
      image: "https://cdn4.iconfinder.com/data/icons/yoga-meditation-exercise-1/128/18-512.png",
      text: "Healthy mind in a healthy body.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, delay);
    return () => clearInterval(interval);
  }, [cards.length, delay]);

  return (
    <div className="mt-5 mx-5 border-2 border-gray-300 bg-yellow-200 rounded-2xl overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 p-4 bg-yellow-200">
          <img
            src={cards[activeIndex].image}
            className="h-24 w-24 object-contain bg-yellow-200"
            alt="icon"
          />
        </div>
        <div className="flex-1 p-4">
          <p className="text-gray-700 text-bold font-mono">{cards[activeIndex].text}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselSm;
