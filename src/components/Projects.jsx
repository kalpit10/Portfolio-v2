import React from "react";
import "../Stylesheet/Projects.css";
import { FaGithub } from "react-icons/fa";
import resumaidLogo from "../images/logodiv1.jpeg";
import ShreniEducation from "../images/Shreni.png";
import "../App.css";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

function Projects(props) {
  return (
    <div className={`p-3 header app`}>
      <h1 className="fw-bold mt-4 text-center my-6 mx-auto dark-project-h1">
        PROJECTS
      </h1>
      <div className="container py-5 px-5">
        <div className="row justify-content-center">
          <div className="col-xs-4 col-md-6">
            {/* Your project card 2 goes here */}
            <Tilt
              className="parallax-effect"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1}
            >
              <div className="card project-card">
                <img
                  src={resumaidLogo}
                  className="card-img-top images"
                  alt="Resumaid"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Resumaid</h5>
                  <p className="card-text">
                    Resumaid helps users build professional resumes with ease
                    using modern templates and smart ATS feedback. User data is
                    encrypted and protected with multi-factor authentication,
                    rate limiting, and secure headers. Built with OWASP
                    practices, it balances usability with strong security to
                    support your job search.
                  </p>
                  <div className="justify-content-center d-flex mt-3">
                    <Link to="https://github.com/kalpit10/Resumaid">
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
          {/* For medium-sized screens (laptops) and larger */}
          <div className="col-xs-4 col-md-6 d-md-block">
            {/* Your project card 1 goes here */}
            {/* The perspective property defines how far the object (wrapped/child component) is away from the user. The lower the more extreme the tilt gets. */}
            <Tilt
              className="parallax-effect"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1}
            >
              <div className="card project-card">
                <img
                  src={ShreniEducation}
                  className="card-img-top images"
                  alt="Fresh Meals"
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <a href="https://shreni-education.vercel.app/">
                      Shreni Education
                    </a>
                  </h5>
                  <p className="card-text">
                    Developed the WebApp as a freelance project using ReactJS,
                    Tailwind CSS, and EmailJS. This dynamic web application
                    provides detailed information about the coaching institute’s
                    courses, faculty, and services, ensuring a seamless user
                    experience and effective communication through integrated
                    email functionalities.
                  </p>
                  <div className="justify-content-center d-flex mt-3">
                    <Link to="https://github.com/kalpit10/Shreni-Education">
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
