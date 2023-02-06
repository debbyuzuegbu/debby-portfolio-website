import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Deborah is a certified Financial modelling valuation analyst, with
          over two years experience that cuts across logistics and finance…
          However with a keen interest in technology and how she can use it to
          solve problems in her day to day activities… Deborah enjoys coding and
          is engaged in learning web Development. Deborah believes in excellency
          and is open to unlearn, learn while building the required skills to
          thrive in a finTech space.
        </p>

        <br />

        <p className="text-xl">
          Frontend engineer passionate about building world class web
          applications. Has a keen interest in technology and how she can use it
          to solve problems in her day-to-day activities. My stack/technologies:
          • CSS/Sass • JavaScript • Bootstrap 5 • Styled-Component • React.js •
          Git/GitHub Let's connect and convert your ideas into real life
          products.
        </p>
      </div>
    </div>
  );
};

export default About;
