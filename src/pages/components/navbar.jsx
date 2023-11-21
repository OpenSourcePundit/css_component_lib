import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/index.html">KairoDesigns</a>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="./installation.html">Installation</a>
          </li>
          <li>
            <a href="/components/Avatar/Avatar.html">Get Started</a>
          </li>
          <li>
            <a href="/components/Avatar/Avatar.html">Docs</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;