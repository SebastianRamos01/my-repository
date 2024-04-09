import React from 'react'
import Inner from '../components/Inner'
import Card from '../components/Card'
import { works } from '../data/data'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Work() {
  return (
    <Inner>
        <section className='bg-[#600a18] font-biz text-[#fdb9a9] h-screen'>
            <Header></Header>
            <div className='px-5 flex items-center justify-center h-full flex-col'>
                {works.map((work, i) => {
                    return (
                            <Link
                                to={`/work/${work.title}`}
                                key={i}
                                className='w-full'
                                >
                                <Card
                                    title={work.title.toUpperCase()}
                                >
                                </Card>
                            </Link>
                    )
                })}
            </div>
            <Footer></Footer>
        </section>
    </Inner>
  )
}
