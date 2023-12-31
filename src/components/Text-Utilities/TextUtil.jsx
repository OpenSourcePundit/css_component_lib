import React from "react";
import "./TextUtil.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";
import {ComponentFooter} from '../../pages/components/component-footer'

const TextUtils = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Text Utilities</h1>
          <p className="description">
            Documentation and examples for common text utilities to control
            alignment, wrapping, weight, and more.
            <br />
            <br />
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Text Alignment</h4>
            <small>
              Easily realign text to components with text alignment classes.
            </small>
            <div className="type-one--text">
              <div className="text center">
                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                purus sit amet fermentum. Donec sed odio operae, eu vulputate
                felis rhoncus. Praeterea iter est quasdam res quas ex communi.
                At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi
                concilium totius Galliae in diem certam indicere. Cras mattis
                iudicium purus sit amet fermentum.
              </div>

              <small>
                small({`>`}=598px) || medium ({`>`}=768px) || large({`>`}=992px)
              </small>
              <div className="text">
                <div className="small-right">
                  Float right on small screens or wider
                </div>
                <br />
                <div className="medium-right">
                  Float right on medium screens or wider
                </div>
                <br />
                <div className="large-right">
                  Float right on large screens or wider
                </div>
                <br />

                <div className="none">Float none</div>
              </div>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/TgUnEYh9bS8VDLrJLi5R"
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
            <h4 className="clh4">Headings</h4>

            <div className="type-two--text">
              <div className="head h1">
                <h1>Hello, Welcome to my world!</h1>
              </div>
              <div className="head h2">
                <h2>Hello, Welcome to my world!</h2>
              </div>
              <div className="head h3">
                <h3>Hello, Welcome to my world!</h3>
              </div>
              <div className="head h4">
                <h4>Hello, Welcome to my world!</h4>
              </div>
              <div className="head h5">
                <h5>Hello, Welcome to my world!</h5>
              </div>
              <div className="head h6">
                <h6>Hello, Welcome to my world!</h6>
              </div>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/5w0WRZRnwjdOKRaVjARZ"
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

          <div className="section section--type-two">
            <h4 className="clh4">Font Weights and Sizes</h4>

            <div className="type-two--text">
              <div className="font sm">
                “If he doesn’t like you, this is all a moo-point.”
              </div>
              <div className="font md">“I had a very long, hard day.”</div>
              <div className="font lg">“I’m fine. Totally fine.”</div>
              <div className="font grey">“See? He’s her lobster.”</div>
              <div className="font italics">“I KNOW!”</div>
              <div className="font bold">“Joey doesn’t share food!”</div>
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/0MX2zMXEiS53HiwgLM0V"
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
export default TextUtils;
