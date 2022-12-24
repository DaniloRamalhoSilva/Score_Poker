import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { fetchGetMatch, fetchCloseMatch } from '../services/API';

import GrideTableRanke from '../components/GridTableRanke';
import Navigationbar from '../components/Navigationbar';
import AlertM from '../components/Alert';
import ImagePodio from '../components/ImagePodio';

import ScoreAppContext from '../context/ScoreAppContext';

import './CSS/podioTable.css';

function Home() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isError, setIsError] = useState(false);
  const [rank, setRank] = useState([]);

  const { setPlayers, setConfig, setIdPlayesTable } = useContext(ScoreAppContext);

  useEffect(() => {
    const fetchData = () => {
      fetchGetMatch(id)
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

  const closeTable = () => {
    fetchCloseMatch(id);
    setPlayers([]);
    setConfig();
    setIdPlayesTable([]);
    navigate('/');
  };

  return (
    <div>
      <Navigationbar show textHeader="Podio da mesa" />
      <AlertM message={isError.message} func={() => navigate('/login')} type="Warning" isTrue={isError} />
      <Container className="title">
        <h1>{`Ranking da mesa #${id}`}</h1>
      </Container>
      <ImagePodio rank={rank} />
      <GrideTableRanke className="mt-2" rank={rank} />
      <Container className="d-grid gap-2 mt-2 mb-3">
        <Button type="button" onClick={() => navigate(`/table/${id}/match`)} variant="dark">
          <img className="icon" alt="" src="/copas.png" />
          Nova Partida
          <img className="icon" alt="" src="/copas.png" />
        </Button>
        <Button type="button" onClick={closeTable} variant="dark">
          Fechar Mesa
        </Button>
      </Container>
    </div>
  );
}

export default Home;
