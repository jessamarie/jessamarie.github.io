import React from 'react';
import './About.css';

function About() {
  const text = "Hello, I'm Jessa Marie. I like to code. Check out my cool projects!";
  const text2 =
    "I'm a determined and passionate software engineer who enjoys solving complex problems. My goal is to utilize my full-stack development skills to create applications that make a difference.";
  return (
    <section className="about">
      <p>{text}</p>
      <p>{text2}</p>
    </section>
  );
}

export default About;
