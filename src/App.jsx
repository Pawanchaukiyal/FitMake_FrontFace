import React from 'react'

import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Explore from './pages/Explore';
import { ScrollTop } from './components/scrolltop/ScrollTop';
import Login from './components/login/Login';

const App = () => {
  return (
    <div className='.back__bg'>
    <ScrollTop/>
   <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/explore' element={<Explore/>}/>
   <Route path='/login' element={<Login/>}/>
   </Routes>
   </div>
  )
}

export default App