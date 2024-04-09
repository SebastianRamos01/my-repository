import Inner from '../components/Inner'
import { works } from '../data/data'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import { motion } from 'framer-motion'

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

export default function Work() {
  return (
    <Inner>
        <section className='bg-[#600a18] font-biz text-[#fdb9a9] h-screen'>
            <Header></Header>
            <div className='px-5 flex items-center justify-center h-full flex-col'>
                {works.map((work, i) => {
                    return (
                            <motion.div
                                variants={perspective}
                                custom={i}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                                className='w-full lg:w-fit'
                            >
                                <Link
                                    to={`/work/${work.title}`}
                                    key={i}
                                    className='w-full text-[35px] lg:text-[40px]'
                                    >
                                    <Title
                                        title={work.title.toUpperCase()}
                                    >
                                    </Title>
                                </Link>
                            </motion.div>
                    )
                })}
            </div>
            <Footer></Footer>
        </section>
    </Inner>
  )
}
