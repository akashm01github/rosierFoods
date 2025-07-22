import React from 'react'
import AboutUsHero from '../components/AboutUsHero'
import AboutUsSection from '../components/AboutUsSection'
import FarmAboutSection from '../components/FarmAboutSection'
import FarmHistorySection from '../components/FarmHistorySection'

const AboutUs = () => {
  return (
    <div className='bg-[#ffdbd4]'>
        <AboutUsHero/>
        <AboutUsSection/>
        <FarmHistorySection/>
    </div>
  )
}

export default AboutUs