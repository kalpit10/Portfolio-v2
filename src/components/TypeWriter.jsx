import React from "react";
import TypeWriter from "typewriter-effect";
import "../Stylesheet/Typewriter.css";

function Typewriter() {
  return (
    <div className="typewriter-effect">
      <TypeWriter
        options={{
          strings: [
            "CyberSecurity",
            "MERN STACK DEVELOPER",
            "JAVASCRIPT",
            "REACT.JS",
            "NODE.JS",
            "MONGODB",
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
