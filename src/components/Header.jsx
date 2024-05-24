import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='font-urbanist font-medium text-xs fixed w-full top-0 z-10 bg-white'>
      <nav className='flex w-full justify-between p-5'>
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
      </nav>
    </header>
  )
}
