import React from 'react'
import { motion } from 'framer-motion'
import Scroll from './Scroll'

export default function Main() {
  return (
    <main id='home-section' 
        className='h-[90vh] text-blue-950 flex flex-col justify-center font-play bg-gradient-to-br from-orange-100 to bg-pink-100'>
            {/* <img className='w-[250px] absolute top-40 left-32' src="images/in-universe.png" alt=""/>
            <img className='w-[250px] absolute bottom-40 right-28' src="images/NailStore-home.png" alt=""/>
            <img className='w-[250px] absolute top-32 right-36' src="images/in-universe-dashboard.png" alt=""/>
            <img className='w-[250px] absolute bottom-32 left-44' src="images/stage-door.png" alt=""/> */}
        <div className='mx-5 md:mx-auto md:text-center w-fit'>
            <motion.div 
                className='' 
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
                    Developer and Designer of Digital Products.
                </p>
            </motion.div>
        </div>
        <motion.div
            transition={{ duration: 1.1}}
            initial= {{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className='mx-5 my-1 md:mx-auto w-fit bg-gradient-to-r from-orange-400 to bg-orange-500 hover:bg-gradient-to-r hover:from-orange-400 to hover:bg-orange-600 rounded'>
            <a href="#contact-section" className='w-fit'>
                <p className='text-[16px] w-fit px-3 lg:px-5 text-white'>                        
                    Contact
                </p>
            </a>
        </motion.div>
        <Scroll></Scroll>
    </main>
  )
}
