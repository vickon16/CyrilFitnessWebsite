import { strokeText } from './HightLightText';
import { programsHeader } from './Programs';
import {plansData} from "../data/plansData"
import PlansCard from './PlansCard';

const Plans = () => {
  return (
    <section id="plans" className="pb-8 flex flex-col gap-16 relative">
      <div className="blur w-full max-w-[32rem] h-[35rem] md:h-[25rem] top-[16rem] md:top-[6rem] left-0"></div>
      <div className="blur w-full max-w-[32rem] h-[35rem] md:h-[25rem] top-[55rem] md:top-[10rem] right-0"></div>

      <aside className={programsHeader}>
        <span style={strokeText}>Ready to Start</span>
        <span>Your Journey</span>
        <span style={strokeText}>Now With Us</span>
      </aside>

      <aside className="flex items-center justify-center gap-x-10 gap-y-14 flex-wrap">
        {plansData &&
          plansData.map((plan, i) => (
            <PlansCard key={plan.name + i} {...plan} />
          ))}
      </aside>
    </section>
  );
}

export default Plans