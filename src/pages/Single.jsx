import React from 'react'
import { useParams } from 'react-router-dom'
import Inner from '../components/Inner'
import { works } from '../data/data'
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Single() {

    const { title } = useParams()

    const work = works.find((e) => 
        e.title === title
    )

  return (
    <Inner>
        <section className='bg-[#600a18] font-biz text-[#fdb9a9] relative'>
            <Header></Header>
            <div className='px-5 py-12'>
                <div className='w-fit'>
                    <span className='text-[35px]'>
                        {work.title.toUpperCase()}.
                    </span>
                    <div className='h-[2px] w-full bg-[#fdb9a9]'>
                    </div>
                </div>
                <div className='w-full mt-5 border-[#fdb9a9] border-4 h-[610px]'>
                    <img src={`/images/${work.img}`} alt="phone-img"  className='w-full h-full md:hidden'/>
                    <img src={`/images/${work.imgBig}`} alt="desktop-img"  className='w-full h-full hidden md:block'/>
                </div>
                <div className='mt-3'>
                    <p className='font-josefin'>
                        {work.description}
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </section>
    </Inner>
  )
}
