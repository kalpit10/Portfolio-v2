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
                    "I'm a cloud computing enthusiast with a solid grounding in cybersecurity, passionate about building secure, scalable web solutions. "
                  )
                  .typeString(
                    "Currently advancing my skills through a postgraduate program in Cloud Architecture. I love working at the crossroads of infrastructure, security, and automation. "
                  )
                  .typeString(
                    "I enjoy designing robust cloud environments and bringing ideas to life with clean, efficient code."
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
