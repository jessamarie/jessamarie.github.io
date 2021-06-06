import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
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
