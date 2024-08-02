import React from 'react'

import ExerciseCard from '../../components/cards/exercisecard/ExerciseCard'

const Exercise = () => {
  return (
    <>
      <h1 className='text-center font-bold text-2xl mt-7'>Perform Exercise to the level</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5'>
        <ExerciseCard img_link={"https://images.unsplash.com/photo-1722232581651-d87e4099561b?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"Beginner"} text={'Click it..'} />
        <ExerciseCard img_link={"https://images.unsplash.com/photo-1722232581651-d87e4099561b?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"Intermediate"} text={'Click it..'} />
        <ExerciseCard img_link={"https://images.unsplash.com/photo-1722232581651-d87e4099561b?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} heading={"Advanced"} text={'Click it..'} />
      </div>
    </>
  )
}

export default Exercise