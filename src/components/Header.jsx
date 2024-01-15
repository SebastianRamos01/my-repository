import React from 'react'
import NavBar from './NavBar'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
        transition={{ duration: 1}}
        initial={{ y: -30 }}
        animate={{ y: 0 }} 
        className='sticky top-0 z-10 w-full flex justify-between lg:flex-row lg:justify-between bg-orange-100'>
        <div className='m-3 text-xl'>
            <h1 className='text-blue-950 font-play font-bold'>Sbas.Dev</h1>
        </div>
        <NavBar></NavBar>
    </motion.header>
  )
}
