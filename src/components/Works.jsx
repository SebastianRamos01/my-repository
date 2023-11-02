import React, { useState } from 'react'
import Separator from './Separator'
import { motion } from 'framer-motion'
import Gallery from './Gallery'
import react from '../assets/react.svg'
import Link from './Link'

export default function Works() {
    return (
        <section className='relative flex flex-col items-center' id='works-section'>
            <Separator></Separator>
            <div className='flex flex-col-reverse items-center lg:flex-row-reverse m-8 lg:mx-12'>
                <Gallery 
                    img1="in-universe"
                    img2="in-universe-body"
                    img3="in-universe-footer"
                    img4="in-universe-about"
                ></Gallery>
                <motion.div
                    transition={{ duration: 1}}
                    initial= {{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }} 
                    className='lg:w-[40%] flex flex-col items-center h-fit font-play '>
                    <div className='text-blue flex justify-center font-bold'>
                        <p className='text-3xl'>
                            In-Universe
                        </p>
                    </div>
                    <div className='lg:w-[90%] border border-blue'>
                        <div className='font-play flex items-center flex-col m-1'>
                            <p className='text-lg text-blue py-2 text-center'>
                                In-universe es una aplicacion de posteos sobre el universo, con un diseño simple con colores relacionados con el tema de la aplicacion. Desarrollado con React y Tailwind <br />
                                La misma aun se encuentra en desarrollo, buscando dar mas interactividad a los usuarios.
                            </p>
                            <div className='flex w-[85%] md:w-[70%] justify-evenly'>
                                <Link 
                                    prop='Ver proyecto.'
                                    link="https://inuniverse.com.ar"
                                ></Link>
                                |
                                <Link 
                                    prop='Ver codigo.'
                                    link="https://github.com/SebastianRamos01/post-app"
                                ></Link>
                            </div>
                        </div>
                    </div>
                    <ul className='flex justify-evenly p-1'>
                        <li className='m-1'>
                            <img src={react} alt="" className='w-8'/>
                        </li>
                        <li className='m-1 text-xl'>
                            <p>Tailwind.css</p>
                        </li>
                    </ul>
                </motion.div>
            </div>
            <div className='flex flex-col-reverse items-center lg:flex-row m-8 lg:m-12'>
            <Gallery 
                    img1="NailStore-home"
                    img2="NailStore-login"
                    img3="NailStore-shop"
                    img4="NailStore-product"
                ></Gallery>
                <motion.div 
                    transition={{ duration: 1 }}
                    initial= {{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity:1 }}
                    className='lg:w-[40%] flex flex-col items-center h-fit font-play'>
                    <div className='my-1 text-blue flex justify-center font-bold'>
                        <p className='text-3xl '>
                            Nailstore
                        </p>
                    </div>
                    <div className='lg:w-[90%] border border-blue'>
                        <div className='font-play flex items-center flex-col m-1'>
                            <p className='text-lg text-blue py-2 text-center'>
                                Un e-commerce de productos de manicura. <br />
                                El front-end de la aplicacion fue desarrollado con HTML, CSS and JavaScript usando practicas de sitios responsive para todos los dipositivos.
                                El back-end fue desarrollado en JavaScript con Express y Node.js, siguiendo practicas MVC.
                                La base de datos fue diseñada con MySql, ensamblada y organizada usando Sequelize.
                            </p>
                            <div className='flex w-[85%] md:w-[70%] justify-evenly'>
                                <Link 
                                    prop='Ver demo.'
                                    link=""
                                ></Link>
                                |
                                <Link 
                                    prop='Ver codigo.'
                                    link="https://github.com/SebastianRamos01/E-commerceNailStore"
                                ></Link>
                            </div>
                        </div>
                    </div>
                    <ul className='flex flex-wrap justify-evenly p-1'>
                        <li className='m-1'>
                            <div className='text-orange text-3xl '>
                                <ion-icon name="logo-html5"></ion-icon>
                            </div>
                        </li>
                        <li className='m-1'>
                            <div className='text-light-blue text-3xl'>
                                <ion-icon name="logo-css3"></ion-icon>
                            </div>
                        </li>
                        <li className='m-1'>
                            <div className='text-yellow text-3xl'>
                                <ion-icon name="logo-javascript"></ion-icon>
                            </div>
                        </li>
                        <li className='w-fit m-1'>
                            <div className='text-green text-4xl'>
                                <ion-icon name="logo-nodejs"></ion-icon>
                            </div>
                        </li>
                        <li className='w-fit m-1'>
                            <p className='text-blue p-1 font-semibold'>
                                MySql
                            </p>
                        </li>
                        <li className='w-fit m-1'>
                            <p className='text-blue p-1 font-semibold'>
                                Sequelize
                            </p>
                        </li>
                    </ul>
                </motion.div>
            </div>
            <div className='flex flex-col-reverse items-center lg:flex-row-reverse m-8 lg:mx-12'>
                <Gallery
                    img1="Captura de pantalla 2023-07-05 224711"
                    img2="Mercado-Liebre-2"
                    img3="Mercado-Liebre-3"
                    img4="Mercado-Liebre-4"
                ></Gallery>
                <motion.div
                    transition={{ duration: 1}}
                    initial= {{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }} 
                    className='lg:w-[40%] flex flex-col items-center h-fit font-play'>
                    <div className='text-blue flex justify-center font-bold'>
                        <p className='text-3xl'>
                            Mercado Liebre
                        </p>
                    </div>
                    <div className='lg:w-[90%] border border-blue'>
                        <div className='font-play flex items-center flex-col m-1'>
                            <p className='text-lg text-blue py-2 text-center'>
                                Un clon front-end de mercado libre.
                                Desarrollado con HTML5, CSS y usando JavaScript para funcionalidades.
                            </p>
                            <div className='flex w-[85%] md:w-[70%] justify-evenly'>
                                <Link 
                                    prop='Ver proyecto.'
                                    link="https://proyecto-mercado-liebre-ypc4.onrender.com"
                                ></Link>
                                |
                                <Link 
                                    prop='Ver codigo.'
                                    link="https://github.com/SebastianRamos01/Proyecto-Mercado-Liebre"
                                ></Link>
                            </div>
                        </div>
                    </div>
                    <ul className='flex justify-evenly p-1'>
                        <li className='m-1'>
                            <div className='text-orange text-3xl '>
                                <ion-icon name="logo-html5"></ion-icon>
                            </div>
                        </li>
                        <li className='m-1'>
                            <div className='text-light-blue text-3xl'>
                                <ion-icon name="logo-css3"></ion-icon>
                            </div>
                        </li>
                        <li className='m-1'>
                            <div className='text-yellow text-3xl'>
                                <ion-icon name="logo-javascript"></ion-icon>
                            </div>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}
