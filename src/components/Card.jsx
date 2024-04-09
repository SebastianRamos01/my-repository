import React from 'react'
import { motion } from 'framer-motion'

export default function Card({title}) {
  return (
    <div className='text-[35px] flex items-center font-biz'>
        <div className='w-fit rounded-b-md'>
            <p className='text-[#fdb9a9]'>
                {title}.
            </p>
            <div className='h-1 bg-[#fdb9a9]'>
            </div>
        </div>
    </div>
  )
}
