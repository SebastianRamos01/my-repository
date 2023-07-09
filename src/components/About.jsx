import React from 'react'

export default function About() {
  return (
    <>
        <section className='bg-white' id="about-section">
            <div className='flex flex-col items-center lg:flex-row'>
                <div className='w-fit h-fit m-6 top-9'>
                    <div className='w-80 h-fit'>
                        <img src="images\IMG_20230706_192946829_HDR_2-removebg-preview.png" alt="" className='h-full w-full rounded-r-3xl'/>
                    </div>
                </div>
                <div className= 'text-center m-3'>
                    <div className='text-4xl text-center font-medium my-2'>
                        About Me
                    </div>
                    <div className='bg-grey p-1 rounded-l-3xl'>
                        <p className='text-blue text-2xl m-2'>
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
                </div>
            </div>
        </section>
    </>
  )
}
