// import React from "react";
// import { motion } from "framer-motion";

// const Education = () => {
//   return (
//     <section className="bg-gray-100 py-40 px-6 md:px-20">
//       <div className="container mx-auto flex flex-col gap-12">

//         {/* Title */}
//         <div className="text-center">
//           <h2 className="text-6xl md:text-8xl font-extrabold text-gray-800 leading-tight">
//             Education
//           </h2>
//         </div>

//         {/* Content */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-gray-800 hover:bg-gray-200 hover:shadow-2xl transition-all duration-300"
//         >
//           <ul className="list-disc pl-6 text-gray-500 leading-relaxed text-justify">
//             <li className="mb-3">
//               <strong>Bachelor of Technology (BTech)</strong> - Currently pursuing in my third year, with a focus on software engineering and innovation.
//             </li>
//             <li className="mb-3">
//               Certifications: Completed courses in React.js, Data Structures and Algorithms, and Machine Learning from reputed platforms.
//             </li>
//             <li className="mb-3">
//               Achievements: Winner of XYZ Hackathon 2024, where my team developed a sustainable IoT-based solution.
//             </li>
//             <li className="mb-3">
//               Workshops: Participated in workshops on Artificial Intelligence, Cloud Computing, and Web Development.
//             </li>
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Education;






import React from "react";
import { motion } from "framer-motion";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Paper, Box } from "@mui/material";

const educationData = [
  {
    degree: "Bachelor of Technology (BTech)",
    details: "Currently pursuing in my third year, with a focus on software engineering and innovation.",
  },
  {
    degree: "Certifications",
    details: "Completed courses in React.js, Data Structures and Algorithms, and Machine Learning from reputed platforms.",
  },
  {
    degree: "Achievements",
    details: "Winner of XYZ Hackathon 2024, where my team developed a sustainable IoT-based solution.",
  },
  {
    degree: "Workshops",
    details: "Participated in workshops on Artificial Intelligence, Cloud Computing, and Web Development.",
  },
];

const Education = () => {
  return (
    <section className="bg-gray-100 py-40 px-6 md:px-20">
      <div className="container mx-auto">

        {/* Title */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            fontWeight="bold"
            className="text-gray-800 leading-tight"
          >
            Education
          </Typography>
        </Box>

        {/* Timeline */}
        <Timeline position="alternate">
          {educationData.map((edu, index) => (
            <TimelineItem key={index}>
              {/* Separator */}
              <TimelineSeparator>
                <TimelineDot color="primary" variant="filled" />
                {index !== educationData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              {/* Content */}
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderLeft: "5px solid #3f51b5",
                      borderRadius: "8px",
                      "&:hover": { boxShadow: "0px 8px 16px rgba(0,0,0,0.3)" },
                    }}
                  >
                    {/* Degree */}
                    <Typography variant="h6" fontWeight="bold" color="text.primary">
                      {edu.degree}
                    </Typography>

                    {/* Details */}
                    <Typography
                      variant="body2"
                      color="text.primary"
                      textAlign="justify"
                      sx={{ mt: 1 }}
                    >
                      {edu.details}
                    </Typography>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Education;
