import { SvgIcon } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import PropTypes from "prop-types";
import * as React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({
  screenshot,
  title,
  description,
  tools,
  repositoryLink,
  deployLink,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="290"
        image={screenshot}
        alt="screenshot"
      />
      <CardContent sx={{ paddingBottom: "8px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box
          sx={{
            marginTop: "16px",
          }}
        >
          {tools.map((tool) => (
            <Chip
              key={tool}
              size="small"
              label={tool}
              sx={{ margin: "0 4px 4px 0" }}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 18px 18px",
        }}
      >
        <IconButton LinkComponent="a" href={repositoryLink} target="_blank" color="primary">
          <SvgIcon inheritViewBox>
            <FaGithub />
          </SvgIcon>
        </IconButton>
        <IconButton LinkComponent="a" href={deployLink} color="primary">
          <SvgIcon inheritViewBox>
            <FaExternalLinkAlt />
          </SvgIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}

ProjectCard.propTypes = {
  screenshot: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  repositoryLink: PropTypes.string.isRequired,
  deployLink: PropTypes.string.isRequired,
};

export default ProjectCard;
