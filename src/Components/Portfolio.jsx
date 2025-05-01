import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import carrental from "../assets/portfolio/carrental.png";
import githubfinder from "../assets/portfolio/githubfinder.png";
import luxurystore from "../assets/portfolio/luxurystore.png";
import noteapp from "../assets/portfolio/mini-note-app.png";
import snackorderapp from "../assets/portfolio/snack-order-app.png";
import youtube from "../assets/portfolio/youtube.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Define all portfolio projects
  const allProjects = [
    {
      id: 1,
      src: carrental,
      projectname: "Car Rental Application",
      tab: "_blank",
      description: "A car rental that allows you rent a car at the convenience of your home.",
      demolink: "https://debby-car-rental.vercel.app/home",
      codelink: "https://github.com/debbyuzuegbu/car-rental",
      technologies: ["React", "TailwindCSS", "Vercel", "Git"],
      category: "utility"
    },
    {
      id: 2,
      src: youtube,
      projectname: "Video Application",
      tab: "_blank",
      description:
        "A movie web application where you get information and images on the most trending, popular, top rated, similar movies and TV series.",
      demolink: "https://youtube-clone-c3va.vercel.app/",
      codelink: "https://github.com/debbyuzuegbu/youtube-clone",
      technologies: ["React", "CSS", "Rapid API", "Git", "Vercel"],
      category: "utility"
    },
    {
      id: 3,
      src: luxurystore,
      projectname: "Luxury Store",
      tab: "_blank",
      description: "This is an ecommerce app that uses a dummy API.",
      demolink: "https://luxury-store-git-master-debbyuzuegbu.vercel.app/",
      codelink: "https://github.com/debbyuzuegbu/luxury-store",
      technologies: ["Vue", "Vue Router", "Vuex", "CSS", "Vercel", "Git"],
      category: "ecommerce"
    },
    {
      id: 4,
      src: githubfinder,
      projectname: "Github Finder",
      tab: "_blank",
      description: "A Github finder, that gives you an overview of all the repository in your Github account.",
      demolink: "https://my-repository-website.vercel.app/",
      codelink: "https://github.com/debbyuzuegbu/mygithubfinder",
      technologies: ["React", "CSS", "GitHub API", "Vercel", "Git"],
      category: "utility"
    },
    {
      id: 5,
      src: noteapp,
      projectname: "Note Application",
      tab: "_blank",
      description:
        "A mini notepad application it helps you manage your task and you have cool features like delete and update your application.",
      demolink: "https://todo-app-two-gamma.vercel.app/",
      codelink: "https://github.com/debbyuzuegbu/note-app",
      technologies: ["React", "Style Modules", "Redux Toolkit", "Vercel", "Git"],
      category: "utility"
    },
    {
      id: 6,
      src: snackorderapp,
      projectname: "Snack Order Application",
      tab: "_blank",
      description:
        "A food ordering and delivery web application which possesses a cart.",
      demolink: "https://food-order-app-woad.vercel.app/",
      codelink: "https://github.com/debbyuzuegbu/food-order-app",
      technologies: ["React", "Firebase", "TailwindCSS", "Vercel", "Git"],
      category: "ecommerce"
    },
  ];

  // Filter function
  const handleFilterChange = (newFilter) => {
    setActiveFilter(newFilter);
  };

  // Get filtered projects
  const getFilteredProjects = () => {
    if (activeFilter === "all") {
      return allProjects;
    } else {
      return allProjects.filter(project => project.category === activeFilter);
    }
  };

  const filteredProjects = getFilteredProjects();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div
      id="portfolio"
      className="pt-16 pb-16 p-4 bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <motion.div 
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pt-20 md:pt-0 lg:pt-0 pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">
            Portfolio
          </h2>
          <p className="py-4 text-gray-300">Check out some of my work right here</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button 
            type="button"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeFilter === 'all' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            onClick={() => handleFilterChange('all')}
          >
            All Projects
          </button>
          <button 
            type="button"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeFilter === 'utility' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            onClick={() => handleFilterChange('utility')}
          >
            Utilities
          </button>
          <button 
            type="button"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeFilter === 'ecommerce' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            onClick={() => handleFilterChange('ecommerce')}
          >
            E-commerce
          </button>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        ) : (
          <motion.div 
            key={activeFilter} // Force re-render when filter changes
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 sm:px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="bg-gray-900 rounded-lg overflow-hidden shadow-xl shadow-gray-900 hover:shadow-cyan-500/20 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.src}
                    alt={project.projectname}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">{project.projectname}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 flex flex-col h-64">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.projectname}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-800 px-2 py-1 rounded-full text-gray-300">{tech}</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm flex-grow mb-4">{project.description}</p>
                  
                  <div className="flex gap-3 mt-auto">
                    <a 
                      href={project.demolink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-white text-sm hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Demo <FaExternalLinkAlt />
                    </a>
                    <a 
                      href={project.codelink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-md text-white text-sm hover:bg-gray-600 transition-all duration-300"
                    >
                      Code <FaGithub />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Portfolio;