import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import {motion} from "framer-motion"
import {Link} from "react-scroll"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const headerListStyles =
    "cursor-pointer hover:text-primaryColor text-base md:text-lg whitespace-nowrap";

  const navListStyles = "cursor-pointer hover:text-primaryColor text-xl"
  
  return (
    <header className="w-full flex items-center justify-between py-4 px-3">
      <img
        src="assets/Cyril-Fit-Club.png"
        className="w-28 md:w-44 lg:w-56 md:h-[4rem] lg:h-[5rem] mr-10"
        alt="logo"
      />

      <GiHamburgerMenu
        className="flex md:hidden text-white text-[2rem] cursor-pointer"
        onClick={() => setIsNavOpen(true)}
      />

      <ul className="header-menu hidden md:flex gap-7 xl:gap-9 text-white ">
        <li className={headerListStyles}>Home</li>
        <li className={headerListStyles}>Programs</li>
        <li className={headerListStyles}>Plans</li>
        <li className={headerListStyles}>Why us</li>
        <li className={headerListStyles}>Testimonials</li>
      </ul>

      {/* for small screen */}
      {isNavOpen && (
        <motion.ul
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className={`fixed md:hidden top-0 right-0 w-full max-w-[300px] h-screen z-[10] bg-secondaryColor pt-32 pb-2 px-4 gap-12 flex flex-col text-white text-center`}
        >
          <li className={navListStyles}>
            <Link
              to="home"
              span={true}
              smooth={true}
              onClick={() => setIsNavOpen(false)}
            >Home
            </Link>
          </li>
          <li className={navListStyles}>
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setIsNavOpen(false)}
            >Programs
            </Link>
          </li>
          <li className={navListStyles}>
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setIsNavOpen(false)}
            >Plans
            </Link>
          </li>
          <li className={navListStyles}>
            <Link
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setIsNavOpen(false)}
            >Why us
            </Link>
          </li>
          <li className={navListStyles}>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setIsNavOpen(false)}
            >Testimonials
            </Link>
          </li>
          <FaTimes
            className="absolute top-6 right-6 text-2xl"
            onClick={() => setIsNavOpen(false)}
          />
        </motion.ul>
      )}
    </header>
  );
}

export default Header