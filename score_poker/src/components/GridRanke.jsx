import React from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import CardUserScore from './CardUserScore';

function GrideRanke({ rank }) {
  return (
    <Container className="table-responsive gridCard mt-3">
      <table className="table-sm ">
        <thead className="align-middle ">
          <tr className="hederGrid">
            <th scope="col">Posição</th>
            <th scope="col">Pontos</th>
            <th scope="col">Desempenho Grupo</th>
            <th scope="col">Desempenho Individual</th>
            <th scope="col">Media Final</th>
          </tr>
        </thead>
        <tbody className="align-middle">
          { rank.length !== 0 && rank.map((user, index) => (
            <CardUserScore key={user.id} user={user} index={index} />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
/* <div>
      <span>Posição |</span>
      <span> pontos |</span>
      <span> Desempenho do gropo |</span>
      <span> Desempenho Individual |</span>
      <span> Media Final</span>
      { rank.length !== 0 && rank.map((user) => (
        <CardUserScore key={user.id} user={user} />
      ))}
    </div> */
GrideRanke.propTypes = {
  rank: propTypes.arrayOf(
    propTypes.shape().isRequired,
  ).isRequired,
};

export default GrideRanke;
