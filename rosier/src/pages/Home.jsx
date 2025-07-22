import React from 'react'
import ImageSlider from '../components/ImageSlider'
import WelcomeSection from '../components/WelcomeSection'
import FarmAboutSection from '../components/FarmAboutSection'
import WhatWeOffer from '../components/WhatWeOffer'
import OrganicProductsComponent from '../components/OrganicProductsComponent'
import ProductCardSlider from '../components/ProductCardSlider'
import MeetOurFarmers from '../components/MeetOurFarmers'
import ResponsiveFooter from '../components/ResponsiveFooter'
import DairyHero from './../components/DairyHero';

const Home = () => {
    return (
        <div>
            <ImageSlider />
            <WelcomeSection />
            <FarmAboutSection />
            <DairyHero />
            <WhatWeOffer />
            <OrganicProductsComponent />
            <ProductCardSlider />
            <MeetOurFarmers />
        </div>
    )
}

export default Home