import React from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import CardTableRanck from './CardTableRanck';

function GrideRanke({ rank }) {
  return (
    <Container className="table-responsive gridTableRanke mt-3">
      <table className="table-sm ">
        <thead className="align-middle ">
          <tr className="hederGrid">
            <th scope="col">Posição na Mesa</th>
            <th scope="col">Pontos</th>
            <th scope="col">Posição Geral</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          { rank.length !== 0 ? rank.map((user, index) => (
            <CardTableRanck key={user.id} user={user} position={index + 1} />
          )) : (
            <Container>
              <p>Nenhum jogador cadastrado</p>
            </Container>
          )}
        </tbody>
      </table>
    </Container>
  );
}
GrideRanke.propTypes = {
  rank: propTypes.arrayOf(
    propTypes.shape().isRequired,
  ).isRequired,
};

export default GrideRanke;
