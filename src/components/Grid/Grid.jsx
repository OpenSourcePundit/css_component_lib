import React from "react";
import './Grid.css'
const Grid = () =>{
  return (
    <div className="content">
      <div className="page-content">
        <div className="main-content">
          <h1 className="clh1">Grids</h1>
          <p className="description">
            Convey meaning through color with a handful of color utility
            classes. <br />
            <br />
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Two-Column Grids</h4>
            <div className="two-items">
              <div className="grid-items pink"><p>One</p></div>
              <div className="grid-items dk-pink"><p>Two</p></div>
              <div className="grid-items red"><p>Three</p></div>
              <div className="grid-items dk-red"><p>Four</p></div>
              <div className="grid-items blue"><p>Five</p></div>
              <div className="grid-items dk-blue"><p>Six</p></div>
              <div className="grid-items purple"><p>Seven</p></div>
              <div className="grid-items dk-purple"><p>Eight</p></div>
            </div>
            <div className="code-example-block">
              <iframe title="unique"
                src="https://carbon.now.sh/embed?"
                style={{
                  width: '100%',
                  margin: 'auto',
                  height: '300px',
                  border: '0',
                  transform: 'scale(1)',
                  overflow: 'hidden',
                }}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>

            <h4 className="clh4">Three-Column Grids</h4>
            <div className="three-items">
              <div className="grid-items pink"><p>One</p></div>
              <div className="grid-items dk-pink"><p>Two</p></div>
              <div className="grid-items red"><p>Three</p></div>
              <div className="grid-items dk-red"><p>Four</p></div>
              <div className="grid-items blue"><p>Five</p></div>
              <div className="grid-items dk-blue"><p>Six</p></div>
              <div className="grid-items purple"><p>Seven</p></div>
              <div className="grid-items dk-purple"><p>Eight</p></div>
            </div>
            <div className="code-example-block">
              <iframe title="unique"
                src="https://carbon.now.sh/embed?"
                style={{
                  width: '100%',
                  margin: 'auto',
                  height: '300px',
                  border: '0',
                  transform: 'scale(1)',
                  overflow: 'hidden',
                }}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>
          <div className="gif-example">
            <h1>How to Use?</h1>
            <img className="gifs" src={require("../../assets/exampleGifs/grids.gif")} alt="avatar-exaple" />
          </div>
          <footer className="page-footer">
            <a className="foot-item" href="../Snackbar/Snackbar.html"><i className="far fa-hand-point-left"></i>Snackbar</a>
            <a className="foot-item" href="../Slider/Slider.html">Slider<i className="far fa-hand-point-right"></i></a>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default Grid

