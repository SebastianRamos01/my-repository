import React, { useState } from 'react'
import Social from './Social'

export default function NavBar() {

    const [closeMenu, setCloseMenu] = useState(true)
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu)
    }

  return (
    <nav className='w-[40%] absolute right-0 lg:w-fit lg:mx-1 font-play text-blue-950'>
        <div className='text-3xl h-fit text-end p-1 m-1 lg:hidden' 
            onClick={() => {
                handleCloseMenu()
            }}>
            <ion-icon name="reorder-three-outline"></ion-icon>
        </div>
        <ul className={closeMenu === true ? 'hidden lg:flex lg:items-center lg:flex-row lg:h-[52px]' : 'lg:items-center text-center w-screen absolute right-0 h-screen bg-gradient-to-b from-orange-100 to-pink-100 lg:flex lg:flex-row lg:h-[52px]'}>
            <li className='rounded-md lg:mx-[1px]'>
                <a href="#home-section" className='' onClick={() => {setCloseMenu(true)}}>
                    <p className='p-2 lg:px-5 rounded-sm hover:font-semibold'>
                        Home
                    </p>
                </a>
            </li>
            <li className='rounded-md lg:mx-[1px]'>
                <a href="#about-section" className='' onClick={() => {setCloseMenu(true)}}>
                    <p className=' p-2 lg:px-5 rounded-sm hover:font-semibold'>
                        About
                    </p>
                </a>
            </li>
            <li className='rounded-md lg:mx-[1px]'>
                <a href="#works-section" className='' onClick={() => {setCloseMenu(true)}}>
                    <p className='p-2 lg:px-5 rounded-sm hover:font-semibold'>
                        Works
                    </p>
                </a>
            </li>
            <li className='lg:mx-[1px]'>
                <a href="https://www.linkedin.com/in/sebastian-matias-ramos" className='underline' onClick={() => {setCloseMenu(true)}}>
                    <p className='p-2 lg:px-5 font-semibold'>
                        Linkedin
                    </p>
                </a>
            </li>
            {/* <Social></Social> */}
        </ul>
    </nav>
  )
}
