import { motion } from 'framer-motion'
import React from 'react'

export default function Arrow() {
  return (
    <motion.div
        transition={{ 
                duration: 1,
                repeat:Infinity }}
        initial={{ y:-2 }}
        animate={{ y: 0 }} 
        className='absolute right-5 bottom-5 text-blue'>
        <p>
            Ver Mas
        </p>
        <div className='text-center'>
            <ion-icon name="chevron-down-outline"></ion-icon>
        </div> 
    </motion.div>
  )
}
