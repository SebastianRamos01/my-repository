import { motion } from 'framer-motion'
import React from 'react'

export default function Social() {
    return (
        <div className='text-blue-950 text-[23px] flex justify-center items-center'>
            <div className='p-[6px]'>
                <a href="https://www.instagram.com/_sbaramos" className='flex opacity-70 hover:opacity-100'>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </div>
            <div className='p-[6px]'>
                <a href="https://github.com/SebastianRamos01" className='flex opacity-70 hover:opacity-100'>
                    <ion-icon name="logo-github"></ion-icon>
                </a>
            </div>
            <div
                className='p-[6px]'>
                <a href="https://www.linkedin.com/in/sebastian-matias-ramos" className='flex opacity-70 hover:opacity-100'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </div>
        </div>
)}
