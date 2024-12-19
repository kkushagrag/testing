import React from "react";
import Header from "./components/sections/Header";
import HeroSection from "./components/sections/HeroSection";
import Footer from "./components/sections/Footer";
import "./index.css";
import WorkExperience from "./components/sections/WorkExp";
import SkillsSection from "./components/sections/Skills";
import ProjectDetails from "./components/sections/Projects";
import AboutUs from "./components/sections/AboutMe";
import Education from "./components/sections/Education";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <AboutUs />
      <WorkExperience />
      <SkillsSection />
      <ProjectDetails />
      {/* <Education /> */}
      <Footer />
    </div>
  );
};

export default App;
