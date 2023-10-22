import React from 'react'
import { motion } from 'framer-motion'
import Arrow from './Arrow'

export default function Main() {
  return (
    <main id='home-section' 
        className='h-screen flex flex-col justify-center bg-white font-major'>
        <div className='mx-7 lg:mx-12 text-blue'>
            <motion.div 
                className='text-blue' 
                transition={{ duration: 1.5}}
                initial={{ x: -30, opacity: 0}}
                animate={{ x: 0, opacity: 1}}>
                <p className='text-[15px] md:text-[18px] opacity-90'>
                    Sebastian Ramos
                </p>
            </motion.div>
            <motion.div
                className='w-fit'
                transition={{ duration: 1.1}}
                initial= {{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}>
                <p className='text-[26px] md:text-[32px]'>
                    Desarrollando buenas ideas.
                </p>
            </motion.div>
            <motion.div
                className='w-fit'
                transition={{ duration: 1}}
                initial= {{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}>
                <p className='text-[14px] md:text-[18px] text-ellipsis'>
                    Desarrollador | Diseñador | Artista 
                </p>
            </motion.div>
        </div>
        <motion.div
            transition={{ duration: 1.1}}
            initial= {{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className='mx-8 my-1 lg:mx-12 w-fit border-b text-left hover:border-r'>
            <a href="#contact-section" className='w-fit '>
                <p className='text-[16px] w-fit pr-3 lg:pr-5 hover:font-bold'>                        
                    Contacto
                </p>
            </a>
        </motion.div>
        <Arrow></Arrow>
    </main>
  )
}
