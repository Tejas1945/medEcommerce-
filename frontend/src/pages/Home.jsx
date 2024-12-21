import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import HomeBanner from '../components/HomeBanner'
import HomeBanner2 from '../components/HomeBanner2'
import Navbar1 from '../components/Navbar1'

const Home = () => {
  return (
    <div>
      {/*<Hero />*/}
      <HomeBanner/>
      
      <LatestCollection/>
      <BestSeller/>
      <HomeBanner2/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
