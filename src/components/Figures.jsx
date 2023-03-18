import React from 'react'
import CountUp from "react-countup";

const Figures = () => {
  return (
    <article className="flex gap-3 sm:gap-6 items-center justify-center sm:justify-start text-center flex-wrap">
      <div className="flex flex-col gap-2 p-3 rounded-md bg-[#363d42] ">
        <CountUp start={0} end={141} delay={1} prefix="+">
          {({ countUpRef }) => (<p ref={countUpRef} className="text-white text-xl md:text-3xl" />)}
        </CountUp>
        <p className="text-grayColor text-xs sm:text-sm capitalize">
          Expert coaches
        </p>
      </div>
      <div className="flex flex-col gap-2 p-3 rounded-md bg-[#363d42] ">
        <CountUp start={0} end={262} delay={2} prefix="+">
          {({ countUpRef }) => (<p ref={countUpRef} className="text-white text-xl md:text-3xl" />)}
        </CountUp>
        <p className="text-grayColor text-xs sm:text-sm capitalize">
          members joined
        </p>
      </div>
      <div className="flex flex-col gap-2 p-3 rounded-md bg-[#363d42] ">
        <CountUp start={0} end={50} delay={3} prefix="+">
          {({ countUpRef }) => (<p ref={countUpRef} className="text-white text-xl md:text-3xl" />)}
        </CountUp>
        <p className="text-grayColor text-xs sm:text-sm capitalize">
          fitness programs
        </p>
      </div>
    </article>
  );
}

export default Figures