import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/system/Container';

function Wrapper({ children }) {
  return (
    <Container
      component="main"
      sx={{
        minHeight: '100vh',
        paddingBottom: '104px',
        paddingTop: '104px',
      }}
    >
      {children}
    </Container>
  );
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default Wrapper;
