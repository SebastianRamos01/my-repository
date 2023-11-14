import React from 'react'
import Main from './Main'
import About from './About'
import Works from './Works'
import Footer from './Footer'
import Sign from './Sign'

export default function Body() {
  return (
    <div className='w-[95%] m-auto'>
        <Main></Main>
        <About></About>
        <Works></Works>
        <Footer></Footer>
        <Sign></Sign>
    </div>
  )
}
