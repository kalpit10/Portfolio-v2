import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Stylesheet/Resume.css";

function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
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
        Email: kalpit.swami@gmail.com || Location: Faridabad, IN
      </p>

      <VerticalTimeline>
        {/* Education */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#3498db", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #3498db" }}
          date="2020-2023"
          iconStyle={{
            background: "#3498db",
            color: "#fff",
            borderColor: "#e74c3c",
          }}
          position="left"
        >
          <h3 className="vertical-timeline-element-title">
            Bachelors In Computer Application
          </h3>
          <p className="vertical-timeline-element-subtitle">
            Jagannath International Management School, New Delhi
          </p>
          <p>9.2 GPA (Overall)</p>
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
            <li>MongoDB</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>HTML</li>
            <li>CSS</li>
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
              <strong>Resumaid</strong>
              <ul>
                <li>
                  A Web Application for generating resumes with PDF download
                  functionality.
                </li>
                <li>
                  ATS capabilities for resume scoring and user login for data
                  access.
                </li>
                <li>Tech Stack: MERN (MongoDB, ExpressJS, ReactJS, NodeJS)</li>
              </ul>
            </li>
            <li>
              <strong>Freshmeals (Food Order Website)</strong>
              <ul>
                <li>
                  Responsive website for online food ordering with Firebase
                  integration.
                </li>
                <li>Tech Stack: React JS, Firebase</li>
              </ul>
            </li>
            <li>
              <strong>Personal Portfolio</strong>
              <ul>
                <li>
                  Dynamic personal portfolio using React.js and Bootstrap for a
                  clean and responsive design.
                </li>
                <li>
                  Integrated seamless navigation showcasing skills, projects,
                  and resume.
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
      <ToastContainer />
    </div>
  );
}

export default Resume;
