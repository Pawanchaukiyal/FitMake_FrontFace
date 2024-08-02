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
      image: "https://th.bing.com/th/id/OIP.IT16Ry17c4Ver04-Pn_NTwHaHa?w=512&h=512&rs=1&pid=ImgDetMain", // You can replace this with other images
      text: "Your health is your wealth.",
    },
    {
      image: "https://cdn4.iconfinder.com/data/icons/yoga-meditation-exercise-1/128/18-512.png", // You can replace this with other images
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
    <div className="mt-5 border-2 flex justify-center items-center rounded-2xl ml-5 mr-5">
      <div className="mr-5 p-6 overflow-hidden flex-shrink-0 bg-gray-250">
        <img src={cards[activeIndex].image} className="h-10 w-12 object-cover" alt="icon" />
      </div>
      <div className="p-6">
        <p>{cards[activeIndex].text}</p>
      </div>
    </div>
  );
}

export default CarouselSm;
