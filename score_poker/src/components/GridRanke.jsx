import React from 'react';
import propTypes from 'prop-types';
import CardUserScore from './CardUserScore';

function GrideRanke({ rank }) {
  return (
    <div>
      <span>Posição |</span>
      <span> pontos |</span>
      <span> Desempenho do gropo |</span>
      <span> Desempenho Individual |</span>
      <span> Media Final</span>
      { rank.length !== 0 && rank.map((user) => (
        <CardUserScore key={user.id} user={user} />
      ))}
    </div>
  );
}

GrideRanke.propTypes = {
  rank: propTypes.arrayOf(
    propTypes.shape().isRequired,
  ).isRequired,
};

export default GrideRanke;
