import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='font-roboto font-normal absolute top-5 flex w-full justify-between'>
      <div className='mx-5'>
        <Link to={'/'}>
          Sebastian<br />
          Ramos
        </Link>
      </div>
      <div className='flex-col text-end mx-5 gap-5 flex'>
        <p>Buenos Aires, Argentina</p>
        <p className='underline decoration-1 underline-offset-4'>
          <Link to={'/about'}>
            Info
          </Link>
        </p>
      </div>
    </div>
  )
}
