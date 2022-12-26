import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { AVATAR } from '../services/varUteis';

function CardUserScore({ user }) {
  return (

    <tr className="cardd">
      <th scope="row">
        <Link className="link" to={`/perfil/${user.id}`}>
          <div>
            {`${user.position}.`}
            <img className="img" src={(user.image) || AVATAR} alt="foto" />
          </div>
          <span>{user.name.split(' ')[0]}</span>
        </Link>
      </th>
      <td>{user.scored}</td>
      <td>{`${user.groupUse.toFixed(1)}%` }</td>
      <td>{`${user.individualUse.toFixed(1)}%` }</td>
      <td>{`${user.rank.toFixed(1)}%` }</td>
    </tr>
  );
}

CardUserScore.propTypes = {
  user: propTypes.shape().isRequired,
};

export default CardUserScore;
