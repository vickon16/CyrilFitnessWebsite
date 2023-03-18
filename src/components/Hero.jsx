import { Figures, Header, HightLightText, Slider, ButtonsGroup } from "./";
import { buttonStyles } from "./ButtonsGroup";
import {motion} from "framer-motion";

export const transition = { type: "spring", duration: 3 };

const Hero = () => {
  return (
    <section
      id="home"
      className="hero flex-wrap lg:flex-nowrap flex flex-col lg:flex-row justify-between w-full "
    >
      <div className="blur w-full max-w-[30rem] h-[40rem] left-0"></div>

      {/* left Hero Section */}
      <aside className="h-full py-8 pt-5 flex-[3] flex flex-col gap-8">
        <Header />
        <Slider />

        {/* hero heading */}
        <HightLightText textArr={["Shape", "Your", "Ideal", "Body"]} />
        <Figures />
        <ButtonsGroup />
      </aside>

      {/* Right Hero Section */}
      <aside className="flex sm:hidden md:hidden lg:flex flex-1 min-h-[580px] bg-opacity-90 relative bg-primaryColor px-2">
        <button
          className={
            buttonStyles + "bg-white text-sm absolute right-12 top-4 text-black "
          }>Join Now
        </button>

        {/* heart */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="flex flex-col gap-3 bg-darkGrey w-fit p-2 sm:p-4 items-start rounded-md absolute ml-4 lg:right-28 top-20 select-none"
        >
          <img src="assets/heart.png" alt="heart-rate" className="w-5 sm:w-8" />
          <span className="text-grayColor text-xs sm:text-sm">Heart Rate</span>
          <span className="text-lightGray text-sm sm:text-xl">102 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <div>
          <div className="absolute w-[14rem] sm:w-[16rem] md:w-[20rem] lg:w-[25rem] xl:w-[35rem] z-[2] top-48 sm:right-4 lg:right-32 xl:right-48">
            <img
              src="assets/hero_image1.png"
              alt="hero-img"
              className=" w-full h-full object-cover"
            />
          </div>
          <motion.div
            initial={{ right: "10rem" }}
            whileInView={{ right: "23rem" }}
            transition={transition}
            className="hidden lg:flex absolute z-[1] top-48 right-10 lg:right-[300px] xl:right-[380px] w-[12rem] xl:w-[20rem]"
          >
            <img
              src="assets/hero_image_back.png"
              className="w-full h-full object-cover"
              alt="hero-img-back"
            />
          </motion.div>
        </div>

        {/* calories */}
        <motion.div
          initial={{ right: "-6rem" }}
          whileInView={{ right: "1rem" }}
          transition={transition}
          className="calories flex absolute bottom-[0.8rem] lg:right-[2rem] gap-4 bg-caloryCard rounded-md p-4 xs:w-[200px]"
        >
          <img src="assets/calories.png" className="w-[25px] sm:w-[35px] lg:w-[40px]" alt="calories" />
          <p className="flex flex-col justify-between">
            <span className="text-grayColor text-xs sm:text-sm">Calories Burned</span>
            <span className="text-white text-base sm:text-xl">189 Cal</span>
          </p>
        </motion.div>
      </aside>
    </section>
  );
}

export default Hero