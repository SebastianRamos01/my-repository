import React from 'react'

export default function Footer() {
  return (
    <footer className='h-screen bg-blue flex justify-center items-center flex-col lg:flex-row lg:justify-evenly' id='contact-section'>
        <div className='flex flex-col items-center'>
            <div className='text-white text-2xl opacity-50'>
                Your interested?
            </div>
            <div className='text-white text-4xl'>
                Send me a message!
            </div>
        </div>
        <form action="" className='w-80 h-fit rounded flex flex-col lg:w-5/12 lg:flex-wrap lg:flex-row lg:m-5'>
            <div className='w-full lg:w-5/12 lg:mr-auto'>
                <div className='text-white w-fit'>
                    Name
                </div>
                <div className='border border-white w-full'>
                    <input type="text" name="" id="" className='outline-none p-1 bg-blue w-full text-white'/>
                </div>
            </div>
            <div className='w-full lg:w-5/12'>
                <div className='text-white'>
                    Email
                </div>
                <div className='border border-white w-full'>
                    <input type="text" name="" id="" className='outline-none p-1 bg-blue w-full text-white lg:w-1/2'/>
                </div>
            </div>
            <div className='w-full'>
                <div className='text-white'>
                    Message
                </div>
                <div className='border text-white w-full'>
                    <textarea name="" id="" cols="30" rows="10" className='outline-none p-1 bg-blue w-full text-white resize-none'></textarea>
                </div>
            </div>
            <div className='my-3 w-full'>
                <input type="submit" value="Send message" className='text-white border rounded p-2 w-full hover:bg-white hover:text-blue'/>
            </div>
        </form>
    </footer>
  )
}
