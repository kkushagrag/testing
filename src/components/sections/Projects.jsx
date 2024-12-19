import React, { useState } from "react";
import { motion } from "framer-motion";
import Picture1 from "../../assets/Picture1.png";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce platform with user authentication and payment gateway integration. This project also includes product listings, cart management, and responsive UI for a seamless user experience.",
    link: "https://github.com/kkushagrag/SuperGains",
    image: Picture1,
    techUsed: ["React", "Node.js", "Express.js", "MongoDB", "Stripe API"],
  },
  {
    id: 2,
    title: "CarBuy",
    description:
      "A car-buying and managing portal, a Java-based console application designed to simplify the process of purchasing and managing cars.",
    link: "https://github.com/kkushagrag/CarBuy",
    image: Picture1,
    techUsed: ["Java", "MySQL", "OOPS", "File Handling", "Text Handling"],
  },
  {
    id: 3,
    title: "Workout Tracker",
    description:
      "WORKOUT TRACKER is a comprehensive fitness tracking application designed for Android devices.",
    link: "https://github.com/kkushagrag/Workout-Tracker",
    image: Picture1,
    techUsed: ["Java", "Android Studio", "SQLite"],
  },
  {
    id: 4,
    title: "SuperGains: E-Commerce Website",
    description:
      "SuperGains is a premium online supplement retailer for athletes, offering high-quality products like protein powders, pre-workouts, BCAAs, creatine, and gym accessories.",
    link: "https://github.com/kkushagrag/SuperGains",
    image: Picture1,
    techUsed: ["HTML", "CSS", "JavaScript", "Tailwind CSS","MySQL", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-6xl md:text-8xl font-extrabold text-gray-800 leading-tight text-center mb-16">
          My <span className="italic text-gray-500 font-light">Projects</span>
        </h2>
        <div className="grid grid-cols-1 gap-12 ml-28 mr-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-300 rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
            >
              {/* Project Image */}
              <div className="w-5/12 rounded-full">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover p-4"
                />
              </div>
              {/* Container between Image and Content */}
              <div className="flex flex-col justify-between p-6 bg-gray-100 flex-1">
                {/* Project Details */}
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {project.title}
                </h3>
                <p className="mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techUsed.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-700 text-gray-300 text-xs font-medium py-1 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-blue-400 hover:underline text-sm font-medium"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
