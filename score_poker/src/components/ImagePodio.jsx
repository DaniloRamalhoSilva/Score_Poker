import React from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import imgPdodio from '../../public/podio.png';

const AVATAR = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUNaoFwOOa3sOnMoc8CVUJ65bhS822etxVQ&usqp=CAU';

function ImagePodio({ rank }) {
  return (
    <Container className="containerPodio mt-4">
      <h1>Ranking</h1>
      <div className="containerImage">
        <img className="imgPodio" src={imgPdodio} alt="" />
        { rank.length > 0 && (<img className="i i1" src={(rank[0].image) ? rank[0].image : AVATAR} alt="foto" />) }
        {rank.length > 1 && (<img className="i i2" src={(rank[1].image) ? rank[1].image : AVATAR} alt="foto" />) }
        {rank.length > 2 && (<img className="i i3" src={(rank[2].image) ? rank[2].image : AVATAR} alt="foto" />) }
      </div>
    </Container>

  );
}
ImagePodio.propTypes = {
  rank: propTypes.arrayOf(
    propTypes.shape().isRequired,
  ).isRequired,
};

export default ImagePodio;
