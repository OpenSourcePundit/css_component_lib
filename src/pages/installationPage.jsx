import React from "react";
import {useNavigate} from 'react-router-dom'
import Footer from "./components/footer";
const InstallationPage = () => {
    const navigate = useNavigate();
  return (
    <div className="content">
      <div className="page-content">
        <div className="install">
          <h3>
            To begin using the styles provided by <span>OSP Components</span>{" "}
            <br /> in your project/React App, Install the package. <br /> This is a free, open
            source library that provides ready-to-use frontend components
          </h3>         
          <div className="code-example-block">
            <iframe
              title="unique"
              src="https://carbon.now.sh/embed/UG8miTNsp5Jq4gP5PUAF"
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

          <h3>
In your React component files where you want to use the styles from the library, import the styles.css file from the installed package. <br />  This step ensures that the styles are included in your application and can be used across your components.
          </h3>
          
          <div className="code-example-block">
          <iframe
              title="unique"
              src="https://carbon.now.sh/embed/kjVODFGh3IRf4EL2p6fW"
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

          <h3>
            To get the Font Awesome Icons, import the following link tag of your
            project.
          </h3>
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
