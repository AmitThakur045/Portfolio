import React from 'react'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import Project from '../Project/Project'

const Main = () => {
  return (
    <div className='px-24 py-10 w-full text-white'>
        <Navbar />
        <Home />
        <Project />
    </div>
  )
}

export default Main