import React from 'react'

export default function Footer() {
  return (
    <footer className='h-screen bg-blue flex justify-center flex-col'>
        <div className='text-white ml-4'>
            Send me a message
        </div>
        <form action="" className='w-80 border border-grey h-fit rounded flex items-center flex-col ml-4'>
            <div className='w-3/4'>
                <div className='text-white'>
                    Name
                </div>
                <input type="text" name="" id="" className='outline-none p-1 rounded w-full'/>
            </div>
            <div className='w-3/4'>
                <div className='text-white'>
                    Email
                </div>
                <div className='border-white'>
                    <input type="text" name="" id="" className='outline-none p-1 rounded w-full'/>
                </div>
            </div>
            <div className='w-3/4'>
                <div className='text-white'>
                    Email
                </div>
                <div className='border-white'>
                    <textarea name="" id="" cols="30" rows="10" className='outline-none p-1 rounded w-full'></textarea>
                </div>
            </div>
            <div>
                <input type="submit" value="Send" className='text-white border rounded p-2 m-3'/>
            </div>
        </form>
    </footer>
  )
}
