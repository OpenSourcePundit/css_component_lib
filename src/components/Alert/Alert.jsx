import React from "react"
import './Alert.css'
import { TopNavBar,SideNavBar } from "../../pages/components/component-navbar";

const Alert = () =>{
  return (
    <div className="content">
      <TopNavBar/>

      <div className="page-content">
      <SideNavBar/>

        <div className="main-content">
          <h1 className="clh1">Alerts</h1>
          <p className="description">
            An alert displays a short, important message in a way that attracts
            the user's attention without interrupting the user's task.
            <br />
            <br />
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Basic Alerts</h4>
            <small>The alert offers four severity levels that set a distinctive icon and color.</small>
            <div className="type-one--alert">
              <div className="alert error">
                <i className="fas fa-exclamation-circle"></i>This is an error alert -- check it out
              </div>

              <div className="alert warning">
                <i className="fas fa-exclamation-triangle"></i>This is a Warning alert -- check it out
              </div>
              <div className="alert info">
                <i className="fas fa-info-circle"></i>This is an Info alert -- check it out
              </div>
              <div className="alert success">
                <i className="fas fa-check-double"></i>This is a Success alert -- check it out
              </div>
            </div>
            {/* You can replace the iframes with React components or use them as needed */}
            <div className="code-example-block">
              {/* Example iframe 1 */}
            </div>
            <div className="code-example-block">
              {/* Example iframe 2 */}
            </div>
            <div className="code-example-block">
              {/* Example iframe 3 */}
            </div>
            <div className="code-example-block">
              {/* Example iframe 4 */}
            </div>
          </div>
          <div className="gif-example">
            <h1>How to Use?</h1>
            <img className="gifs" src={require("../../assets/exampleGifs/Alert.gif")} alt="avatar-exaple" />
          </div>
          <footer className="page-footer">
            <a className="foot-item" href="../Avatar/Avatar.html"><i className="far fa-hand-point-left"></i>Avatar</a>
            <a className="foot-item" href="../Badges/Badges.html">Badge<i className="far fa-hand-point-right"></i></a>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default Alert
  