import screenshotsData from './screenshotsData';
import toolsData from './toolsData';

const projectsData = [
  {
    id: 1,
    title: 'Sonic Trunfo',
    type: 'Front-end',
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
    type: 'Front-end',
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
    type: 'Front-end',
    screenshot: screenshotsData[3],
    description:
      'Aplicação SPA React de loja online usando uma API pública',
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
    type: 'Front-end',
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
  {
    id: 5,
    title: 'To-Do List',
    type: 'Front-end',
    screenshot: screenshotsData[5],
    description:
      'Aplicação de lista de tarefas desenvolvida com JavaScript puro',
    tools: [
      toolsData.javaScript,
      toolsData.html,
      toolsData.css,
      toolsData.sass,
      toolsData.fontAwesome,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/to-do-list',
    deployLink: 'https://raphaelalmeidamartins.github.io/to-do-list/',
  },
  {
    id: 6,
    title: 'Trybewarts',
    type: 'Front-end',
    screenshot: screenshotsData[6],
    description:
      'Página responsiva com formulário HTML e inspirada em Harry Potter',
    tools: [
      toolsData.javaScript,
      toolsData.html,
      toolsData.css,
      toolsData.sass,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/trybewarts',
    deployLink: 'https://raphaelalmeidamartins.github.io/trybewarts/',
  },
];

export default projectsData;
