import React from 'react'

export default function About() {
  return (
    <>
        <section className='bg-white' id="about-section">
            <div className='text-4xl text-center font-medium'>
                About Me
            </div>
            <div className='flex flex-col items-center'>
                <div className='w-fit h-fit m-3 top-9'>
                    <div className='w-80 h-fit'>
                        <img src="images\IMG_20230706_192946829_HDR_2-removebg-preview.png" alt="" className='h-full w-full rounded-r-3xl'/>
                    </div>
                </div>
                <div className= 'text-center m-3'>
                    <p className='text-blue text-2xl m-2'>
                    Passionate about merging creativity and technology.
                    Aspiring web designer, developer, and physics enthusiast.
                    Constantly seeking opportunities to learn and create impactful digital experiences.
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
