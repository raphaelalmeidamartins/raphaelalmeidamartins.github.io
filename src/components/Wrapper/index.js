import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/system/Container';

function Wrapper({ children, sectionId, minHeight }) {
  return (
    <Container
      id={ sectionId }
      component="section"
      sx={{
        minHeight,
        paddingBottom: '52px',
        paddingTop: '52px',
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
  minHeight: PropTypes.string,
};

export default Wrapper;
