import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { slides } from './slides';

function CarouselLg() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Slide */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        className="w-full h-full bg-center bg-cover duration-500 transition-transform"
      >
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-center text-center text-white bg-black bg-opacity-20 p-4">
          <h2 className="text-2xl font-bold mb-6">{slides[currentIndex].text}</h2>
        </div>
      </div>

      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-200 transition"
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-200 transition"
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-white' : 'text-gray-400'} hover:text-white transition`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselLg;
