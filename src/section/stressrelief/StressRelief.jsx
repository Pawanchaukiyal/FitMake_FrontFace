import React, { useRef } from 'react';
import ExploreCard1 from '../../components/cards/explorecard/ExploreCard1';
import View from '../../material/View';

const StressRelief = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <div>
        <h1 className='text-center text-2xl mt-4'>Stress Relief </h1>
        <View/>
        <div className="relative flex items-center mt-7">
          <button 
            className="absolute opacity-[0.6]  w-16 h-16 left-0 bg-gray-800 text-white p-2 rounded-full z-10" 
            onClick={scrollLeft}
          >
            &lt;
          </button>
          <div 
            className='flex gap-2 sm:gap-16 overflow-x-auto px-4' 
            ref={scrollContainerRef}
          >
            <ExploreCard1 />
            <ExploreCard1 />
            <ExploreCard1 />
            <ExploreCard1 />
            <ExploreCard1 />
            <ExploreCard1 />
            <ExploreCard1 />
            <ExploreCard1 />
            <ExploreCard1 />
            <ExploreCard1 />
          </div>
          <button 
            className="absolute opacity-[0.6] right-0 w-16 h-16 bg-gray-800 text-white p-2 rounded-full z-10" 
            onClick={scrollRight}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default StressRelief;
