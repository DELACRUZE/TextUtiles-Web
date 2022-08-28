import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { useState } from "react";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-${props.mood} navbar-expand-lg bg-${props.mood}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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
            <li className="nav-item ">
              <Link className="nav-link HomeLink " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link AboutLink " to="/about">
                About
              </Link>
            </li>
          </ul>

          <div className="d-flex">
            <div className="bg-primary rounded-2 mx-2" onClick={() => props.darkMood("primary")} style={{ height: "30px", width: "30px" }}></div>
            <div className="bg-warning rounded-2 mx-2" onClick={() => props.darkMood("warning")} style={{ height: "30px", width: "30px" }}></div>
            <div className="bg-danger rounded-2 mx-2" onClick={() => props.darkMood("danger")} style={{ height: "30px", width: "30px" }}></div>
          </div>


        </div>
        <div className="form-check form-switch mx-1">
          <input
            className="form-check-input"
            onClick={() => props.darkMood(null)}
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className={`form-check-label text-${props.dt}`} htmlFor="flexSwitchCheckDefault">
            Dark mood
          </label>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = { title: PropTypes.string, aboutText: PropTypes.string };