import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "hover.css/css/hover-min.css";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaNode, FaDocker, FaLinux, FaAws, FaShieldAlt } from "react-icons/fa";
import {
  SiAnsible,
  SiMongodb,
  SiGnubash,
  SiTerraform,
  SiGithubactions,
  SiKubernetes,
  SiArgo,
  SiHelm,
  SiTrivy,
  SiPrometheus,
  SiGrafana,
  SiPython,
  SiMicrosoftazure,
  SiAzuredevops,
  SiAmazoncloudwatch,
} from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";
import "../Stylesheet/Skills.css";
import "../App.css";

const skillCategories = [
  {
    title: "Cloud & Orchestration",
    accent: "accent-cloud",
    skills: [
      { icon: <FaAws />, label: "Amazon Web Services" },
      { icon: <SiMicrosoftazure />, label: "Microsoft Azure" },
      { icon: <FaDocker />, label: "Docker" },
      { icon: <SiKubernetes />, label: "Kubernetes" },
      { icon: <SiHelm />, label: "Helm" },
    ],
  },
  {
    title: "Automation & IaC",
    accent: "accent-automation",
    skills: [
      { icon: <SiTerraform />, label: "Terraform" },
      { icon: <SiAnsible />, label: "Ansible" },
      { icon: <SiGithubactions />, label: "GitHub Actions" },
      { icon: <SiArgo />, label: "ArgoCD" },
    ],
  },
  {
    title: "Security & Secrets",
    accent: "accent-collab",
    skills: [
      { icon: <FaShieldAlt />, label: "IRSA & OIDC" },
      { icon: <FaAws />, label: "AWS Secrets Manager" },
      { icon: <SiTrivy />, label: "Trivy" },
      { icon: <FaShieldAlt />, label: "Checkov" },
    ],
  },
  {
    title: "Observability",
    accent: "accent-backend",
    skills: [
      { icon: <SiPrometheus />, label: "Prometheus" },
      { icon: <SiGrafana />, label: "Grafana" },
      { icon: <SiPrometheus />, label: "Alertmanager" },
      { icon: <SiAmazoncloudwatch />, label: "CloudWatch" },
    ],
  },
  {
    title: "OS & Scripting",
    accent: "accent-os",
    skills: [
      { icon: <FaLinux />, label: "Linux" },
      { icon: <SiGnubash />, label: "Bash" },
      { icon: <SiPython />, label: "Python" },
    ],
  },
  {
    title: "Frontend Engineering",
    accent: "accent-frontend",
    skills: [
      { icon: <IoLogoReact />, label: "React.js" },
      { icon: <IoLogoJavascript />, label: "JavaScript" },
    ],
  },
  {
    title: "Backend & Data",
    accent: "accent-backend",
    skills: [
      { icon: <FaNode />, label: "Node.js" },
      { icon: <SiMongodb />, label: "MongoDB" },
    ],
  },
  {
    title: "Collaboration & Version Control",
    accent: "accent-collab",
    skills: [
      { icon: <TbBrandGithub />, label: "Git & GitHub" },
      { icon: <SiAzuredevops />, label: "Azure DevOps" },
    ],
  },
];

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="skills-section py-5 header app">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold dark-project-h1">TECH STACK</h1>
          <p className="skills-subtitle lead mx-auto">
            Every layer of the stack is covered from provisioning resilient
            infrastructure to crafting rich user interfaces and maintaining the
            CI/CD glue between them.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className={`skills-card hvr-float-shadow ${category.accent}`}
              data-aos="zoom-in-up"
              data-aos-delay={index * 120}
            >
              <h2 className="skills-card-title">{category.title}</h2>
              <div className="skill-chip-wrap">
                {category.skills.map((skill) => (
                  <span className="skill-chip" key={skill.label}>
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
