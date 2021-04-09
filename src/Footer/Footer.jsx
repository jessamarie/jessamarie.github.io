import React from 'react';
import './Footer.css';
import LinkContainer from './LinkContainer/LinkContainer';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="Footer">
      <LinkContainer />
      <p>Made with &hearts; by Jessa &copy; {year}</p>
    </footer>
  );
}

export default Footer;
