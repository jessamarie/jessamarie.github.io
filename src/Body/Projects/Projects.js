import { Css3, Html5, Javascript, ReactLogo } from 'styled-icons/boxicons-logos';

import { Rubygems, Rubyonrails, Webpack } from 'styled-icons/simple-icons';

const Projects = [
  {
    id: 1,
    name: 'Recall',
    repo: 'http://github.com/jessamarie/recall',
    description: 'An application to help study keywords.',
    technologies: [ReactLogo, Css3, Html5, Webpack]
  },
  {
    id: 2,
    name: 'jessamarie.github.io',
    repo: 'http://github.com/jessamarie/jessamarie.github.io',
    description: 'My Githhub Portfolio',
    technologies: [ReactLogo, Webpack, Html5, Css3]
  },
  {
    id: 3,
    name: 'Reverse Hangman',
    repo: 'http://github.com/jessamarie/hangman/',
    description: 'A unique hangman game--in reverse!',
    technologies: [Javascript, Html5, Css3]
  },
  {
    id: 4,
    name: 'Mystery Lunch',
    repo: 'http://github.com/jessamarie/mystery-lunch/',
    description: 'An application where you can order a random meal from a restaurant.',
    technologies: [Rubygems, Rubyonrails, Html5, Css3]
  }
];

export default Projects;
