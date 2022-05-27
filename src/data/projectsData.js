import screenshotsData from './screenshotsData';
import toolsData from './toolsData';

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
  {
    id: 2,
    title: 'Trivia',
    screenshot: screenshotsData[2],
    description:
      'Jogo de trivia desenvolvido em React usando uma API pública',
    tools: [
      toolsData.react,
      toolsData.reactRouterV5,
      toolsData.redux,
      toolsData.reactIcons,
      toolsData.javaScript,
      toolsData.html,
      toolsData.css,
      toolsData.sass,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/trivia',
    deployLink: 'https://raphaelalmeidamartins.github.io/trivia/#/',
  },
  {
    id: 3,
    title: 'Online Store',
    screenshot: screenshotsData[3],
    description:
      'Loja online Front-end SPA usando uma API pública',
    tools: [
      toolsData.react,
      toolsData.reactRouterV5,
      toolsData.reactContextAPI,
      toolsData.reactIcons,
      toolsData.javaScript,
      toolsData.html,
      toolsData.css,
      toolsData.sass,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/front-end-online-store',
    deployLink: 'https://raphaelalmeidamartins.github.io/front-end-online-store/#/',
  },
  {
    id: 4,
    title: 'Wallet',
    screenshot: screenshotsData[4],
    description:
      'Aplicação de carteira usando taxas de câmbio de uma API pública',
    tools: [
      toolsData.react,
      toolsData.reactRouterV5,
      toolsData.redux,
      toolsData.reactIcons,
      toolsData.javaScript,
      toolsData.html,
      toolsData.css,
      toolsData.bulma,
      toolsData.sass,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/trybewallet',
    deployLink: 'https://raphaelalmeidamartins.github.io/trybewallet/#/',
  },
];

export default projectsData;
