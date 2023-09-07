import React from 'react'
import Separator from './Separator'
import { motion } from 'framer-motion'

export default function About() {
  return (
        <section className='relative flex justify-center bg-white' id="about-section">
            <Separator></Separator>
            <div className='flex flex-col items-center lg:flex-row m-5 lg:m-12'>
                <motion.div
                    transition={{ duration: 1}}
                    initial= {{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className='w-fit h-fit top-9'>
                    <div className='w-60 h-fit'>
                        <img src="images\avatar-me.png" alt="" className='h-full w-full rounded-full'/>
                    </div>
                </motion.div>
                <motion.div 
                    transition={{ duration: 1}}
                    initial= {{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className= 'flex flex-col items-center'>
                    <div className='text-4xl text-center font-bebas my-2'>
                        About Me
                    </div>
                    <div className='text-blue font-bebas w-[90%]'>
                        <p className='text-center border-blue border  text-xl p-2'>
                            I am a diligent web developer with a strong inclination towards web design, constantly sharpening my coding and design abilities.
                            Concurrently, I am wholeheartedly dedicated to expanding my knowledge of the universe through my pursuit of a physics degree.
                            My commitment to perpetually enhancing my skills and expertise is unwavering. 
                            I welcome the opportunity to collaborate and devise cutting-edge solutions together.
                        </p>
                    </div>
                    <ul className='flex flex-wrap justify-center m-2'>
                        <li className= 'w-fit m-1'>
                            <div className='text-yellow text-4xl'>
                                <ion-icon name="logo-javascript"></ion-icon>
                            </div>
                        </li>
                        <li className='w-fit m-1'>
                            <div className='text-orange text-4xl'>
                                <ion-icon name="logo-html5"></ion-icon>
                            </div>
                        </li>
                        <li className='w-fit m-1'>
                            <div className='text-light-blue text-4xl'>
                                <ion-icon name="logo-css3"></ion-icon>
                            </div>
                        </li>
                        <li className= 'w-fit m-1'>
                            <div className='text-green text-4xl'>
                                <ion-icon name="logo-nodejs"></ion-icon>
                            </div>
                        </li>
                        <li className='w-fit m-1'>
                            <div className='text-white-blue text-4xl'>
                                <ion-icon name="logo-react"></ion-icon>
                            </div>
                        </li>
                        <li className='w-fit m-1'>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
  )
}
