import React from "react";
import "./Slider.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";

const Slider = () => {
  return (
    <div className="content">
      <TopNavBar />
      <div className="page-content">
        <SideNavBar />
        <div className="main-content">
          <h1 className="clh1">Slider</h1>
          <p className="description">
            CSS range sliders are a slider with a handle that allows users to
            select a certain value from a limited range. CSS range sliders are
            useful for budgets, prices.
            <br />
            <br />
          </p>

          {/* Default Range Slider */}
          <div className="section section--type-one">
            <h4 className="clh4">Default Range Slider</h4>
            <div className="type-one--text">
              <input type="range" min="1" max="100" value="30" />
            </div>
          </div>
          <div className="code-example-block">
            <iframe
              title="Carbon Embed"
              src="https://carbon.now.sh/embed/seJ6sWKg5BH4ZGrpi6ol"
              style={{
                width: "100%",
                margin: "auto",
                height: "205px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>

          {/* Square Slider */}
          <div className="section section--type-two">
            <h4 className="clh4">Square Slider</h4>
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              className="slider"
              id="myRange"
            />
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/oqqUSjBgxn6xlRqeWqca"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "223px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

          <div className="gif-example">
            <h1>How to Use?</h1>
            <img
              className="gifs"
              src={require("../../assets/exampleGifs/slider.gif")}
              alt="avatar-example"
            />
          </div>

          <footer className="page-footer">
            <a className="foot-item" href="../Grid/Grid.html">
              <i className="far fa-hand-point-left"></i>Grids
            </a>
            <a className="foot-item" href="../Avatar/Avatar.html">
              Avatar<i className="far fa-hand-point-right"></i>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Slider;
