import React from 'react'
import { motion } from 'framer-motion'

export default function Work({img, title, description, link, link2}) {
  return (
    <motion.div 
        className='flex flex-col items-center w-full lg:flex-row justify-between border border-blue my-2 font-play'
        transition={{ duration: 1}}
        initial= {{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileTap={{ scale: 0.9 }}>
        <div className='w-[250px] cursor-pointer'>
            <a href={link}>
                <img className='w-full' src={`images/${img}.png`} alt="image"/>
            </a>
        </div>
        <div className='text-blue w-[65%]'>
            <p className='text-lg text-center'>
                {description}
            </p>
        </div>
        <div className='w-[15%] text-center'>
            <a className='border-b border-blue hover:border-r px-2 hover:font-bold' href={link2}>Ver Codigo</a>
        </div>
    </motion.div>
  )
}
