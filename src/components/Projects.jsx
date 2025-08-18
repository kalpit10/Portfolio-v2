import React from "react";
import "../Stylesheet/Projects.css";
import { FaGithub, FaMedium, FaLinkedinIn } from "react-icons/fa";
import resumaidLogo from "../images/logodiv1.jpeg";
import ShreniEducation from "../images/Shreni.png";
import ThreeTierArch from "../images/3-Tier-Web-Arch.png";
import "../App.css";
import Tilt from "react-parallax-tilt";

function Projects() {
  return (
    <div className="p-3 header app">
      <h1 className="fw-bold mt-4 text-center my-6 mx-auto dark-project-h1">
        PROJECTS
      </h1>

      <div className="container py-5 px-3">
        {/* 1 col on xs, 2 on md, 3 on lg+ */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* ==== Project: 3-Tier AWS Architecture (FIRST) ==== */}
          <div className="col d-flex">
            <Tilt
              className="parallax-effect w-100"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1}
            >
              <div className="card project-card h-100 d-flex flex-column">
                <img
                  src={ThreeTierArch}
                  className="card-img-top project-img"
                  alt="3-Tier AWS Architecture with Terraform"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">
                    <a
                      href="https://medium.com/@kalpit.swami/i-built-a-scalable-high-availability-3-tier-aws-infrastructure-using-terraform-heres-what-i-4e75aaad704b"
                      target="_blank"
                      rel="noreferrer"
                    >
                      3-Tier AWS Architecture (Terraform)
                    </a>
                  </h5>
                  <p className="card-text">
                    Built a modular, high-availability 3-tier AWS stack with
                    Terraform: VPC, public/private subnets, ALB, Auto Scaling
                    EC2, and RDS MySQL. Implemented least-privilege security
                    groups, enforced IMDSv2, and deployed dual NAT gateways.
                    Instrumented EC2 with CloudWatch Agent and dashboards.
                    Deployed a PHP demo app with health checks and bastion-based
                    SSH. Documented costs, troubleshooting, and reusable IaC
                    patterns.
                  </p>
                  <div className="mt-auto d-flex justify-content-center gap-4">
                    <a
                      href="https://github.com/kalpit10/3-Tier-Web-Architecture-Terraform-"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="icon-link fs-4 mx-2"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://medium.com/@kalpit.swami/i-built-a-scalable-high-availability-3-tier-aws-infrastructure-using-terraform-heres-what-i-4e75aaad704b"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Medium Article"
                      className="icon-link fs-4 px-3"
                    >
                      <FaMedium />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/kalpitswami_aws-terraform-cloudcomputing-activity-7363007220260749312-hdzz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQM8GwBGpWqq6pEKclRv9Mh5Rqmcxx7Qio"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Profile"
                      className="icon-link fs-4"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          {/* ==== Project: Resumaid ==== */}
          <div className="col d-flex">
            <Tilt
              className="parallax-effect w-100"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1}
            >
              <div className="card project-card h-100 d-flex flex-column">
                <img
                  src={resumaidLogo}
                  className="card-img-top project-img"
                  alt="Resumaid"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">Resumaid</h5>
                  <p className="card-text">
                    Resumaid helps users build professional resumes with ease
                    using modern templates and smart ATS feedback. User data is
                    encrypted and protected with multi-factor authentication,
                    rate limiting, and secure headers. Built with OWASP
                    practices, it balances usability with strong security to
                    support your job search.
                  </p>
                  <div className="mt-auto d-flex justify-content-center">
                    <a
                      href="https://github.com/kalpit10/Resumaid"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="icon-link fs-4 mx-3"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="https://www.linkedin.com/posts/kalpitswami_cybersecurity-owasp-vapt-activity-7315881583159255041-RBga?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQM8GwBGpWqq6pEKclRv9Mh5Rqmcxx7Qio"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Profile"
                      className="icon-link fs-4 mx-2"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          {/* ==== Project: Shreni Education ==== */}
          <div className="col d-flex">
            <Tilt
              className="parallax-effect w-100"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1}
            >
              <div className="card project-card h-100 d-flex flex-column">
                <img
                  src={ShreniEducation}
                  className="card-img-top project-img"
                  alt="Shreni Education"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">
                    <a
                      href="https://shreni-education.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
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
                  <div className="mt-auto d-flex justify-content-center">
                    <a
                      href="https://github.com/kalpit10/Shreni-Education"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="icon-link fs-4 mx-3"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/kalpitswami_shreni-education-activity-7200806295833100289-Ds-P?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQM8GwBGpWqq6pEKclRv9Mh5Rqmcxx7Qio"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn Profile"
                      className="icon-link fs-4 mx-2"
                    >
                      <FaLinkedinIn />
                    </a>
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
