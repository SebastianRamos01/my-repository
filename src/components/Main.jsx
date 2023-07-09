import React from 'react'

export default function Main() {
  return (
    <main id='home-section' className='h-screen flex flex-col justify-center bg-blue'>
        <div className='text-white text-xl opacity-50 mx-5'>
            I introduce myself ;)
        </div>
        <div className='text-4xl text-white ml-5'>
            I'm Sebastián
        </div>
        <div className='text-5xl text-white ml-5'>
            I'm a Full Stack Web Developer.
        </div>
        <div className='ml-4 text-white text-3xl  flex' >
            <div className='p-1 opacity-50 hover:opacity-100'>
                <a href="">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </div>
            <div className='p-1 opacity-50 hover:opacity-100'>
                <a href="https://github.com/SebastianRamos01">
                    <ion-icon name="logo-github"></ion-icon>
                </a>
            </div>
            <div className='p-1 opacity-50 hover:opacity-100'>
                <a href="https://www.linkedin.com/in/sebastian-matias-ramos/">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </div>
        </div>
    </main>
  )
}
