import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AVATAR } from '../services/varUteis';

import ScoreAppContext from '../context/ScoreAppContext';

function GridePlayers() {
  const { idPlayesTable, setIdPlayesTable, players } = useContext(ScoreAppContext);

  const onInputChange = ({ target: { checked, id } }) => {
    if (checked) {
      setIdPlayesTable([...idPlayesTable, Number(id)]);
    } else {
      setIdPlayesTable(idPlayesTable.filter((check) => check !== Number(id)));
    }
  };

  return (
    <Container className="gridPlayer">
      <h3>Selecione os jogadores</h3>
      <input type="text" placeholder="Busque pelo nome" />
      <div className="tablePlayers">
        { players.length !== 0 ? players.map((user) => (
          <Container>
            <label htmlFor={user.id}>
              <input
                type="checkbox"
                id={user.id}
                checked={idPlayesTable.includes(user.id)}
                onChange={onInputChange}
              />
              <img src={(user.image) || AVATAR} alt="" />
              {user.name}
            </label>
          </Container>
        )) : (
          <Container>
            <p>Nenhum jogador cadastrado</p>
          </Container>
        )}
      </div>
    </Container>
  );
}

export default GridePlayers;
