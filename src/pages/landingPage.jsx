import React from "react";
import NavBar from "./components/navbar";
import "../css/main.css";
const LandingPage = () => {
  return (
    <div className="content">
      <NavBar />
      <main>
        <div className="header">
          Get started with your <span>Project Designs</span>.
        </div>
        <div className="head_description">
          Kairo Designs is a simple yet engaging CSS library, integrated with
          pre-defined styled classes and utilities for quickly creating
          websites.
        </div>
        <div className="main_btn">
          <a href="./installation.html" className="btn btn_primary">
            Get Started
          </a>
          <a
            href="https://github.com/sakshi006/KairoDesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>
        </div>
        <img
          className="main-img"
          src="./assets/card/undraw_creative_team_re_85gn.svg"
          alt="Creative Team"
        />
      </main>
    </div>
  );
};

export default LandingPage;
