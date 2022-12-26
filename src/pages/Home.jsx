import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { fetchFindOverallRating } from '../services/API';
import GrideRanke from '../components/GridRanke';
import Navigationbar from '../components/Navigationbar';
import AlertM from '../components/Alert';
import ImagePodio from '../components/ImagePodio';

import './CSS/home.css';

function Home() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [rank, setRank] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetchFindOverallRating()
        .then((res) => {
          setRank(res.data);
        }).catch(({ response }) => {
          if (response === undefined) return setIsError({ message: 'Sem conexão com banco de dados' });
          if (response.data.message === 'Expired or invalid token') return setIsError(response.data);
          if (response.data.message === 'Token not found') return navigate('/score_poker/login');
          return setIsError({ message: 'unexpected error' });
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navigationbar show textHeader="Familia do Poker" />
      <AlertM message={isError.message} func={() => navigate('/score_poker/login')} type="Warning" isTrue={isError} />
      <Container className="title">
        <h1>Ranking</h1>
      </Container>
      <ImagePodio rank={rank} />
      <GrideRanke className="mt-2" rank={rank} />
      <Container className="d-grid gap-2 mt-2 mb-3">
        <Button type="button" onClick={() => navigate('/score_poker/table')} variant="dark">
          <img className="icon" alt="" src="/copas.png" />
          Nova Mesa
          <img className="icon" alt="" src="/copas.png" />
        </Button>
        <Button type="button" onClick={() => navigate('/score_poker/table/open')} variant="dark">
          <img className="icon" alt="" src="/copas.png" />
          Mesas Ativas
          <img className="icon" alt="" src="/copas.png" />
        </Button>
      </Container>
    </div>
  );
}

export default Home;
