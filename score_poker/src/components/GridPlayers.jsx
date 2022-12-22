import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { AVATAR } from '../services/varUteis';

import ScoreAppContext from '../context/ScoreAppContext';

function GridePlayers({ players }) {
  const { playesTable, setPlayesTable } = useContext(ScoreAppContext);

  const onInputChange = ({ target: { checked, id } }) => {
    if (checked) {
      setPlayesTable([...playesTable, Number(id)]);
    } else {
      setPlayesTable(playesTable.filter((check) => check !== Number(id)));
    }
  };

  return (
    <Container className="gridPlayer">
      <h3>Selecione os jogadores</h3>
      <input type="text" placeholder="Busque pelo nome" />
      <div className="tablePlayers">
        { players.length !== 0 && players.map((user) => (
          <Container>
            <label htmlFor={user.id}>
              <input
                type="checkbox"
                id={user.id}
                checked={playesTable.includes(user.id)}
                onChange={onInputChange}
              />
              <img src={(user.image) || AVATAR} alt="" />
              {user.name}
            </label>
          </Container>
        ))}
      </div>
    </Container>
  );
}

GridePlayers.propTypes = {
  players: propTypes.arrayOf(
    propTypes.shape().isRequired,
  ).isRequired,
};

export default GridePlayers;
