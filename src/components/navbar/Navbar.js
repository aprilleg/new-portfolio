import React from "react";
import "./Navbar.css";
import icon from "../../assets/icon.png";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={icon} alt="icon logo" className="iconLogo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav menuList">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link " href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Project
            </a>
            <a className="nav-link" href="#">
              Contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
