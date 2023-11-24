import React, { useState } from "react";
import "./Modal.css";
import { TopNavBar, SideNavBar } from "../../pages/components/component-navbar";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="content">
      <TopNavBar />

      <div className="page-content">
        <SideNavBar />

        <div className="main-content">
          <h1 className="clh1">Modal</h1>
          <p className="description">
            A modal is a dialog box/popup window that is displayed on top of the
            current page: Open Modal.
            <br />
            <br />
          </p>

          {/* bottom snackbar */}
          <div className="section section--type-one">
            <div className="type-one-modal">
              <button onClick={handleShowModal} id="btn-bottom">
                Show
              </button>
              {isModalOpen && (
                <div className="modal">
                  <div className="modal-top">
                    <i className="fas fa-exclamation-triangle"></i> Are you sure
                    you want to Submit?
                  </div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora illum necessitatibus officia fugiat repudiandae!
                    Tempore nihil recusandae aperiam dolor facere.
                  </p>
                  <button onClick={handleCloseModal} id="close-bottom">
                    Close
                  </button>
                </div>
              )}
            </div>
            <div className="code-example-block">
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/sWQf7RKw7Z8RMlOoPBH8"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "447px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
            <div className="code-example-block">
              <h3>JavaScript To Be Added</h3>
              <iframe
                title="Carbon Embed"
                src="https://carbon.now.sh/embed/NpdtFI9inxilxjrbd8iQ"
                style={{
                  width: "100%",
                  margin: "auto",
                  height: "465px",
                  border: "0",
                  transform: "scale(1)",
                  overflow: "hidden",
                }}
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>
          </div>
          <div className="gif-example">
            <h1>How to Use?</h1>
            <img
              className="gifs"
              src={require("../../assets/exampleGifs/modal.gif")}
              alt="avatar-exaple"
            />
          </div>
          <footer className="page-footer">
            <a className="foot-item" href="../Navigation/Navigation.html">
              <i className="far fa-hand-point-left"></i>Navigation
            </a>
            <a className="foot-item" href="../Rating/Rating.html">
              Rating<i className="far fa-hand-point-right"></i>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default Modal;
