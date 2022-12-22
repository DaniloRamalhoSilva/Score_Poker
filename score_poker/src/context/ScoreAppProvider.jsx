import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ScoreAppContext from './ScoreAppContext';

function ScoreAppProvider({ children }) {
  const [playesTable, setPlayesTable] = useState([]);
  const [config, setConfig] = useState();

  const context = useMemo(() => ({
    playesTable,
    config,
    setConfig,
    setPlayesTable,
  }), [
    playesTable,
    config,
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
