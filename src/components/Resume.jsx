import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Stylesheet/Resume.css";
import Header from "./Header";
import Footer from "./Footer";

const timeline = [
  {
    period: "2026 Jan - Apr",
    title: "Information Technology Analyst (Co-op)",
    subtitle:
      "Ministry of Public & Business Service Delivery & Procurement | GovTechON - North York, Ontario",
    bullets: [
      "Developed and deployed Infrastructure-as-Code (IaC) using Ansible to automate OS provisioning and server configuration across 21 sites.",
      "Engineered Python and PowerShell automation scripts to streamline infrastructure operations, including a phased Citrix VDA migration.",
      "Designed and deployed interactive monitoring dashboards using Power BI to improve system observability and support data-driven operational reporting for stakeholders.",
      "Configured automated alerting workflows using Power Automate to enable proactive incident detection and faster response times, driving operational excellence.",
      "Enforced security and compliance standards across a government cloud environment by managing 100+ infrastructure Change Requests, ensuring system reliability.",
    ],
  },
  {
    period: "2025 May - Dec",
    title: "Cloud Architecture & Administration (Postgrad)",
    subtitle: "Seneca Polytechnic - Toronto",
    highlight: "President's Honour List - 4.0 / 4.0 GPA",
    bullets: [
      "Created secure microservice landing zones across AWS/Azure with governance-ready automation.",
      "Ran resiliency testing and compliance reporting that fed directly into capstone wins.",
    ],
  },
  {
    period: "2024 Sept - 2025 Apr",
    title: "Cybersecurity & Threat Management (Postgrad)",
    subtitle: "Seneca Polytechnic - Toronto",
    highlight: "President's Honour List - 4.0 / 4.0 GPA",
    bullets: [
      "Built OWASP-aligned controls, red/blue-team playbooks, and stakeholder-ready security comms.",
      "Delivered VAPT updates and executive briefings that informed program-wide remediation.",
    ],
  },
  {
    period: "2024 Jan - Sep",
    title: "Freelance - Frontend & Deployment Engineer",
    subtitle: "Shreni Education",
    highlight: "React/Tailwind single-owner engagement",
    bullets: [
      "Owns discovery through launch for an education collective, integrating EmailJS workflows.",
      "Balances SEO, performance, and content refreshes with agile releases.",
    ],
  },
  {
    period: "2020 - 2023",
    title: "Bachelor of Computer Applications",
    subtitle: "JIMS, Vasant Kunj (GGSIPU - New Delhi)",
    highlight: "Graduated with 3.8 / 4.0 GPA",
    bullets: [
      "Focused on software engineering fundamentals while contributing to NSS and IT club initiatives.",
      "Led academic projects that sparked a deeper dive into cloud and security engineering.",
    ],
  },
];

const focusTracks = [
  {
    tag: "Cloud Projects",
    detail:
      "Capstone EKS platform, 3-tier Terraform architecture, and serverless data pipeline live inside the Projects section.",
    action: "Browse Projects",
    href: "/",
  },
  {
    tag: "Awards & Spotlights",
    detail:
      "AWS Summit JAM win plus dual President's Honour List write-ups are showcased in the Awards area.",
    action: "See Awards",
    href: "/",
  },
  {
    tag: "Writing & Network",
    detail:
      "Long-form breakdowns, recommendations, and community highlights live on LinkedIn.",
    action: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/kalpitswami/",
  },
];

const competencies = [
  "Platform Engineering & Cloud Architecture",
  "DevSecOps Automation & GitHub Actions",
  "Security Compliance & Executive Reporting",
  "Client Collaboration & Delivery Leadership",
];

const toolset =
  "AWS - Terraform - Kubernetes - Docker - GitHub Actions - Linux - Bash - JavaScript - React - Node.js - MongoDB";

const achievements = [
  {
    label: "AWS JAM Winner - AWS Summit 2025 (details in Awards)",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7369781102091235330/",
  },
  {
    label: "President's Honour List (Cloud Architecture & Administration)",
  },
  {
    label: "President's Honour List (Cybersecurity & Threat Management)",
  },
  { label: "Core Member - NSS & IT Club (ENIGMA), JIMS Vasant Kunj" },
  { label: "Silver Medalist - CBSE Inter-Zonal Badminton Tournament" },
];

function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.info("Welcome to Kalpit Swami's Resume!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }, []);

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = `${process.env.PUBLIC_URL}/Resume.pdf`;
    downloadLink.download = "Kalpit Swami Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="resume-screen header app">
      <Header />
      <main className="resume-shell container py-5 px-3">
        <section className="resume-hero-block">
          <div className="hero-text">
            <p className="eyebrow">Resume</p>
            <h1>Kalpit Swami</h1>
            <p className="hero-summary">
              Cloud & DevOps Engineer who automated infrastructure across 21
              government sites using Ansible, deployed production microservices
              on Amazon EKS with Terraform and GitHub Actions CI/CD, and
              designed secure multi-environment AWS architectures with OIDC
              authentication, IRSA secrets injection, and least-privilege
              networking. Postgraduate-trained in Cloud Architecture &
              Cybersecurity (4.0 GPA). AWS JAM winner. 4x President's Honour
              List.
            </p>
            <ul className="hero-meta">
              <li>
                <span>Email</span>
                <a href="mailto:kalpit.swami@gmail.com">
                  kalpit.swami@gmail.com
                </a>
              </li>
              <li>
                <span>Location</span>
                <p>Toronto, Canada</p>
              </li>
            </ul>
            <div className="hero-buttons">
              <button
                className="resume-link ghost"
                onClick={() => navigate("/")}
              >
                Back to Home
              </button>
              <button className="resume-link solid" onClick={handleDownload}>
                Download PDF
              </button>
            </div>
          </div>
          <div className="hero-pillars">
            <div>
              <strong>4.0 GPA</strong>
              <span>4x President's Honour List</span>
            </div>
            <div>
              <strong>AWS Summit</strong>
              <span>JAM Winner 2025</span>
            </div>
            <div>
              <strong>Postgrad</strong>
              <span>Cloud & Cybersecurity</span>
            </div>
          </div>
        </section>

        <section className="resume-section resume-focus">
          <header>
            <h3>Focus Areas</h3>
          </header>
          <div className="focus-stream">
            {focusTracks.map((track) => (
              <div className="focus-row" key={track.tag}>
                <div className="focus-tag">{track.tag}</div>
                <p>{track.detail}</p>
                <a href={track.href} target="_blank" rel="noreferrer">
                  {track.action}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <header>
            <h3>Career & Education Timeline</h3>
          </header>
          <div className="timeline">
            {timeline.map((item) => (
              <article
                className="timeline-row"
                key={`${item.title}-${item.period}`}
              >
                <div className="timeline-node" />
                <div className="timeline-period mx-5">{item.period}</div>
                <div className="timeline-body">
                  <h4>{item.title}</h4>
                  <p className="timeline-subtitle">{item.subtitle}</p>
                  <p className="timeline-highlight">{item.highlight}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <header>
            <h3>Competencies & Toolset</h3>
          </header>
          <div className="competency-grid">
            <ul>
              {competencies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="toolset">Toolset: {toolset}</p>
          </div>
        </section>

        <section className="resume-section">
          <header>
            <h3>Awards & Activities</h3>
          </header>
          <ul className="achievement-list">
            {achievements.map((achievement) => (
              <li key={achievement.label}>
                {achievement.href ? (
                  <a href={achievement.href} target="_blank" rel="noreferrer">
                    {achievement.label}
                  </a>
                ) : (
                  achievement.label
                )}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Resume;
