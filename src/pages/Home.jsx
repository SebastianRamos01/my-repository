import Title from '../components/Title'
import Inner from '../components/Inner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const parent = {
    animate: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
    }
}

const transition = { duration: .8, ease: [0.76, 0, 0.24, 1]}
const slideUp = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
}

export default function Home() {
  return (
    <Inner>
        <main className='h-[100dvh] bg-[#600a18] font-biz text-[#fdb9a9]'>
            <Header></Header>
            <div className='flex justify-center items-center h-full'>
                <motion.h1 variants={parent} animate='animate' initial='initial' exit='exit' 
                    className='w-[300px] lg:w-[350px] h-fit flex flex-col items-center gap-4'>
                        {
                            ['work', 'about', 'contact'].map((i) => {
                                return (
                                    <motion.div
                                        key={i}
                                        variants={slideUp} 
                                        transition={transition}
                                        className='w-fit'>
                                        <Link to={i}>
                                            <Title 
                                                title={i}
                                            ></Title>
                                        </Link>
                                    </motion.div>)
                            })
                        }
                </motion.h1>
            </div>
            <Footer></Footer>
        </main>
    </Inner>
  )
}
