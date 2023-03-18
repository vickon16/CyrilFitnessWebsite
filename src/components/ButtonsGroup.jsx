import React from 'react'

export const buttonStyles =
  "p-2 font-semibold transition-all duration-200 ease-in-out text-sm sm:text-base w-[6rem] sm:w-[8rem] flex items-center justify-center hover:scale-95 whitespace-nowrap ";

const ButtonsGroup = () => {
  return (
    <article className="hero-btns flex gap-4 font-normal flex-wrap justify-center sm:justify-start items-center my-3">
      <button className={buttonStyles + "bg-primaryColor text-white  "}>
        Get Started
      </button>
      <button className={buttonStyles + "bg-transparent border-primaryColor border-[2px] text-white "}>
        Join Now
      </button>
    </article>
  );
}

export default ButtonsGroup