import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ScoreAppContext from './ScoreAppContext';

function ScoreAppProvider({ children }) {
  const [idPlayesTable, setIdPlayesTable] = useState([]);
  const [config, setConfig] = useState();
  const [players, setPlayers] = useState([]);

  const context = useMemo(() => ({
    idPlayesTable,
    config,
    players,
    setPlayers,
    setConfig,
    setIdPlayesTable,
  }), [
    idPlayesTable,
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
