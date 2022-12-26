import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { AVATAR } from '../services/varUteis';

function CardUserScore({ user, position }) {
  return (

    <tr className="cardd">
      <th scope="row">
        <Link className="link" to={`/perfil/${user.id}`}>
          <div>
            {`${position}.`}
            <img className="img" src={(user.image) || AVATAR} alt="foto" />
          </div>
          <span>{user.name.split(' ')[0]}</span>
        </Link>
      </th>
      <td>{user.scored}</td>
      <td>{`${user.positionGeral}ª`}</td>
    </tr>
  );
}

CardUserScore.propTypes = {
  user: propTypes.shape().isRequired,
  position: propTypes.number.isRequired,
};

export default CardUserScore;
