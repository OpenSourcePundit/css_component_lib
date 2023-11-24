import React from "react";
import "./Avatar.css";
import "../../css/main.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";

export const AvatarComponent = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Avatar</h1>
          <p className="description">
            Users can choose from a variety of avatars to use as their profile
            photo. They're always going to be rounded squares on GitHub. They
            can be bespoke pictures that users provide or Identicons that are
            created as placeholders.
            <br />
            <br />
            Avatars can either be the images of that person, vector images or
            any random images.
          </p>

          <div className="section section--type-one">
            <h3 className="clh4">Basic Avatars</h3>{" "}
            <small>
              Circular Avatars for embedding at various profile picture related
              spaces.
            </small>
            <div className="type-one--images">
              <img
                className="img type-one-img"
                src={require("../../assets/avatar/face-avatar.webp")}
                alt="person"
              />
              <img
                className="img type-one-img"
                src={require("../../assets/avatar/vector-avatar.png")}
                alt="vector"
              />
              <img
                className="img type-one-img"
                src={require("../../assets/avatar/cartoon-avatar.png")}
                alt="cartoon"
              />
            </div>
            <iframe
              title="Carbon Embed"
              src="https://carbon.now.sh/embed/3Y2iYvlltk6H2gn1jZgk"
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
          <div className="section section--type_two">
            <h3 className="clh4">Square Avatars</h3>
            <small>Square Avatars for normal usages of images.</small>
            <div className="type-two--images">
              <img
                className="img type-two-img"
                src={require("../../assets/avatar/face-avatar.webp")}
                alt="person"
              />
              <img
                className="img type-two-img"
                src={require("../../assets/avatar/vector-avatar.png")}
                alt="vector"
              />
              <img
                className="img type-two-img"
                src={require("../../assets/avatar/cartoon-avatar.png")}
                alt="cartoon"
              />
            </div>
            <iframe
              title="Carbon Embed"
              src="https://carbon.now.sh/embed/4QQCansW9h5Ubjn2ws20"
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

          <div className="section section--type_three">
            <h3 className="clh4">Varied Size Avatars</h3>
            <small>Avatars can be of various sizes as well.</small>
            <div className="type-three--images">
              <img
                className="img img-small type-one-img"
                src={require("../../assets/avatar/vector-avatar.png")}
                alt="vector"
              />
              <img
                className="img img-large type-one-img"
                src={require("../../assets/avatar/cartoon-avatar.png")}
                alt="cartoon"
              />
            </div>
            <iframe
              title="Carbon Embed"
              src="https://carbon.now.sh/embed/MG5kCAZzMkYtEZKyE8ez"
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

          <div className="gif-example">
            <h1>How to Use?</h1>

            <img
              className="gifs"
              src={require("../../assets/exampleGifs/Avatar.gif")}
              alt="avatar-example"
            />
          </div>

          <footer className="page-footer a">
            <div1 className="foot-item" href="./">
              <i className="far fa-hand-point-left"></i>Home
            </div1>
            <div1 className="foot-item a" href="../Alert/Alert.html">
              Alert<i className="far fa-hand-point-right"></i>
            </div1>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AvatarComponent;
