import React from "react";
import "./Button.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";
import { ComponentFooter } from "../../pages/components/component-footer";

const Button = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Buttons</h1>
          <p className="description">
            CSS buttons refer to styled HTML buttons that developers customize
            to match their website designs. You can manipulate the colors, text
            sizes, padding, and even change styling properties when buttons
            enter different states.
            <br />
            <br />
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Primary Buttons</h4>

            <div className="type-one--button">
              <div className="button">
                <button className="btn basic">Basic</button>
                <button className="btn primary">Primary</button>
                <button className="btn accent">Accent</button>
                <button className="btn warn">Warn</button>
                <button className="btn disabled">Disabled</button>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/rpjzNmMOn9TjzXXpxxYR"
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
              </div>
            </div>

            <h4 className="clh4">Floating Action Buttons</h4>
            <div className="type-one--button">
              <div className="button">
                <button className="btns btn basic">
                  <i className="fas fa-bars"></i>
                </button>
                <button className="btns btn primary">
                  <i className="fas fa-home"></i>
                </button>
                <button className="btns btn accent">
                  <i className="fas fa-plus"></i>
                </button>
                <button className="btns btn warn">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="btns btn dots">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
              </div>

              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/VXZ9SLwzykG1GYxYkHCw"
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
              </div>
            </div>

            <h4 className="clh4">Icon Buttons</h4>

            <div className="button">
              <button className="icon trash">
                <i className="fas fa-trash"></i>
              </button>
              <button className="icon home">
                <i className="fas fa-home"></i>
              </button>
              <button className="icon save">
                <i className="fas fa-bookmark"></i>
              </button>
              <button className="icon heart">
                <i className="fas fa-heart"></i>
              </button>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/OSvC34EJq6RBWcTQ2qSt"
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
         
          <ComponentFooter/>
        </div>
      </div>
    </div>
  );
};
export default Button;
