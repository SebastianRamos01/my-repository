import React from 'react'

export default function About() {
  return (
    <>
        <section className='bg-white'>
            <div className='text-4xl text-center font-medium'>
                About Me
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-96 h-96 relative m-3'>
                    <div className='bg-grey w-80 h-80 absolute'></div>
                    <div className='bg-blue w-80 h-80 absolute bottom-0 right-0'></div>
                </div>
                <div className= 'text-center m-3'>
                    <p className='text-blue text-2xl m-2'>
                        Unlocking the digital world one line of code at a time.
                        Passionate about creating visually stunning and user-friendly websites.
                        Let's turn your online dreams into reality!
                    </p>
                    <ul className='flex flex-wrap justify-center'>
                        <li className='bg-blue w-fit m-1'>
                            <p className='text-white p-1 font-semibold'>
                                JavaScript
                            </p>
                        </li>
                        <li className='bg-blue w-fit m-1'>
                            <p className='text-white p-1 font-semibold'>
                                Html5
                            </p>
                        </li>
                        <li className='bg-blue w-fit m-1'>
                            <p className='text-white p-1 font-semibold'>
                                Css3
                            </p>
                        </li>
                        <li className='bg-blue w-fit m-1'>
                            <p className='text-white p-1 font-semibold'>
                                Express.js
                            </p>
                        </li>
                        <li className='bg-blue w-fit m-1'>
                            <p className='text-white p-1 font-semibold'>
                                Node.js
                            </p>
                        </li>
                        <li className='bg-blue w-fit m-1'>
                            <p className='text-white p-1 font-semibold'>
                                React.js
                            </p>
                        </li>
                        <li className='bg-blue w-fit m-1'>
                            <p className='text-white p-1 font-semibold'>
                                MySql
                            </p>
                        </li>
                        <li className='bg-blue w-fit m-1'>
                            <p className='text-white p-1 font-semibold'>
                                Sequelize
                            </p>
                        </li>
                        <li className='bg-blue w-fit m-1'>
                            <p className='text-white p-1 font-semibold'>
                                TailWindscss
                           </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}
