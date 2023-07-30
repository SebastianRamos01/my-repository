import { motion } from 'framer-motion'
import React from 'react'

export default function Social() {
    return (
        <div className='text-white text-[23px] flex justify-center items-center'>
            <div className='p-2 hover:bg-white hover:text-blue rounded-full'>
                <a href="https://www.instagram.com/_sbaramos" className='flex '>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </div>
            <div className='p-2 hover:bg-white hover:text-blue rounded-full'>
                <a href="https://github.com/SebastianRamos01" className='flex'>
                    <ion-icon name="logo-github"></ion-icon>
                </a>
            </div>
            <motion.div
                
                className='p-2 hover:bg-white hover:text-blue rounded-full'>
                <a href="https://www.linkedin.com/in/sebastian-matias-ramos" className='flex'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </motion.div>
        </div>
)}
