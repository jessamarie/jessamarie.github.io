import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav style={{ margin: 10 }}>
      <Link to="/about" style={{ padding: 5 }}>
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
