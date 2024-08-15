import React from 'react'
import Designer from '../assets/Designer.svg'

const NoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={Designer} alt="img" className="w-1/2 h-[550px] object-contain" />
      <h1 className="text-3xl font-bold mt-8 text-red-500">No Page Found!!!!</h1>
    </div>
  )
}

export default NoPage;