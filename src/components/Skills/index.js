import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import mongoose from '../../assets/badges/mongoose.svg';
import { AppContext } from '../../context';
import SkillBadge from '../SkillBadge';
import { motion } from 'framer-motion';

function Skills() {
  const { lang } = React.useContext(AppContext);

  return (
    <>
      <Typography
        variant="h3"
        element="h1"
        align="center"
        sx={{ margin: '38px 0' }}
      >
        {lang === 'BR' ? 'Habilidades' : 'Skills and Tools'}
      </Typography>
      <Grid
        container
        spacing={{ xs: 4, sm: 4, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={6}>
          <Paper
            elevation={3}
            component={motion.div}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            sx={{ padding: '18px', height: '100%', textAlign: 'center' }}
          >
            <Typography variant="h4" element="h2" align="center" gutterBottom sx={{ marginBottom: '24px' }}>
              Front-end
            </Typography>
            <SkillBadge
              src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5"
            />
            <SkillBadge
              src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="CSS3"
            />
            <SkillBadge
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt="JavaScript"
            />
            <SkillBadge
              src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
              alt="Next"
            />
            <SkillBadge
              src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
              alt="React"
            />
            <SkillBadge
              src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
              alt="React Router"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
              alt="Redux"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
              alt="Sass"
            />
            <SkillBadge
              src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
              alt="Styled Components"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
              alt="Bootstrap"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
              alt="Material UI"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"
              alt="Markdown"
            />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
          <Paper
            elevation={3}
            component={motion.div}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            sx={{ padding: '18px', height: '100%', textAlign: 'center' }}
          >
            <Typography variant="h4" element="h2" align="center" gutterBottom sx={{ marginBottom: '24px' }}>
              Back-end
            </Typography>
            <SkillBadge
              src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt="JavaScript"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
              alt="Node.js"
            />
            <SkillBadge
              src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
              alt="TypeScript"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
              alt="Python"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
              alt="Express.js"
            />
            <SkillBadge
              src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL"
            />
            <SkillBadge
              src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB"
            />
            <SkillBadge src={mongoose} alt="Mongoose" />
            <SkillBadge
              src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
              alt="Docker"
            />
            <SkillBadge
              src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue"
              alt="Sequelize"
            />
            <SkillBadge
              src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink"
              alt="Json Web Tokens"
            />
            <SkillBadge
              src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white"
              alt="Swagger UI"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
              alt="Heroku"
            />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
          <Paper
            elevation={3}
            component={motion.div}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            sx={{ padding: '18px', height: '100%', textAlign: 'center' }}
          >
            <Typography variant="h4" element="h2" align="center" gutterBottom sx={{ marginBottom: '24px' }}>
              {lang === 'BR' ? 'Testes' : 'Tests'}
            </Typography>
            <SkillBadge
              src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"
              alt="Jest"
            />
            <SkillBadge
              src="https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red"
              alt="Testing Library"
            />
            <SkillBadge
              src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e"
              alt="Cypress"
            />
            <SkillBadge
              src="https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown"
              alt="Mocha.js"
            />
            <SkillBadge
              src="https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red"
              alt="Chai.js"
            />
            <SkillBadge
              src="https://img.shields.io/badge/sinon.js-323330?style=for-the-badge&logo=sinon"
              alt="Sinon.js"
            />
          </Paper>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
          <Paper
            elevation={3}
            component={motion.div}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            sx={{ padding: '18px', height: '100%', textAlign: 'center' }}
          >
            <Typography variant="h4" element="h2" align="center" gutterBottom sx={{ marginBottom: '24px' }}>
              {lang === 'BR' ? 'Outros' : 'Other'}
            </Typography>
            <SkillBadge
              src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=whitee"
              alt="Git"
            />
            <SkillBadge
              src="https://img.shields.io/badge/GNU%20Bash-4EAA25?style=for-the-badge&logo=GNU%20Bash&logoColor=white"
              alt="Bash"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
              alt="Figma"
            />
            <SkillBadge
              src="https://img.shields.io/badge/gimp-5C5543?style=for-the-badge&logo=gimp&logoColor=white"
              alt="Gimp"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Inkscape-000000?style=for-the-badge&logo=Inkscape&logoColor=white"
              alt="Inkscape"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black"
              alt="Adobe Photoshop"
            />
            <SkillBadge
              src="https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white"
              alt="Microsoft Excel"
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Skills;
