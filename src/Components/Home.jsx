import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="flex h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div>
        <div>
          <h2>I am a Frontend Engineer</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, fuga reiciendis modi, aperiam consequuntur aliquam
            eveniet tempora unde repellendus quaerat nam obcaecati fugit
            mollitia ex voluptatem totam amet quod? Vel?
          </p>
        </div>
        <button>
            Portfolio
            <span>
            <MdOutlineKeyboardArrowRight />
            </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
