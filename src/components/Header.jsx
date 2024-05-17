import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='font-urbanist font-medium absolute flex w-full justify-between text-sm p-5'>
      <div className='underline decoration-1 underline-offset-4'>
        <Link to={'/'} className=''>
          SEBASTIAN<br />
          RAMOS
        </Link>
      </div>
      <div className='flex-col text-end gap-5 flex'>
        <p>BUENOS AIRES, ARGENTINA</p>
        <p className='underline decoration-1 underline-offset-4'>
          <Link to={'/about'}>
            ABOUT
          </Link>
        </p>
      </div>
    </div>
  )
}
