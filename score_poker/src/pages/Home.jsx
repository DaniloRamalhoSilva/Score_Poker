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
          if (response.data.message === 'Token not found') return navigate('/login');
          return setIsError({ message: 'unexpected error' });
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navigationbar show textHeader="Familia do Poker" />
      <AlertM message={isError.message} func={() => navigate('/login')} type="Warning" isTrue={isError} />
      {rank.length !== 0 ? (
        <div>
          <ImagePodio rank={rank} />
          <GrideRanke className="mt-2" rank={rank} />
          <Container className="d-grid gap-2 mt-2 mb-0">
            <Button type="submit" variant="dark">
              <img className="icon" alt="" src="/copas.png" />
              Nova Mesa
              <img className="icon" alt="" src="/copas.png" />

            </Button>
          </Container>
        </div>
      ) : (
        <Container>
          <p>Nenhum jogador cadastrado</p>
        </Container>
      )}
    </div>
  );
}

export default Home;
