// StartHeader.jsx
import React, { useState, useEffect } from "react";
import "../Stylesheet/StartHeader.css";
import { FaLinkedinIn, FaGithub, FaMedium } from "react-icons/fa";
import { Link } from "react-router-dom";
import TypeWriter from "./TypeWriter";

function StartHeader() {
  const [scrollAnimation, setScrollAnimation] = useState("");

  //--------Chevron-Icon-----------------
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setScrollAnimation(`bounce ${scrolled / 5}s infinite`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="background-image"></div>
      <div className="text-container">
        <h1>Kalpit Swami</h1>
        <h5>
          <TypeWriter />
        </h5>
        <div className="py-3 mt-4 pr-3 social-icons">
          <Link
            to="https://www.linkedin.com/in/kalpitswami/"
            className="icon-colour home-social-icons"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        <div className="py-3 mt-4 pr-3 social-icons">
          <Link
            to="https://github.com/kalpit10"
            className="icon-colour home-social-icons"
          >
            <FaGithub />
          </Link>
        </div>
        <div className="py-3 mt-4 pr-3 social-icons">
          <Link
            to="https://medium.com/@kalpit.swami"
            className="icon-colour home-social-icons"
          >
            <FaMedium />
          </Link>
        </div>
        {/* Add other social media icons as needed */}
      </div>
      <div className="scroll-down-arrow" style={{ animation: scrollAnimation }}>
        {/* <Icon icon="mi:chevron-down" height="1em" width="1em" /> */}
      </div>
    </div>
  );
}

export default StartHeader;
