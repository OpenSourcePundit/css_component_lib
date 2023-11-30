import React from "react";
import "./Card.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";
import { ComponentFooter } from "../../pages/components/component-footer";

const Card = () => {
  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Cards</h1>
          <p className="description">
            CSS cards are great for organizing and enhancing a website's user
            interface. Each card is uniquely designed to make it easy for users
            to read the card content. CSS cards are great for organizing and
            enhancing a website's user interface. Each card is uniquely designed
            to make it easy for users to read the card content.
            <br />
            <br />
            Cards contain content and actions about a single subject.
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Basic Card with Shadow</h4>
            <div className="type-one--card">
              <div className="cardcom background">
                <div className="card">
                  <img
                    className="card-image-one"
                    src={require("../../assets/avatar/card-image.jpg")}
                    alt="card-image"
                  />
                  <article className="card-text-one">
                    <figcaption>"That's my spot."</figcaption>
                    <h6>- Sheldon Cooper</h6>
                    <summary>
                      In an ever-changing world it is a single point of
                      consistency.
                    </summary>
                  </article>
                  <footer>
                    <span>Read</span>
                    <span>Bookmark</span>
                    <ul>
                      <i className="fas fa-heart"></i>
                      <i className="fas fa-share-alt"></i>
                      <i className="fas fa-ellipsis-v"></i>
                    </ul>
                  </footer>
                </div>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/1oXjXNaKreHsKZG11Xi5"
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "577px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

            <h4 className="clh4">Horizontal Cards</h4>
            <div className="type-one--card">
              <div className="cardcom background">
                <div className="card noshadow">
                  <section>
                    <img
                      className="card-image-two"
                      src={require("../../assets/avatar/card-image.jpg")}
                      alt="card-image"
                    />
                    <article className="card-text-two">
                      <h3>"That's my spot."</h3>
                      <h5>- Sheldon Cooper</h5>
                    </article>
                  </section>
                  <footer>
                    <span>Read</span>
                    <span>Bookmark</span>
                    <ul>
                      <i className="fas fa-heart"></i>
                      <i className="fas fa-share-alt"></i>
                      <i className="fas fa-ellipsis-v"></i>
                    </ul>
                  </footer>
                </div>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/6dhAPNLE0QTBw9TKmvfH"
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "577px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

            <h4 className="clh4">Cards with badge</h4>
            <div className="type-one--card">
              <div className="cardcom white">
                <div className="card card-badge">
                  <span className="update-badge">Trending!</span>
                  <img
                    className="card-image"
                    src={require("../../assets/card/card-img1.jpg")}
                    alt="card-image"
                  />

                  <div className="product-detail">
                    <p>GRU INC.</p>
                    <p>Yellow color Happy Minion</p>
                    <span className="rating">
                      {" "}
                      <i className="fas fa-star"></i>4.5
                    </span>

                    <div className="footer">
                      <p className="price">
                        Rs.1098 <span className="old-price">Rs.1598</span>{" "}
                        <span className="discount">32%off</span>
                      </p>
                      <i className="fas fa-heart"></i>
                      <i className="fas fa-share-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/TdleOv9zq6SqFLa7GPDq"
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "577px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

            <h4 className="clh4">Cards with Dismiss</h4>
            <div className="type-one--card">
              <div className="cardcom white">
                <div className="card card-badge dismiss">
                  <span className="update-badge">Trending!</span>
                  <img
                    className="card-image"
                    src={require("../../assets/card/card-img2.jpg")}
                    alt="card-image"
                  />
                  <span className="close">
                    <i className="fas fa-times-circle"></i>
                  </span>
                  <div className="product-detail">
                    <p>GRU INC.</p>
                    <p>Purple color Devil Minion</p>
                    <span className="rating negative">
                      {" "}
                      <i className="fas fa-star"></i>2.5
                    </span>

                    <div className="footer">
                      <p className="price">
                        Rs.1098 <span className="old-price">Rs.1598</span>{" "}
                        <span className="discount">32%off</span>
                      </p>
                      <i className="fas fa-heart"></i>
                      <i className="fas fa-share-alt"></i>
                    </div>
                  </div>
                </div>
                <button>Bring back</button>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/AsQGvueSnTtchaodSdPx"
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "595px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

            <h4 className="clh4">Text Over Cards</h4>
            <div className="type-one--card">
              <div className="cardcom white">
                <div className="card card-badge cardtext">
                  <span className="update-badge">Trending!</span>
                  <img
                    className="card-img"
                    src={require("../../assets/card/card-img3.jpg")}
                    alt="card-image"
                  />
                  <div className="product-detail">
                    <p className="text-over">OUT OF STOCK</p>
                    <p>GRU INC.</p>
                    <p>Yellow color Happy Minion</p>
                    <span className="rating">
                      {" "}
                      <i className="fas fa-star"></i>4.5
                    </span>

                    <div className="footer">
                      <p className="price">
                        Rs.1098 <span className="old-price">Rs.1598</span>{" "}
                        <span className="discount">32%off</span>
                      </p>
                      <i className="fas fa-heart"></i>
                      <i className="fas fa-share-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/Nv8oyCxvbFWYdByDqOTm"
                  style={{
                    width: "100%",
                margin: "auto",
                    height: "595px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

            <h4 className="remove clh4">Horizontal Cards II</h4>
            <div className="type-one--card remove">
              <div className="cardcom white">
                <div className="card horizontal">
                  <img
                    className="card-img"
                    src={require("../../assets/card/card-img4.png")}
                    alt="card-image"
                  />
                  <div className="product-detail">
                    <p>GRU INC.</p>
                    <p>Valentine's Gift Cat Toy</p>
                    <span className="rating">
                      {" "}
                      <i className="fas fa-star"></i>4.5
                    </span>
                    <p className="price">
                      Rs.1098 <span className="old-price">Rs.1598</span>{" "}
                      <span className="discount">32%off</span>
                    </p>
                    <div className="footer">
                      <button className="button">
                        <i className="fas fa-heart"></i>Wishlist
                      </button>
                      <button className="button">
                        <i className="fas fa-shopping-cart"></i> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="code-example-block">
                <iframe
                  title="Carbon Embed"
                  src="https://carbon.now.sh/embed/I5iKmLvcj9YeIGHfaDPP"
                  style={{
                    width: "100%",
                    margin: "auto",
                    height: "558px",
                    border: "0",
                    transform: "scale(1)",
                    overflow: "hidden",
                  }}
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>
              </div>
            </div>

           
            <ComponentFooter/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
