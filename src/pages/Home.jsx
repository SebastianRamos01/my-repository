import Title from '../components/Title'
import Inner from '../components/Inner'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <Inner>
        <main className='h-screen bg-[#600a18] font-biz text-[#fdb9a9]'>
            <Header></Header>
            <div className='flex justify-center items-center h-full'>
                <h1 className='text-[35px] w-[300px] h-fit flex flex-col gap-1'>
                    <Link className='w-fit ml-[85px]' to={'/work'}>
                        <Title title={"WORK."}></Title>
                    </Link>
                    <Link className='w-fit ml-auto' to={'/about'}>
                        <Title title={"ABOUT."}></Title>
                    </Link>
                    <Link className='w-fit' to={'/contact'}>
                        <Title title={"CONTACT."}></Title>
                    </Link>
                </h1>
            </div>
            <Footer></Footer>
        </main>
    </Inner>
  )
}
