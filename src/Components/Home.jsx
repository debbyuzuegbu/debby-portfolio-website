import React, { useState, useEffect } from "react";
import HeroImage from "../assets/heroImage.jpg";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import the react-scroll Link component
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

const Home = () => {
  // Typewriter effect for roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ["Frontend Developer"];

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));

          if (displayedText.length === currentRole.length) {
            // Pause at the end of typing
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));

          if (displayedText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [displayedText, roleIndex, isDeleting, roles]);

  // Floating tech icons
  const techIcons = [
    { name: "React", delay: 0 },
    { name: "HTML", delay: 0.2 },
    { name: "CSS", delay: 0.4 },
    { name: "JavaScript", delay: 0.6 },
    { name: "Tailwind", delay: 0.8 },
    { name: "Git", delay: 1.0 },
  ];

  return (
    <div
      id="home"
      className="relative w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 overflow-hidden"
    >
      {/* Particle background effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-500"
            style={{
              width: Math.random() * 10 + 2 + "px",
              height: Math.random() * 10 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Tech Icons floating animation */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
        {techIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-xs px-2 py-1 bg-gray-800/50 rounded-full text-cyan-400 font-mono"
            initial={{
              x:
                window.innerWidth / 2 + Math.random() * (window.innerWidth / 2),
              y: window.innerHeight + 50,
              opacity: 0,
            }}
            animate={{
              y: -50,
              opacity: [0, 1, 1, 0],
              x: `calc(50vw + ${Math.random() * 50}vw)`,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              delay: icon.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {icon.name}
          </motion.div>
        ))}
      </div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div
          className="flex flex-col justify-center h-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Greeting */}
          <motion.p
            className="text-gray-400 text-lg mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm{" "}
            <span className="text-cyan-400 font-semibold">Deborah</span>
          </motion.p>

          <h2 className="pt-2 md:pt-4 md:p-0 text-4xl sm:text-7xl font-bold text-white">
            I'm a{" "}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                {displayedText}
              </span>
              <span className="absolute -right-2 top-0 text-cyan-500 animate-pulse">
                |
              </span>
            </span>
          </h2>

          <motion.p
            className="text-gray-300 py-4 md:max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I transform ideas into elegant digital experiences. With a focus on
            clean code and intuitive design, I build responsive web applications
            that solve real problems. My expertise in modern frontend
            technologies brings your vision to life with style and
            functionality.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 relative z-30" // z-index for clickability
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* React-scroll Link Component - UPDATED PART */}
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80} // Adjust based on your header height
              duration={500}
              delay={0}
              isDynamic={true} // Important for dynamic content
              ignoreCancelEvents={false}
              className="group flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 cursor-pointer"
              onClick={() => console.log("Portfolio link clicked")} // Debug log
            >
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="ml-1" />
              </motion.span>
            </Link>

            {/* Resume download link */}
            <a
              href="/resume.pdf" 
              download="Deborah_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                console.log("Resume link clicked"); // Debug log
              }}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300"
            >
              <FaFileDownload />
              Resume
            </a>

            <div className="flex gap-2 md:hidden">
              <a
                href="https://github.com/debbyuzuegbu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/deborah-chinyere-uzuegbu/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex gap-4 items-center">
              <div className="w-12 h-0.5 bg-gray-500"></div>
              <span className="text-gray-400 text-sm">Follow me on</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/debbyuzuegbu"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/deborah-chinyere-uzuegbu/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative group">
            {/* Subtle border glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/40 to-blue-500/40 blur-xl opacity-30 animate-pulse"></div>

            {/* Image */}
            <img
              src={HeroImage}
              alt="my profile"
              className="relative z-10 rounded-2xl border-2 border-gray-800 shadow-2xl max-w-xs object-cover transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>

      {/* Simple scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.div
          className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-transparent rounded-full mx-auto"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default Home;