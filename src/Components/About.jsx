import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="mt-24 text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          Deborah is a frontend Engineer and a certified Financial modelling
          valuation analyst with over two years experience that cuts across
          technology and finance.. However She has a keen interest in technology
          and how she can use it to solve problems in her day to day activities.
          Deborah enjoys coding and is engaged in learning web Development.
          Deborah believes in excellency and is open to learn while building the
          required skills to thrive in any organization.
        </p>

        <br />

        <p className="text-xl">
          My stack/technologies:
          <ul style={{listStyle: "none"}}>
            <li>CSS/Sass</li>
            <li>JavaScript</li>
            <li> React</li>
            <li>Git/GitHub</li>
            <li>Styled-Component</li>
            <li>Bootstrap 5</li>
          </ul>
          <p>Let's connect and convert your ideas into real life products.</p>
        </p>
      </div>
    </div>
  );
};

export default About;
