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
        initial={{ x: 60, opacity:0 }}
        whileInView={{ x: 0, opacity:1 }}
        ref={form} 
        onSubmit={sendEmail} 
        action="" 
        className='w-60 h-fit rounded flex flex-col lg:w-5/12 lg:flex-wrap lg:flex-row lg:m-5'>
            <div className='w-full lg:w-1/2 lg:mr-auto lg:pr-1'>
                <div className='text-blue w-fit font-bebas'>
                    Nombre
                </div>
                <div className='border border-blue w-full'>
                    <input type="text" name="user_name" id="" placeholder='Un Nombre' className='outline-none p-1 bg-white w-full text-blue'/>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:pl-1'>
                <div className='text-blue font-bebas'>
                    Email
                </div>
                <div className='border border-blue w-full'>
                    <input type="text" name="user_email" id="" placeholder='Un Email' required className='outline-none p-1 bg-white w-full text-blue'/>
                </div>
            </div>
            <div className='w-full'>
                <div className='text-blue font-bebas'>
                    Mensaje
                </div>
                <div className='border text-blue w-full'>
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Tu mensaje.' className='outline-none p-1 bg-white w-full text-blue resize-none'></textarea>
                </div>
            </div>
            <div className='my-3 w-full font-bebas'>
                <input type="submit" value="Mandar Mensaje" className='text-blue border rounded p-2 w-full hover:bg-blue hover:text-white'/>
            </div>
        </motion.form>
  )
}
