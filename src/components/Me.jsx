import React from "react";
import Typewriter from "typewriter-effect";
import "../Stylesheet/Me.css";
import "../App.css";
import MyPhoto from "../images/Me.png";

function Me(props) {
  return (
    <section className="about-section header app" id="about">
      <div className="container about-container">
        <div className="about-card about-shell">
          <div className="about-visual">
            <div className="portrait-wrap">
              <div className="portrait-glow" aria-hidden="true"></div>
              <div className="portrait-frame">
                <img src={MyPhoto} alt="Kalpit Swami" />
              </div>
            </div>
          </div>

          <div className="about-content">
            <h1 className="about-title">ABOUT ME</h1>
            <div className="typewriter-block">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "I'm a Cloud & DevOps Engineer who builds infrastructure that ships - not just in labs, but in production. "
                    )
                    .typeString(
                      "During my time at the Ontario Ministry of Public & Business Service Delivery, I automated provisioning across 21 sites using Ansible and engineered a phased Citrix migration with PowerShell. "
                    )
                    .typeString(
                      "On my own, I've architected multi-environment AWS platforms on EKS with Terraform, GitHub Actions CI/CD, and security-first design from VPC isolation to secrets injection. "
                    )
                    .typeString(
                      "I hold postgraduate certifications in Cloud Architecture and Cybersecurity with a 4.0 GPA, earned the President's Honour List four times, and won the AWS JAM competition solving real infrastructure challenges under time pressure. "
                    )
                    .typeString(
                      "I don't list tools I haven't used in production or projects. If it's on my site, I've built with it."
                    )
                    .start();
                }}
                options={{
                  delay: 8,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Me;
