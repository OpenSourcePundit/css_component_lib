import React from "react";
import "./Image.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";
import { ComponentFooter } from "../../pages/components/component-footer";

const Image = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Images</h1>
          <p className="description">
            Images play an important role in any webpage. CSS plays a good role
            to control image display. You can set the following image properties
            using CSS. The border property is used to set the width of an image
            border. The height property is used to set the height of an image.
            <br />
            <br />
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Images</h4>
            <img
              src={require("../../assets/avatar/card-image.jpg")}
              alt="img"
              className="image basic"
            />

            <img
              src={require("../../assets/avatar/book.jpg")}
              alt="img"
              className="image basic"
            />
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/ldXtsIJUxv6rzZvVn1zl"
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

          <div className="section section--type-two">
            <h4 className="clh4">Bordered Images</h4>
            <img
              src={require("../../assets/avatar/card-image.jpg")}
              alt="img"
              className="image border"
            />

            <img
              src={require("../../assets/avatar/book.jpg")}
              alt="img"
              className="image border"
            />
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/7ha0zesiF8guREn3UK6u"
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

          <div className="section section--type-three">
            <h4 className="clh4">Opacity in Images</h4>
            <img
              src={require("../../assets/avatar/card-image.jpg")}
              alt="img"
              className="image opacity"
            />

            <img
              src={require("../../assets/avatar/book.jpg")}
              alt="img"
              className="image opacity"
            />
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/qaHFazWghK0RUOPJRrnB"
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

          <div className="section section--type-four">
            <h4 className="clh4">Responsive Images</h4>
            <img
              src={require("../../assets/avatar/responsive.jpg")}
              alt="img"
              className="responsive"
            />

            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/pEv1y22mTaRTQmlOeDDf"
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
         
          <ComponentFooter/>
        </div>
      </div>
    </div>
  );
};
export default Image;
