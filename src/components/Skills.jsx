import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaNode, FaBootstrap, FaGit } from "react-icons/fa";
import { FaDocker, FaLinux } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Stylesheet/Skills.css";
import "../App.css";

function Skills() {
  return (
    <div className="p-5 header app">
      <h1 className="mt-4 text-center my-6 mx-auto dark-skill">TECH STACK</h1>
      <div className="row justify-content-center pb-5 py-4">
        <div className="col-xs-4 col-md-2 tech-icons">
          <IoLogoJavascript />
          <h5 className="mx-auto font-weight-light p-2">JavaScript</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons">
          <IoLogoReact />
          <h5 className="mx-auto font-weight-light p-2">React.js</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons">
          <FaNode />
          <h5 className="mx-auto font-weight-light p-2">Node.js</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons">
          <FaDocker />
          <h5 className="mx-auto font-weight-light p-2">Docker</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons">
          <FaLinux />
          <h5 className="mx-auto font-weight-light p-2">Linux</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons">
          <SiExpress />
          <h5 className="mx-auto font-weight-light p-2">Express.js</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons">
          <SiMongodb />
          <h5 className="mx-auto font-weight-light p-2 ">MongoDB</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons">
          <FaBootstrap />
          <h5 className="mx-auto font-weight-light p-2">Bootstrap</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons">
          <FaGit />
          <h5 className="mx-auto font-weight-light p-2">Git</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons">
          <SiTailwindcss />
          <h5 className="mx-auto font-weight-light p-2">Tailwind</h5>
        </div>
      </div>
    </div>
  );
}

export default Skills;
