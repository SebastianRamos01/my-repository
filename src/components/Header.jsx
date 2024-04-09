import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='font-josefin font-extrabold absolute top-5 left-5'>
      <Link to={'/'}>
        Sebas.Dev
      </Link>
    </div>
  )
}
