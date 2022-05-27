import React from 'react';
import { DiJavascript } from 'react-icons/di';
import { FaRoute, FaFontAwesomeFlag } from 'react-icons/fa';
import {
  SiBulma, SiCss3, SiHtml5, SiReact,
  SiRedux, SiSass, SiTestinglibrary
} from 'react-icons/si';

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
};

export default toolsData;
