import React from "react";
import "../Stylesheet/Certifications.css";
import WebDevCert from "../images/WebDev.png";
import NodeCert from "../images/NodeCert.png";

function Certifications(props) {
  const CertificationSection = [
    {
      name: "Web Development Certification",
      image: WebDevCert,
      alt: "Web Development Certificate",
    },
    {
      name: "Node.js Certification",
      image: NodeCert,
      alt: "Node.js Certificate",
    },
  ];
  return (
    <div
      id="certifications"
      className={` p-5 header app`}
    >
      <h1 className="fw-bold mt-4 text-center my-6 mx-auto dark-skill">
        CERTIFICATES
      </h1>
      <div className="container py-5 text-center">
        <div className="row justify-content-center g-4">
          {CertificationSection.map((certificate) => (
            <div className="col col-md-6" key={certificate.name}>
              <div className="card border-0 certificate-card mx-auto pr-3">
                <div className="w-100">
                  <img
                    src={certificate.image}
                    className="img-fluid"
                    alt={certificate.alt}
                  />
                </div>
                <div className="card-body text-center">
                  <p className="fw-bold">{certificate.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
