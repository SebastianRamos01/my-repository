import React from 'react'
import { motion } from 'framer-motion'

export default function Work({img, title, description, link, link2}) {
  return (
    <motion.a
        className='flex flex-col items-center md:w-[82%] lg:flex-row justify-between my-2 m-5 md:m-auto md:my-2 lg:p-2 hover:shadow'
        transition={{ duration: 1}}
        initial= {{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        href={link}>
        <div className='w-[100%] lg:w-[220px] cursor-pointer'>
            <img className='w-full' src={`images/${img}.png`} alt="image"/>
        </div>
        <div className='sm:w-[90%] md:w-[65%] md:px-4 py-2'>
            <p className='font-semibold'>
                {title}
            </p>
            <p className=''>
                {description}
            </p>
        </div>
        <div className='my-2 w-full md:m-0 md:w-[11%] flex'>
            <a className='lg:px-2 opacity-70 hover:opacity-100 font-semibold w-full' href={link2}>See Code</a>
        </div>
    </motion.a>
  )
}
