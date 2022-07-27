import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import PropTypes from 'prop-types';
import * as React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { AppContext } from '../../context';

function ProjectCard({
  screenshot,
  title,
  description,
  tools,
  repositoryLink,
  deployLink,
  underDevelopment,
}) {
  const { lang } = React.useContext(AppContext);
  const underDevelopmentLabel = {
    EN: 'Under Development',
    BR: 'Em Desenvolvimento',
  };

  return (
    <Card sx={{ height: '100%', position: 'relative' }}>
      <CardMedia
        component="img"
        height="290"
        image={screenshot}
        alt="screenshot"
      />
      <CardContent sx={{ paddingBottom: '48px' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}{' '}
          {underDevelopment && (
            <Chip
              label={underDevelopmentLabel[lang]}
              size="small"
              color="success"
            />
          )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description[lang]}
        </Typography>
        <Box
          sx={{
            marginTop: '16px',
          }}
        >
          {tools.map(({ icon, label }) => (
            <Chip
              key={label}
              variant="outlined"
              size="small"
              icon={icon}
              label={label}
              sx={{ margin: '0 8px 8px 0' }}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          bottom: '8px',
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '0',
          position: 'absolute',
          right: '8px',
          width: '100%',
        }}
      >
        <IconButton
          size="small"
          LinkComponent="a"
          href={repositoryLink}
          target="_blank"
          color="primary"
        >
          <SvgIcon inheritViewBox>
            <FaGithub />
          </SvgIcon>
        </IconButton>
        {deployLink && (
          <IconButton
            size="small"
            LinkComponent="a"
            href={deployLink}
            color="primary"
          >
            <SvgIcon inheritViewBox>
              <FaExternalLinkAlt />
            </SvgIcon>
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}

ProjectCard.propTypes = {
  screenshot: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  underDevelopment: PropTypes.bool.isRequired,
  description: PropTypes.objectOf(PropTypes.string).isRequired,
  tools: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))
  ).isRequired,
  repositoryLink: PropTypes.string.isRequired,
  deployLink: PropTypes.string,
};

export default ProjectCard;
