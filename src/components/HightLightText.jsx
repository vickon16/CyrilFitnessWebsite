import React from 'react'

export const strokeText = {color : "transparent", fontFamily: "Arial, Helvetica, sans-serif", WebkitTextStrokeWidth : "1px", WebkitTextStrokeColor : "white"}

const HightLightText = ({textArr}) => {

  return (
    <article className="hero-text flex flex-col text-center xs:text-start gap-x-5 gap-y-3 uppercase text-[2.2rem] sm:text-[3.5rem] md:text-[4.2rem] font-bold text-white " style={{textOverflow: "inherit"}}>
        <p>
          <span style={strokeText}>{textArr[0] + " "}</span>
          <span>{textArr[1] + " "}</span>
        </p>
        <p><span>{textArr[2] + " "} {textArr[3] + " "}</span></p>
        <p className='text-sm sm:text-base font-light tracking-wide w-full md:w-[60%] capitalize'>Here!!!, We will assist you to build and shape your ideal body structure and live your life to the fullest.</p>
    </article>
  )
}

export default HightLightText