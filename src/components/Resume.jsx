import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaAws, FaExternalLinkAlt, FaMedium } from "react-icons/fa";
import "../Stylesheet/Resume.css";
import Header from "./Header";
import Footer from "./Footer";

const timeline = [
  {
    period: "2026 Jan - Apr",
    title: "Information Technology Analyst, DevOps & Infrastructure (Co-op)",
    subtitle:
      "Ministry of Health (MPBSDP) | Government of Ontario, North York",
    bullets: [
      "Automated Ubuntu OS provisioning across 21 managed sites with a parallel-safe Ansible playbook using per-VM OVA templates and cloud-init, cutting effective provisioning time by ~80%.",
      "Authored PowerShell automation for a 150-machine Citrix VDA upgrade, contributing to a team effort that collapsed a ~187-hour manual process into ~12 hours of unattended runtime.",
      "Modernized the application lifecycle tracker by migrating Excel data to SharePoint, building 5 Power BI dashboards, and automating bi-weekly stakeholder reporting via Power Automate.",
      "Authored and coordinated 100+ infrastructure Change Requests as Change Coordinator, driving them through CAB approval, implementation, and closure in a regulated government cloud environment.",
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

const writingFeatures = [
  {
    type: "Case Study",
    project: "EKS Capstone Platform",
    title:
      "Deploying a Production-Ready E-Commerce Platform on AWS EKS",
    summary:
      "End-to-end write-up of a production-style MERN deployment on AWS EKS, covering Terraform environments, ECR, GitHub Actions, OIDC, IRSA, Secrets Manager, HPA, ALB ingress, and CloudWatch observability.",
    href: "https://medium.com/@kalpit.swami/deploying-a-production-ready-e-commerce-platform-on-aws-eks-our-end-to-end-cloud-devops-journey-1fda5881e03d",
    readTime: "13 min read",
    date: "Nov 2025",
    topics: [
      "Amazon EKS",
      "Terraform",
      "GitHub Actions",
      "OIDC",
      "IRSA",
      "CloudWatch",
    ],
  },
  {
    type: "Two-Part Series",
    project: "3-Tier AWS Architecture",
    title: "Building and Hardening a 3-Tier AWS Platform",
    summary:
      "A two-part technical series that starts with a high-availability Terraform build, then evolves it into a secure automated setup with remote state, CI/CD, secrets handling, health checks, and cost review.",
    readTime: "6 min + upgrade story",
    date: "Aug 2025",
    topics: [
      "VPC",
      "ALB",
      "Auto Scaling",
      "RDS",
      "Secrets Manager",
      "Remote State",
    ],
    parts: [
      {
        label: "Part 1",
        title: "Scalable High-Availability 3-Tier AWS Infrastructure",
        href: "https://medium.com/@kalpit.swami/i-built-a-scalable-high-availability-3-tier-aws-infrastructure-using-terraform-heres-what-i-4e75aaad704b",
      },
      {
        label: "Part 2",
        title: "Secure & Automated 3-Tier AWS Upgrade",
        href: "https://medium.com/@kalpit.swami/how-i-transformed-a-simple-3-tier-aws-project-into-a-secure-automated-setup-d9a07dddf27c",
      },
    ],
  },
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
              Cybersecurity (4.0 GPA). AWS JAM award recipient: 1st place at
              AWS Summit JAM 2025 and 2nd place at AWS User Group JAM in April
              2026. 4x President's Honour List.
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
              <strong>AWS JAM</strong>
              <span>1st Place 2025 + 2nd Place 2026</span>
            </div>
            <div>
              <strong>Postgrad</strong>
              <span>Cloud & Cybersecurity</span>
            </div>
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

        <section className="resume-section writing-section">
          <header className="writing-header">
            <p className="eyebrow">Technical Writing</p>
            <h3>Project Deep Dives</h3>
            <p>
              Medium articles that document the engineering decisions behind
              the two cloud projects most relevant to this resume.
            </p>
          </header>
          <div className="writing-grid">
            {writingFeatures.map((article) => (
              <article
                className={`writing-card ${
                  article.parts ? "writing-series" : "writing-featured"
                }`}
                key={article.title}
              >
                <div className="writing-card-top">
                  <div className="writing-icon">
                    {article.parts ? <FaAws /> : <FaMedium />}
                  </div>
                  <div>
                    <span className="writing-type">{article.type}</span>
                    <h4>{article.title}</h4>
                  </div>
                </div>

                <p className="writing-project">Supports: {article.project}</p>
                <p className="writing-summary">{article.summary}</p>

                <div className="writing-meta-row">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <div className="writing-topics">
                  {article.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>

                {article.parts ? (
                  <div className="writing-parts">
                    {article.parts.map((part) => (
                      <a
                        href={part.href}
                        target="_blank"
                        rel="noreferrer"
                        key={part.href}
                      >
                        <span>{part.label}</span>
                        {part.title}
                        <FaExternalLinkAlt />
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="writing-actions">
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read on Medium
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Resume;
