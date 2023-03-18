import React from 'react'
import { strokeText } from './HightLightText';

const Reasons = () => {
  return (
    <section id="reasons" className="flex gap-8 flex-wrap">
      {/* gallery */}
      <aside className="left-side lg:flex-1 grid gap-3 grid-cols-3">
        <img
          src="assets/image1.png"
          className="object-cover h-full"
          alt="reason-img"
          style={{ gridRow: "1/3" }}
        />
        <img
          src="assets/image2.png"
          className="object-cover w-auto h-full "
          alt="reason-img"
          style={{ gridColumn: "2/4" }}
        />
        <img
          src="assets/image3.png"
          className="object-cover w-auto h-full "
          alt="reason-img"
        />
        <img
          src="assets/image4.png"
          className="object-cover w-auto h-full "
          alt="reason-img"
        />
      </aside>

      <aside className="right-side lg:flex-1 uppercase gap-6 flex flex-col">
        <span className="font-bold text-grayColor ">Some reasons</span>

        <article className="text-white text-[1.5rem] sm:text-[2rem] lg:text-[3rem] font-bold">
          <span className="" style={strokeText}>
            Why{" "}
          </span>
          <span className=""> Choose us?</span>
        </article>

        <article className="flex flex-col gap-6">
          <div className="flex gap-4">
            <img src="assets/tick.png" className="w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8" alt="tick img" />
            <span className="text-base sm:text-lg lg:text-2xl text-white">
              Over 140+ Expert Coaches
            </span>
          </div>
          <div className="flex gap-4">
            <img src="assets/tick.png" className="w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8" alt="tick img" />
            <span className="text-base sm:text-lg lg:text-2xl text-white">
              Train smarter and faster than before
            </span>
          </div>
          <div className="flex gap-4">
            <img src="assets/tick.png" className="w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8" alt="tick img" />
            <span className="text-base sm:text-lg lg:text-2xl text-white">
              1 free program for new member
            </span>
          </div>
          <div className="flex gap-4">
            <img src="assets/tick.png" className="w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8" alt="tick img" />
            <span className="text-base sm:text-lg lg:text-2xl text-white">
              reliable partners
            </span>
          </div>
        </article>

        <span className="text-grayColor font-semibold my-3">Our partners</span>

        {/* partners */}
        <article className="flex gap-4">
          <img
            src="assets/nb.png"
            className="text-2xl cursor-pointer"
            alt="partners"
          />
          <img
            src="assets/adidas.png"
            className="text-2xl cursor-pointer"
            alt="partners"
          />
          <img
            src="assets/nike.png"
            className="text-2xl cursor-pointer"
            alt="partners"
          />
        </article>
      </aside>
    </section>
  );
}

export default Reasons