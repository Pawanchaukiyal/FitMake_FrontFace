import React from 'react'

import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Explore from './pages/Explore';
import { ScrollTop } from './components/scrolltop/ScrollTop';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Logout from './components/login/Logout';

const App = () => {
  return (
    <div className='.back__bg'>
    <ScrollTop/>
   <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/explore' element={<Explore/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/logout' element={<Logout/>}/>

   
   </Routes>
   </div>
  )
}

export default App