import { buttonStyles } from './ButtonsGroup';

const PlansCard = ({name, price, features, icon}) => {
  return (
    <article className="plan flex flex-col bg-caloryCard text-white gap-x-8 gap-y-4 p-6 w-72 rounded-md cursor-pointer hover:scale-[98%] transition-all duration-200 ease-in-out select-none">
      {icon("w-8 h-8 fill-primaryColor")}
      <span className='text-xl font-bold'>{name}</span>
      <span className='text-[2.5rem] font-semibold'>$ {price}</span>

      {/* plan features */}
      <article className="features flex flex-col gap-4">
        {features.map((feature, i) => (
          <div className="feature flex items-center gap-3" key={feature + i}>
            <img src="assets/whiteTick.png" className='w-4' alt="tick" />
            <span>{feature}</span>
          </div>
        ))}
      </article>

      <p className='text-sm'>See more benefits {"==>"} </p>

      <button className={buttonStyles + `border-2 !w-full`}>Join Now</button>
    </article>
  );
}

export default PlansCard