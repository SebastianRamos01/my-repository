import React, { useState } from 'react'
import Social from './Social'

export default function NavBar() {

    const [closeMenu, setCloseMenu] = useState(true)
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu)
    }

  return (
    <nav className='w-[40%] absolute right-0 lg:w-fit lg:mx-1 font-bebas'>
         <div className='text-3xl h-fit text-end p-1 m-1 text-white lg:hidden' 
            onClick={() => {
                    handleCloseMenu()
                    }}>
                <ion-icon name="reorder-three-outline"></ion-icon>
            </div>
        <ul className={closeMenu === true ? 'hidden lg:flex lg:items-center lg:flex-row lg:h-[52px]' : 'lg:items-center bg-blue mx-2 rounded-l-md lg:bg-transparent lg:flex lg:flex-row lg:h-[52px]'}>
            <li className='lg:hover:bg-white rounded-md lg:mx-1'>
                <a href="#about-section" className=''>
                    <p className='text-xl text-white px-4 hover:text-blue'>
                        About
                    </p>
                </a>
            </li>
            <li className='lg:hover:bg-white rounded-md lg:mx-1'>
                <a href="#works-section" className=''>
                    <p className='text-xl text-white px-4 hover:text-blue'>
                        Works
                    </p>
                </a>
            </li>
            <Social></Social>
        </ul>
        </nav>
  )
}
