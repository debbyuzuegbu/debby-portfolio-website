import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaFingerprint,
} from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineGlobeAlt } from "react-icons/hi";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiMaterialui,
  SiChakraui,
} from "react-icons/si";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const tabs = [
    { id: "story", label: "My Journey", icon: <FaBriefcase /> },
    { id: "expertise", label: "Tech Stack", icon: <FaLaptopCode /> },
    { id: "experience", label: "Experience", icon: <HiOutlineGlobeAlt /> },
  ];

  // Work experience timeline
  const workExperience = [
    {
      period: "Oct 2023 - Present",
      role: "Frontend Engineer",
      company: "Access Bank",
      location: "Lagos, Nigeria",
      achievements: [
        "Developing PWA alternatives for USSD transactions",
        "Building real-time notification systems",
        "Optimizing platform performance and scalability",
        "Implementing secure transaction channels",
      ],
      technologies: ["React", "NextJS", "TypeScript", "Azure"],
    },
    {
      period: "May 2023 - Oct 2023",
      role: "Frontend Engineer",
      company: "Techchak",
      location: "Texas, US (Remote)",
      achievements: [
        "Integrated payment systems with Stripe and Paystack",
        "Developed real-time chat features with WebSockets",
        "Increased user engagement by 40%",
        "Optimized for high-volume traffic",
      ],
      technologies: ["NextJS", "Zustand", "Socket.IO"],
    },
    {
      period: "Jan 2023 - May 2023",
      role: "Frontend Developer",
      company: "Tradefiti",
      location: "Kenya (Remote)",
      achievements: [
        "Maintained applications with latest security standards",
        "Participated in code reviews and pair programming",
        "Increased customer satisfaction by 25%",
        "Collaborated on high-quality application delivery",
      ],
      technologies: ["NextJS", "Chakra UI"],
    },
  ];

  // Technical skills by category
  const skills = {
    frontend: [
      { name: "React", icon: <SiReact />, level: 95 },
      { name: "NextJS", icon: <SiNextdotjs />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript />, level: 85 },
      { name: "JavaScript", icon: <FaCode />, level: 95 },
    ],
    ui: [
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
      { name: "Material UI", icon: <SiMaterialui />, level: 85 },
      { name: "Chakra UI", icon: <SiChakraui />, level: 80 },
      { name: "CSS", icon: <FaCode />, level: 90 },
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Azure", level: 75 },
      { name: "AWS", level: 70 },
    ],
    state: [
      { name: "Redux", level: 85 },
      { name: "Zustand", level: 80 },
      { name: "Context API", level: 90 },
    ],
  };

  return (
    <div
      id="about"
      className="pt-16 pb-16 p-4 w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <motion.div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-10">
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About Me
          </h2>
          <p className="text-gray-300 mt-4">
            Frontend Engineering with a passion for creating seamless digital
            experiences
          </p>
        </div>

        {/* Professional Introduction */}
        <motion.div
          className="mb-12 bg-gray-900 p-6 rounded-xl shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative element */}
          {/* Decorative element */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl z-0"></div>
          {/* <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"></div> */}

          <h3 className="text-2xl font-bold mb-4 text-cyan-400">
            Frontend Engineer with International Experience
          </h3>

          <p className="text-gray-300 leading-relaxed mb-4">
            I'm a specialized{" "}
            <span className="text-cyan-400 font-semibold">
              Frontend Engineer
            </span>{" "}
            with over 2 years of professional experience working with global
            companies from Nigeria to the United States. My expertise lies in
            building high-performance, scalable web applications and Progressive
            Web Apps that solve real business challenges.
          </p>

          <p className="text-gray-300 leading-relaxed">
            My work at <span className="text-cyan-400">Access Bank</span> has
            focused on creating secure alternative channels for financial
            transactions, while my time at{" "}
            <span className="text-cyan-400">Techchak</span> allowed me to
            implement real-time features that increased user engagement by{" "}
            <span className="text-cyan-400 font-medium">40%</span>. I bring a
            balance of technical expertise and collaborative teamwork to every
            project, ensuring solutions that are not only technically excellent
            but also aligned with business objectives.
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-800/50 p-3 rounded-lg text-center">
              <div className="text-cyan-400 font-bold text-xl">2+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg text-center">
              <div className="text-cyan-400 font-bold text-xl">3</div>
              <div className="text-gray-400 text-sm">Companies</div>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg text-center">
              <div className="text-cyan-400 font-bold text-xl">12+</div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
            <div className="bg-gray-800/50 p-3 rounded-lg text-center">
              <div className="text-cyan-400 font-bold text-xl">40%</div>
              <div className="text-gray-400 text-sm">Engagement Boost</div>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors duration-300 border-b-2 ${
                activeTab === tab.id
                  ? "text-cyan-400 border-cyan-400"
                  : "text-gray-400 border-transparent hover:text-gray-300 hover:border-gray-600"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Professional Journey Tab */}
          {activeTab === "story" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <FaBriefcase className="text-cyan-400 text-2xl" />
                <h3 className="text-xl font-bold text-gray-200">
                  Professional Journey
                </h3>
              </div>

              {/* Work Timeline */}
              <div className="relative border-l-2 border-cyan-500/50 pl-8 ml-4 space-y-10">
                {workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[41px] bg-gray-900 p-1">
                      <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
                    </div>

                    {/* Content */}
                    <div className="bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-cyan-500/10 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                        <span className="inline-block px-3 py-1 text-xs text-cyan-400 bg-cyan-900/30 rounded-full mb-2 md:mb-0">
                          {job.period}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {job.location}
                        </span>
                      </div>

                      <h4 className="text-lg font-semibold text-white mb-1">
                        {job.role} @ {job.company}
                      </h4>

                      <ul className="text-gray-400 text-sm mt-3 space-y-1">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-gray-800 rounded-full text-cyan-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Education */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] bg-gray-900 p-1">
                    <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
                  </div>

                  {/* Content */}
                  <div className="bg-gray-900 p-5 rounded-lg shadow-md hover:shadow-cyan-500/10 transition-all duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <span className="inline-block px-3 py-1 text-xs text-cyan-400 bg-cyan-900/30 rounded-full">
                        2015 - 2019
                      </span>
                      <span className="text-gray-400 text-sm">
                        Ibadan, Oyo, Nigeria
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaGraduationCap className="text-cyan-400" />
                      <h4 className="text-lg font-semibold text-white">
                        Bachelor of Science, University of Ibadan
                      </h4>
                    </div>
                    <p className="text-gray-400 mt-2">
                      Major in Physiology, providing me with a unique analytical
                      perspective that enhances my approach to problem-solving
                      and user experience in technical projects.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === "expertise" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Frontend Skills */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <FaCode className="text-cyan-400 text-2xl" />
                    <h3 className="text-xl font-bold text-gray-200">
                      Core Technologies
                    </h3>
                  </div>

                  <div className="space-y-5 mb-8">
                    {skills.frontend.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="group"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400">{skill.icon}</span>
                            <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-cyan-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* UI Skills */}
                  <div className="space-y-5">
                    <h4 className="text-lg font-medium text-gray-300 mb-4">
                      UI Frameworks & Styling
                    </h4>
                    {skills.ui.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="group"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05 + 0.2,
                        }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-400">{skill.icon}</span>
                            <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-cyan-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Other Skills */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <HiOutlineLightBulb className="text-cyan-400 text-2xl" />
                    <h3 className="text-xl font-bold text-gray-200">
                      Tools & State Management
                    </h3>
                  </div>

                  {/* Tools */}
                  <div className="space-y-5 mb-8">
                    <h4 className="text-lg font-medium text-gray-300 mb-4">
                      DevOps & Deployment
                    </h4>
                    {skills.tools.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="group"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-cyan-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* State Management */}
                  <div className="space-y-5">
                    <h4 className="text-lg font-medium text-gray-300 mb-4">
                      State Management
                    </h4>
                    {skills.state.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="group"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05 + 0.2,
                        }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-xs bg-gray-800 px-2 py-1 rounded-full text-cyan-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Additional Skills Box */}
                  <motion.div
                    className="mt-8 p-5 bg-gray-900 rounded-lg border border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h4 className="font-bold text-gray-200 mb-3 flex items-center gap-2">
                      <FaFingerprint className="text-cyan-400" />
                      What Makes Me Different
                    </h4>
                    <p className="text-gray-400 text-sm">
                      My background in Physiology combined with technical
                      expertise gives me a unique approach to frontend
                      development. I excel at creating user interfaces that not
                      only look good but feel intuitive and natural to use. My
                      experience across international teams has honed my ability
                      to collaborate effectively and deliver solutions that meet
                      diverse business needs across different markets.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Experience Highlights Tab */}
          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Access Bank Projects */}
              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cyan-900/30 p-2 rounded-lg">
                    <FaLaptopCode className="text-cyan-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Access Bank
                    </h3>
                    <p className="text-gray-400 text-sm">
                      PWA Development & Financial Tech
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">
                      Built a Progressive Web App as an alternative to USSD
                      transactions, enhancing security and user experience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">
                      Implemented real-time transaction notifications, giving
                      users immediate feedback on their financial activities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">
                      Optimized platform performance following industry best
                      practices, ensuring scale for millions of users
                    </span>
                  </li>
                </ul>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <h4 className="font-medium text-gray-200 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-cyan-400 text-xs">
                      React
                    </span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-cyan-400 text-xs">
                      NextJS
                    </span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-cyan-400 text-xs">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-cyan-400 text-xs">
                      Azure
                    </span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-cyan-400 text-xs">
                      Material UI
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Techchak Projects */}
              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-cyan-900/30 p-2 rounded-lg">
                    <HiOutlineGlobeAlt className="text-cyan-400 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Techchak</h3>
                    <p className="text-gray-400 text-sm">
                      Payment Integration & Real-time Features
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">
                      Implemented secure payment systems using Stripe and
                      Paystack, enabling seamless financial transactions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">
                      Developed a real-time chat feature with WebSockets,
                      resulting in a <strong>40% increase</strong> in user
                      engagement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 mt-1">•</span>
                    <span className="text-gray-300">
                      Optimized for high-volume traffic with advanced caching
                      strategies and performance optimizations
                    </span>
                  </li>
                </ul>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <h4 className="font-medium text-gray-200 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-cyan-400 text-xs">
                      NextJS
                    </span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-cyan-400 text-xs">
                      Zustand
                    </span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-cyan-400 text-xs">
                      Socket.IO
                    </span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-cyan-400 text-xs">
                      Stripe API
                    </span>
                    <span className="px-2 py-1 bg-gray-800 rounded-full text-cyan-400 text-xs">
                      Paystack
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* General experience highlights */}
              <motion.div
                className="bg-gray-900 p-6 rounded-lg border border-gray-800 md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FaFingerprint className="text-cyan-400" />
                  Key Professional Strengths
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-medium text-cyan-400 mb-2">
                      Performance Optimization
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Specialized in optimizing frontend applications for
                      maximum speed and efficiency, ensuring excellent user
                      experiences even at scale.
                    </p>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-medium text-cyan-400 mb-2">
                      Real-time Applications
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Expertise in building responsive, real-time features using
                      WebSockets and modern state management, creating dynamic
                      and engaging user experiences.
                    </p>
                  </div>

                  <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h4 className="font-medium text-cyan-400 mb-2">
                      Financial Tech Integration
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Skilled in integrating financial technologies and secure
                      payment systems, ensuring safe, compliant solutions for
                      sensitive financial operations.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="#contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Let's Work Together
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
