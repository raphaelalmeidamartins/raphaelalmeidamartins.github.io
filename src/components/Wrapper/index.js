import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/system/Container';

function Wrapper({ children, sectionId }) {
  return (
    <Container
      id={ sectionId }
      component="section"
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
  sectionId: PropTypes.string,
};

export default Wrapper;
