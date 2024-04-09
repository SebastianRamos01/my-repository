import { motion } from 'framer-motion'
import React, { useState } from 'react'

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
    <span 
        onMouseEnter={() => {isHover()}}
        onMouseLeave={() => {isHover()}}
        >
        <p className=''>
            {title}.
        </p>
        <motion.div 
            className='w-[68px] h-[2px] bg-[#fdb9a9]'
            variants={variants}
            animate={ active ? 'open' : 'closed' }
            >
        </motion.div>
    </span>
  )
}
