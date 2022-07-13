import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';
import * as React from 'react';
import { AppContext } from '../../context';

function LanguageChip({ icon, label }) {
  const { setLang } = React.useContext(AppContext);
  return (
    <Chip
      icon={icon}
      label={label}
      component="button"
      type="button"
      clickable
      variant="filled"
      onClick={() => setLang(label)}
      sx={{ margin: '0 4px', cursor: 'pointer' }}
    />
  );
}

LanguageChip.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default LanguageChip;
