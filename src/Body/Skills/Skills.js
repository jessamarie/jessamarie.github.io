import { Bootstrap, Css3, Html5, Python, ReactLogo, Vuejs } from '@styled-icons/boxicons-logos';
import { NodeJs } from '@styled-icons/fa-brands';
import { LogoAngular } from '@styled-icons/ionicons-solid';
import {
  Angularjs,
  Express,
  Intellijidea,
  Java,
  Javascript,
  Mongodb,
  Mysql,
  Postgresql,
  Visualstudiocode,
  Webpack
} from '@styled-icons/simple-icons';

const TYPE = {
  FRONT: 'front-end',
  BACK: 'back-end',
  DB: 'database',
  IDE: 'ide'
};

const Skills = [
  {
    id: 1,
    technology: 'AngularJS',
    type: TYPE.FRONT,
    icon: Angularjs
  },
  {
    id: 2,
    technology: 'Angular',
    type: TYPE.FRONT,
    icon: LogoAngular
  },
  {
    id: 3,
    technology: 'JavaScript',
    type: TYPE.FRONT,
    icon: Javascript
  },
  {
    id: 4,
    technology: 'Java',
    type: TYPE.BACK,
    icon: Java
  },
  {
    id: 5,
    technology: 'nodejs',
    type: TYPE.BACK,
    icon: NodeJs
  },
  {
    id: 6,
    technology: 'Vuejs',
    type: TYPE.FRONT,
    icon: Vuejs
  },
  {
    id: 7,
    technology: 'React',
    type: TYPE.FRONT,
    icon: ReactLogo
  },
  {
    id: 8,
    technology: 'Webpack',
    type: TYPE.FRONT,
    icon: Webpack
  },
  {
    id: 9,
    technology: 'express',
    type: TYPE.BACK,
    icon: Express
  },
  {
    id: 10,
    technology: 'mongoDB',
    type: TYPE.DB,
    icon: Mongodb
  },
  {
    id: 11,
    technology: 'HTML5',
    type: TYPE.FRONT,
    icon: Html5
  },
  {
    id: 12,
    technology: 'CSS3',
    type: TYPE.FRONT,
    icon: Css3
  },
  {
    id: 13,
    technology: 'Postgresql',
    type: TYPE.DB,
    icon: Postgresql
  },
  {
    id: 14,
    technology: 'vscode',
    type: TYPE.IDE,
    icon: Visualstudiocode
  },
  {
    id: 15,
    technology: 'intellij',
    type: TYPE.IDE,
    icon: Intellijidea
  },
  {
    id: 16,
    technology: 'Bootstrap',
    type: TYPE.FRONT,
    icon: Bootstrap
  },
  {
    id: 17,
    technology: 'mysql',
    type: TYPE.DB,
    icon: Mysql
  },
  {
    id: 18,
    technology: 'python',
    type: TYPE.BACK,
    icon: Python
  }
];

export default Skills;
