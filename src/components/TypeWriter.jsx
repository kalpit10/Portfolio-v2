import React from "react";
import TypeWriter from "typewriter-effect";

function Typewriter() {
  return (
    <TypeWriter
      options={{
        strings: [
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
  );
}

export default Typewriter;
