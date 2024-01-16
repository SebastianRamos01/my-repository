import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
        <section className='flex md:justify-center bg-gradient-to-bl from-pink-100 to-orange-100 lg:h-[90vh] font-play' id="about-section">
                <motion.div 
                    transition={{ duration: 1}}
                    initial= {{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className= 'flex flex-col lg:flex-row my-10 lg:m-auto mx-5 justify-center gap-5 lg:gap-10 text-blue-950'>
                    <div className='text-[30px] md:text-[35px]'>
                        About Me
                    </div>
                    <div >
                        <div className='font-semibold'>
                            English.
                        </div>
                        <p className='text-[14px] w-[250px] pr-2'>
                            I am a Full-Stack Web Developer with a strong inclination towards web design, constantly improving my development and design skills.
                            Currently, I work as a freelancer dedicated to helping my clients achieve their goals in web development.
                            Committed to offering the best product quality.
                            I am open to the opportunity to collaborate and devise innovative solutions.
                        </p>
                    </div>
                    <div className=''>
                        <div className='font-semibold'>
                            Spanish.
                        </div>
                        <p className='text-[14px] w-[250px] pr-2'>
                            Soy un Desarrollador Web Full-Stack con una fuerte inclinacion hacia el diseño web, constantemente mejorando mis habilidades de desarrollo y diseño.
                            Actualmente, Trabajo como freelancer dedicado a ayudar a mis clientes a lograr sus objetivos dentro del desarrollo web.
                            Comprometido, a ofrecer la mejor calidad del producto. 
                            Estoy abierto a la oportunidad de colaborar e idear innovadoras soluciones.
                        </p>
                    </div>
                    <div className=''>
                        <div className='font-semibold'>
                            Skills.
                        </div>
                        <ul className='pr-2 text-[14px]'>
                            <li className=''>
                                JavaScript
                            </li>
                            <li className=''>
                                TypeScript
                            </li>
                            <li className=''>
                                Html5
                            </li>
                            <li className=''>
                                Css3
                            </li>
                            <li className=''>
                                React.js
                            </li>
                            <li>
                                Next.js
                            </li>
                            <li>
                                MySql
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='font-semibold'>
                            Lenguages.
                        </div>
                        <ul className='text-[14px] pr-2'>
                            <li>Spanish</li>
                            <li>English</li>
                        </ul>
                    </div>
                    <div>
                        <div className='font-semibold'>
                            Social.
                        </div>
                        <ul className='text-[14px] pr-2'>
                            <li>
                                sebasm.sr@gmail.com
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_sbaramos" className='underline'>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/SebastianRamos01" className='underline'>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
        </section>
  )
}
