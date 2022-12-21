import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const AVATAR = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU';

function CardUserScore({ user }) {
  return (

    <tr className="cardd">
      <th scope="row">
        <Link className="link" to={`/perfil/${user.id}`}>
          <div>
            {`${user.position}. `}
            <img className="img" src={(user.image) ? user.image : AVATAR} alt="foto" />
          </div>
          <span>{user.name}</span>
        </Link>
      </th>
      <td>{user.scored}</td>
      <td>{(user.groupUse) ? user.groupUse : 0 }</td>
      <td>{(user.individualUse) ? user.individualUse : 0 }</td>
      <td>{(user.rank) ? user.rank : 0 }</td>
    </tr>
  );
}

CardUserScore.propTypes = {
  user: propTypes.shape().isRequired,
};

export default CardUserScore;
