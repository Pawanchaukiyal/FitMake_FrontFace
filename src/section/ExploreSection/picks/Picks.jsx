import React, { useRef } from 'react';
import ExploreCard1C from '../../../components/cards/explorecard/ExploreCard1C';
import View from '../../../material/View';
import { PickData } from './PickData';

const Picks = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
      <div className='mt-4 p-4'>
      <h1 className="text-center font-medium font-mono text-2xl  mt-5 md:mt-8">
        Picks for you
      </h1>
        {/* <View/> */}
        <div className="relative flex items-center sm:mt-2 md:mt-4 p-2">
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
           {
            PickData.map((item,index)=>{
              return(
                <ExploreCard1C 
                key={index}
                heading={item.heading}
                imglink={item.imglink}
                value={item.value}
                />
              )
            })
           }
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

export default Picks;