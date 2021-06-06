import React from 'react';
import './About.css';

function About() {
  const greeting = "Hi, I'm Jessa.";
  const text =
    "I'm a determined and passionate software engineer who enjoys solving complex problems. " +
    'My goal is to utilize my full-stack development skills to create applications that make a difference.';
  return (
    <section className="About">
      <p>{greeting}</p>
      <p>{text}</p>
    </section>
  );
}

export default About;
