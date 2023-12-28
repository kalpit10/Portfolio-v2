import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { FaNode, FaCss3, FaBootstrap, FaGit } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { SiExpress, SiMongodb } from "react-icons/si";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Stylesheet/Skills.css";
import "../App.css";

function Skills() {
  // Function to show a toast for frontend skills
  const notifyFrontend = () => {
    toast.info("FRONTEND: React.js, JavaScript, HTML, CSS, Bootstrap", {
      position: toast.POSITION.BOTTOM_CENTER,
      style: {
        fontWeight: "bold",
      },
    });
  };

  // Function to show a toast for backend skills
  const notifyBackend = () => {
    toast.info("BACKEND: Node.js, Express.js, MongoDB, Git", {
      position: toast.POSITION.BOTTOM_CENTER,
      style: {
        fontWeight: "bold",
      },
    });
  };

  return (
    <div className="p-5 header app">
      <h1 className="mt-4 text-center my-6 mx-auto dark-skill">TECH STACK</h1>
      <div className="row justify-content-center pb-5 py-4">
        <div className="col-xs-4 col-md-2 tech-icons" onClick={notifyFrontend}>
          <IoLogoJavascript />
          <h5 className="mx-auto font-weight-light p-2">JavaScript</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons" onClick={notifyFrontend}>
          <IoLogoReact />
          <h5 className="mx-auto font-weight-light p-2">React.js</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons" onClick={notifyBackend}>
          <FaNode />
          <h5 className="mx-auto font-weight-light p-2">Node.js</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons" onClick={notifyFrontend}>
          <TiHtml5 />
          <h5 className="mx-auto font-weight-light p-2">HTML</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons" onClick={notifyFrontend}>
          <FaCss3 />
          <h5 className="mx-auto font-weight-light p-2">CSS</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons" onClick={notifyBackend}>
          <SiExpress />
          <h5 className="mx-auto font-weight-light p-2">Express.js</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons" onClick={notifyBackend}>
          <SiMongodb />
          <h5 className="mx-auto font-weight-light p-2 ">MongoDB</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons" onClick={notifyFrontend}>
          <FaBootstrap />
          <h5 className="mx-auto font-weight-light p-2">Bootstrap</h5>
        </div>
        <div className="col-xs-4 col-md-2 tech-icons" onClick={notifyBackend}>
          <FaGit />
          <h5 className="mx-auto font-weight-light p-2">Git</h5>
        </div>
      </div>
    </div>
  );
}

export default Skills;
