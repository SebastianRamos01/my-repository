import React from 'react'
import { motion } from 'framer-motion'
import Arrow from './Arrow'

export default function Main() {
  return (
    <main id='home-section' 
        className='h-screen flex flex-col justify-center bg-white font-bebas'>
        <div className='mx-8 lg:mx-12'>
            <motion.div 
                className='text-blue' 
                transition={{ duration: 1.5}}
                initial={{ x: -30, opacity: 0}}
                animate={{ x: 0, opacity: 1}}>
                <p className='text-xl opacity-50'>
                    Sebastian Ramos
                </p>
            </motion.div>
            <motion.div
                className='w-fit'
                transition={{ duration: 1.1}}
                initial= {{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}>
                <p className='text-5xl text-blue '>
                    Desarrollando buenas ideas.
                </p>
            </motion.div>
            <motion.div
                className='w-fit'
                transition={{ duration: 1}}
                initial= {{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}>
                <p className='text-blue text-2xl w-[250px] sm:w-[500px] md:w-auto'>
                    Desarrollador | Diseñador | Artista 
                </p>
            </motion.div>
        </div>
        <motion.div
            transition={{ duration: 1.1}}
            initial= {{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className='mx-8 lg:mx-12 w-fit text-white bg-blue rounded hover:bg-white hover:text-blue border border-blue'>
            <a href="#contact-section" className='w-fit'>
                <p className='text-xl w-fit px-3 lg:px-5'>                        
                    Contacto
                </p>
            </a>
        </motion.div>
        <Arrow></Arrow>
    </main>
  )
}
