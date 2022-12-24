import React from 'react';
import propTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AVATAR } from '../services/varUteis';

function GrideTable({
  selectPlayer, addPosition, playesTable, selecionado,
}) {
  const { id } = useParams();

  return (
    <Container className="gridTlable">
      <h3>{`Mesa #${id}`}</h3>
      <div className="tablePlayers">
        { playesTable.length !== 0 ? playesTable.map((user) => (
          <Container>
            <babel
              className={(Number(selecionado) === Number(user.id)) ? 'select babel' : 'babel'}
              onClick={({ target }) => selectPlayer(target.id)}
              htmlFor={user.id}
              id={user.id}
            >
              <img id={user.id} src={(user.image) || AVATAR} alt="" />
              <span id={user.id}>{user.name}</span>
              <img id={user.id} src={addPosition(user.id)} alt="" />
            </babel>
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

GrideTable.propTypes = {
  playesTable: propTypes.arrayOf(
    propTypes.shape().isRequired,
  ).isRequired,
  selecionado: propTypes.number.isRequired,
  addPosition: propTypes.func.isRequired,
  selectPlayer: propTypes.func.isRequired,
};

export default GrideTable;
