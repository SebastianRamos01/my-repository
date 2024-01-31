import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function Form() {
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
    <motion.form
        transition={{ duration: 1.5}}
        initial={{ opacity:0 }}
        whileInView={{ x: 0, opacity:1 }}
        ref={form} 
        onSubmit={sendEmail} 
        action="" 
        className='w-full px-5 rounded flex gap-1 lg:gap-[10px] flex-col lg:w-5/12 lg:flex-wrap lg:flex-row lg:m-5 font-play'>
            <div className='w-full lg:w-[49%] border-b border-blue-950'>
                <input type="text" name="user_name" id="" placeholder='Name' className='outline-none p-1 w-full text-blue-950 bg-transparent'/>
            </div>
            <div className='w-full lg:w-[49%] border-b border-blue-950'>
                <input type="text" name="user_email" id="" placeholder='Email' required className='outline-none p-1 w-full text-blue-950 bg-transparent'/>
            </div>
            <div className='w-full'>
                <div className='text-blue w-full border-b border-blue-950'>
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Message.' className='outline-none p-1 w-full text-blue resize-none bg-transparent'></textarea>
                </div>
            </div>
            <div className='w-full'>
                <input type="submit" value="Send Message" className='text-[#f3e8ff] rounded p-2 w-full bg-gradient-to-r from-orange-400 to bg-orange-500 hover:bg-gradient-to-r hover:from-orange-400 to hover:bg-orange-600 cursor-pointer'/>
            </div>
        </motion.form>
  )
}
