import React from "react";
import './Slider.css'
import { TopNavBar,SideNavBar } from "../../pages/components/component-navbar";



const Slider = () =>{
  return (
    <div className="content">
      <TopNavBar/>
      <div className="page-content">
        <SideNavBar/>
        <div className="main-content">
          <h1 className="clh1">Slider</h1>
          <p className="description">
            CSS range sliders are a slider with a handle that allows users to select a certain value from a limited range. CSS range sliders are useful for budgets, prices.
            <br />
            <br />
          </p>

          {/* Default Range Slider */}
          <div className="section section--type-one">
            <h4 className="clh4">Default Range Slider</h4>
            <div className="type-one--text">
              <input type="range" min="1" max="100" value="30" />
            </div>
          </div>
          <div className="code-example-block">
            <iframe title="unique"
              src="https://carbon.now.sh/embed?bg=rgba%28242%2C215%2C238%2C1%29&t=blackboard&wt=none&l=auto&width=760&ds=true&dsyoff=0px&dsblur=100px&wc=true&wa=true&pv=41px&ph=40px&ln=false&fl=1&fm=Hack&fs=10px&lh=108%25&si=false&es=2x&wm=false&code=%253Cinput%2520type%253D%2522range%2522%2520min%253D%25221%2522%2520max%253D%2522100%2522%2520value%253D%252230%2522%253E"
              style={{ width: '100%', margin: 'auto', height: '251px', border: '0', transform: 'scale(1)', overflow: 'hidden' }}
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>

          {/* Square Slider */}
          <div className="section section--type-two">
            <h4 className="clh4">Square Slider</h4>
            <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
            <div className="code-example-block">
              <iframe title="unique"
                src="https://carbon.now.sh/embed?bg=rgba%28242%2C215%2C238%2C1%29&t=blackboard&wt=none&l=auto&width=760&ds=true&dsyoff=0px&dsblur=100px&wc=true&wa=true&pv=41px&ph=40px&ln=false&fl=1&fm=Hack&fs=10px&lh=108%25&si=false&es=2x&wm=false&code=%2520%253Cinput%2520type%253D%2522range%2522%2520min%253D%25221%2522%2520max%253D%2522100%2522%2520value%253D%252250%2522%2520class%253D%2522slider%2522%2520id%253D%2522myRange%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520"
                style={{ width: '100%', margin: 'auto', height: '262px', border: '0', transform: 'scale(1)', overflow: 'hidden' }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>

          <div className="gif-example">
            <h1>How to Use?</h1>
            <img className="gifs" src={require("../../assets/exampleGifs/slider.gif")} alt="avatar-example" />
          </div>

          <footer className="page-footer">
            <a className="foot-item" href="../Grid/Grid.html"><i className="far fa-hand-point-left"></i>Grids</a>
            <a className="foot-item" href="../Avatar/Avatar.html">Avatar<i className="far fa-hand-point-right"></i></a>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default Slider


    
  