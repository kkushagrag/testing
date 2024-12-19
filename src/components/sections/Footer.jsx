// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaInstagram,
//   FaLinkedin,
//   FaGithub,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";

// const Footer = () => {
//   const iconVariants = {
//     hover: { scale: 1.3, rotate: 10, transition: { duration: 0.4 } },
//   };

//   return (
//     <section className="bg-gray-900 py-20 px-6 md:px-20">
//       <div className="container mx-auto flex flex-col md:flex-row gap-16">
//         {/* Title on Left */}
//         <div className="md:w-1/3 flex items-start justify-start">
//           <h2 className="text-6xl md:text-8xl font-extrabold text-white leading-tight">
//             Stay <span className="italic text-gray-400 font-light">Connected</span>
//           </h2>
//         </div>

//         {/* Footer Content */}
//         <div className="md:w-2/3 grid grid-cols-1 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative p-6 bg-gray-800 shadow-lg rounded-lg border-l-4 border-gray-400"
//           >
//             {/* Contact Info */}
//             <p className="text-gray-300 text-lg">
//             What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
//             </p>
//             <motion.a
//               href="mailto:kushagragangwar05@gmail.com"
//               className="text-orange-500 text-xl font-bold underline mt-4 block hover:text-orange-400 transition-colors duration-300"
//             >
//               kushagragangwar05@gmail.com
//             </motion.a>
//             {/* <p className="text-gray-400 mt-4 text-sm">
//               12/A, 5/A Satnaspid, Alexandria, VA 20314, Canada
//             </p> */}
//           </motion.div>

//           {/* Social Links */}
//           <motion.div
//             className="flex justify-start space-x-8 mt-8"
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.a
//               href="https://www.linkedin.com/in/kkushagrag/"
//               aria-label="LinkedIn"
//               whileHover="hover"
//               variants={iconVariants}
//               className="text-white hover:text-gray-400"
//             >
//               <FaLinkedin size={40} />
//             </motion.a>
//             <motion.a
//               href="https://github.com/kkushagrag/"
//               aria-label="Github"
//               whileHover="hover"
//               variants={iconVariants}
//               className="text-white hover:text-gray-400"
//             >
//               <FaGithub size={40} />
//             </motion.a>
//             <motion.a
//               href="https://instagram.com/kushagrag_"
//               aria-label="Instagram"
//               whileHover="hover"
//               variants={iconVariants}
//               className="text-white hover:text-gray-400"
//             >
//               <FaInstagram size={40} />
//             </motion.a>
//             <motion.a
//               href="https://x.com/kushagrag_/"
//               aria-label="Twitter"
//               whileHover="hover"
//               variants={iconVariants}
//               className="text-white hover:text-gray-400"
//             >
//               <FaTwitter size={40} />
//             </motion.a>
//             <motion.a
//               href="https://youtube.com/"
//               aria-label="YouTube"
//               whileHover="hover"
//               variants={iconVariants}
//               className="text-white hover:text-gray-400"
//             >
//               <FaYoutube size={40} />
//             </motion.a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;



import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaClipboard,
} from "react-icons/fa";
import { Typography } from "@mui/material";

const Footer = () => {
  const [copyStatus, setCopyStatus] = useState('');
  const iconVariants = {
    hover: { scale: 1.3, rotate: 10, transition: { duration: 0.4 } },
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus(''), 2000); // Reset the status after 2 seconds
  };

  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h2 className="text-7xl font-extrabold text-gray-400 leading-tight text-center mb-16">
          Stay <span className="italic text-gray-500 font-light">Connected</span>
        </h2>
        <p className="text-gray-300 text-3xl mb-16">
          What’s next? Feel free to reach out to me if you're looking for <br />
          a developer, have a query, or simply want to connect.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col items-center space-y-4 mb-16">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-orange-500" size={24} />
            <a
              href="mailto:kushagragangwar05@gmail.com"
              className="text-orange-500 text-3xl font-bold underline hover:text-orange-400 transition-colors duration-300"
            >
              kushagragangwar05@gmail.com
            </a>
            <FaClipboard
              className="cursor-pointer text-gray-300 hover:text-gray-400"
              size={20}
              onClick={() => handleCopy('kushagragangwar05@gmail.com')}
            />
          </div>
          {copyStatus && <span className="text-green-500 text-sm">{copyStatus}</span>}

          {/* Phone */}
          <div className="flex items-center space-x-2">
            <FaPhone className="text-gray-300" size={24} />
            <a
              href="tel:+918980500565"
              className="text-gray-300 text-3xl hover:text-gray-400 transition-colors duration-300"
            >
              +91 8980500565
            </a>
            <FaClipboard
              className="cursor-pointer text-gray-300 hover:text-gray-400"
              size={20}
              onClick={() => handleCopy('+91 8980500565')}
            />
          </div>
        </div>

        {/* Social Links */}
        <Typography className="text-center text-white">
          You may also find me on these platforms!
        </Typography>
        <div className="flex justify-center space-x-8 flex-col items-center mt-6">
          <div className="flex space-x-8">
            <motion.a
              href="https://www.linkedin.com/in/kkushagrag/"
              aria-label="LinkedIn"
              whileHover="hover"
              variants={iconVariants}
              className="text-white hover:text-gray-400"
            >
              <FaLinkedin size={40} />
            </motion.a>
            <motion.a
              href="https://github.com/kkushagrag/"
              aria-label="Github"
              whileHover="hover"
              variants={iconVariants}
              className="text-white hover:text-gray-400"
            >
              <FaGithub size={40} />
            </motion.a>
            <motion.a
              href="https://instagram.com/kushagrag_"
              aria-label="Instagram"
              whileHover="hover"
              variants={iconVariants}
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={40} />
            </motion.a>
            <motion.a
              href="https://x.com/kushagrag_/"
              aria-label="Twitter"
              whileHover="hover"
              variants={iconVariants}
              className="text-white hover:text-gray-400"
            >
              <FaTwitter size={40} />
            </motion.a>
            <motion.a
              href="https://youtube.com/"
              aria-label="YouTube"
              whileHover="hover"
              variants={iconVariants}
              className="text-white hover:text-gray-400"
            >
              <FaYoutube size={40} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
