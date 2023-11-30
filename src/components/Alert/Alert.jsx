import React from "react";
import "./Alert.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";
import { ComponentFooter } from "../../pages/components/component-footer";

const Alert = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Alerts</h1>
          <p className="description">
            An alert displays a short, important message in a way that attracts
            the user's attention without interrupting the user's task.
            <br />
            <br />
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Basic Alerts</h4>
            <small>
              The alert offers four severity levels that set a distinctive icon
              and color.
            </small>
            <div className="type-one--alert">
              <div className="alert error">
                <i className="fas fa-exclamation-circle"></i>This is an error
                alert -- check it out
              </div>

              <div className="alert warning">
                <i className="fas fa-exclamation-triangle"></i>This is a Warning
                alert -- check it out
              </div>
              <div className="alert info">
                <i className="fas fa-info-circle"></i>This is an Info alert --
                check it out
              </div>
              <div className="alert success">
                <i className="fas fa-check-double"></i>This is a Success alert
                -- check it out
              </div>
            </div>
            <div className="code-example-block">
              <iframe
                title="unique"
                src="https://carbon.now.sh/embed/ZSkvpSCWDdLVqETAm4Z8"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "242px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/9xsgpyUvdQsUKkcGvd7B"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "242px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/9gpc8ntNzpBnKlA6idg3"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "242px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/6KFc3CJzy9DRPfTwCI5V"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "242px",
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
export default Alert;
