import React from "react";
import "../Stylesheet/Projects.css";
import { FaGithub, FaMedium, FaLinkedinIn } from "react-icons/fa";
import resumaidLogo from "../images/logodiv1.jpeg";
import ShreniEducation from "../images/Shreni.png";
import ThreeTierArch from "../images/3-Tier-Web-Arch.png";
import awsServerlessScraper from "../images/aws-serverless-scraper.png";
import "../App.css";
import Tilt from "react-parallax-tilt";

function Projects() {
  return (
    <div className="p-3 header app">
      <h1 className="fw-bold mt-4 text-center my-6 mx-auto dark-project-h1">
        PROJECTS
      </h1>

      <div className="container py-5 px-3">
        {/* 1 col on xs, 2 on md and lg */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 gy-5">
          {/* 3-Tier AWS Architecture */}
          <div className="col d-flex">
            <Tilt
              className="parallax-effect w-100 h-100 py-5"
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
                  <div className="mt-auto d-flex justify-content-center gap-4 pb-2">
                    <a
                      href="https://github.com/kalpit10/3-Tier-Web-Architecture-Terraform-"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="icon-link fs-4 mx-2"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://medium.com/@kalpit.swami/i-built-a-scalable-high-availability-3-tier-aws-infrastructure-using-terraform-heres-what-i-4e75aaad704b"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Medium"
                      className="icon-link fs-4 px-3"
                    >
                      <FaMedium />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/kalpitswami_aws-terraform-cloudcomputing-activity-7363007220260749312-hdzz"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="icon-link fs-4"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          {/* Serverless Scraper (SECOND) */}
          <div className="col d-flex">
            <Tilt
              className="parallax-effect w-100 h-100 py-5"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1}
            >
              <div className="card project-card h-100 d-flex flex-column">
                <img
                  src={awsServerlessScraper}
                  className="card-img-top project-img"
                  alt="Serverless Data Scraping & Notification Pipeline on AWS"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">
                    Serverless Data Scraping & Notification Pipeline on AWS
                  </h5>
                  <p className="card-text">
                    Built a serverless pipeline using EventBridge, Lambda
                    (Python), S3, SNS, and CloudWatch to automate daily web
                    scraping and persist results as JSON. Designed IAM roles for
                    least-privilege access, implemented BeautifulSoup-based
                    parsers, and wired email alerts via SNS with end-to-end
                    logging and monitoring in CloudWatch for traceability.
                  </p>
                  <div className="mt-auto d-flex justify-content-center gap-4 pb-2">
                    <a
                      href="https://github.com/kalpit10/aws-serverless-data-pipeline"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="icon-link fs-4 mx-2"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          {/* Resumaid */}
          <div className="col d-flex">
            <Tilt
              className="parallax-effect w-100 h-100 py-5"
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
                  <div className="mt-auto d-flex justify-content-center gap-4 pb-2">
                    <a
                      href="https://github.com/kalpit10/Resumaid"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="icon-link fs-4 mx-3"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/kalpitswami_cybersecurity-owasp-vapt-activity-7315881583159255041-RBga"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="icon-link fs-4 mx-2"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          {/* Shreni Education */}
          <div className="col d-flex">
            <Tilt
              className="parallax-effect w-100 h-100 py-5"
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
                    Tailwind CSS, and EmailJS. This dynamic web app details
                    courses, faculty, and services, ensuring a smooth UX and
                    reliable communication via email integrations.
                  </p>
                  <div className="mt-auto d-flex justify-content-center gap-4 pb-2">
                    <a
                      href="https://github.com/kalpit10/Shreni-Education"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="icon-link fs-4 mx-3"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/kalpitswami_shreni-education-activity-7200806295833100289-Ds-P"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
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
