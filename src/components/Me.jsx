import React from "react";
import Typewriter from "typewriter-effect";
import "../Stylesheet/Me.css";
import "../App.css";

// Me.jsx
function Me(props) {
  // const fullText =
  //   "A tech enthusiast on a journey to explore the world of web development. My experience includes projects like 'Resumaid,' where I crafted user-friendly solutions. I'm proficient in JavaScript, React.js, and more. Beyond coding, I'm captivated by AI/ML, enjoy immersive video games, and am passionate about sports.";

  return (
    <div className={`header app d-flex align-items-center container`}>
      {/* All elements in one row */}
      <div className="row justify-content-center">
        {/* Left side with h2 and img */}
        <div className="col-12 col-md-4 text-center">
          <h1 className="me-h2 py-5">ABOUT ME</h1>
          <img
            src="https://media.licdn.com/dms/image/C4D03AQEVTqEhu-rYNA/profile-displayphoto-shrink_800_800/0/1658581544043?e=1704326400&v=beta&t=jtXV9Iy9EI-oR1x4-rF8hP2huyTcNkwCFRY_Lx2Rn2Y"
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
                    "A tech enthusiast on a journey to explore the world of web development."
                  )
                  .typeString(
                    "My experience includes projects like 'Resumaid,' where I crafted user-friendly solutions."
                  )
                  .typeString(
                    "I'm proficient in JavaScript, React.js, and more."
                  )
                  .typeString(
                    "Beyond coding, I'm captivated by AI/ML, enjoy immersive video games, and am passionate about sports."
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
