import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Stylesheet/Resume.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Mounted");
    toast.info("Welcome to Kalpit Swami's Resume!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }, []);

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = process.env.PUBLIC_URL + "/Resume.pdf";
    downloadLink.download = "Kalpit Swami Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="resume-container header app">
      <Header />
      <button
        onClick={() => navigate("/")}
        type="button"
        className="btn btn-outline-primary m-3"
      >
        Back
      </button>

      <button
        onClick={handleDownload}
        type="button"
        className="btn btn-outline-primary m-4"
      >
        Download CV
      </button>
      <h1 className="h1-resume">Kalpit Swami</h1>
      <p className="header-para">
        Email: kalpit.swami@gmail.com || Location: Toronto, Canada
      </p>

      <VerticalTimeline>
        {/* Education */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#1f2029", // dark background
            color: "#f8f9fa",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            padding: "24px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #1f2029" }}
          date="2020 – 2023"
          iconStyle={{
            background: "#10b981", // elegant green
            color: "#fff",
            borderColor: "#0d6efd", // Bootstrap blue
          }}
          position="left"
        >
          {/* Cloud Architecture */}
          <div className="mb-4">
            <h5 className="fw-bold mb-1">
              Cloud Architecture & Administration
            </h5>
            <p className="text-muted mb-0">
              Seneca College of Applied Arts & Technology
            </p>
          </div>

          <hr className="border-secondary" />

          {/* Cybersecurity */}
          <div className="mb-4">
            <h5 className="fw-bold mb-1">Cybersecurity & Threat Management</h5>
            <p className="text-muted mb-1">
              Seneca College of Applied Arts & Technology
            </p>
            <p className="mb-0 text-success">GPA: 4.0 / 4.0</p>
          </div>

          <hr className="border-secondary" />

          {/* BCA */}
          <div>
            <h5 className="fw-bold mb-1">Bachelor of Computer Applications</h5>
            <p className="text-muted mb-1">
              Jagannath International Management School, New Delhi
            </p>
            <p className="mb-0 text-success">GPA: 9.28 / 10.0</p>
          </div>
        </VerticalTimelineElement>

        {/* Certifications Toast */}
        <VerticalTimelineElement
          className="vertical-timeline-element--certifications"
          contentStyle={{ background: "#9b59b6", color: "#fff" }}
          date="2020-2022"
          contentArrowStyle={{ borderRight: "7px solid  #9b59b6" }}
          iconStyle={{ background: "#9b59b6", color: "#fff" }}
          position="right"
        >
          <h3 className="vertical-timeline-element-title">Certifications</h3>
          <ul>
            <li>
              <strong>Web Development Bootcamp </strong>
              <p>- Dr. Angela Yu</p>
            </li>
            <li>
              <strong>NodeJS Development Bootcamp</strong>
              <p>- Zero To Mastery Academy</p>
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Skills Toast */}

        <VerticalTimelineElement
          className="vertical-timeline-element--skills"
          contentStyle={{ background: "#e74c3c", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #e74c3c" }}
          iconStyle={{
            background: "#e74c3c",
            color: "#fff",
            borderColor: "#e74c3c",
          }}
          position="left"
        >
          <h3 className="vertical-timeline-element-title">Skills</h3>
          <ul className="custom-list">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Docker</li>
            <li>Linux</li>
            <li>MongoDB</li>
            <li>Bootstrap</li>
            <li>TailWind</li>
            <li>Git</li>
          </ul>
        </VerticalTimelineElement>

        {/* Projects */}
        <VerticalTimelineElement
          className="vertical-timeline-element--projects"
          contentStyle={{ background: "#27ae60", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #27ae60" }}
          date="2021-Present"
          iconStyle={{ background: "#27ae60", color: "#fff" }}
          position="right"
        >
          <h3 className="vertical-timeline-element-title">Projects</h3>
          <ul>
            <li>
              <li>
                <strong>Shreni Education</strong>
                <ul>
                  <li>
                    Developed Shreni Education’s website, providing
                    comprehensive information about courses, faculty, and
                    services, ensuring a user-friendly experience and integrated
                    communication.
                  </li>
                  <li className="font-weight-bold">
                    Tech Stack: React JS, Tailwind, EmailJS
                  </li>
                </ul>
              </li>
              <strong>Resumaid</strong>
              <ul>
                <li>
                  Developed a MERN stack web application that allows users to
                  generate professional resumes using customizable templates
                  with PDF download support.
                </li>
                <li>
                  Integrated an ATS scoring system to evaluate resumes based on
                  predefined rules and provide feedback for optimization.
                </li>
                <li>
                  Implemented secure user authentication with login-based access
                  to saved resume data and editable resume history.
                </li>
                <li>
                  Added security features like encrypted data storage, rate
                  limiting, IP-based blocking, and MFA via TOTP QR codes.
                </li>
                <li className="font-weight-bold">
                  Tech Stack: MongoDB, Express.js, React.js, Node.js, Docker
                </li>
              </ul>
            </li>
          </ul>
        </VerticalTimelineElement>

        {/* Achievements */}
        <VerticalTimelineElement
          className="vertical-timeline-element--achievements"
          contentStyle={{ background: "#f39c12", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f39c12" }}
          date=""
          iconStyle={{ background: "#f39c12", color: "#fff" }}
          position="left"
        >
          <h3 className="vertical-timeline-element-title">Achievements</h3>
          <ul>
            <li>
              Core Member – National Service Scheme (NSS) of JIMS, Vasant Kunj
            </li>
            <li>Member of Placement cell of JIMS, Vasant Kunj</li>
            <li>Core Member – IT Club (ENIGMA) of JIMS, Vasant Kunj</li>
            <li>Silver Medalist in Badminton in CBSE Inter-Zonal Tournament</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <Footer />
    </div>
  );
}

export default Resume;
