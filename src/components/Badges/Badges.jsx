import React from "react";
import "./Badges.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";

const Badges = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Badges</h1>
          <p className="description">
            Badges are used to add additional information to any content.
            Alternatively, they can also be considered as numerical indicators
            of how many items are associated with a link.
            <br />
            <br />
            The notification number is seen when logged in to a particular
            website which tells the numbers of news or notifications to see by
            clicking it.
          </p>

          <div className="section section--type-one">
            <div className="child">
              Text with badge
              <span className="badge one">4</span>
            </div>

            <div className="child">
              Text with large badge
              <span className="badge two">1</span>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/a21Z7WRWQCqAywnOJ4BN"
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

            <div className="child">
              Button badge
              <button>Action</button>
              <span className="badge three">8</span>
            </div>

            <div className="child">
              Button toggles
              <button>Hide</button>
              <span className="badge four">7</span>
            </div>

            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/CVEvRaYOoNd9B0z0oBf8"
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

            <div className="child">
              Icon badge
              <span className="badge five">15</span>
              <i className="fas fa-home"></i>
            </div>

            <div className="child child-img">
              Image badge
              <span className="badge six">12</span>
              <img
                className="img-badge type-one"
                src={require("../../assets/avatar/face-avatar.webp")}
                alt="person"
              />
            </div>

            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/9vie6V2jymoFiEpdLW53"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "298px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>
          <footer className="page-footer">
            <a className="foot-item" href="../Alert/Alert.html">
              <i className="far fa-hand-point-left"></i>Alert
            </a>
            <a className="foot-item" href="../Button/Button.html">
              Buttons<i className="far fa-hand-point-right"></i>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Badges;
