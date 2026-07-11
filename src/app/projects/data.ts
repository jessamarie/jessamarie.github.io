import type { StaticImageData } from 'next/image';
import recallPhoto from './recall.jpg';
import sitePhoto from './jessamarie.png';
import hangmanPhoto from './hangman.png';
import mlunchPhoto from './mystery-lunch.png';

export interface Project {
  id: number;
  name: string;
  repo: string;
  homepage?: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Recall',
    repo: 'https://github.com/jessamarie/recall',
    description: 'An application to help study keywords.',
    technologies: ['React', 'Webpack'],
    image: recallPhoto,
  },
  {
    id: 2,
    name: 'jessamarie.github.io',
    repo: 'https://github.com/jessamarie/jessamarie.github.io',
    homepage: 'https://jessamarie.github.io',
    description: 'My GitHub portfolio, built with Next.js.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    image: sitePhoto,
  },
  {
    id: 3,
    name: 'Reverse Hangman',
    repo: 'https://github.com/jessamarie/hangman',
    description: 'A unique hangman game — in reverse!',
    technologies: ['JavaScript'],
    image: hangmanPhoto,
  },
  {
    id: 4,
    name: 'Mystery Lunch',
    repo: 'https://github.com/jessamarie/mystery-lunch',
    description: 'Order a random meal from a restaurant.',
    technologies: ['Ruby', 'Rails'],
    image: mlunchPhoto,
  },
];
