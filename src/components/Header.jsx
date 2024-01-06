import React from "react";
import "../App.css";
import "../Stylesheet/Header.css";
// import { Icon } from "@iconify/react";
// import { Switch } from "antd";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div
      className={`header dark-heading ${
        props.isNavbarSticky ? "navbar-sticky" : ""
      }
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
      </ul>
    </div>
  );
}

export default Header;
