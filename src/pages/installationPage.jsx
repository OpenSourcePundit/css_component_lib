import React from "react";
import {useNavigate} from 'react-router-dom'
import Footer from "./components/footer";
const InstallationPage = () => {
    const navigate = useNavigate();
  return (
    <div className="content">
      <div className="page-content">
        <div className="install">
          <h4>
            To begin using the styles provided by <span>OSP Components</span>{" "}
            <br /> in your project, put the URL supplied in the code snippet
            below stylesheets link in your project. <br /> This is a free, open
            source library that provides ready-to-use frontend components
          </h4>
          <div className="code-example-block">
            <iframe
              title="unique"
              src="https://carbon.now.sh/embed/A1tkuIbhnMheqgn3C3O3"
              style={{
                width: "100%",
                margin: "auto",
                height: "307px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>

          <h4>
            To get the Font Awesome Icons, import the following link tag of your
            project.
          </h4>
          <div className="code-example-block">
            <iframe
              title="unique"
              src="https://carbon.now.sh/embed/yZ3UFpK43xKFBjFu1ukJ"
              style={{
                width: "100%",
                margin: "auto",
                height: "360px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>


          </div>
          <footer className="page-footer">
            <div1 onClick={()=>navigate('/')} className="foot-item a" >
              Home
            </div1>
            <div1 onClick={()=>navigate('/components')} className="foot-item a">
              Components
            </div1>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;
