import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import rannlab from "../../assets/rannlab.jpeg";
import automobile from "../../assets/automobile.jpg";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    companyLogo: rannlab,
    duration: "Jun 2024 - Jul 2024",
    description: [
      "Contributed to the design and implementation of user interfaces in special projects like the National Book Trust Project and ProDigiSign Project, utilizing React.js, JavaScript, HTML, and CSS to create dynamic and user-friendly experiences.",
      "Collaborated with cross-functional teams, including designers, backend developers, and product managers, to integrate UI/UX designs with backend services, ensuring seamless project execution.",
      "Gained hands-on experience with modern frontend tools and frameworks, enhancing problem-solving skills and contributing to the successful delivery of projects using technologies like React, Next.js, TypeScript, Express.js, MangoDB, TailwindCSS, Firebase, and others.",
    ],
  },
  {
    id: 2,
    role: "Content Head",
    companyLogo: automobile,
    duration: "Aug 2023 - May 2024",
    description: [
      "Spearheaded content creation and strategic planning across multiple platforms, including social media, newsletters, and event promotions, to enhance visibility and engagement with the target audience.",
      "Maintained consistent messaging and branding across all channels, ensuring a unified and professional representation of the club’s identity and activities.",
      "Collaborated closely with club members and event organizers to produce compelling and timely content, combining creativity, strong communication skills, and a passion for automobiles to drive impactful results.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20">
      <div className="container mx-auto">
        {/* Title */}
        <Box textAlign="center" mb={8}>
          <h2 className="text-6xl md:text-8xl font-extrabold text-gray-800 leading-tight text-center mb-16">
            Work{" "}
            <span className="italic text-gray-500 font-light">Experience</span>
          </h2>
        </Box>

        {/* Experiences */}
        <div className="grid grid-cols-1 gap-8 ml-48 mr-48">
          {experiences.map((exp) => (
            <Paper
              key={exp.id}
              elevation={3}
              sx={{
                p: 4,
                borderRadius: "12px",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
                },
              }}
              className="shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
            >
              {/* Image */}
              <Box
                flexShrink={0}
                sx={{
                  width: "200px",
                  height: "200px",
                  mr: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={exp.companyLogo}
                  alt="Company Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Content Section */}
              <Box display="flex" flexDirection="column" flexGrow={1}>
                {/* Role and Duration */}
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography variant="h5" fontWeight="bold" color="text.primary">
                    {exp.role}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    ({exp.duration})
                  </Typography>
                </Box>

                {/* Two containers for content */}
                <Box mb={2}>
                  <Typography variant="body2" color="text.primary">
                    {/* You can add any additional content or styling here */}
                  </Typography>
                </Box>

                {/* Description */}
                <Box>
                  <ul className="list-disc pl-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="mb-2">
                        <Typography variant="body2" color="text.primary">
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Box>
            </Paper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
