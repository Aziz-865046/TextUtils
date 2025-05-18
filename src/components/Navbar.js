import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar(prop) {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      borderBottom: isActive ? "2px solid" : "none",
      textDecoration: "none",
    };
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            {prop.title}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={navLinkStyle}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About" style={navLinkStyle}>
                  {prop.aboutText}
                </NavLink>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                prop.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={prop.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
};
