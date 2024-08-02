import React from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const View = () => {
  return (

    <div className='float bg- w-full mt-4 rounded-md justify-end p-4 h-12 flex items-center'>
        <a href="#">View all</a>
        <IoArrowForwardCircleOutline className='w-10 h-10' />
    </div>
  )
}

export default View