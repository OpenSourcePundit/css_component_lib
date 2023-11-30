import React from "react";
import "./Navigation.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";
import { ComponentFooter } from "../../pages/components/component-footer";

const Navigation = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Navigation</h1>
          <p className="description">
            A Navigation bar or navigation system comes under GUI that helps the
            visitors in accessing information. It is the UI element on a webpage
            that includes links for the other sections of the website.
            <br />
            <br />A navigation bar is mostly displayed on the top of the page in
            the form of a horizontal list of links.
          </p>

          <div className="section section--type-one">
            <div className="type-one--navbar">
              <div className="hide">
                <ul>
                  <li>
                    <a className='a' href="/components/navigation">Home</a>
                  </li>
                  <li>
                    <a className='a' href="/components/navigation">About</a>
                  </li>
                  <li>
                    <a className='a' href="/components/navigation">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/WhiJlFNEBiAKPnunbLoG"
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
          
          <ComponentFooter/>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
