import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ScoreAppContext from './ScoreAppContext';

function ScoreAppProvider({ children }) {
  const [playesTable, setPlayesTable] = useState([]);

  const context = useMemo(() => ({
    playesTable,
    setPlayesTable,
  }), [
    playesTable,
  ]);

  return (
    <ScoreAppContext.Provider
      value={context}
    >
      {children}
    </ScoreAppContext.Provider>
  );
}

ScoreAppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScoreAppProvider;
