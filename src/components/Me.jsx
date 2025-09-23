import React from "react";
import Typewriter from "typewriter-effect";
import "../Stylesheet/Me.css";
import "../App.css";
import MyPhoto from "../images/Me.png";

// Me.jsx
function Me(props) {
  return (
    <div className={`header app d-flex align-items-center container`}>
      {/* All elements in one row */}
      <div className="row justify-content-center">
        {/* Left side with h2 and img */}
        <div className="col-12 col-md-4 text-center">
          <h1 className="me-h2 py-5">ABOUT ME</h1>
          <img
            src={MyPhoto}
            className="img-fluid rounded-circle mb-3"
            style={{ maxWidth: "150px" }}
            alt="Kalpit Swami"
          />
        </div>

        {/* Vertical line */}
        <div
          className="vertical-line mb-3 mt-auto "
          style={{ height: "15rem" }}
        ></div>

        {/* Right side with text */}
        <div className="col-12 col-md-6 ml-md-3 mt-auto mb-5">
          <div className="card bg-transparent border-0">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "I am a Cloud/DevOps engineer in training with a foundation in cybersecurity and a passion for building secure, scalable systems. "
                  )
                  .typeString(
                    "Currently pursuing a postgraduate program in Cloud Architecture, I focus on the intersection of infrastructure, automation, and security. "
                  )
                  .typeString(
                    "I enjoy designing reliable cloud environments, streamlining deployments with Infrastructure as Code, and applying a security-first mindset to every project."
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
  );
}

export default Me;
