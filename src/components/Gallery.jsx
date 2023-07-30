import { motion } from 'framer-motion'
import React, { useState } from 'react'

export default function Gallery() {

    function Img({source}) {
        return(
            <img 
                src={source} 
                alt="work-image"
                className='w-full rounded-md' 
            />
        )
    }
    const images = {
        firstImage: 'images/Captura de pantalla 2023-07-05 224711.png',
        secondImage: 'images/Mercado-Liebre-2.png',
        thirdImage: 'images/Mercado-Liebre-3.png',
        fourthImage: 'images/Mercado-Liebre-4.png',
    }
    const [image, setImage] = useState(images.firstImage)
    return (
        <motion.div
            transition={{ duration: 1 }}
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className='md:w-[80%] lg:w-[60%] flex flex-col items-center'>
            <div className='mt-3 md:w-11/12 lg:w-[100%]'>
                <img src={image} alt="work-image" className='w-full rounded-md' />
            </div>
            <ul className='flex w-full justify-center'>
                <li onClick={() => { setImage(images.firstImage) }} className='w-11/12 m-1 lg:w-[150px]'>
                    <Img
                        source={images.firstImage}>
                    </Img>
                </li>
                <li onClick={() => { setImage(images.secondImage) }} className='w-11/12 m-1 lg:w-[150px]'>
                    <Img
                        source={images.secondImage}>
                    </Img>
                </li>
                <li onClick={() => { setImage(images.thirdImage) }} className='w-11/12 m-1 lg:w-[150px]'>
                    <Img
                        source={images.thirdImage}>
                    </Img>
                </li>
            </ul>
        </motion.div>
    )
}
