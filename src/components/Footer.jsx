import React from 'react'
import Form from './Form'
import { motion } from 'framer-motion'
import Separator from './Separator'

export default function Footer() {
  return (
    <footer className='relative lg:h-screen bg-white flex justify-center items-center flex-col lg:flex-row lg:justify-evenly' id='contact-section'>
        <Separator></Separator>
        <motion.div
             transition={{ duration: 1.5}}
             initial={{ x: -60, opacity:0 }}
             whileInView={{ x: 0, opacity:1 }}
            className='flex flex-col items-center m-3 font-bebas'>
            <div className='text-blue text-2xl opacity-50'>
                Your interested?
            </div>
            <div className='text-blue text-4xl'>
                Send me a message!
            </div>
            <div className='text-white bg-blue rounded hover:bg-white hover:text-blue border border-blue'>
                <a href="#home-section">
                    <p className='text-xl px-4'>
                        Go up!
                    </p>
                </a>
            </div>
        </motion.div>
        <Form></Form>
    </footer>
  )
}
