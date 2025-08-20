import React, { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("Mounted");
    toast.info("Welcome to Kalpit Swami's Resume!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }, []);

  const projects = [
    {
      title: "3-Tier AWS Architecture using Terraform",
      bullets: [
        "Deployed 3-tier VPC, ALB, ASG (EC2), and RDS with modular Terraform and least-privilege SGs.",
        "CloudWatch Agent on EC2, bastion SSH, IMDSv2, dual NAT; costs and ops documented.",
        "Launch templates, ALB health checks resolved; reusable IaC patterns.",
      ],
      tech: "Terraform, AWS (VPC, EC2, RDS, ALB), CloudWatch, Auto Scaling",
    },
    {
      title: "Serverless Data Scraping & Notification Pipeline (AWS)",
      bullets: [
        "EventBridge → Lambda (Python/BeautifulSoup) → S3 JSON, SNS email, CloudWatch logs.",
        "IAM roles for least-privilege; daily automation with end-to-end monitoring.",
        "Traceable runs with structured logging and metrics.",
      ],
      tech: "Lambda (Python), EventBridge, S3, SNS, CloudWatch, IAM",
    },
    {
      title: "Resumaid",
      bullets: [
        "MERN app for resume creation with templates, PDF export, and ATS checks.",
        "Secure auth, rate limiting, encrypted storage, MFA (TOTP).",
        "Editable history and profile management.",
      ],
      tech: "MongoDB, Express, React, Node, Docker",
    },
  ];

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
          date="2020 – Present"
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
              Seneca College of Applied Science & Engineering Technology
            </p>
          </div>

          <hr className="border-secondary" />

          {/* Cybersecurity */}
          <div className="mb-4">
            <h5 className="fw-bold mb-1">Cybersecurity & Threat Management</h5>
            <p className="text-muted mb-1">
              Seneca College of Applied Science & Engineering Technology
            </p>
            <p className="mb-0 text-success">GPA: 4.0 / 4.0 (High Honors)</p>
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

        {/* Certifications Toast
        <VerticalTimelineElement
          className="vertical-timeline-element--certifications"
          contentStyle={{ background: "#9b59b6", color: "#fff" }}
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
        </VerticalTimelineElement> */}

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
          position="right"
        >
          <h3 className="vertical-timeline-element-title">Skills</h3>
          <ul className="custom-list">
            <li>AWS Services</li>
            <li>Terraform</li>
            <li>Docker</li>
            <li>Linux</li>
            <li>Git</li>
            <li>Bash</li>
            <li>MongoDB</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
          </ul>
        </VerticalTimelineElement>

        {/* Experience  */}
        <VerticalTimelineElement
          className="vertical-timeline-element--projects"
          contentStyle={{ background: "#27ae60", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #27ae60" }}
          iconStyle={{ background: "#27ae60", color: "#fff" }}
          position="left"
        >
          <h3 className="vertical-timeline-element-title">
            Experience - Freelance
          </h3>
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
                  </li>{" "}
                  &nbsp;
                  <li className="font-weight-bold">
                    Tech Stack: React JS, Tailwind, EmailJS
                  </li>
                </ul>
              </li>
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--projects"
          contentStyle={{
            background: "#0a86f3ff",
            color: "#fff",
            borderRadius: "12px",
          }}
          contentArrowStyle={{ borderRight: "7px solid #0a86f3ff" }}
          iconStyle={{ background: "#0a86f3ff", color: "#fff" }}
          position="right"
        >
          <h3 className="vertical-timeline-element-title mb-3">Projects</h3>

          <ul className="mb-3">
            {projects.map((p) => (
              <li key={p.title} className="mb-3">
                <strong>{p.title}</strong>
                <ul className="mt-1">
                  {/* Show only first bullet by default, expand rest on click */}
                  {(open ? p.bullets : p.bullets.slice(0, 1)).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="small fw-semibold mt-1">Tech: {p.tech}</div>
              </li>
            ))}
          </ul>

          <div className="d-flex">
            <button
              type="button"
              className="btn btn-sm btn-outline-light ms-auto"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "Show less" : "Show more"}
            </button>
          </div>
        </VerticalTimelineElement>

        {/* Achievements */}
        <VerticalTimelineElement
          className="vertical-timeline-element--achievements"
          contentStyle={{ background: "#f39c12", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #f39c12" }}
          iconStyle={{ background: "#f39c12", color: "#fff" }}
          position="left"
        >
          <h3 className="vertical-timeline-element-title">Achievements</h3>
          <ul>
            <li>President’s Honor List, Class of 2024.</li> &nbsp;
            <li>
              Core Member – National Service Scheme (NSS), a student-led
              community service and leadership program at JIMS, Vasant Kunj, New
              Delhi.
            </li>{" "}
            &nbsp;
            <li>Core Member – IT Club (ENIGMA) of JIMS, Vasant Kunj</li> &nbsp;
            <li>Silver Medalist in Badminton in CBSE Inter-Zonal Tournament</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <Footer />
    </div>
  );
}

export default Resume;
