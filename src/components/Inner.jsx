import React from 'react'
import { motion } from 'framer-motion'

export default function Inner({children}) {

    const anim = (variants) => {
        return{
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }

    const opacity = {
        initial: {
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        exit: {
            opacity: 1
        }
    }

    const slide = {
        initial: {
            top: "100vh"
        },
        enter: {
            top: "100vh"
        },
        exit: {
            top: "0",
            transition: {
                duration: 1,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

  return (
    <div className=''>
        <motion.div {...anim(slide)} className='fixed top-0 left-0 bg-[#2d2926] w-screen h-screen z-10'><p className='text-[#F4F4F2] font-roboto font-extralight'>Hello World</p></motion.div>
        <motion.div {...anim(opacity)} className=''>
            {children}
        </motion.div>
    </div>
  )
}
