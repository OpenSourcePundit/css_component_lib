import React from "react";
import "./Input.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";
import { ComponentFooter } from "../../pages/components/component-footer";

const Input = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Inputs</h1>
          <p className="description">
            The Input component is a component that is used to get user input in
            a text field.
            <br />
            <br />
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Labelled Inputs</h4>
            <small>
              Label Input has a label present at the top of the input field.
              They can be customized to show error error-message, and change
              color accordingly.
            </small>
            <div className="type-one--input">
              <label htmlFor="basic">UserName : </label>
              <input
                placeholder="Enter Username"
                type="text"
                id="basic"
                className="input"
              />
            </div>
            <div className="type-one--input">
              <label htmlFor="basic-password">PassWord : </label>
              <input
                placeholder="Enter Password"
                type="text"
                id="basic-password"
                className="input"
              />
            </div>

            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/kwm2tAAtRo83zH8S48Ez"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "353px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

          <div className="section section--type-two">
            <h4 className="clh4">Validation Inputs</h4>
            <small>
              Validation Inputs provide validation about being a
              success/failure/warning based on some predefined conditions.
            </small>
            <div className="type-error--input two">
              <small>Error</small>
              <input
                type="text"
                id="valid-one"
                className="input error"
                placeholder="Hello World"
              />
              <small>Incorrect Entry</small>
            </div>
            <div className="type-success--input two">
              <input
                type="text"
                id="valid-two"
                className="input success"
                placeholder="Hello World"
              />
              <small>Successful</small>
            </div>

            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/0LivVQ1lAGcpRIF3zSYv"
                style={{
                  width: "100%",
                margin: "auto",
                  height: "372px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

          <div className="section section--type-three">
            <h4 className="clh4"> Input with Icons</h4>
            <div className="type-three--input">
              <i className="fa fa-user icon"></i>
              <input
                type="text"
                placeholder="Your Name"
                className="input person"
              />
            </div>
            <div className="type-three--input">
              <i className="fas fa-briefcase"></i>
              <input
                type="text"
                className="input job"
                placeholder="Where You Work?"
              />
            </div>
            <div className="type-three--input">
              <i className="fas fa-search"></i>
              <input
                type="text"
                className="input search"
                placeholder="Search for Products"
              />
            </div>

            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/HPR6XH4ql1tvskbU4IQJ"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "409px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

          <div className="section section--type-four">
            <h4 className="clh4">Textareas</h4>
            <div className="type-four--input">
              <textarea
                type="text"
                placeholder="Enter Your Message..."
                className="input person"
              ></textarea>
              <div className="text-icons">
                <i className="fas fa-smile"></i>
                <i className="fas fa-paper-plane"></i>
              </div>
            </div>

            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/X4qq9G957jXQkAycLhmP"
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
         
          <ComponentFooter/>
        </div>
      </div>
    </div>
  );
};
export default Input;
