import React from "react";
import africommerce from "../assets/portfolio/africommerce.png";
import githubfinder from "../assets/portfolio/githubfinder.png";
import trackerapp from "../assets/portfolio/income-tracker-app.png";
import noteapp from "../assets/portfolio/mini-note-app.png";
import snackorderapp from "../assets/portfolio/snack-order-app.png";
import youtube from "../assets/portfolio/youtube.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: africommerce,
      codelink: 'https://github.com/debbyuzuegbu/africommerce-saas',
      demolink: 'https://africommerce-saas.vercel.app/',
    },
    {
      id: 2,
      src: githubfinder,
      codelink: 'https://github.com/debbyuzuegbu/MyRepositoryWebsite',
      demolink: 'https://my-repository-website.vercel.app/', 
    },
    {
      id: 3,
      src: trackerapp,
      codelink: 'https://github.com/debbyuzuegbu/income-tracker',
      demolink: 'https://income-tracker-app.vercel.app/',
    },
    {
      id: 4,
      src: noteapp,
      codelink: 'https://github.com/debbyuzuegbu/todo-app',
      demolink: 'https://todo-app-two-gamma.vercel.app/',
    },
    {
      id: 5,
      src: snackorderapp,
      codelink: 'https://github.com/debbyuzuegbu/restaurant-website',
      demolink: 'https://food-order-app-woad.vercel.app/',
    },
    {
      id: 6,
      src: youtube,
      codelink: 'https://github.com/debbyuzuegbu/youtube-clone',
      demolink: 'https://youtube-clone-c3va.vercel.app/',
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-20 pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demolink, codelink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demolink}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={codelink}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;