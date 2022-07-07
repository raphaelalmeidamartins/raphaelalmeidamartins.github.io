import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Skills() {
  return (
    <>
      <Typography variant="h3" element="h1" align="center" sx={{ margin: '76px 0'  }}>
        Habilidades e ferramentas
      </Typography>
      <Grid
        container
        spacing={{ xs: 3, sm: 3, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={6}>
          <Paper elevation={3} sx={{ padding: '18px' }}>
            <Typography variant="h4" element="h2" align="center" gutterBottom>
              Front-end
            </Typography>
            <Typography variant="body1" element="p" align="left" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ut est ac urna volutpat pulvinar ut vel velit. Cras odio lectus,
              condimentum a nunc quis, porttitor vestibulum leo. In tincidunt
              laoreet sagittis. Proin quis dui dignissim, rhoncus nibh in,
              dignissim elit. Curabitur maximus cursus molestie. Duis nec lacinia
              sem, vel hendrerit dolor. Praesent sit amet lorem euismod diam
              hendrerit cursus varius ut arcu. Nulla nunc erat, finibus sit amet
              arcu ac, dapibus laoreet lacus. In at vulputate augue. Nulla
              facilisi. Vivamus libero justo, suscipit sed porta quis, sagittis
              vel lectus. Aenean ac sapien ac felis viverra ullamcorper. In hac
              habitasse platea dictumst.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={4} md={6}>
          <Paper elevation={3} sx={{ padding: '18px' }}>
            <Typography variant="h4" element="h2" align="center" gutterBottom>
              Back-end
            </Typography>
            <Typography variant="body1" element="p" align="left" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ut est ac urna volutpat pulvinar ut vel velit. Cras odio lectus,
              condimentum a nunc quis, porttitor vestibulum leo. In tincidunt
              laoreet sagittis. Proin quis dui dignissim, rhoncus nibh in,
              dignissim elit. Curabitur maximus cursus molestie. Duis nec lacinia
              sem, vel hendrerit dolor. Praesent sit amet lorem euismod diam
              hendrerit cursus varius ut arcu. Nulla nunc erat, finibus sit amet
              arcu ac, dapibus laoreet lacus. In at vulputate augue. Nulla
              facilisi. Vivamus libero justo, suscipit sed porta quis, sagittis
              vel lectus. Aenean ac sapien ac felis viverra ullamcorper. In hac
              habitasse platea dictumst.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Skills;
