import React from 'react'
import CarouselLg from './CarouseLg'
import CarouselSm from './CarouselSm'

const Carousel = () => {
  return (
    <>
    {/* for lg screen */}
    <div className='hidden md:block'>
    <CarouselLg/>
    </div>

     <div className='block md:hidden'>
    <CarouselSm/>
     </div>
    </>
  )
}

export default Carousel