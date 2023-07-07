import React from 'react'

export default function Works() {
  return (
    <section className='bg-white' id='works-section'>
        <div className='text-4xl text-center font-medium'>
            My Works
        </div>
        <ul className=' my-2'>
            <li className='flex flex-col items-center my-2'>
                <div className='w-full flex justify-between'>
                    <p className='text-3xl mx-4 lg:mx-8'>
                        Mercado Liebre
                    </p>
                    <div className='mx-4 flex lg:text-4xl'>
                        <div className='text-3xl'>
                            <a href="">
                                <ion-icon name="link-outline"></ion-icon>
                            </a>
                        </div>
                        <div className='text-3xl lg:text-4xl'>
                            <a href="https://github.com/SebastianRamos01/Proyecto-Mercado-Liebre" className='px-2'>
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 lg:m-1'>
                    <img src="images\Captura de pantalla 2023-07-05 224711.png" alt="" className='w-full'/>
                </div>
                <div>
                    <p className='text-xl'>
                        Front-End clone of Mercado Libre
                    </p>
                </div>
                <ul className='flex flex-wrap justify-center'>
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
                            JavaScript
                        </p>
                    </li>
                </ul>
            </li>
            <li className='flex flex-col items-center'>
                <div className='w-full flex justify-between'>
                    <p className='text-3xl mx-4 lg:mx-8'>
                        NailStore
                    </p>
                    <div className='mx-4 flex'>
                        <div className='text-3xl lg:text-4xl'>
                            <a href="">
                                <ion-icon name="link-outline"></ion-icon>
                            </a>
                        </div>
                        <div className='text-3xl lg:text-4xl'>
                            <a href="https://github.com/SebastianRamos01/E-commerceNailStore" className='px-1'>
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-11/12'>
                    <img src="images\NailStore-home.png" alt="" className='w-full'/>
                </div>
                <div className=''>
                    <p className='text-xl'>
                        An Ecommerce of manicure products
                    </p>
                </div>
                <ul className='flex flex-wrap justify-center'>
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
                            Node.js
                        </p>
                    </li>
                    <li className='bg-blue w-fit m-1'>
                        <p className='text-white p-1 font-semibold'> 
                            Express.js
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
                </ul>
            </li>
        </ul>
    </section>
  )
}
