import React from "react";
import "./Homepage.css";
import Profile from "../../assets/profile.png";
import { Link } from "react-scroll";
import "animate.css";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="row mt-5">
        <div className="col-md-6 d-flex align-items-center  intro">
          <div className="content">
            <h5>
              Hello! I'm <span className="Name">Aprille</span>,
            </h5>
            <h1 className="animate__animated animate__rubberBand">
              A <span>front-end developer</span>.
            </h1>
            <p>
              I'm a passionate front-end developer, transitioning careers to
              follow my coding dreams. Through personal projects, I'm showcasing
              not just my dedication, but also my eagerness to expand my coding
              expertise. Let's collaborate and create something amazing!
            </p>
            <Link to="/">
              <button className="projectBtn">See my works</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={Profile} alt="Aprille Guevarra" className="profile" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
