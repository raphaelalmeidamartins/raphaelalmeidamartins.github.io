import React from 'react';
import { DiJavascript } from 'react-icons/di';
import { FaRoute, FaFontAwesomeFlag, FaNodeJs, FaDocker } from 'react-icons/fa';
import {
  SiBulma,
  SiCss3,
  SiHtml5,
  SiReact,
  SiRedux,
  SiSass,
  SiTestinglibrary,
  SiExpress,
  SiMysql,
  SiMocha,
  SiChai,
  SiJest,
  SiSequelize,
  SiHeroku,
  SiTypescript,
  SiSwagger,
} from 'react-icons/si';
import { BiTestTube } from 'react-icons/bi';

const toolsData = {
  fontAwesome: {
    icon: <FaFontAwesomeFlag />,
    label: 'Font Awesome',
  },
  bulma: {
    icon: <SiBulma />,
    label: 'Bulma',
  },
  react: {
    icon: <SiReact />,
    label: 'React',
  },
  reactContextAPI: {
    icon: <SiReact />,
    label: 'Context API',
  },
  reactRouterV5: {
    icon: <FaRoute />,
    label: 'React Router v5',
  },
  reactRouterV6: {
    icon: <FaRoute />,
    label: 'React Router v6',
  },
  redux: {
    icon: <SiRedux />,
    label: 'Redux',
  },
  rtl: {
    icon: <SiTestinglibrary />,
    label: 'RTL',
  },
  reactIcons: {
    icon: <SiReact />,
    label: 'React Icons',
  },
  javaScript: {
    icon: <DiJavascript />,
    label: 'JavaScript',
  },
  typeScript: {
    icon: <SiTypescript />,
    label: 'TypeScript',
  },
  html: {
    icon: <SiHtml5 />,
    label: 'HTML',
  },
  css: {
    icon: <SiCss3 />,
    label: 'CSS',
  },
  sass: {
    icon: <SiSass />,
    label: 'Sass',
  },
  node: {
    icon: <FaNodeJs />,
    label: 'Node.js',
  },
  express: {
    icon: <SiExpress />,
    label: 'Express.js',
  },
  docker: {
    icon: <FaDocker />,
    label: 'Docker',
  },
  mySQL: {
    icon: <SiMysql />,
    label: 'MySQL',
  },
  sequelize: {
    icon: <SiSequelize />,
    label: 'Sequelize.js',
  },
  mocha: {
    icon: <SiMocha />,
    label: 'Mocha',
  },
  chai: {
    icon: <SiChai />,
    label: 'Chai',
  },
  sinon: {
    icon: <BiTestTube />,
    label: 'Sinon',
  },
  jest: {
    icon: <SiJest />,
    label: 'Jest',
  },
  heroku: {
    icon: <SiHeroku />,
    label: 'Heroku',
  },
  swagger: {
    icon: <SiSwagger />,
    label: 'Swagger'
  }
};

export default toolsData;
