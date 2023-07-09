import React, { useState } from 'react'

export default function Header() {

    const [closeMenu, setCloseMenu] = useState(true)
    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu)
    }
    // console.log(closeMenu)

  return (
    <header className='bg-blue absolute top-0 z-10 w-full flex flex-col lg:flex-row-reverse scroll-smooth'>
        <div className='text-4xl h-fit text-end p-2 text-white lg:hidden' onClick={() => {
                    handleCloseMenu()
                }}>
                    <ion-icon name="reorder-three-outline"></ion-icon>
                    
                </div>
        <ul className={closeMenu === true ? 'hidden lg:flex lg:flex-row-reverse lg:my-3' : 'w-full h-screen lg:flex lg:flex-row-reverse lg:h-fit lg:my-3'}>
            <li className='flex justify-end m-1 lg:mx-2 hover:border-b border-white'>
                <a href="#about-section" className='h-fit '>
                    <p className='text-3xl p-3 text-white lg:p-2'>
                        About
                    </p>
                </a>
            </li>
            <li className='flex justify-end m-1 lg:mx-2 lg:hover:border-b lg:border-white'>
                <a href="#works-section">
                    <p className='text-3xl p-3 text-white lg:p-2'>
                        Works
                    </p>
                </a>
            </li>
            <li className='flex justify-end bg-yellow lg:mx-1 lg:rounded-sm '>
                <a href="#contact-section">
                    <p className='text-3xl p-3 text-white lg:p-2 lg:mx-1 hover:border-b hover:border-blue'>
                        Contact
                    </p>
                </a>
            </li>
        </ul>
    </header>
  )
}
