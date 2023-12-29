import React from 'react'
import Carousel from '../banner/Carousel'
import CoinsTable from './CoinsTable';
import './Banner.css' 
const Banner = () => {
  return (<div className='bannerimg'> 
    <div className='main-banner'>
   <h1>Crypto Currency  </h1>
   <p>Explore Comprehensive Details About Your Preferred Cryptocurrency</p>          
   <Carousel/>
    </div>
    <CoinsTable/>
  </div>
  )
};

export default Banner ;
