import React from "react";
import TypeWriter from "typewriter-effect";
import "../Stylesheet/Typewriter.css";

function Typewriter() {
  return (
    <div className="typewriter-effect">
      <TypeWriter
        options={{
          strings: [
            "Cloud • Security • Automation",
            "Designing Resilient AWS Architectures",
            "Cloud Engineering | Security by Design",
            "Docker • Git • Linux • Bash",
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
