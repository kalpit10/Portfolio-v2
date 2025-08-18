import React from "react";
import { FaLinkedinIn, FaGithub, FaMedium } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import "../Stylesheet/Footer.css";

const currentYear = new Date().getFullYear();

const Footer = (props) => {
  return (
    <footer className={`bg-primary text-light text-center py-4 app `}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Connect with Me!</h4>
          </div>
        </div>
        <div className="col">
          <div className="mx-auto social-icons pr-3">
            <Link
              to="https://www.linkedin.com/in/kalpitswami/"
              className="icon-colour home-social-icons"
            >
              <FaLinkedinIn />
            </Link>
          </div>
          <div className="mx-auto social-icons pr-3">
            <Link
              to="https://github.com/kalpit10"
              className="icon-colour home-social-icons"
            >
              <FaGithub />
            </Link>
          </div>
          <div className="mx-auto social-icons pr-3">
            <a
              href="https://medium.com/@kalpit.swami"
              className="icon-colour home-social-icons"
            >
              <FaMedium />
            </a>
          </div>
          <div className="mx-auto social-icons">
            <a
              href="mailto:kalpit.swami@gmail.com"
              className="icon-colour home-social-icons"
            >
              <CiMail />
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p>&copy; {currentYear} Kalpit Swami</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
