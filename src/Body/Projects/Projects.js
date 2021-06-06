import { Javascript, ReactLogo } from 'styled-icons/boxicons-logos';

import { Rubygems, Rubyonrails, Webpack } from 'styled-icons/simple-icons';

import recallPhoto from './recall.jpg';
import sitePhoto from './jessamarie.png';
import hangmanPhoto from './hangman.png';
import mlunchPhoto from './mystery-lunch.png';

const LOGOS = {
  javascript: {
    label: 'javascript',
    icon: Javascript
  },
  react: {
    label: 'react',
    icon: ReactLogo
  },
  ruby: {
    label: 'ruby',
    icon: Rubygems
  },
  rails: {
    label: 'rails',
    icon: Rubyonrails
  },
  webpack: {
    label: 'webpack',
    icon: Webpack
  }
};

const Projects = [
  {
    id: 1,
    name: 'Recall',
    repo: 'http://github.com/jessamarie/recall',
    description: 'An application to help study keywords.',
    technologies: [LOGOS.react, LOGOS.webpack],
    imgName: recallPhoto
  },
  {
    id: 2,
    name: 'jessamarie.github.io',
    repo: 'http://github.com/jessamarie/jessamarie.github.io',
    description: 'My Githhub Portfolio',
    technologies: [LOGOS.react],
    imgName: sitePhoto
  },
  {
    id: 3,
    name: 'Reverse Hangman',
    repo: 'http://github.com/jessamarie/hangman/',
    description: 'A unique hangman game--in reverse!',
    technologies: [LOGOS.javascript],
    imgName: hangmanPhoto
  },
  {
    id: 4,
    name: 'Mystery Lunch',
    repo: 'http://github.com/jessamarie/mystery-lunch/',
    description: 'An application where you can order a random meal from a restaurant.',
    technologies: [LOGOS.ruby, LOGOS.rails],
    imgName: mlunchPhoto
  }
];

export default Projects;
