import React from 'react'

export default function Footer() {
  return (
    <footer className='h-screen bg-blue flex justify-center items-center flex-col'>
        <div className='flex flex-col items-center'>
            <div className='text-white text-2xl opacity-50'>
                Your interested?
            </div>
            <div className='text-white text-4xl'>
                Send me a message
            </div>
        </div>
        <form action="" className='w-80 h-fit rounded flex items-center flex-col'>
            <div className='w-3/4'>
                <div className='text-white z-50'>
                    Name
                </div>
                <div className='border border-white'>
                    <input type="text" name="" id="" className='outline-none p-1 bg-blue w-full text-white'/>
                </div>
            </div>
            <div className='w-3/4'>
                <div className='text-white'>
                    Email
                </div>
                <div className='border border-white'>
                    <input type="text" name="" id="" className='outline-none p-1 bg-blue w-full text-white'/>
                </div>
            </div>
            <div className='w-3/4'>
                <div className='text-white'>
                    Message
                </div>
                <div className='border text-white'>
                    <textarea name="" id="" cols="30" rows="10" className='outline-none p-1 bg-blue w-full text-white'></textarea>
                </div>
            </div>
            <div className='w-3/4 m-3'>
                <input type="submit" value="Send message" className='text-white border rounded p-2 w-full hover:bg-white hover:text-blue'/>
            </div>
        </form>
    </footer>
  )
}
