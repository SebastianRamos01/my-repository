import React, { useRef} from 'react'
import emailjs from '@emailjs/browser';

export default function Footer() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h4dk1eb', 'template_w069iov', form.current, 'pQNCBaINLLl9nzZxJ')
        .then((result) => {
            console.log(result.text);
            form.current.reset()
            }, (error) => {
          console.log(error.text);
      });
    }

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
        <form ref={form} onSubmit={sendEmail} action="" className='w-80 h-fit rounded flex flex-col lg:w-5/12 lg:flex-wrap lg:flex-row lg:m-5'>
            <div className='w-full lg:w-1/2 lg:mr-auto lg:pr-1'>
                <div className='text-white w-fit '>
                    Name
                </div>
                <div className='border border-white w-full'>
                    <input type="text" name="user_name" id="" placeholder='Your Name' className='outline-none p-1 bg-blue w-full text-white'/>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:pl-1'>
                <div className='text-white'>
                    Email
                </div>
                <div className='border border-white w-full'>
                    <input type="text" name="user_email" id="" placeholder='Your Email' className='outline-none p-1 bg-blue w-full text-white'/>
                </div>
            </div>
            <div className='w-full'>
                <div className='text-white'>
                    Message
                </div>
                <div className='border text-white w-full'>
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' className='outline-none p-1 bg-blue w-full text-white resize-none'></textarea>
                </div>
            </div>
            <div className='my-3 w-full'>
                <input type="submit" value="Send message" className='text-white border rounded p-2 w-full hover:bg-white hover:text-blue'/>
            </div>
        </form>
    </footer>
  )
}
