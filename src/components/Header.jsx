import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='font-urbanist w-full p-5 fixed top-0 z-20'>
      <nav className='flex justify-between items-center w-full bg-[#2d2926] text-white px-5 py-3'>
        <div className='underline decoration-1 underline-offset-4'>
          <Link to={'/'} className=''>
            Sebastian<br />
            Ramos
          </Link>
        </div>
        <div className='flex-col text-end gap-5 flex'>
          <p className='underline decoration-1 underline-offset-4'>
            <Link to={'/about'}>
              menu
            </Link>
          </p>
        </div>
      </nav>
    </header>
  )
}
