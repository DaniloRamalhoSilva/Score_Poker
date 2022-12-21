import React from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';

const AVATAR = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU';

function GridePlayers({ players }) {
  return (
    <Container className="gridPlayer">
      <h3>Selecione os jogadores</h3>
      <input type="text" placeholder="Busque pelo nome" />
      <div className="tablePlayers">
        { players.length !== 0 && players.map((user, index) => (
          <Container>
            <label htmlFor={`scales${index}`}>
              <input type="checkbox" id={`scales${index}`} />
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
