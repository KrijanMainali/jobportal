import React from 'react'
import NavBar from './shared/NavBar'
import HeroSection from './HeroSection'
import CategoryCarusel from './CategoryCarusel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs();
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