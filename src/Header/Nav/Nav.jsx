import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ margin: 10 }}>
      <Link to="/" style={{ padding: 5 }}>
        About me
      </Link>
      <Link to="/projects" style={{ padding: 5 }}>
        My Projects
      </Link>
      <Link to="/skills" style={{ padding: 5 }}>
        My Skills
      </Link>
    </nav>
  );
}

export default Nav;
