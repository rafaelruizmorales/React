import React from 'react';

import { Link } from 'react-router-dom'

function Nav() {
  
  const navStyle = {
      color: "#fff"
  }

  return (
    <div>
      <nav>
          <Link to="/">
            <h3>Logo</h3>
          </Link>
          <ul className="nav-links">
            <Link to="/about" style={navStyle}>
                <li>About</li>
            </Link>
            <Link to="/pokemon" style={navStyle}>
                <li>Pokemon</li>
            </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;
