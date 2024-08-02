// import React from 'react'
// import CircularCard from '../../components/cards/yogacard1/YogaCard'

// const Yoga = () => {
//   return (
//     <>
//     <h1 className='text-center mt-5 font-bold text-2xl'>Yoga</h1>
//     <div className='grid grid-cols-3 gap-7'>
//      <CircularCard  img_link={"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"} text={"hahaha"}/>
//      <CircularCard img_link={"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"} text={"hahaha"}/>
//      <CircularCard img_link={"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"} text={"hahaha"}/>

//     </div>
//     </>
//   )
// }

// export default Yoga

import React from 'react';
import YogaCard from '../../components/cards/yogacard1/YogaCard';

const Yoga = () => {
  return (
    <>
      <h1 className='text-center font-bold text-2xl mt-4'>Perform Yoga to the level </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5'>
        <YogaCard img_link={"https://images.unsplash.com/photo-1722232581651-d87e4099561b?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"Beginner"} text={'Click it..'} />
        <YogaCard img_link={"https://images.unsplash.com/photo-1722232581651-d87e4099561b?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"Intermediate"} text={'Click it..'} />
        <YogaCard img_link={"https://images.unsplash.com/photo-1722232581651-d87e4099561b?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"Advanced"} text={'Click it..'} />
      </div>
    </>
  );
};

export default Yoga;
