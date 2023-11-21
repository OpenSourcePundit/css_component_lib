import React from "react";
import {useNavigate} from 'react-router-dom'
import NavBar from "./components/navbar";
import "../css/main.css";
import Footer from "./components/footer";
const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="content">
      <NavBar />
      <main>
        <div className="header">
          Get started with your <span>Project Designs</span>.
        </div>
        <div className="head_description">
          OSP Components is a simple yet engaging CSS library, integrated with
          pre-defined styled classes and utilities for quickly creating
          websites.
        </div>
        <div className="main_btn">
          <div1 onClick={()=>navigate('./installation')} className="btn btn_primary a">
            Get Started
          </div1>
          <a
            href="https://github.com/OpenSourcePundit/css_component_lib"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary a"
          >
            GitHub
          </a>
        </div>
        <img
          className="main-img"
          src={require("../assets/card/undraw_Creative_team_re_85gn.png")}
          alt="Creative Team"
        />
      </main>
      <Footer/>
    </div>
  );
};

export default LandingPage;
