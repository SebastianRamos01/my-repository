import { motion } from 'framer-motion'
import React, { useState } from 'react'

export default function Gallery({
    img1,
    img2,
    img3,
    img4
}) {

    function Img({source}) {
        return(
            <img 
                src={source} 
                alt="work-image"
                className='w-full rounded-md cursor-pointer' 
            />
        )
    }
    const images = {
        firstImage: `images/${img1}.png`,
        secondImage: `images/${img2}.png`,
        thirdImage: `images/${img3}.png`,
        fourthImage: `images/${img4}.png`,
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
