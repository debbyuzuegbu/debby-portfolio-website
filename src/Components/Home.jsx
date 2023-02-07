import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      className="p-8 md:p-0 w-full md:h-screen bg-gradient-to-b from-black via-black to-gray-800 bg-contain"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="pt-16 md:p-0 text-2xl md:text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I am passionate about creating beautiful and performant products with delightful user experiences that helps solve day to day activies. I love to work on web application using technologies like
            React, Tailwind, CSS, HTML, Javascript etc.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl md:mx-auto w-60 h-48 md:w-96 md:h-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;