import { motion } from 'framer-motion'
import React from 'react'

export default function Scroll() {
  return (
    <div className='w-5 h-9 rounded-xl border border-blue-950 absolute bottom-3 right-3 flex justify-center'>
        <motion.div
            transition={{ duration: 1,
                        repeat: 1,
                        delay: 0.2, }}
            animate={{ y: [2, 15, 2], }}
            className='bg-blue-950 w-4 h-4 rounded-full'>
        </motion.div>
    </div>
  )
}
