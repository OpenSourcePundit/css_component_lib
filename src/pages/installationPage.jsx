import React from "react";
import {useNavigate} from 'react-router-dom'
import Footer from "./components/footer";
const InstallationPage = () => {
    const navigate = useNavigate();
  return (
    <div className="content">
      <div className="page-content">
        {/* sidenav bar: remains the same for all component pages */}

        {/* main content: changes according to the selected component */}
        <div className="install">
          <p>
            To begin using the styles provided by <span>OSP Components</span>{" "}
            <br /> in your project, put the URL supplied in the code snippet
            below stylesheets link in your project. <br /> This is a free, open
            source library that provides ready-to-use frontend components
          </p>
          <div className="code-example-block">
            <iframe
              title="unique"
              src="https://carbon.now.sh/embed/f8TkPOSoqlYEC2f8XApn"
              style={{
                width: "822px",
                height: "207px",
                border: "0",
                transform: "scale(1)",
                overflow: "hidden",
              }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>

          <h3>
            To get the Font Awesome Icons, import the following link tag of your
            project.
          </h3>
          <div className="code-example-block">
            <iframe
              title="unique"
              src="https://carbon.now.sh/embed/ip6vr9Nh8U1D1aJMSbOV"
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
      <Footer />
    </div>
  );
};

export default InstallationPage;
