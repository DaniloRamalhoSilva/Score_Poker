import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { fetchGetAllPlayers, fetchGetConfig } from '../services/API';

import GridePlayers from '../components/GridPlayers';
import Navigationbar from '../components/Navigationbar';
import AlertM from '../components/Alert';

import SocoreAppContext from '../context/ScoreAppContext';

import './CSS/playersTable.css';

function PlayersTable() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isError2, setIsError2] = useState(false);
  const [players, setPlayers] = useState([]);

  const { config, setConfig } = useContext(SocoreAppContext);

  useEffect(() => {
    const fetchData = () => {
      fetchGetConfig()
        .then(({ data }) => {
          setConfig({
            pointsFirst: data.pointsFirst,
            pointsSecond: data.pointsSecond,
            pointsThird: data.pointsThird,
            minUsers: data.minUsers,
          });
        }).catch(({ response }) => {
          if (response === undefined) return setIsError({ message: 'Sem conexão com banco de dados' });
          if (response.data.message === 'Expired or invalid token') return setIsError(response.data);
          if (response.data.message === 'Token not found') return navigate('/login');
          if (response.data.message === 'Register does not exist') return navigate('/settings');
          return setIsError({ message: 'unexpected error' });
        });

      fetchGetAllPlayers()
        .then((res) => {
          setPlayers(res.data);
        }).catch(() => setIsError({ message: 'unexpected error' }));
    };
    fetchData();
  }, []);

  const play = () => {
    if (players.length < config.minUsers) {
      return setIsError2({
        message: `Numero minimo de jogadores esta configurado para ${config.minUsers} jogadore`,
      });
    }
    return navigate('/tabble/');
  };

  return (
    <div>
      <Navigationbar show textHeader="Jogadores" />
      <AlertM message={isError.message} func={() => navigate('/login')} type="Warning" isTrue={isError} />
      <AlertM message={isError2.message} func={() => setIsError2(false)} type="Warning" isTrue={isError2} />
      {players.length !== 0 ? (
        <div className="mt-4">
          <GridePlayers players={players} />
          <Container className="d-grid gap-2 mt-2 mb-0">
            <Button type="submit" variant="dark" onClick={play}>
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
