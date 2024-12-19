// // import React from "react";
// // import { motion } from "framer-motion";
// // import profile from "../assets/profile.jpg"; // Ensure the profile image path is correct

// // const HeroSection = () => {
// //   const handleContactClick = () => {
// //     window.location.href = "mailto:your.email@example.com?subject=Let's Connect&body=Hi Kushagra!";
// //   };

// //   return (
// //     <section
// //       className="bg-cover bg-center py-40 px-6 md:px-20" // Increased padding on top and bottom
// //       style={{
// //         backgroundImage: 'url("https://i.pinimg.com/736x/eb/a2/75/eba27509809499b64e610fa5be675772.jpg")',
// //       }}
// //     >
// //       <div className="mx-auto flex flex-col md:flex-row gap-16 bg-white bg-opacity-0 rounded-lg p-10">
// //         {/* Profile Image on Left */}
// //         <motion.div
// //           className="md:w-1/3 flex justify-center items-center"
// //           initial={{ opacity: 0, x: -50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <img
// //             src={profile}
// //             alt="Profile"
// //             className="rounded-full w-40 h-40 md:w-60 md:h-60 border-4 border-gray-800 shadow-xl"
// //           />
// //         </motion.div>

// //         {/* Content on Right */}
// //         <motion.div
// //           className="md:w-2/3 text-center md:text-left"
// //           initial={{ opacity: 0, x: 50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           {/* Name and Title */}
// //           <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
// //             Kushagra <span className="italic text-gray-500 font-light">Gangwar</span>
// //           </h1>

// //           {/* Description */}
// //           {/* <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
// //             Hello, I’m <span className="font-bold text-gray-800">Kushagra Gangwar</span>, an experienced
// //             <span className="text-blue-500 font-semibold"> Senior UI/UX Designer</span> with over 4 years of industry experience. Let’s work
// //             together to bring your ideas to life!
// //           </p> */}
// //           <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
// //   Hello, I’m <span className="font-bold text-gray-800">Kushagra Gangwar</span>, a third-year
// //   <span className="font-semibold text-blue-500"> B.Tech student</span> with a passion for
// //   <span className="text-blue-500 font-semibold"> Full Stack Development</span>. I specialize in
// //   <span className="font-semibold text-blue-500"> MERN stack</span> and have a strong interest
// //   in <span className="font-semibold text-blue-500">Java programming</span>. Let’s collaborate and turn your ideas into reality!
// // </p>

// //           {/* Contact Me Button */}
// //           <div className="mt-8">
// //             <motion.button
// //               onClick={handleContactClick}
// //               className="px-8 py-3 text-base sm:text-lg font-semibold bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 hover:shadow-xl transition-transform transform hover:scale-105"
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.9 }}
// //             >
// //               Contact Me
// //             </motion.button>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// import React from 'react';
// import profile from '../../assets/profile.jpg'; // Path to the profile image
// import { MapPin } from 'lucide-react';
// import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material'; // Import Material-UI icons
// import { Typography, Container, Box, Paper } from '@mui/material'; // Import Material-UI components

// const HeroSection = () => {
//   return (
//     <Container id="hero" maxWidth="lg" className="py-40">
//       <div className="flex flex-col gap-12 md:flex-row">
//         {/* Image Section */}
//         <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
//           <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
//             <img
//               src={profile}
//               alt="Headshot of Sagar"
//               className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] object-cover"
//             />
//             <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
//           <Box textAlign="center" mb={8}>
//             <Typography variant="h2" fontWeight="bold" className="text-gray-800 leading-tight">
//               Hi, I&apos;m Kushagra{' '}
//               <span className="inline-block animate-waving-hand">👋</span>
//             </Typography>
//           </Box>

//           <div className="flex flex-col gap-2">
//             <Typography variant="body1" textAlign="justify">
//               I&apos;m a full-stack developer (React.js & Node.js) with a focus
//               on creating (and occasionally designing) exceptional digital
//               experiences that are fast, accessible, visually appealing, and
//               responsive. Even though I have been creating web applications for
//               sometime now, I still love it as if it was something new.
//             </Typography>
//           </div>

//           <div className="flex flex-col gap-2">
//             <div className="flex gap-2">
//               <MapPin className="stroke-gray-600" />
//               <Typography variant="body2">Gurugram, India</Typography>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="flex h-6 w-6 items-center justify-center">
//                 <span className="relative flex h-3 w-3">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
//                   <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
//                 </span>
//               </div>
//               <Typography variant="body2">Available for new projects</Typography>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4">
//             <a href="https://github.com/kkushagrag/" target="_blank" rel="noopener noreferrer">
//               <GitHub className="text-gray-600 hover:text-gray-800 transition duration-300" />
//             </a>
//             <a href="https://www.linkedin.com/in/kkushagrag/" target="_blank" rel="noopener noreferrer">
//               <LinkedIn className="text-gray-600 hover:text-gray-800 transition duration-300" />
//             </a>
//             <a href="https://instagram.com/kushagrag_/" target="_blank" rel="noopener noreferrer">
//               <Instagram className="text-gray-600 hover:text-gray-800 transition duration-300" />
//             </a>
//             <a href="https://twitter.com/kushagrag_/" target="_blank" rel="noopener noreferrer">
//               <Twitter className="text-gray-600 hover:text-gray-800 transition duration-300" />
//             </a>

//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default HeroSection;

import React from "react";
import faceImage from "../../assets/faceImage.jpg"; // Path to the profile image
import { MapPin } from "lucide-react";
import { GitHub, LinkedIn, Twitter, Instagram } from "@mui/icons-material"; // Import Material-UI icons
import { Typography, Container, Box, Paper } from "@mui/material"; // Import Material-UI components
import { motion } from "framer-motion"; // Import motion from framer-motion

const HeroSection = () => {
  return (
    <Container id="hero" maxWidth="lg" className="py-40">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image Section */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[400px] w-[350px] md:h-[360px] md:w-[320px]">
            <img
              src={faceImage}
              alt="Headshot of Sagar"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] object-cover"
            />
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          {/* Title */}
          <Box textAlign="center" mb={8}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
                Hi, I&apos;m Kushagra{" "}
                <span className="inline-block animate-waving-hand">👋</span>
              </h1>
            </motion.div>
          </Box>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="body1" textAlign="justify">
              I&apos;m a full-stack developer (React.js & Node.js) with a focus
              on creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              sometime now, I still love it as if it was something new.
            </Typography>
          </motion.div>

          {/* Location & Availability */}
          <div className="flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex gap-2">
                <MapPin className="stroke-gray-600" />
                <Typography variant="body2">Gurugram, India</Typography>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <Typography variant="body2">
                  Available for new projects
                </Typography>
              </div>
            </motion.div>
          </div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex gap-4">
              <a
                href="https://github.com/kkushagrag/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub className="text-gray-600 hover:text-gray-800 transition duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/kkushagrag/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn className="text-gray-600 hover:text-gray-800 transition duration-300" />
              </a>
              <a
                href="https://instagram.com/kushagrag_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="text-gray-600 hover:text-gray-800 transition duration-300" />
              </a>
              <a
                href="https://twitter.com/kushagrag_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="text-gray-600 hover:text-gray-800 transition duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
