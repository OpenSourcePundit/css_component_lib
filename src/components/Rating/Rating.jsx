import React from "react";
import "./Rating.css";
import "../../styles.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";
import { ComponentFooter } from "../../pages/components/component-footer";

const Rating = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Ratings</h1>
          <p className="description">
            Ratings and reviews also help customers understand how a product
            works in real life before they purchase it.
            <br />
            <br />
          </p>

          {/* Type One Ratings */}
          <div className="section section--type-one">
            <div className="type-one-rating">
              <span className="rating negative">
                <i className="fas fa-star"></i>2.5
              </span>
            </div>
            <div className="type-one-rating">
              <span className="rating positive">
                <i className="fas fa-star"></i>4.5
              </span>
            </div>

            <iframe
              title="Carbon Embed"
              src="https://carbon.now.sh/embed/7xB9M0nZC980BoFQgJrj"
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

            {/* Rate Us */}
            <h4 className="clh4">Rate Us!</h4>
            <div className="type-one-rating">
              <i className="fas fa-star gold lg"></i>
              <i className="fas fa-star gold lg"></i>
              <i className="fas fa-star gold lg"></i>
              <i className="fas fa-star lg"></i>
              <i className="fas fa-star lg"></i>
            </div>

            <div className="type-one-rating">
              <i className="far fa-grin-stars lg"></i>
              <i className="far fa-smile-beam lg"></i>
              <i className="far fa-meh lg"></i>
              <i className="far fa-frown lg"></i>
              <i className="far fa-angry lg"></i>
            </div>
            <iframe
              title="Carbon Embed"
              src="https://carbon.now.sh/embed/WGQC9HC5xVCFrbwYVl8V"
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

         

          <ComponentFooter/>
        </div>
      </div>
    </div>
  );
};
export default Rating;
