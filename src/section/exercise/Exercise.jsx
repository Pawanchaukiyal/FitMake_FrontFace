import React from 'react'

import ExerciseCard from '../../components/cards/exercisecard/ExerciseCard'
import { Exercisedata } from './ExerciseData';

const Exercise = () => {
  return (
    <>
      <h1 className='text-center font-bold text-2xl mt-7'>Perform Exercise to the level</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5'>
      {Exercisedata.map((item, index) => {
          return (
            <ExerciseCard
              key={index}
              heading={item.heading}
              imglink={item.imglink}
              level={item.level}
              text={item.text}
            />
          );
        })}
      </div>
    </>
  )
}

export default Exercise