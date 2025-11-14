import React from "react";
import "../Stylesheet/Projects.css";
import {
  FaGithub,
  FaMedium,
  FaLinkedinIn,
  FaExternalLinkAlt,
} from "react-icons/fa";
import resumaidLogo from "../images/logodiv1.jpeg";
import ShreniEducation from "../images/Shreni.png";
import ThreeTierArch from "../images/3-Tier-Web-Arch.png";
import awsServerlessScraper from "../images/aws-serverless-scraper.png";
import CapstoneProject from "../images/Capstone.png";
import "../App.css";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    id: "capstone",
    title: "Capstone: Cloud-Native E-Commerce Deployment on AWS",
    badge: "Featured · DevOps Capstone",
    subtitle: "Terraform landing zone · Private EKS · GitHub Actions OIDC",
    description:
      "Architected a dual-environment AWS platform that provisions VPCs, EKS, and ECR through modular Terraform, then continuously deploys containers through GitHub Actions and OIDC federation. Hardened workloads with IRSA, Secrets Manager, private node groups, and ALB ingress to deliver a resilient ecommerce deployment without exposing static credentials.",
    highlights: [
      "Reusable Terraform blueprints with remote state + DynamoDB locking",
      "End-to-end CI/CD: build, scan, and promote images to ECR automatically",
      "Horizontal Pod Autoscaling, CloudWatch dashboards, and GitOps-style rollouts",
    ],
    stack: [
      "Terraform",
      "AWS EKS",
      "GitHub Actions",
      "Kubernetes",
      "Secrets Manager",
      "CloudWatch",
    ],
    links: [
      {
        href: "https://github.com/kalpit10/Capstone-Infra-Team4",
        label: "GitHub-Infra",
        icon: <FaGithub />,
      },
      {
        href: "https://github.com/kalpit10/Capstone-WebApp",
        label: "GitHub-WebApp",
        icon: <FaGithub />,
      },
    ],
    cover: CapstoneProject,
  },
  {
    id: "three-tier",
    title: "Production-Ready 3-Tier AWS Infrastructure",
    badge: "Featured · Infra-as-Code",
    subtitle: "VPC · ALB · Auto Scaling EC2 · RDS · GitHub Actions",
    description:
      "Delivered a hardened AWS landing zone with Terraform that spins up public/private subnets, dual NAT gateways, and encrypted RDS plus Auto Scaling EC2 for the app tier. Integrated IMDSv2, Secrets Manager, bastion access, and observability pipelines while shipping a fully automated GitHub Actions workflow for deploys.",
    highlights: [
      "Cost-aware, multi-AZ design with health checks and failover testing",
      "OIDC-based CI/CD deploys infrastructure + PHP sample workload safely",
      "CloudWatch Agent + dashboards for near real-time telemetry",
    ],
    stack: ["Terraform", "AWS", "GitHub Actions", "CloudWatch", "PHP Demo"],
    links: [
      {
        href: "https://github.com/kalpit10/3-Tier-Web-Architecture-Terraform-",
        label: "GitHub",
        icon: <FaGithub />,
      },
      {
        href: "https://medium.com/@kalpit.swami/how-i-transformed-a-simple-3-tier-aws-project-into-a-secure-automated-setup-d9a07dddf27c",
        label: "Medium",
        icon: <FaMedium />,
      },
      {
        href: "https://www.linkedin.com/posts/kalpitswami_aws-terraform-cloudcomputing-activity-7363007220260749312-hdzz",
        label: "LinkedIn",
        icon: <FaLinkedinIn />,
      },
    ],
    cover: ThreeTierArch,
  },
];

const otherProjects = [
  {
    id: "serverless-data",
    title: "Serverless Data Scraping & Notification Pipeline on AWS",
    badge: "Automation",
    subtitle: "EventBridge | Lambda | S3 | SNS | CloudWatch",
    description:
      "Built a serverless pipeline using EventBridge, Lambda (Python), S3, SNS, and CloudWatch to automate daily web scraping and persist results as JSON. Designed IAM least-privilege roles, BeautifulSoup parsers, and SNS email alerts with end-to-end logging for traceability.",
    highlights: [
      "EventBridge schedules scraping jobs with Lambda powering BeautifulSoup crawlers",
      "S3 snapshots, SNS alerts, and CloudWatch telemetry ensure auditability",
    ],
    stack: ["AWS Lambda", "EventBridge", "SNS", "S3", "Python", "CloudWatch"],
    links: [
      {
        href: "https://github.com/kalpit10/aws-serverless-data-pipeline",
        label: "GitHub",
        icon: <FaGithub />,
      },
    ],
    cover: awsServerlessScraper,
  },
  {
    id: "resumaid",
    title: "Resumaid · Secure Resume Builder & ATS Insights",
    badge: "SaaS",
    subtitle: "OWASP Guardrails · MFA · ATS Insights",
    description:
      "Designed a modern resume builder that pairs polished templates with ATS checks while keeping applicant data encrypted, MFA-protected, and shielded with rate limiting + secure headers.",
    highlights: [
      "Security-first UX informed by OWASP ASVS and custom VAPT findings",
      "Live LinkedIn storytelling around cyber hygiene for job seekers",
    ],
    stack: ["React", "Node.js", "MongoDB", "OWASP", "MFA"],
    links: [
      {
        href: "https://github.com/kalpit10/Resumaid",
        label: "GitHub",
        icon: <FaGithub />,
      },
      {
        href: "https://www.linkedin.com/posts/kalpitswami_cybersecurity-owasp-vapt-activity-7315881583159255041-RBga",
        label: "LinkedIn",
        icon: <FaLinkedinIn />,
      },
    ],
    cover: resumaidLogo,
  },
  {
    id: "shreni-education",
    title: "Shreni Education · Learning Hub",
    badge: "Freelance",
    subtitle: "React · Tailwind · EmailJS",
    description:
      "Freelance build for an education collective with dynamic course catalogs, responsive storytelling, and EmailJS-powered lead capture that keeps counselors in sync.",
    highlights: [
      "Crafted modular UI blocks for quick content swaps by non-dev teams",
      "Optimized Lighthouse performance + prefetching on Vercel hosting",
    ],
    stack: ["React", "Tailwind", "EmailJS", "Vercel"],
    links: [
      {
        href: "https://shreni-education.vercel.app/",
        label: "Live",
        icon: <FaExternalLinkAlt />,
      },
      {
        href: "https://github.com/kalpit10/Shreni-Education",
        label: "GitHub",
        icon: <FaGithub />,
      },
      {
        href: "https://www.linkedin.com/posts/kalpitswami_shreni-education-activity-7200806295833100289-Ds-P",
        label: "LinkedIn",
        icon: <FaLinkedinIn />,
      },
    ],
    cover: ShreniEducation,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({ project, featured }) => (
  <motion.article
    className={`project-card-modern ${featured ? "featured" : ""}`}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="project-card-head">
      <span className="project-badge">{project.badge}</span>
      {project.subtitle && (
        <p className="project-subtitle text-muted">{project.subtitle}</p>
      )}
    </div>

    {project.cover && (
      <div className="project-visual ">
        <img
          src={project.cover}
          alt={`${project.title} mockup`}
          loading="lazy"
        />
      </div>
    )}

    <h3 className="project-title">{project.title}</h3>
    <p className="project-description">{project.description}</p>

    {project.highlights && (
      <ul className="project-highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    )}

    <div className="project-stack">
      {project.stack.map((tech) => (
        <span className="tech-chip" key={tech}>
          {tech}
        </span>
      ))}
    </div>

    <div className="project-links">
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
          className="icon-link"
        >
          {link.icon}
        </a>
      ))}
    </div>
  </motion.article>
);

function Projects() {
  return (
    <div className="p-3 header app projects-section" id="projects">
      <div className="container py-5 px-3">
        <div className="projects-heading text-center">
          <p className="eyebrow">Builds & Case Studies</p>
          <h1 className="fw-bold dark-project-h1">PROJECTS</h1>
          <p className="section-lede">
            Real-world cloud, platform, and product work—from production-ready
            infrastructure to defensible SaaS experiences.
          </p>
        </div>

        <section className="projects-group">
          <div className="section-label">Major Projects</div>
          <div className="projects-grid featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </section>

        <section className="projects-group">
          <div className="section-label">Builds & Collaborations</div>
          <div className="projects-grid">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
