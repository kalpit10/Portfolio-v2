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
                      "I am a Cloud and DevOps professional with a 4.0 GPA and a 4x President's Honor List distinction. "
                    )
                    .typeString(
                      "I specialize in architecting automated, production-grade environments with Terraform and GitHub Actions, having engineered platforms that maintained 99.9% uptime during rigorous stress testing. "
                    )
                    .typeString(
                      "I have also won competitions like AWS JAM, which sharpened my ability to solve complex infrastructure challenges and deliver resilient, high-performance cloud solutions that drive operational excellence."
                    )
                    .start();
                }}
                options={{
                  delay: 10,
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
