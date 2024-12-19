// import React from "react";
// import { motion } from "framer-motion";
// import java from "../../assets/java.png";
// import react from "../../assets/react.png";
// import mern from "../../assets/mern.png";
// import mad from "../../assets/mad.png";
// import mysql from "../../assets/mysql.png";
// import python from "../../assets/python.png";

// const skills = [
//   {
//     id: 1,
//     skill: "Java",
//     description: "Building scalable and efficient applications using Java, a powerful object-oriented programming language.",
//     image: java
//   },
//   {
//     id: 2,
//     skill: "React.js",
//     description: "Developing dynamic and responsive user interfaces with React.js, a popular JavaScript library for building UI.",
//     image: react
//   },
//   {
//     id: 3,
//     skill: "MERN Stack",
//     description: "Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js for a complete development workflow.",
//     image: mern
//   },
//   {
//     id: 4,
//     skill: "Mobile App Development",
//     description: "Creating mobile applications for Android and iOS using frameworks like React Native and Flutter.",
//     image: mad
//   },
//   {
//     id: 5,
//     skill: "MySQL",
//     description: "Managing and designing relational databases with MySQL, a popular database management system for web applications.",
//     image: mysql
//   },
//   {
//     id: 6,
//     skill: "Python",
//     description: "Developing applications and scripts using Python, a versatile language known for its simplicity and power in fields like data science, web development, and automation.",
//     image: python
//   }
// ];

// const MySkills = () => {
//   return (
//     <section className="bg-white-100 py-20 px-6 md:px-20">
//       <div className="container mx-auto">
        // <h2 className="text-6xl md:text-8xl font-extrabold text-gray-800 leading-tight text-center mb-16">
        //   My <span className="italic text-gray-500 font-light">Skills</span>
        // </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-gray-800 hover:bg-gray-200 hover:shadow-2xl transition-all duration-300"
//             >
//               <img
//                 src={skill.image}
//                 alt={`${skill.skill} icon`}
//                 className="w-16 h-16 object-cover rounded-full mb-4 mx-auto"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//                 {skill.skill}
//               </h3>
//               <p className="text-gray-500 mb-4 text-center">
//                 {skill.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MySkills;




import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    skill: "Java",
    image: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
  },
  {
    id: 2,
    skill: "Python",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  },
  // {
  //   id: 3,
  //   skill: "Machine Learning",
  //   image: "https://cdn-icons-png.flaticon.com/512/1801/1801483.png",
  // },
  {
    id: 4,
    skill: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    id: 5,
    skill: "React.js",
    image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
  },
  {
    id: 6,
    skill: "MongoDB",
    image: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
  },
  {
    id: 7,
    skill: "MySQL",
    image: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
  },
  {
    id: 8,
    skill: "Figma",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    id: 9,
    skill: "Tailwind CSS",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    id: 10,
    skill: "Git",
    image: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  {
    id: 11,
    skill: "Android Studio",
    image: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
  },
  {
    id: 12,
    skill: "Node.js",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
  },
  {
    id: 13,
    skill: "Express.js",
    image: "https://cdn-icons-png.flaticon.com/512/174/174836.png",
  },
  {
    id: 14,
    skill: "Next.js",
    image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    id: 15,
    skill: "Socket.io",
    image: "https://cdn-icons-png.flaticon.com/512/4202/4202086.png",
  },
];

const MySkills = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="container mx-auto text-center">
      <h2 className="text-6xl md:text-8xl font-extrabold text-gray-800 leading-tight text-center mb-16">
          My <span className="italic text-gray-500 font-light">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <img
                src={skill.image}
                alt={`${skill.skill} icon`}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-sm font-medium text-gray-800">
                {skill.skill}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
