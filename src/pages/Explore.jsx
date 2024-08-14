import React from 'react'
import Layout from '../components/layout/Layout'
// import YogaExplore from '../section/yoga/YogaExplore'
import Picks from '../section/ExploreSection/picks/Picks'
import StressRelief from '../section/ExploreSection/stressrelief/StressRelief'
import HealthCare from '../section/ExploreSection/health/HealthCare'
import EquipmentCard from '../components/cards/explorecard/EquipmentCard'
import Challenge from '../section/ExploreSection/health/challenge.jsx/Challenge'
const Explore = () => {
  return (
    <Layout>
     <Picks/>
     <Challenge/>
     <div className='p-4 sm:mt-2 md:mt-4'>
     <h1 className="text-center font-medium font-mono text-2xl  mt-5 mb-2 md:mt-8">
        Exercise with Equipment
      </h1>
     <EquipmentCard/>
     </div>
     <StressRelief/>
     <HealthCare/>
     {/* <YogaExplore/> */}
    </Layout>
  )
}

export default Explore