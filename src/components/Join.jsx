import React, { useRef } from 'react'
import { buttonStyles } from './ButtonsGroup';
import { strokeText } from './HightLightText';
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_45paadb', 'template_p00n6ze', form.current, process.env.REACT_APP_API_PUBLIC_KEY)
  };

  return (
    <section id="join" className="flex gap-8 justify-between my-8 w-full flex-wrap">
      <aside className=" text-white text-[1.3rem] sm:text-[1.8rem] md:text-[2.5rem] xl:text-[3rem] font-bold uppercase relative">
        <hr className='absolute w-[11rem] border-primaryColor rounded-md my-[-10px]' />
        <div className='flex gap-4'>
          <span style={strokeText}>Ready to</span>
          <span>Level Up</span>
        </div>
        <div className='flex gap-4'>
          <span>Your Body</span>
          <span style={strokeText}>With us?</span>
        </div>
      </aside>
      <aside className='flex items-center'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-wrap w-full max-w-[500px] gap-x-12 gap-y-4 bg-grayColor py-4 px-4 md:px-8'>
          <input type="email" name="email" placeholder='Enter your email address...' className='w-full bg-transparent border-none outline-none text-lightGray placeholder:text-lightGray text-base md:text-xl' />
          <button className={buttonStyles + `bg-primaryColor text-white`}>Join</button>
        </form>
      </aside>
    </section>
  );
}

export default Join