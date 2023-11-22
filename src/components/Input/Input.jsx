import React from "react"
import './Input.css'
const Input = () =>{
  return (
    <div className="content">
      <div className="page-content">
        <div className="main-content">
          <h1 className="clh1">Inputs</h1>
          <p className="description">
            The Input component is a component that is used to get user input in
            a text field.
            <br />
            <br />
          </p>

          <div className="section section--type-one">
            <h4 className="clh4">Labelled Inputs</h4>
            <small>
              Label Input has a label present at the top of the input field.
              They can be customized to show error error-message, and change
              color accordingly.
            </small>
            <div className="type-one--input">
              <label htmlFor="basic">UserName : </label>
              <input
                placeholder="Enter Username"
                type="text"
                id="basic"
                className="input"
              />
            </div>
            <div className="type-one--input">
              <label htmlFor="basic-password">PassWord : </label>
              <input
                placeholder="Enter Password"
                type="text"
                id="basic-password"
                className="input"
              />
            </div>

            <div className="code-example-block">
              <iframe title="unique"
                src="https://carbon.now.sh/embed?"
                style={{
                  margin: 'auto',
                  width: '100%',
                  height: '250px',
                  border: '0',
                  transform: 'scale(1)',
                  overflow: 'hidden',
                }}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          <div className="section section--type-two">
            <h4 className="clh4">Validation Inputs</h4>
            <small>
              Validation Inputs provide validation about being a
              success/failure/warning based on some predefined
              conditions.
            </small>
            <div className="type-error--input two">
              <small>Error</small>
              <input
                type="text"
                id="valid-one"
                className="input error"
                placeholder="Hello World"
              />
              <small>Incorrect Entry</small>
            </div>
            <div className="type-success--input two">
              <input
                type="text"
                id="valid-two"
                className="input success"
                placeholder="Hello World"
              />
              <small>Successful</small>
            </div>

            <div className="code-example-block">
              <iframe title="unique"
                src="https://carbon.now.sh/embed?"
                style={{
                  margin: 'auto',
                  width: '100%',
                  height: '270px',
                  border: '0',
                  transform: 'scale(1)',
                  overflow: 'hidden',
                }}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          <div className="section section--type-three">
            <h4 className="clh4"> Input with Icons</h4>
            <div className="type-three--input">
              <i className="fa fa-user icon"></i>
              <input type="text" placeholder="Your Name" className="input person" />
            </div>
            <div className="type-three--input">
              <i className="fas fa-briefcase"></i>
              <input
                type="text"
                className="input job"
                placeholder="Where You Work?"
              />
            </div>
            <div className="type-three--input">
              <i className="fas fa-search"></i>
              <input
                type="text"
                className="input search"
                placeholder="Search for Products"
              />
            </div>

            <div className="code-example-block">
              <iframe title="unique"
                src="https://carbon.now.sh/embed?"
                style={{
                  margin: 'auto',
                  width: '100%',
                  height: '320px',
                  border: '0',
                  transform: 'scale(1)',
                  overflow: 'hidden',
                }}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

          <div className="section section--type-four">
            <h4 className="clh4">Textareas</h4>
            <div className="type-four--input">
              <textarea
                type="text"
                placeholder="Enter Your Message..."
                className="input person"
              ></textarea>
              <div className="text-icons">
                <i className="fas fa-smile"></i><i className="fas fa-paper-plane"></i>
              </div>
            </div>

            <div className="code-example-block">
              <iframe title="unique"
                src="https://carbon.now.sh/embed?"
                style={{
                  margin: 'auto',
                  width: '100%',
                  height: '260px',
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
            <img className="gifs" src={require("../../assets/exampleGifs/input.gif")} alt="avatar-exaple"/>
          </div>
          <footer className="page-footer">
            <a className="foot-item" href="../Image/Image.html"><i className="far fa-hand-point-left"></i>Image</a>
            <a className="foot-item" href="../Text-Utilities/TextUtil.html">Text Utils<i className="far fa-hand-point-right"></i></a>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default Input




