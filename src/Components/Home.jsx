import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I am a Frontend Engineer</h2>
          <p className="text-gray-500 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, fuga reiciendis modi, aperiam consequuntur aliquam
            eveniet tempora unde repellendus quaerat nam obcaecati fugit
            mollitia ex voluptatem totam amet quod? Vel?
          </p>
          <div>
            <button>
              Portfolio
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img className="rounded-2xl mx-auto w-1/4 md:w-full" src={heroImage} alt="my profile"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
