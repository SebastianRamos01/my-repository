import React from 'react'

export default function Works() {
  return (
    <section className='bg-white' id='works-section'>
        <div className='text-4xl text-center font-medium'>
            My Works
        </div>
        <ul className=' my-2'>
            <li className='flex flex-col items-center m-5'>
                <div className='w-11/12 lg:m-1 lg:w-10/12'>
                    <img src="images\Captura de pantalla 2023-07-05 224711.png" alt="" className='w-full'/>
                </div>
                <div className='w-fit flex items-center justify-center p-1 m-2 bg-grey rounded-md'>
                    <a href="https://proyecto-mercado-liebre-ypc4.onrender.com" className='p-1 mx-2 hover:border-b border-blue'>
                        <p className='text-3xl font-semibold'>
                            Mercado Liebre
                        </p>
                    </a>
                    <div className='text-3xl lg:text-4xl h-fit opacity-50 hover:opacity-100'>
                        <a href="https://github.com/SebastianRamos01/Proyecto-Mercado-Liebre" className='flex p-1 h-fit'>
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                </div>
                <div className=' text-center m-3 bg-grey rounded-xl p-2'>
                    <p className='text-xl'>
                        Front-End clone of Mercado Libre
                    </p>
                    <p className='text-lg'>
                        Built with HTML5, CSS and using JS for functionalitys  
                    </p>
                </div>
                <ul className='flex flex-wrap justify-center'>
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
                    <li className='w-fit m-1'>
                        <div className='text-yellow text-4xl'>
                            <ion-icon name="logo-javascript"></ion-icon>
                        </div>
                    </li>
                </ul>
            </li>
            <li className='flex flex-col items-center m-5'>
                <div className='w-11/12'>
                    <img src="images\NailStore-home.png" alt="" className='w-full'/>
                </div>
                <div className='w-fit flex justify-center p-1 m-2 bg-grey rounded-md'>
                    <a href="" className='p-1 mx-2 hover:border-b border-blue'>
                        <p className='text-3xl font-semibold'>
                            Nailstore
                        </p>
                    </a>
                    <div className='text-3xl lg:text-4xl h-fit opacity-50 hover:opacity-100'>
                        <a href="https://github.com/SebastianRamos01/E-commerceNailStore" className='flex p-1 h-fit'>
                            <ion-icon name="logo-github"></ion-icon>
                        </a>
                    </div>
                </div>
                <div className=' text-center m-3 bg-grey rounded-xl p-2'>
                    <p className='text-xl'>
                        An Ecommerce of manicure products
                    </p>
                    <p className=' text-lg'>
                        Development of a web application that is an electronic commerce using HTML, CSS and JavaScript taking practices to make responsive sites for the Frontend.
                        The Backend side was developed in JavaScript with Express, Node.js following MVC practices.
                        Database design in MySql, assembly and organization with Sequelize.
                    </p>
                </div>
                <ul className='flex flex-wrap justify-center'>
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
                    <li className='w-fit m-1'>
                        <div className='text-yellow text-4xl'>
                            <ion-icon name="logo-javascript"></ion-icon>
                        </div>
                    </li>
                    <li className= 'w-fit m-1'>
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
            </li>
        </ul>
    </section>
  )
}
