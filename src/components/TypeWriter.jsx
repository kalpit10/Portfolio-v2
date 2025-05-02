import React from "react";
import TypeWriter from "typewriter-effect";
import "../Stylesheet/Typewriter.css";

function Typewriter() {
  return (
    <div className="typewriter-effect">
      <TypeWriter
        options={{
          strings: [
            "Cybersecurity | Cloud | DevSecOps",
            "Full-Stack Developer",
            "Building Secure & Scalable Apps",
            "Docker • GitHub • Linux • AWS",
          ],
          delay: 70,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Typewriter;
