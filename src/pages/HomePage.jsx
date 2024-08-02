import React from 'react'
import Carousel from '../components/carousel/Carousel'
import Yoga from '../section/yoga/Yoga'
import Exercise from '../section/exercise/Exercise'
import BodyFocus from '../section/bodyfocussection/BodyFocus'
import Footer from '../components/footer/Footer'
import Layout from '../components/layout/Layout'



const HomePage = () => {

  return (
    <Layout>
    <Carousel/>
     <Yoga/>
     <Exercise/>
     <BodyFocus/>
     <span className='block rounded-xl m-4 bg-yellow-400 text-center p-4 font-serif mb-4 font-bold text-4xl '>Click Here To Discover More</span>

     <Footer/>
    </Layout>
  )
}

export default HomePage