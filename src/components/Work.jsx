import React from 'react'
import Gallery from './Gallery'
import Link from './Link'
import { motion } from 'framer-motion'

export default function Work({img1, img2, img3, img4, title, description, prop, link, prop2, link2}) {
  return (
    <div className='flex flex-col lg:items-start items-center lg:flex-row m-4'>
                <Gallery 
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    img4={img4}
                ></Gallery>
                <motion.div
                    transition={{ duration: 1}}
                    initial= {{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }} 
                    className='lg:w-[40%] flex flex-col items-center h-fit font-play '>
                    <div className='text-blue flex justify-center font-bold'>
                        <p className='text-3xl'>
                            {title}
                        </p>
                    </div>
                    <div className='md:ml-3 border border-blue'>
                        <div className='font-play flex items-center flex-col m-1'>
                            <p className='text-lg text-blue py-2 text-center'>
                                {description}
                            </p>
                            <div className='flex w-[85%] md:w-[80%] justify-evenly'>
                                <Link 
                                    prop={prop}
                                    link={link}
                                ></Link>
                                |
                                <Link 
                                    prop={prop2}
                                    link={link2}
                                ></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
  )
}
