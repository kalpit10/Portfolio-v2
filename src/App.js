import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import StartHeader from "./components/StartHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "./components/ContactForm";

function App(props) {
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // const scrolled = window.scrollY;

      // Set isNavbarSticky to true when scrolled past the hero section
      setIsNavbarSticky(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                <Awards />
                <ContactForm />
                <Footer />
              </div>
            }
          />
          <Route path="/resumepage" element={<Resume />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
