import screenshotsData from './screenshotsData';
import toolsData from './technologiesData';

const projectsData = [
  {
    id: 1,
    title: 'Sonic Trunfo',
    screenshot: screenshotsData[1],
    description:
      'Jogo de cartas estilo Super Trunfo com personagens da série Sonic',
    tools: [
      toolsData.react,
      toolsData.reactRouterV6,
      toolsData.redux,
      toolsData.rtl,
      toolsData.reactIcons,
      toolsData.javaScript,
      toolsData.html,
      toolsData.css,
      toolsData.sass,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/sonic-trumps',
    deployLink: 'https://raphaelalmeidamartins.github.io/sonic-trumps/',
  },
];

export default projectsData;
