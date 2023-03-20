import React from "react";
import carrental from "../assets/portfolio/carrental.png";
import githubfinder from "../assets/portfolio/githubfinder.png";
import luxurystore from "../assets/portfolio/income-tracker-app.png";
import noteapp from "../assets/portfolio/mini-note-app.png";
import snackorderapp from "../assets/portfolio/snack-order-app.png";
import youtube from "../assets/portfolio/youtube.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: carrental,
      projectname: "Car Rental Application",
      tab: "_blank",
      description: "A car rental that allows you rent a car at the convenience of your home. Stack/Tools: ReactJs, TailwindCSS, Vercel, Git",
      demolink: "https://debby-car-rental.vercel.app/home",
    },
    {
      id: 2,
      src: youtube,
      projectname: "Video Application",
      tab: "_blank",
      description:
        "A movie web application where you get information and images on the most trending, popular, top rated, similar movies and TV series. Stack/Tools: Reactjs, CSS, Rapid API, Git, Vercel",
      demolink: "https://youtube-clone-c3va.vercel.app/",
    },
    {
      id: 3,
      src: luxurystore,
      projectname: "Luxury Store",
      tab: "_blank",
      description: "This is an ecommerce app that uses a a dummy api. Stacks/Tools: vue, vuerouter, vuex, CSS, Vercel, Git",
      demolink: "https://luxury-store-git-master-debbyuzuegbu.vercel.app/",
    },
    {
      id: 4,
      src: githubfinder,
      projectname: "Github Finder",
      tab: "_blank",
      description: "A Github finder, that gives you an overview of all the repository in your Github account. Stack/Tools: Reactjs, CSS, Vercel, Git",
      demolink: "https://my-repository-website.vercel.app/",
    },
   
    {
      id: 5,
      src: noteapp,
      projectname: "Note Application",
      tab: "_blank",
      description:
        "A mini notepad application it helps you manage your task and you have cool features like delete and update your application. Stacks/Tools: Reactjs, Styles Modules, Redux Toolkit, Vercel, Git",
      demolink: "https://todo-app-two-gamma.vercel.app/",
    },
    {
      id: 6,
      src: snackorderapp,
      projectname: "Snack Order Application",
      tab: "_blank",
      description:
        "A food ordering and delivery web application which possesses a cart. Stack/Tools: Reactjs, Firebase, TailwindCSS, Vercel, Git",
      demolink: "https://food-order-app-woad.vercel.app/",
    },
    
  ];

  return (
    <div
      id="portfolio"
      className="pt-8 pb-8 p-4 bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pt-20 md:pt-0 lg:pt-0 pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 md:px-12 sm:px-0">
          {portfolios.map(({ id, src, demolink, projectname, description, tab }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-xl items-center">
                <h3 className="flex text-center items-center justify-center py-4 px-2">
                  {projectname}
                </h3>
                <p className="flex text-center text-sm p-2">{description}</p>
              </div>

              <div className="flex items-center justify-center box-border">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a target={tab} href={demolink}>Demo</a>
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
