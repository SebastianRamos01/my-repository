import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
        <section className='flex justify-center my-5' id="about-section">
            <div className='flex flex-col items-center lg:flex-row'>
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
                    className= 'flex flex-col items-center font-play'>
                    <div className='text-[30px] md:text-[35px]'>
                        About Me
                    </div>
                    <div className='text-blue font-play md:ml-4'>
                        <p className='text-center border-blue border text-lg p-2'>
                            Soy un Desarrollador Web Full-Stack con una fuerte inclinacion hacia el diseño web, constantemente mejorando mis habilidades de desarrollo y diseño.
                            Actualmente, Trabajo como freelancer dedicado a ayudar a mis clientes a lograr sus objetivos dentro del desarrollo web.
                            Comprometido, a ofrecer la mejor calidad del producto. 
                            Estoy abierto a la oportunidad de colaborar e idear innovadoras soluciones.
                        </p>
                    </div>
                    <ul className='flex flex-wrap justify-center items-center m-2'>
                        <li className= 'w-fit m-1'>
                            <div className='text-yellow text-3xl'>
                                <ion-icon name="logo-javascript"></ion-icon>
                            </div>
                        </li>
                        <li className='w-fit m-1'>
                            <div className='text-orange text-3xl'>
                                <ion-icon name="logo-html5"></ion-icon>
                            </div>
                        </li>
                        <li className='w-fit m-1'>
                            <div className='text-light-blue text-3xl'>
                                <ion-icon name="logo-css3"></ion-icon>
                            </div>
                        </li>
                        <li className= 'w-fit m-1'>
                            <div className='text-green text-3xl'>
                                <ion-icon name="logo-nodejs"></ion-icon>
                            </div>
                        </li>
                        <li className='w-fit m-1'>
                            <div className='text-white-blue text-3xl'>
                                <ion-icon name="logo-react"></ion-icon>
                            </div>
                        </li>
                        <li className='w-fit m-1 font-play'>
                            <div className='text-lg'>
                                MySql
                            </div>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
  )
}
