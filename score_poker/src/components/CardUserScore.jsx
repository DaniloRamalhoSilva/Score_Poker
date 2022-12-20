import React from 'react';
import propTypes from 'prop-types';
// import Card from 'react-bootstrap/Card';

const AVATAR = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU';

function CardUserScore({ user, index }) {
  return (

    <tr className="cardd">
      <th scope="row">
        <div>
          {index + 1}
          .
          <img className="img" src={(user.image) ? user.image : AVATAR} alt="foto" />
        </div>
        <span>{user.name}</span>
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
  index: propTypes.number.isRequired,
};

export default CardUserScore;
