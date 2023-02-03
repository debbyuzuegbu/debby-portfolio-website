import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold sm:text-7xl text-white">
            I am a Frontend Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, fuga reiciendis modi, aperiam consequuntur aliquam
            eveniet tempora unde repellendus quaerat nam obcaecati fugit
            mollitia ex voluptatem totam amet quod? Vel?
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            className="rounded-2xl mx-auto w-1/3"
            src={heroImage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
