import React from "react";
import "../App.css";
import "../Stylesheet/Header.css";
// import { Icon } from "@iconify/react";
// import { Switch } from "antd";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div
      className={`header dark-heading ${props.isNavbarSticky ? "navbar-sticky" : ""}
      }`}
    >
      <ul className="navbar navbar-light justify-content-center">
        <li className="nav-item">
          <Link className="nav-link m-3 mx-5" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link m-3 mx-5" to={"/resumepage"}>
            My Resume
          </Link>
        </li>

        {/* <li className="nav-item nav-link">
          <label className="m-3 mx-5">Dark Mode</label>
          <Switch
            onClick={props.toggleDarkMode}
            defaultChecked={props.darkMode}
          />
        </li> */}
      </ul>

      {/* <div>
        <div className="full-height">
          <div className="absolute-center">
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12 py-5">
                    <h1 className="dark-span-h1">
                      <span>{text}</span>
                      {showCursor && <span className="cursor">|</span>}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
