import React, { useRef } from 'react';
import View from '../../material/View';
import ExploreCard1C from '../../components/cards/explorecard/ExploreCard1C';


const Challenge = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
    {/* sm:h-48 md:h-56 lg:h-64 */}
      <div className=' p-4 sm:mt-2 md:mt-4'>
        <h1 className='text-center text-2xl mt-4'>Challenges For You</h1>
        <View/>
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
            <ExploreCard1C img_link={"https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021"} text={"Kuch to hai"} />
            <ExploreCard1C img_link={"https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021"} text={"Kuch to hai"} />
            <ExploreCard1C img_link={"https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021"} text={"Kuch to hai"} />
            <ExploreCard1C img_link={"https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021"} text={"Kuch to hai"} />
            <ExploreCard1C img_link={"https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021"} text={"Kuch to hai"} />
            <ExploreCard1C img_link={"https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021"} text={"Kuch to hai"} />
            <ExploreCard1C img_link={"https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021"} text={"Kuch to hai"} />
            <ExploreCard1C img_link={"https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021"} text={"Kuch to hai"} />
            <ExploreCard1C img_link={"https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021"} text={"Kuch to hai"} />
            <ExploreCard1C img_link={"https://plus.unsplash.com/premium_photo-1721276303391-ee0af231d021"} text={"Kuch to hai"} />
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

export default Challenge;
