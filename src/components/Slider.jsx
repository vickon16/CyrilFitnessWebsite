import React from 'react'
import {motion} from "framer-motion";
import { transition } from './Hero';

const Slider = () => {
  return (
    <section className='slider mt-3 md:mt-12 bg-[#363d42] rounded-2xl uppercase text-white relative flex items-center justify-start w-fit py-3 md:py-4 px-4'>
      <motion.div 
        initial={{left : "180px"}}
        whileInView={{left: "8px"}}
        transition={transition}
        className='absolute bg-primaryColor w-12 md:w-20 h-[80%] left-3 rounded-lg md:rounded-2xl z-[1]'></motion.div>
      <span className='z-[2] text-center sm:text-start text-xs md:text-lg'>The best fitness club you have ever seen!!!</span>
    </section>
  )
}

export default Slider