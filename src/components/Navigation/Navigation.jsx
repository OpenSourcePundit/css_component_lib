import React from "react"
import './Navigation.css'
import { TopNavBar,SideNavBar } from "../../pages/components/component-navbar";

const Navigation = () =>{
  return (
    <div className="content">
      <TopNavBar/>

      <div className="page-content">
      <SideNavBar/>

        <div className="main-content">
          <h1 className="clh1">Navigation</h1>
          <p className="description">
            A Navigation bar or navigation system comes under GUI that helps the
            visitors in accessing information. It is the UI element on a webpage
            that includes links for the other sections of the website.
            <br />
            <br />
            A navigation bar is mostly displayed on the top of the page in the
            form of a horizontal list of links.
          </p>

          <div className="section section--type-one">
            <div className="type-one--navbar">
              <div className="hide">
                <ul>
                  <li><a href="/components/navigation">Home</a></li>
                  <li><a href="/components/navigation">About</a></li>
                  <li><a href="/components/navigation">Contact</a></li>
                </ul>
              </div>
            </div>
            <small>*Hover on hamburger for dropdown for small screens</small>
            <div className="code-example-block">
              <iframe title="unique"
                src="https://carbon.now.sh/embed?"
                style={{
                  width: '100%',
                  margin: 'auto',
                  height: '360px',
                  border: '0',
                  transform: 'scale(1)',
                  overflow: 'hidden',
                }}
                sandbox="allow-scripts allow-same-origin"
              >
              </iframe>
            </div>
          </div>
          <div className="gif-example">
            <h1>How to Use?</h1>
            <img className="gifs" src={require("../../assets/exampleGifs/navigation.gif")} alt="avatar-exaple"/>
          </div>
          <footer className="page-footer">
            <a className="foot-item" href="../Lists/Lists.html"><i className="far fa-hand-point-left"></i>Lists</a>
            <a className="foot-item" href="../Modal/Modal.html">Modal<i className="far fa-hand-point-right"></i></a>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default Navigation


 

