import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Button = ({data}) => {
  console.log(data)
  const navigate=useNavigate();
  return (<>
  
  <div  onClick={()=>navigate(`/start/${data}`)}className="border-2 border-purple-600 rounded-lg px-3 py-2 text-purple-400 cursor-pointer hover:bg-purple-600 hover:text-purple-200 text-center">
          start
        </div>
        
    
  </>
  )
}

export default Button
