import React from 'react'
import Layout from '../components/layout/Layout'
import Picks from '../section/picks/Picks'
import Challenge from '../section/challenge.jsx/Challenge'
import ExploreCard1 from '../components/cards/explorecard/ExploreCard1'
import HealthCare from '../section/health/HealthCare'
import YogaExplore from '../section/yoga/YogaExplore'

const Explore = () => {
  return (
    <Layout>
     <Picks/>
     <Challenge/>
     <div>
      <h1 className=' text-center text-2xl mt-4'>Exercise with Equipment</h1>
     <ExploreCard1/>
     </div>
     <HealthCare/>
     <YogaExplore/>
    </Layout>
  )
}

export default Explore