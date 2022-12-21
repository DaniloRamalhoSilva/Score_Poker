import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { fetchGetAllPlayers } from '../services/API';
import GridePlayers from '../components/GridPlayers';
import Navigationbar from '../components/Navigationbar';
import AlertM from '../components/Alert';

import './CSS/playersTable.css';

function PlayersTable() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetchGetAllPlayers()
        .then((res) => {
          setPlayers(res.data);
          console.log(res.data);
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
      <Navigationbar show textHeader="Jogadores" />
      <AlertM message={isError.message} func={() => navigate('/login')} type="Warning" isTrue={isError} />
      {players.length !== 0 ? (
        <div className="mt-4">
          <GridePlayers players={players} />
          <Container className="d-grid gap-2 mt-2 mb-0">
            <Button type="submit" variant="dark">
              <img className="icon" alt="" src="/copas.png" />
              Iniciar Partida
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

export default PlayersTable;
