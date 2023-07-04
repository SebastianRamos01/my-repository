import React from 'react'

export default function Main() {
  return (
    <main className='h-screen flex flex-col justify-center bg-blue'>
        <div className='text-white text-xl opacity-50 mx-5'>
            I introduce myself ;)
        </div>
        <div className='text-4xl text-white ml-5'>
            I'm Sebastián
        </div>
        <div className='text-5xl text-white ml-5'>
            I'm a Full Stack Web Developer.
        </div>
        <div className='ml-4 text-white text-3xl opacity-50 flex' >
            <div className='p-1'>
                <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <div className='p-1'>
                <ion-icon name="logo-github"></ion-icon>
            </div>
            <div className='p-1'>
                <ion-icon name="logo-linkedin"></ion-icon>
            </div>
        </div>
    </main>
  )
}
