import React, { useState } from 'react'
import Separator from './Separator'
import { motion } from 'framer-motion'
import Gallery from './Gallery'
import react from '../assets/react.svg'

export default function Works() {
    return (
        <section className='relative flex flex-col items-center bg-white' id='works-section'>
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
                    className='lg:w-[40%] flex flex-col items-center h-fit'>
                    <div className='lg:w-[90%] border border-blue'>
                        <div className='text-blue flex justify-center font-bebas'>
                            <a href="https://proyecto-mercado-liebre-ypc4.onrender.com" className='p-1 hover:border-b border-blue'>
                                <p className='text-3xl '>
                                    In-Universe
                                </p>
                            </a>
                            <div className='text-2xl m-1 h-fit border border-white hover:border-blue rounded-full'>
                                <a href="https://github.com/SebastianRamos01/Proyecto-Mercado-Liebre" className='flex p-1 h-fit'>
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </div>
                        </div>
                        <div className='font-bebas flex items-center flex-col'>
                            <p className='text-xl text-blue py-2 text-center'>
                                In-universe es una aplicacion de posteos sobre el universo, con un diseño simple con colores relacionados con el tema de la aplicacion. Desarrollado con React y Tailwind <br />
                                La misma aun se encuentra en desarrollo, buscando dar mas interactividad a los usuarios.
                            </p>
                            <ul className='flex justify-evenly'>
                                <li className='m-1'>
                                    <img src={react} alt="" className='w-8'/>
                                </li>
                                <li className='m-1 text-xl'>
                                    <p>Tailwind.css</p>
                                </li>
                            </ul>
                        </div>
                    </div>
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
                    className='lg:w-[40%] flex flex-col items-center h-fit'>
                    <div className='lg:w-[90%] border border-blue'>
                        <div className='my-1 text-blue flex justify-center font-bebas'>
                            <a href="" className='p-1 hover:border-b border-blue'>
                                <p className='text-3xl '>
                                    Nailstore
                                </p>
                            </a>
                            <div className='text-2xl m-1 h-fit hover:bg-blue hover:text-white rounded-full'>
                                <a href="https://github.com/SebastianRamos01/E-commerceNailStore" className='flex p-1 h-fit'>
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </div>
                        </div>
                        <div className='font-bebas flex items-center flex-col my-1'>
                            <p className='text-xl text-blue py-2 text-center'>
                                An Ecommerce of manicure products.
                                Development of a web application that is an electronic commerce using HTML, CSS and JavaScript taking practices to make responsive sites for the Frontend.
                                The Backend side was developed in JavaScript with Express, Node.js following MVC practices.
                                Database design in MySql, assembly and organization with Sequelize.
                            </p>
                            <ul className='flex flex-wrap justify-evenly'>
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
                        </div>
                    </div>
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
                    className='lg:w-[40%] flex flex-col items-center h-fit'>
                    <div className='lg:w-[90%] border border-blue'>
                        <div className='text-blue flex justify-center font-bebas'>
                            <a href="https://proyecto-mercado-liebre-ypc4.onrender.com" className='p-1 hover:border-b border-blue'>
                                <p className='text-3xl '>
                                    Mercado Liebre
                                </p>
                            </a>
                            <div className='text-2xl m-1 h-fit hover:bg-blue hover:text-white rounded-full'>
                                <a href="https://github.com/SebastianRamos01/Proyecto-Mercado-Liebre" className='flex p-1 h-fit'>
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </div>
                        </div>
                        <div className='font-bebas flex items-center flex-col'>
                            <p className='text-xl text-blue py-2 text-center'>
                                Front-End clone of Mercado Libre.
                                Built with HTML5, CSS and using JavaScript for functionalitys.
                            </p>
                            <ul className='flex justify-evenly'>
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
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
