import Inner from '../components/Inner'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const perspective = {
    initial: {
        opacity: 0
    },
    enter: (i) => ({
        opacity: 1,
        transition: {
            delay: 0.5 + (i * 0.1)
        }
    }),
    exit: {
        opacity: 0,
    }
}

const text = "Hello!! I’m front-end developer and web designer who is passionate in creating elegant and creative stuff."
const words = text.split(" ")

export default function Home() {
  return (
    <Inner>
        <Header></Header>
        <main className='bg-[#F4F4F2] font-roboto text-[#2D2926] px-5'>
            <section className='flex items-end h-[100dvh]'>
                <h2 className='flex flex-wrap my-5'>
                    {words.map((word, i) => {
                        const isTargetPhrase = i >= 2 && i <= 6;
                        return (
                            <motion.p 
                                variants={perspective}
                                custom={i}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                                key={i} 
                                className={`font-thin text-3xl mr-1 leading-tight ${isTargetPhrase ? 'underline decoration-1 underline-offset-4' : ''}`}>
                                {word}
                        </motion.p>)
                    })}
                </h2>
            </section>
            <section className='flex flex-col gap-4'>
                <div className='bg-[#e3e3de] flex justify-center rounded'>
                    <div className='w-1/2 py-3'>
                        <img src="/images/ime-phone.png" alt="" />
                    </div>
                </div>
                <div className='bg-[#e3e3de] flex justify-center rounded'>
                    <div className='w-1/2 py-3'>
                        <img src="/images/in-universe-phone.png" alt="" />
                    </div>
                </div>
                <div className='bg-[#e3e3de] flex justify-center rounded'>
                    <div className='w-1/2 py-3'>
                        <img src="/images/nailstore-phone.png" alt="" />
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </main>
    </Inner>
  )
}
