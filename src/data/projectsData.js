import screenshotsData from './screenshotsData';
import toolsData from './toolsData';

const projectsData = [
  {
    id: 1,
    title: 'Sonic Trunfo',
    type: 'Front-end',
    screenshot: screenshotsData[1],
    description: {
      EN: 'Top Trumps-style card game with Sonic the Hedgehog characters',
      BR: 'Jogo de cartas estilo Super Trunfo com personagens da série Sonic',
    },
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
    description: {
      EN: 'Trivia game React application fetching for questions\' data from a public API',
      BR: 'Jogo de trivia desenvolvido em React usando uma API pública',
    },
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
    description: {
      EN: 'SPA online store application fetching products\' data from a public API',
      BR: 'Aplicação SPA React de loja online usando uma API pública',
    },
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
    repositoryLink:
      'https://github.com/raphaelalmeidamartins/front-end-online-store',
    deployLink:
      'https://raphaelalmeidamartins.github.io/front-end-online-store/#/',
  },
  {
    id: 4,
    title: 'Wallet',
    type: 'Front-end',
    screenshot: screenshotsData[4],
    description: {
      EN: 'Wallet application fetching for curriencies\' exchange rates from a public API',
      BR: 'Aplicação de carteira usando taxas de câmbio de uma API pública',
    },
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
    description: {
      EN: 'To-Do List application developed with vanilla JavaScript',
      BR: 'Aplicação de lista de tarefas desenvolvida com JavaScript puro',
    },
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
    description: {
      EN: 'Responsive web page with HTML forms and inspired by the Harry Potter series',
      BR: 'Página responsiva com formulário HTML e inspirada em Harry Potter',
    },
    tools: [
      toolsData.javaScript,
      toolsData.html,
      toolsData.css,
      toolsData.sass,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/trybewarts',
    deployLink: 'https://raphaelalmeidamartins.github.io/trybewarts/',
  },
  {
    id: 7,
    title: 'Store Manager',
    type: 'Back-end',
    screenshot: screenshotsData[7],
    description: {
      EN: 'RESTful API developed with Node.js and Express.js with MySQL database',
      BR: 'API RESTful desenvolvida em Node.js e Express.js com o banco de dados MySQL',
    },
    tools: [
      toolsData.javaScript,
      toolsData.node,
      toolsData.express,
      toolsData.mySQL,
      toolsData.docker,
      toolsData.mocha,
      toolsData.chai,
      toolsData.sinon,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/store-manager',
    deployLink: 'https://github.com/raphaelalmeidamartins/store-manager',
  },
  {
    id: 8,
    title: 'Tests with RTL',
    type: 'Front-end',
    screenshot: screenshotsData[8],
    description: {
      EN: 'Front-end testing projects with React Testing Library',
      BR: 'Projeto de testes no Front-end com a React Testing Library',
    },
    tools: [
      toolsData.javaScript,
      toolsData.react,
      toolsData.rtl,
      toolsData.jest,
    ],
    repositoryLink:
      'https://github.com/raphaelalmeidamartins/tests-with-react-testing-library',
    deployLink:
      'https://github.com/raphaelalmeidamartins/tests-with-react-testing-library',
  },
];

export default projectsData;
