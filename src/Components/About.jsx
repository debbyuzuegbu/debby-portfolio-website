import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="pt-8 pb-8 p-4 w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-20 md:mt-24 md:mb-36">
          <p className="mt-24 text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <p className="text-2xl md:text-xl mt-5">
            Deborah is a frontend Engineer and a certified Financial modelling
            valuation analyst with over two years experience that cuts across
            technology and finance. She has a keen interest in technology and
            how she can use it to solve problems. Deborah enjoys coding. Able to
            work effectively with team, she has great commununication
            skills and very passionate about aesthestics and responsive websites.
          </p>
          <br />
          <p className="text-2xl md:text-xl">
            My stack/technologies:
            <ul style={{ listStyle: "none" }}>
              <li>CSS/Sass</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git/GitHub</li>
              <li>Styled-Component</li>
            </ul>
            <p className="pb-96 md:p-0">Let's connect and convert your ideas into real life products.</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
