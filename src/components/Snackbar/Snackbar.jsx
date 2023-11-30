import React from "react";
import "./Snackbar.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";
import { ComponentFooter } from "../../pages/components/component-footer";

const Snackbar = () => {
  const showSnackbar = (snackbarElement, duration) => {
    snackbarElement.classList.add("show");
    setTimeout(() => {
      snackbarElement.classList.remove("show");
    }, duration);
  };

  const hideSnackbar = (snackbarElement) => {
    snackbarElement.classList.remove("show");
  };

  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Snackbar</h1>
          <p className="description">
            The Snackbar/Toast/Notify component is like an alert box that is
            only shown for a couple of seconds when something happens (i.e. when
            the user clicks on a button, submits a form, etc.).
            <br />
            <br />
          </p>

          {/* Bottom Snackbar */}
          <div className="section section--type-one">
            <h4 className="clh4">Bottom Snackbar</h4>
            <div className="type-one-snackbar">
              <button
                id="btn-bottom"
                onClick={() =>
                  showSnackbar(document.querySelector("#bottom-snackbar"), 3000)
                }
              >
                Show
              </button>
              <div id="bottom-snackbar" className="snackbar bottom">
                This notif will go in 3 Seconds
                <i
                  id="close-bottom"
                  className="fas fa-times-circle"
                  onClick={() =>
                    hideSnackbar(document.querySelector("#bottom-snackbar"))
                  }
                ></i>
              </div>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/u0kIK34Kj8BtZjkrty8l"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "316px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
              {/* JS code to be added */}
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/9Q4TBOrPqzwectcksGQT"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "502px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

          {/* Top Snackbar */}
          <div className="section section--type-one">
            <h4 className="clh4">Top Snackbar</h4>
            <div className="type-one-snackbar">
              <button
                id="btn-top"
                onClick={() =>
                  showSnackbar(document.querySelector("#top-snackbar"), 5000)
                }
              >
                Show
              </button>
              <div id="top-snackbar" className="snackbar top">
                This notif will go in 5 Seconds
                <i
                  id="close-top"
                  className="fas fa-times-circle"
                  onClick={() =>
                    hideSnackbar(document.querySelector("#top-snackbar"))
                  }
                ></i>
              </div>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/i22kOzvrX7DlG7Yo9d4d"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "316px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
              {/* JS code to be added */}
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/uFo8gnPbgMkYCcRVRt8H"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "484px",
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
export default Snackbar;
