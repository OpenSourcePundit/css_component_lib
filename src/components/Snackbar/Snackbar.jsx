import React from "react";
import './Snackbar.css'
const Snackbar = () =>{
  const showSnackbar = (snackbarElement, duration) => {
    snackbarElement.classList.add('show');
    setTimeout(() => {
      snackbarElement.classList.remove('show');
    }, duration);
  };

  const hideSnackbar = (snackbarElement) => {
    snackbarElement.classList.remove('show');
  };
  
  return (
    <div className="content">
      <div className="page-content">
        <div className="main-content">
          <h1 className="clh1">Snackbar</h1>
          <p className="description">
            The Snackbar/Toast/Notify component is like an alert box that is only shown for a couple of seconds when something happens (i.e. when the user clicks on a button, submits a form, etc.).
            <br />
            <br />
          </p>

          {/* Bottom Snackbar */}
          <div className="section section--type-one">
            <h4 className="clh4">Bottom Snackbar</h4>
            <div className="type-one-snackbar">
              <button id="btn-bottom" onClick={() => showSnackbar(document.querySelector('#bottom-snackbar'), 3000)}>
                Show
              </button>
              <div id="bottom-snackbar" className="snackbar bottom">
                This notif will go in 3 Seconds
                <i id="close-bottom" className="fas fa-times-circle" onClick={() => hideSnackbar(document.querySelector('#bottom-snackbar'))}></i>
              </div>
            </div>
            <div className="code-example-block">
              {/* JS code to be added */}
            </div>
          </div>

          {/* Top Snackbar */}
          <div className="section section--type-one">
            <h4 className="clh4">Top Snackbar</h4>
            <div className="type-one-snackbar">
              <button id="btn-top" onClick={() => showSnackbar(document.querySelector('#top-snackbar'), 5000)}>
                Show
              </button>
              <div id="top-snackbar" className="snackbar top">
                This notif will go in 5 Seconds
                <i id="close-top" className="fas fa-times-circle" onClick={() => hideSnackbar(document.querySelector('#top-snackbar'))}></i>
              </div>
            </div>
            <div className="code-example-block">
              {/* JS code to be added */}
            </div>
          </div>

          <div className="gif-example">
            <h1>How to Use?</h1>
            <img className="gifs" src={require("../../assets/exampleGifs/snackbar.gif")} alt="avatar-exaple"/>
          </div>

          <footer className="page-footer">
            <div className="foot-item a" href="../Rating/Rating.html"><i className="far fa-hand-point-left"></i>Ratings</div>
            <div className="foot-item a" href="../Grid/Grid.html">Grids<i className="far fa-hand-point-right"></i></div>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default Snackbar


