import React, { useState } from 'react'
import { strokeText } from './HightLightText';
import {testimonialsData} from "../data/testimonialsData";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs"
import {motion} from "framer-motion";
import { transition } from './Hero';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const handleLeftClick = () =>
    selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);

  const handleRightClick = () =>
    selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);

  return (
    <section id="testimonials" className="flex gap-x-4 gap-y-6 flex-wrap">
      <aside className="flex lg:flex-1 gap-x-8 gap-y-4 flex-col uppercase text-white">
        <p className="text-primaryColor font-semibold">Testimonials</p>
        <p
          style={strokeText}
          className="font-bold text-[1.5rem] sm:text-[2.2rem] lg:text-[3rem]"
        >
          What they
        </p>
        <p className="font-bold text-[1.5rem] sm:text-[2.2rem] lg:text-[3rem]">
          say about us
        </p>
        <motion.p
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
          className="text-sm sm:text-base normal-case text-justify tracking-normal md:tracking-wide leading-7 md:leading-10"
        >
          {testimonialsData[selected]?.review}
        </motion.p>
        <p>
          <span className="text-primaryColor text-sm sm:text-base">
            {testimonialsData[selected]?.name} -{" "}
            {testimonialsData[selected]?.status}
          </span>
        </p>
      </aside>
      <aside className="w-full h-[500px] lg:h-auto lg:flex-1 relative">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
          className="hidden lg:flex absolute w-[17rem] h-[20rem] right-[9rem] top-[0.9rem] border-primaryColor border-solid border-2 bg-transparent"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transition}
          className="hidden lg:flex absolute w-[17rem] h-[19rem] right-[7rem] top-[4rem]"
          style={{
            background:
              "linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)",
          }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected]?.image}
          className="lg:absolute right-[8rem] top-[2rem] w-[26rem] h-[26rem] lg:w-[17rem] lg:h-[17rem] object-cover"
          alt="selected-img"
        />

        <div className=" flex items-center absolute bottom-[1rem] left-[1rem] md:left-[3rem] gap-6">
          <BsFillArrowLeftCircleFill
            onClick={handleLeftClick}
            className="w-[1.5rem] md:w-[2rem] h-[2rem] cursor-pointer fill-white"
          />
          <BsFillArrowRightCircleFill
            onClick={handleRightClick}
            className="w-[1.5rem] md:w-[2rem] h-[2rem] cursor-pointer fill-white"
          />
        </div>
      </aside>
    </section>
  );
}

export default Testimonials