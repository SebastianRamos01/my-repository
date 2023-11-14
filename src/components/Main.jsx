import React from 'react'
import { motion } from 'framer-motion'

export default function Main() {
  return (
    <main id='home-section' 
        className='h-[90vh] flex flex-col justify-center font-play'>
        <div className='mx-5 md:mx-auto md:text-center text-blue w-fit'>
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
                className=''
                transition={{ duration: 1.1}}
                initial= {{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}>
                <p className='text-[30px] md:text-[35px]'>
                    Web Developer Portfolio.
                </p>
            </motion.div>
            <motion.div
                className=''
                transition={{ duration: 1}}
                initial= {{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}>
                <p className='text-[15px] md:text-[18px] text-ellipsis'>
                    Desarrollo y Diseño de Productos Digitales.
                </p>
            </motion.div>
        </div>
        <motion.div
            transition={{ duration: 1.1}}
            initial= {{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className='mx-5 my-1 md:mx-auto w-fit border-b text-left hover:border-r bg-white'>
            <a href="#contact-section" className='w-fit '>
                <p className='text-[16px] w-fit pr-3 lg:pr-5 hover:font-bold'>                        
                    Contacto
                </p>
            </a>
        </motion.div>
    </main>
  )
}
