import React from 'react'
import Banner from "../components/home/Banner"
import Products from '../components/home/Products'

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='w-full -mt-[20px] xl:-mt-[70px]'>
        <Products/>
      </div>
      
    </div>
  )
}

export default Home