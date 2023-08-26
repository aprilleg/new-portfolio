import React from 'react';
import "./Navbar.css";
import icon from "../../assets/icon.png"
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={icon} alt="icon logo" className="iconLogo" />
      <div className="menu">
        <Link className="menuList" to="/">
          Home
        </Link>
        <Link className="menuList" to="/">
          About
        </Link>
        <Link className="menuList" to="/">
          Projects
        </Link>
        <Link className="menuList" to="/">
          Blog
        </Link>
      </div>
      <button className="contactBtn">Contact Me!</button>
    </div>
  );
}

export default Navbar