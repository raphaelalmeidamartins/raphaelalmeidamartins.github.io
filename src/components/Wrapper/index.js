import Container from '@mui/system/Container';
import PropTypes from 'prop-types';
import React from 'react';

function Wrapper({ children, sectionId, minHeight, sx }) {
  return (
    <Container
      id={ sectionId }
      component="section"
      sx={{
        minHeight,
        paddingBottom: '52px',
        paddingTop: '52px',
        ...sx,
      }}
    >
      {children}
    </Container>
  );
}

Wrapper.defaultProps = {
  sx: {},
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  sectionId: PropTypes.string,
  minHeight: PropTypes.string,
  sx: PropTypes.objectOf(PropTypes.string),
};

export default Wrapper;
