import React from 'react';
import PropTypes from 'prop-types';

function SkillBadge({ src, alt }) {
  return (
    <img style={{ borderRadius: '4px', height: '35px', margin: '4px' }} src={src} alt={alt} />
  );
}

SkillBadge.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SkillBadge;
