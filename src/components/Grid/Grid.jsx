import React from "react";
import "./Grid.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";
import { ComponentFooter } from "../../pages/components/component-footer";

const Grid = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Grids</h1>
          <p className="description">
            Convey meaning through color with a handful of color utility
            classes. <br />
            <br />
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Two-Column Grids</h4>
            <div className="two-items">
              <div className="grid-items pink">
                <p>One</p>
              </div>
              <div className="grid-items dk-pink">
                <p>Two</p>
              </div>
              <div className="grid-items red">
                <p>Three</p>
              </div>
              <div className="grid-items dk-red">
                <p>Four</p>
              </div>
              <div className="grid-items blue">
                <p>Five</p>
              </div>
              <div className="grid-items dk-blue">
                <p>Six</p>
              </div>
              <div className="grid-items purple">
                <p>Seven</p>
              </div>
              <div className="grid-items dk-purple">
                <p>Eight</p>
              </div>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/q6sW6Roc7piBV2zE2iVZ"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "372px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>

            <h4 className="clh4">Three-Column Grids</h4>
            <div className="three-items">
              <div className="grid-items pink">
                <p>One</p>
              </div>
              <div className="grid-items dk-pink">
                <p>Two</p>
              </div>
              <div className="grid-items red">
                <p>Three</p>
              </div>
              <div className="grid-items dk-red">
                <p>Four</p>
              </div>
              <div className="grid-items blue">
                <p>Five</p>
              </div>
              <div className="grid-items dk-blue">
                <p>Six</p>
              </div>
              <div className="grid-items purple">
                <p>Seven</p>
              </div>
              <div className="grid-items dk-purple">
                <p>Eight</p>
              </div>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/PUdL7nxeRZw7SwtfoAA5"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "372px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>
         
          <ComponentFooter/>
        </div>
      </div>
    </div>
  );
};
export default Grid;
