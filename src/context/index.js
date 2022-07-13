import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

const AppContext = createContext({});

function AppProvider({ children }) {
  const [lang, setLang] = useState('EN');
  const contextValue = { lang, setLang };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export { AppProvider, AppContext };
