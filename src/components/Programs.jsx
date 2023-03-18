import React from 'react'
import { strokeText } from './HightLightText'
import {programsData} from "../data/programsData"
import { ProgramsCategory } from '.';

export const programsHeader = "program-header flex-wrap sm:flex-nowrap flex justify-center text-white uppercase gap-x-12 gap-y-4 md:gap-20 lg:gap-28 font-bold tracking-wide text-[1.5rem] text-center md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem]"

const Programs = () => {
  return (
    <section id="programs" className="flex flex-col gap-8">
      {/* header */}
      <aside className={programsHeader}>
        <span style={strokeText}>Explore our</span>
        <span> Programs </span>
        <span style={strokeText}> to shape you</span>
      </aside>

      <aside className='programs-category flex gap-4 flex-wrap justify-center'>
        {programsData.map(program => (
          <ProgramsCategory key={program.id} {...program}/>
        ))}
      </aside>
    </section>
  );
}

export default Programs