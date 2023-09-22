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
            className='flex flex-col items-center m-3 font-major'>
            <div className='text-blue text-xl opacity-50'>
                Si tienes una pregunta
            </div>
            <div className='text-blue text-3xl'>
                Enviame un mensaje!
            </div>
            <div className='text-blue border-b hover:border-r border-blue'>
                <a href="#home-section">
                    <p className='text-lg px-4 font-bold'>
                        Volver!
                    </p>
                </a>
            </div>
        </motion.div>
        <Form></Form>
    </footer>
  )
}
