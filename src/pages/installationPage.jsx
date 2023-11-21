import React from "react";
import NavBar from "./components/navbar";
import "../css/main.css";
import Footer from "./components/footer";
const InstallationPage = () => {
  return (
    <div className="content">
      <NavBar />
      <div className="page-content">
      {/* sidenav bar: remains the same for all component pages */}

      {/* main content: changes according to the selected component */}
      <div className="install">
        <p>
          To begin using the styles provided by <span>Kairo Designs</span> <br /> in
          your project, put the URL supplied in the code snippet below
          stylesheets link in your project. <br /> This is a free, open source library that provides ready-to-use frontend components
        </p>
        <div className="code-example-block">
          <iframe title="unique"
            src="https://carbon.now.sh/embed?bg=rgba%28242%2C215%2C238%2C1%29&t=blackboard&wt=none&l=auto&width=760&ds=true&dsyoff=0px&dsblur=100px&wc=true&wa=true&pv=41px&ph=40px&ln=false&fl=1&fm=Hack&fs=10px&lh=108%25&si=false&es=2x&wm=false&code=%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fkairodesigns.netlify.app%252Fstyles.css%2522%2520%252F%253E"
            style={{
              width: '100%',
              margin: 'auto',
              height: '240px',
              border: '0',
              transform: 'scale(1)',
              overflow: 'hidden',
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>

        <p>
          To get the Font Awesome Icons, import the following link tag of your
          project.
        </p>
        <div className="code-example-block">
          <iframe title="unique"
            src="https://carbon.now.sh/embed?bg=rgba%28242%2C215%2C238%2C1%29&t=blackboard&wt=none&l=auto&width=760&ds=true&dsyoff=0px&dsblur=100px&wc=true&wa=true&pv=41px&ph=40px&ln=false&fl=1&fm=Hack&fs=10px&lh=108%25&si=false&es=2x&wm=false&code=%2520%253Clink%250A%2520%2520%2520%2520%2520%2520rel%253D%2522stylesheet%2522%250A%2520%2520%2520%2520%2520%2520href%253D%2522https%253A%252F%252Fpro.fontawesome.com%252Freleases%252Fv5.10.0%252Fcss%252Fall.css%2522%250A%2520%2520%2520%2520%2520%2520integrity%253D%2522sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg%252Bp%2522%250A%2520%2520%2520%2520%2520%2520crossorigin%253D%2522anonymous%2522%250A%2520%2520%2520%2520%252F%253E"
            style={{
              width: '100%',
              margin: 'auto',
              height: '360px',
              border: '0',
              transform: 'scale(1)',
              overflow: 'hidden',
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <footer className="page-footer">
          <a className="foot-item" href="./index.html">
            <i className="far fa-hand-point-left"></i>Home
          </a>
          <a className="foot-item" href="./components/Avatar/Avatar.html">
            Avatar<i className="far fa-hand-point-right"></i>
          </a>
        </footer>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default InstallationPage;
