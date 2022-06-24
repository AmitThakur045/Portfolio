import React from 'react'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'

const Main = () => {
  return (
    <div className='px-24 py-8 w-full text-white'>
        <Navbar />
        <Home />
    </div>
  )
}

export default Main