import React from 'react'

export default function Header() {
  return (
    <header className='bg-blue fixed top-0 w-full flex flex-row-reverse z-10 lg:bg-transparent'>
        <ul className="bg-yellow w-full h-96 lg:w-80">
            <li className='flex justify-end'>
                <div className='text-4xl p-2'>
                    <ion-icon name="close-outline"></ion-icon>
                </div>
            </li>
            <li className='border-b flex justify-end m-1'>
                <p className='text-3xl p-3'>
                    About
                </p>
            </li>
            <li className='border-b flex justify-end m-1'>
                <p className='text-3xl p-3'>
                    Works
                </p>
            </li>
            <li className='border-b flex justify-end m-1'>
                <p className='text-3xl p-3'>
                    Contact
                </p>
            </li>
        </ul>
        <div className='text-yellow text-4xl mx-2 p-3 hidden'>
            <ion-icon name="reorder-three-outline"></ion-icon>
        </div>
    </header>
  )
}
