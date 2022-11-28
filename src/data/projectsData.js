import screenshotsData from './screenshotsData';
import toolsData from './toolsData';

const projectsData = [
  {
    id: 1,
    title: 'Sonic Trunfo',
    type: ['Front-end'],
    underDevelopment: true,
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
    id: 15,
    title: 'Full Stack Bank',
    type: ['Front-end', 'Back-end'],
    underDevelopment: false,
    screenshot: screenshotsData[15],
    description: {
      EN: 'Full stack digital wallet application containerized with Docker',
      BR: 'Aplicação full stack dockerizada de carteira digital',
    },
    tools: [
      toolsData.next,
      toolsData.typeScript,
      toolsData.html,
      toolsData.css,
      toolsData.sass,
      toolsData.rtl,
      toolsData.cypress,
      toolsData.node,
      toolsData.express,
      toolsData.sequelize,
      toolsData.mySQL,
      toolsData.docker,
      toolsData.mocha,
      toolsData.chai,
      toolsData.sinon,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/fullstack-bank',
  },
  {
    id: 2,
    title: 'Hackathon Trybe',
    type: ['Front-end'],
    underDevelopment: true,
    screenshot: screenshotsData[2],
    description: {
      EN: 'React landing page developed with React for the Hackathon promoted by Trybe and Wine',
      BR: 'Landing page desenvolvida em React para o Hackathon organizado pela Trybe em parceria com a empresa Wine',
    },
    tools: [
      toolsData.react,
      toolsData.reactRouterV5,
      toolsData.redux,
      toolsData.reduxToolkit,
      toolsData.reactIcons,
      toolsData.javaScript,
      toolsData.html,
      toolsData.css,
      toolsData.styledComponents,
      toolsData.materialUI,
      toolsData.figma,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/hackathon-trybe-wine',
    deployLink: 'https://raphaelmartins.dev/hackathon-trybe-wine/#/',
  },
  {
    id: 3,
    title: 'Fine Flavor',
    type: ['Front-end'],
    underDevelopment: true,
    screenshot: screenshotsData[3],
    description: {
      EN: 'Mobile recipes React application fetching recipes\' data from a public API',
      BR: 'Aplicativo de receitas mobile desenvolvido em React usando uma API pública',
    },
    tools: [
      toolsData.react,
      toolsData.reactRouterV5,
      toolsData.redux,
      toolsData.rtl,
      toolsData.reactIcons,
      toolsData.javaScript,
      toolsData.html,
      toolsData.css,
      toolsData.sass,
      toolsData.figma,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/fine-flavor',
    figmaLink: 'https://www.figma.com/file/ejYF6DFXKnLn4HCMtZRXkw/Fine-Flavor',
  },
  {
    id: 4,
    title: 'Trybe Futebol Clube',
    type: ['Back-end'],
    underDevelopment: false,
    screenshot: screenshotsData[4],
    description: {
      EN: 'RESTful API for a soccer tournament application',
      BR: 'API RESTful desenvolvida para uma aplicação de campeonato de futebol',
    },
    tools: [
      toolsData.typeScript,
      toolsData.node,
      toolsData.express,
      toolsData.sequelize,
      toolsData.mySQL,
      toolsData.docker,
      toolsData.mocha,
      toolsData.chai,
      toolsData.sinon,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/trybe-futebol-clube',
  },
  {
    id: 5,
    title: 'MongoDB Car Shop',
    type: ['Back-end'],
    underDevelopment: false,
    screenshot: screenshotsData[5],
    description: {
      EN: 'RESTful API for a venhicle shop using OOP (Object-Oriented Programming) and SOLID principles',
      BR: 'API RESTful desenvolvida para uma loja de automóveis utilizando POO (Programação Orientada a Objetos) e princípios de SOLID',
    },
    tools: [
      toolsData.typeScript,
      toolsData.node,
      toolsData.express,
      toolsData.mongoose,
      toolsData.mongodb,
      toolsData.docker,
      toolsData.mocha,
      toolsData.chai,
      toolsData.sinon,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/mongodb-car-shop',
  },
  {
    id: 6,
    title: 'Trivia',
    type: ['Front-end'],
    underDevelopment: false,
    screenshot: screenshotsData[6],
    description: {
      EN: 'Trivia game React application fetching questions\' data from a public API',
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
    id: 7,
    title: 'Online Store',
    type: ['Front-end'],
    underDevelopment: false,
    screenshot: screenshotsData[7],
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
    id: 8,
    title: 'Wallet',
    type: ['Front-end'],
    underDevelopment: false,
    screenshot: screenshotsData[8],
    description: {
      EN: 'Wallet application fetching curriencies\' exchange rates from a public API',
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
    id: 9,
    title: 'To-Do List',
    type: ['Front-end'],
    underDevelopment: false,
    screenshot: screenshotsData[9],
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
    id: 10,
    title: 'Trybesmith',
    type: ['Back-end'],
    underDevelopment: false,
    screenshot: screenshotsData[10],
    description: {
      EN: 'RESTful API developed with TypeScript, Node.js and Express.js with MySQL database',
      BR: 'API RESTful desenvolvida em Node.js com TypeScript e Express.js com o banco de dados MySQL',
    },
    tools: [
      toolsData.typeScript,
      toolsData.node,
      toolsData.express,
      toolsData.mySQL,
      toolsData.docker,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/trybesmith',
  },
  {
    id: 11,
    title: 'Blogs API',
    type: ['Back-end'],
    underDevelopment: false,
    screenshot: screenshotsData[11],
    description: {
      EN: 'RESTful API developed with Node.js, Express.js, Sequelize.js and with Json Web Token (JWT) authentication',
      BR: 'API RESTful desenvolvida em Node.js, Express.js, Sequelize.js e autenticação por Json Web Token (JWT)',
    },
    tools: [
      toolsData.javaScript,
      toolsData.node,
      toolsData.express,
      toolsData.sequelize,
      toolsData.mySQL,
      toolsData.docker,
      toolsData.swagger,
      toolsData.heroku,
    ],
    repositoryLink: 'https://github.com/raphaelalmeidamartins/blogs-api',
    deployLink: 'https://blogs-api-24072022.herokuapp.com/docs/en/',
  },
  {
    id: 12,
    title: 'Tests with RTL',
    type: ['Front-end'],
    underDevelopment: false,
    screenshot: screenshotsData[12],
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
  },
  {
    id: 13,
    title: 'Store Manager',
    type: ['Back-end'],
    underDevelopment: false,
    screenshot: screenshotsData[13],
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
  },
  {
    id: 14,
    title: 'Trybewarts',
    type: ['Front-end'],
    underDevelopment: false,
    screenshot: screenshotsData[14],
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
];

export default projectsData;
