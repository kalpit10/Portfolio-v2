import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import StartHeader from "./components/StartHeader";

function App(props) {
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // const scrolled = window.scrollY;

      // Set isNavbarSticky to true when scrolled past the hero section
      setIsNavbarSticky(true);

      // Set isNavbarVisible to true when scrolled down a bit to show the navbar with animation
      // setIsNavbarVisible(scrolled > window.innerHeight / 2); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const [darkMode, setDarkMode] = useState(() => {
  //   // Retrieve dark mode preference from localStorage or use default value
  //   return localStorage.getItem("darkMode") === "true";
  // });

  // const toggleDarkMode = () => {
  //   const newDarkMode = !darkMode;
  //   setDarkMode(newDarkMode);
  //   // Save the dark mode preference to localStorage
  //   localStorage.setItem("darkMode", newDarkMode.toString());
  // };

  return (
    <div className={`App`}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header
                  // darkMode={darkMode}
                  // toggleDarkMode={toggleDarkMode}
                  // isNavbarVisible={isNavbarVisible}
                  isNavbarSticky={isNavbarSticky}
                />

                <StartHeader />

                <Me />
                <Skills />
                <Projects />
                <Certifications />
                <Footer />
              </div>
            }
          />
          <Route path="/resumepage" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
