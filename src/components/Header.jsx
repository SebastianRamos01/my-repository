import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='font-urbanist text-sm fixed w-full top-0 z-20'>
      <nav className='flex w-full justify-between py-5 px-5 lg:px-10'>
        <div className='underline decoration-1 underline-offset-4'>
          <Link to={'/'} className=''>
            Sebastian<br />
            Ramos
          </Link>
        </div>
        <div className='flex-col text-end gap-5 flex'>
          <p>Buenos Aires, Argentina</p>
          <p className='underline decoration-1 underline-offset-4'>
            <Link to={'/about'}>
              About
            </Link>
          </p>
        </div>
      </nav>
    </header>
  )
}
