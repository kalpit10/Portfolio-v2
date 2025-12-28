import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "hover.css/css/hover-min.css";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaNode, FaDocker, FaLinux, FaAws } from "react-icons/fa";
import {
  SiMongodb,
  SiGnubash,
  SiTerraform,
  SiGithubactions,
  SiKubernetes,
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
      { icon: <FaDocker />, label: "Docker" },
      { icon: <SiKubernetes />, label: "Kubernetes" },
    ],
  },
  {
    title: "Automation & IaC",
    accent: "accent-automation",
    skills: [
      { icon: <SiTerraform />, label: "Terraform" },
      { icon: <SiGithubactions />, label: "GitHub Actions" },
    ],
  },
  {
    title: "OS & Scripting",
    accent: "accent-os",
    skills: [
      { icon: <FaLinux />, label: "Linux" },
      { icon: <SiGnubash />, label: "Bash" },
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
    skills: [{ icon: <TbBrandGithub />, label: "Git & GitHub" }],
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
            Every layer of the stack is coveredƒ?"from provisioning resilient
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
