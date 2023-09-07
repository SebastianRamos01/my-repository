import React, { useState } from 'react'
import Social from './Social'

export default function NavBar() {

    const [closeMenu, setCloseMenu] = useState(true)
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu)
    }

  return (
    <nav className='w-[40%] absolute right-0 lg:w-fit lg:mx-1 font-bebas'>
         <div className='text-3xl h-fit text-end p-1 m-1 text-blue lg:hidden' 
            onClick={() => {
                    handleCloseMenu()
                    }}>
                <ion-icon name="reorder-three-outline"></ion-icon>
            </div>
        <ul className={closeMenu === true ? 'hidden lg:flex lg:items-center lg:flex-row lg:h-[52px]' : 'lg:items-center border border-blue md:border-none mx-2 rounded-l-md lg:flex lg:flex-row lg:h-[52px]'}>
            <li className='lg:hover:bg-white rounded-md lg:mx-[1px]'>
                <a href="#about-section" className=''>
                    <p className='text-xl text-blue px-4 border border-white rounded-sm hover:border-blue'>
                        About
                    </p>
                </a>
            </li>
            <li className='lg:hover:bg-white rounded-md lg:mx-[1px]'>
                <a href="#works-section" className=''>
                    <p className='text-xl text-blue px-4 border border-white rounded-sm hover:border-blue'>
                        Works
                    </p>
                </a>
            </li>
            <li className='lg:hover:bg-white rounded-md lg:mx-[1px]'>
                <a href="#works-section" className=''>
                    <p className='text-xl text-blue px-4 border border-white rounded-sm hover:border-blue'>
                        Services
                    </p>
                </a>
            </li>
            <Social></Social>
        </ul>
        </nav>
  )
}
