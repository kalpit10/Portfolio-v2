import React from "react";
import Typewriter from "typewriter-effect";
import "../Stylesheet/Me.css";
import "../App.css";
import Me from "../images/Me.png";

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
            src={Me}
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
                    "As a recent graduate in Computer Applications, I'm embarking on a journey to explore the vast realms of technology."
                  )
                  .typeString(
                    "Armed with a passion for MERN stack development, I am eager to dive into the dynamic world of cybersecurity and cloud computing."
                  )
                  .typeString(
                    "With a fresh perspective, I am ready to contribute, learn, and grow in the ever-evolving tech landscape."
                  )
                  .start();
              }}
              options={{
                delay: 0, // milliseconds between each keystroke
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
