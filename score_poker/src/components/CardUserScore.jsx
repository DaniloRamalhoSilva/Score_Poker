import React from 'react';
import propTypes from 'prop-types';

const AVATAR = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU';

function CardUserScore({ user }) {
  return (
    <div>
      <div key={user.id}>
        <img src={(user.image) ? user.image : AVATAR} alt="foto" />
        <samp>
          {user.name}
          |
        </samp>
        <samp>
          {user.scored}
          |
        </samp>
        <samp>
          {(user.groupUse) ? user.groupUse : 0 }
          |
        </samp>
        <samp>
          {(user.individualUse) ? user.individualUse : 0 }
          |
        </samp>
        <samp>{(user.rank) ? user.rank : 0 }</samp>
      </div>
    </div>
  );
}

CardUserScore.propTypes = {
  user: propTypes.shape().isRequired,
};

export default CardUserScore;
