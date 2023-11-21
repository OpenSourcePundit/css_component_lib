import React from 'react';

const Footer = () => {
  return (
    <section className="quiz-foot">
      <p className="left-foot">
        &copy; | 2023 | <span className="logo-clr">Shashank &hearts; OSP Components</span>
      </p>

      <p className="right-foot">
        <ul className="social-media-links">
          <li className="list-item-inline">
            <a target="_blank" rel="noreferrer" className="link" href="https://github.com/OpenSourcePundit"><i className="fab fa-github"></i></a>
          </li>
          <li className="list-item-inline">
            <a target="_blank" rel="noreferrer" className="link" href="https://www.linkedin.com/in/shashank-kumar00098/"><i className="fab fa-linkedin"></i></a>
          </li>
          <li className="list-item-inline">
            <a target="_blank" rel="noreferrer" className="link" href="https://twitter.com"><i className="fab fa-twitter-square"></i></a>
          </li>
          <li className="list-item-inline">
            <a target="_blank" rel="noreferrer" className="link" href="https://www.instagram.com/shashank_00098/"><i className="fab fa-instagram"></i></a>
          </li>
        </ul>
      </p>
    </section>
  );
};

export default Footer;
