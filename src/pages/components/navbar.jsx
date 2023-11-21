import React from 'react';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {

    const navigate = useNavigate();
  return (
    <nav>
      <div className="logo">
        <div className="a" href="/index.html">OSP Components</div>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <div className="a" onClick={()=>navigate('./installation')}>Installation</div>
          </li>
          <li>
            <div className="a" onClick={()=>navigate('./components')}>Get Started</div>
          </li>
          <li>
            <div className="a" onClick={()=>navigate('https://github.com/OpenSourcePundit/css_component_lib')}>Docs-GitHub</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;