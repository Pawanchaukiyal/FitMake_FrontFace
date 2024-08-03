import React from 'react'

import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Explore from './pages/Explore';
import { ScrollTop } from './components/scrolltop/ScrollTop';

const App = () => {
  return (
    <div className='.back__bg'>
    <ScrollTop/>
   <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/explore' element={<Explore/>}/>

   </Routes>
   </div>
  )
}

export default App