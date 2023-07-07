import React from 'react'

export default function Header() {
  return (
    <header className='bg-blue fixed top-0 w-full flex flex-row-reverse z-10 lg:bg-transparent'>
        <ul className="bg-yellow opacity-95 w-full h-96 lg:flex lg:flex-row-reverse lg:h-fit">
            <li className='flex justify-end'>
                <div className='text-4xl p-2 lg:hidden'>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </li>
            <li className='flex justify-end m-1 lg:mx-2 hover:border-b'>
                <a href="#about-section" className='h-fit'>
                    <p className='text-3xl p-3 lg:p-2'>
                        About
                    </p>
                </a>
            </li>
            <li className='flex justify-end m-1 lg:mx-2 hover:border-b'>
                <a href="#works-section">
                    <p className='text-3xl p-3 lg:p-2'>
                        Works
                    </p>
                </a>
            </li>
            <li className='flex justify-end m-1 lg:mx-2 hover:border-b'>
                <a href="#contact-section">
                    <p className='text-3xl p-3 lg:p-2'>
                        Contact
                    </p>
                </a>
            </li>
        </ul>
        <div className='text-yellow text-4xl mx-2 p-3 hidden'>
            <ion-icon name="reorder-three-outline"></ion-icon>
        </div>
    </header>
  )
}
