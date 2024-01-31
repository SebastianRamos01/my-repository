import React from 'react'
import Form from './Form'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className='lg:h-screen flex justify-center bg-gradient-to-bl from-pink-100 to-orange-100 py-4 lg:items-center flex-col lg:flex-row lg:justify-evenly' id='contact-section'>
        <motion.div
             transition={{ duration: 1.5}}
             initial={{ x: -60, opacity:0 }}
             whileInView={{ x: 0, opacity:1 }}
            className='flex flex-col lg:items-center m-5 font-play lg;w-[400px]'>
            <div className='text-lg opacity-80'>
                Hello, Im Working
            </div>
            <div className='text-[26px] md:text-[32px]'>
                Send a message!
            </div>
        </motion.div>
        <Form></Form>
    </footer>
  )
}
