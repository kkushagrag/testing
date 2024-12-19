
// import React from "react";
// import { motion } from "framer-motion";

// const Header = () => {
//   return (
//     <header className="bg-white py-4 px-6 fixed top-0 left-0 w-full z-10 shadow-sm">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-gray-800">
//           &lt;Kushagra /&gt;
//         </div>

//         {/* Navigation Links */}
//         <nav className="flex items-center gap-8">
//           {["About", "Work", "Testimonials", "Contact"].map((item, index) => (
//             <motion.a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               initial={{ opacity: 0, y: -20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               className="text-gray-800 hover:text-gray-600 font-medium transition-all duration-300"
//             >
//               {item}
//             </motion.a>
//           ))}
//         </nav>

//         {/* Theme Toggle and CV Button */}
//         <div className="flex items-center gap-4">
//           {/* Theme Toggle Icon */}
//           <button
//             aria-label="Toggle Theme"
//             className="text-gray-800 hover:text-gray-600 text-lg transition-all duration-300"
//           >
//             🌙
//           </button>
//           {/* Download CV Button */}
//           <a
//             href="/src/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 rounded-lg shadow-md transition-all duration-300"
//           >
//             Download CV
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  // Get the initial theme from localStorage or default to light mode
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme ? savedTheme === "dark" : false;

  const [isDarkMode, setIsDarkMode] = useState(initialTheme);

  // Toggle the theme between light and dark mode
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    // Apply the theme to the document and save preference to localStorage
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Apply the theme on mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 py-4 px-6 fixed top-0 left-0 w-full z-10 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          &lt;Kushagra /&gt;
        </div>

        {/* Navigation Links */}
        <nav className="ml-auto flex items-center gap-8">
          {["About", "Work", "Testimonials", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 font-medium transition-all duration-300"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Theme Toggle and CV Button */}
        <div className="flex items-center gap-4 ml-6">
          {/* Theme Toggle Icon */}
          <button
            aria-label="Toggle Theme"
            onClick={toggleTheme}
            className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-lg transition-all duration-300"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>

          {/* Download CV Button */}
          <a
            href="/src/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 rounded-lg shadow-md transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
