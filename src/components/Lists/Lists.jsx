import React from "react";
import "./Lists.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";

const Lists = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Lists</h1>
          <p className="description">
            The CSS list properties allow you to: Set different list item
            markers for ordered lists. Set different list item markers for
            unordered lists.
            <br />
            <br />
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Ordered Lists</h4>

            <div className="list">
              <ol className="basic-list">
                <li>Eggs</li>
                <li>Bread</li>
                <li>Peanut Butter</li>
                <li>Maggie</li>
              </ol>
              <ol className="alpha">
                <li>Eggs</li>
                <li>Bread</li>
                <li>Peanut Butter</li>
                <li>Maggie</li>
              </ol>
              <ol className="reverse">
                <li>Eggs</li>
                <li>Bread</li>
                <li>Peanut Butter</li>
                <li>Maggie</li>
              </ol>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/eGMm6vTA7NZNKFpArqUA"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "391px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

          <div className="section section--type-two">
            <h4 className="clh4">Unordered Lists</h4>

            <div className="list">
              <ul>
                <li>Eggs</li>
                <li>Bread</li>
                <li>Peanut Butter</li>
                <li>Maggie</li>
              </ul>
              <ul className="square">
                <li>Eggs</li>
                <li>Bread</li>
                <li>Peanut Butter</li>
                <li>Maggie</li>
              </ul>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/4wWjtYGCGvQVGo9TX1W7"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "335px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

          <div className="section section--type-three">
            <h4 className="clh4">Stacked Lists</h4>

            <div className="list stacked">
              <ul>
                <li>
                  <div className="inner">
                    <img
                      src="https://cdn.zivame.com/intl/assets/icons/faces300.png"
                      alt="notif-img"
                      className="notif-img"
                    />
                    Knock Knock! Tell us how you feel about your recent
                    purchase.
                  </div>
                  <small>20 Jan, 2021</small>
                </li>
                <li>
                  <div className="inner">
                    <img
                      src="https://cdn.zivame.com/live/images/imgpsh_fullsize.png"
                      alt="notif-img"
                      className="notif-img"
                    />
                    Hi Gorgeous! You have entered the Circle in our loyalty
                    program - Circle Of Radiance!
                  </div>
                  <small>20 Mar, 2020</small>
                </li>
                <li>
                  <div className="inner">
                    <img
                      src="https://rukminim1.flixcart.com/flap/50/50/image/b42372f365fcf579.jpg?q=90"
                      alt="notif-img"
                      className="notif-img"
                    />
                    Feeling lucky? Use your SuperCoins now to play daily jackpot
                    & win exciting gift vouchers today!
                  </div>
                  <small>20 Jan, 2022</small>
                </li>
              </ul>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/SwwzwYyAI4wfP6tznBJD"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "447px",
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
              src={require("../../assets/exampleGifs/lists.gif")}
              alt="avatar-exaple"
            />
          </div>
          <footer className="page-footer">
            <a className="foot-item" href="../Text-Utilities/TextUtil.html">
              <i className="far fa-hand-point-left"></i>Text Utils
            </a>
            <a className="foot-item" href="../Navigation/Navigation.html">
              Navigation<i className="far fa-hand-point-right"></i>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Lists;
