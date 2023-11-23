import React from "react";
import './Rating.css'
import "../../styles.css"
import { TopNavBar,SideNavBar } from "../../pages/components/component-navbar";


const Rating = () =>{
  return (
    <div className="content">
      <TopNavBar/>

      <div className="page-content">
      <SideNavBar/>
        
        <div className="main-content">
          <h1 className="clh1">Ratings</h1>
          <p className="description">
            Ratings and reviews also help customers understand how a product works in real life before they purchase it.
            <br />
            <br />
          </p>

          {/* Type One Ratings */}
          <div className="section section--type-one">
            <div className="type-one-rating">
              <span className="rating negative">
                <i className="fas fa-star"></i>2.5
              </span>
            </div>
            <div className="type-one-rating">
              <span className="rating positive">
                <i className="fas fa-star"></i>4.5
              </span>
            </div>

            {/* Rate Us */}
            <h4 className="clh4">Rate Us!</h4>
            <div className="type-one-rating">
              <i className="fas fa-star gold lg"></i>
              <i className="fas fa-star gold lg"></i>
              <i className="fas fa-star gold lg"></i>
              <i className="fas fa-star lg"></i>
              <i className="fas fa-star lg"></i>
            </div>

            <div className="type-one-rating">
              <i className="far fa-grin-stars lg"></i>
              <i className="far fa-smile-beam lg"></i>
              <i className="far fa-meh lg"></i>
              <i className="far fa-frown lg"></i>
              <i className="far fa-angry lg"></i>
            </div>
          </div>

          <div className="gif-example">
            <h1>How to Use?</h1>
            <img className="gifs" src={require("../../assets/exampleGifs/rating.gif")} alt="avatar-exaple" />
          </div>

          <footer className="page-footer">
            <a className="foot-item" href="../Modal/Modal.html">
              <i className="far fa-hand-point-left"></i>Modal
            </a>
            <a className="foot-item" href="../Snackbar/Snackbar.html">
              Snackbar<i className="far fa-hand-point-right"></i>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default Rating

