import React from 'react'

const Footer = () => {
  const imageStyles = "w-[1.5rem] md:w-[2rem] h-[1.5rem] lg:h-[2rem] cursor-pointer"
  return (
    <footer className='relative'>
      <hr className='border-1 border-lightGray border-solid' />
      <aside className='flex flex-col gap-y-8 lg:gap-12 items-center justify-center h-[14rem] sm:h-[20rem] py-1 sm:py-4'>
        <article className='flex gap-8 md:gap-16'>
          <img src="assets/linkedin.png" className={imageStyles} alt="social media" />
          <img src="assets/instagram.png" className={imageStyles} alt="social media" />
          <img src="assets/github.png" className={imageStyles} alt="social media" />
        </article>
        {/* logo */}
        <article>
          <img src="assets/Cyril-Fit-Club.png" className='w-[8rem] md:w-[10rem]' alt="logo" />
        </article>
      </aside>
      <div className="blur w-full max-w-[26rem] h-[25rem] md:h-[25rem] bottom-0 left-[15%]"></div>
      <div className="blur w-full max-w-[32rem] h-[25rem] md:h-[25rem] bottom-0 right-[15%]"></div>
    </footer>
  );
}

export default Footer