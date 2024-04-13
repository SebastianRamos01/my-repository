import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const variants = {
    open: {
      width: "100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
    }
    },
    closed: {
      width: "66px",
    }
  }

export default function Title({title}) {
    const [active, setActive] = useState(false)
    const isHover = () => {
        setActive(!active)
    }

  return (
    <div
      className='text-[35px] lg:text-[40px]'
        onMouseEnter={() => {isHover()}}
        onMouseLeave={() => {isHover()}}
        >
            <p  className=''>
                {title.toUpperCase()}.
            </p>
            <motion.div 
                className='w-[68px] h-[2px] bg-[#fdb9a9]'
                variants={variants}
                animate={ active ? 'open' : 'closed' }
                >
            </motion.div>
    </div>
  )
}
