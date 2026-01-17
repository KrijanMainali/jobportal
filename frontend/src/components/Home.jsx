import React from 'react'
import NavBar from './shared/NavBar'
import HeroSection from './HeroSection'
import CategoryCarusel from './CategoryCarusel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <CategoryCarusel/>
        <LatestJobs/>
        <Footer/>
    </div>
  )
}

export default Home