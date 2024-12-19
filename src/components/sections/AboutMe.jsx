import React from "react";
import { Box, Typography, Link, Container, Grid } from "@mui/material";
import fullImage from "../../assets/fullImage.jpg";

const AboutMeSection = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{ backgroundColor: "grey.50", py: 8 }}
    >
      <Container>
        <h2 className="text-6xl md:text-8xl font-extrabold text-gray-800 leading-tight text-center mb-16">
          About <span className="italic text-gray-500 font-light">Me</span>
        </h2>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  width: { xs: 320, md: 340, lg: 400 },
                  height: { xs: 360, md: 420, lg: 480 },
                  backgroundColor: "grey.200",
                  border: "8px solid transparent",
                }}
              ></Box>
              <Box
                component="img"
                src={fullImage}
                alt="Full pose of Kushagra"
                sx={{
                  width: { xs: 320, md: 400, lg: 480 }, // Increased width
                  height: { xs: 400, md: 500, lg: 600 }, // Increased height
                  objectFit: "cover",
                  border: "8px solid grey.50",
                  zIndex: 10,
                }}
              />
            </Box>
          </Grid>

          {/* Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 600, mx: "auto", textAlign: "justify" }}>
              <Typography paragraph>
                I am a motivated full-stack developer and Java enthusiast,
                currently pursuing my third year of BTech in Computer Science
                Engineering. Originally from Bareilly, Uttar Pradesh, I
                specialize in both frontend and backend technologies like
                React.js, Node.js, Java, and modern tools such as Next.js,
                TypeScript, and Socket.io. With a passion for leveraging
                technology to drive innovation and create exceptional user
                experiences, I aim to contribute to dynamic projects that push
                the boundaries of web development while maintaining a strong
                focus on user-centric design and performance.
              </Typography>
              <Typography paragraph>
                Since starting my web development journey a year ago, I’ve
                embraced new challenges, continuously learning and evolving with
                the latest technologies. I thrive in environments where I can
                take projects from ideation to deployment, ensuring every detail
                contributes to a high-quality product. I’m also open to
                freelance opportunities and collaborations, excited to connect
                with like-minded individuals and contribute to innovative
                projects.
              </Typography>
              <Typography paragraph>
                If you’re interested, feel free to follow me on{" "}
                <Link
                  href="https://instagram.com/kushagrag_/" // Replace with actual link
                  target="_blank"
                  underline="hover"
                  color="primary"
                >
                  Instagram
                </Link>{" "}
                where I share tech-related insights, or check out my{" "}
                <Link
                  href="https://github.com/kkushagrag/" // Replace with actual link
                  target="_blank"
                  underline="hover"
                  color="primary"
                >
                  GitHub
                </Link>{" "}
                to see my open-source contributions and projects.
              </Typography>
              <Typography paragraph>
                Here are a few quick bits about me:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <Typography component="li">
                      B.Tech in Computer Engineering
                    </Typography>
                    <Typography component="li">Full-time freelancer</Typography>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    <Typography component="li">Avid learner</Typography>
                  </ul>
                </Grid>
              </Grid>
              <Typography paragraph>
                <br />
                Lastly, I am open to freelance opportunities and would love to
                connect with individuals or teams interested in innovative
                projects. Feel free to reach out—I promise I don't bite! 😄
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMeSection;
