import React from "react";
import TypeWriter from "typewriter-effect";
import "../Stylesheet/Typewriter.css";

function Typewriter() {
  return (
    <div className="typewriter-effect">
      <TypeWriter
        options={{
          strings: [
            "Infrastructure as Code. At Scale.",
            "Docker • Kubernetes • AWS",
            "Terraform → Pipeline → Production",
            "Security First. Always.",
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
