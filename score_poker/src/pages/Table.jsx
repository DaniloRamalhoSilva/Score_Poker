import React, {
  useState, useEffect, useContext,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { fetchCreateMatch } from '../services/API';

import GrideTable from '../components/GridTable';
import Navigationbar from '../components/Navigationbar';
import AlertM from '../components/Alert';

import ScoreAppContext from '../context/ScoreAppContext';

import './CSS/table.css';

function Table() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isError, setIsError] = useState(false);
  const [btnEnd, setBtnEnd] = useState(true);
  const [userIdFirst, setUserIdFirst] = useState();
  const [userIdSecond, setUserIdSecond] = useState();
  const [userIdThird, setUserIdThird] = useState();
  const [playesTable, setPlayesTable] = useState([]);
  const [selecionado, setSelecionado] = useState();

  const { players, idPlayesTable } = useContext(ScoreAppContext);

  useEffect(() => {
    setPlayesTable(players.filter((player) => idPlayesTable.includes(player.id)));
    if (userIdFirst && userIdSecond && userIdThird) setBtnEnd(false);
  }, [userIdFirst, userIdSecond, userIdThird]);

  const addPosition = (userId) => {
    if (Number(userId) === Number(userIdFirst)) return '/primeiro.svg';
    if (Number(userId) === Number(userIdSecond)) return '/segundo.svg';
    if (Number(userId) === Number(userIdThird)) return '/terceiro.svg';
    return '';
  };

  const btnPosition1 = () => {
    if ([userIdSecond, userIdThird].includes(selecionado)) return setIsError({ message: 'O mesmo jogador não pode posuir mais de uma posição' });
    return setUserIdFirst(selecionado);
  };
  const btnPosition2 = () => {
    if ([userIdFirst, userIdThird].includes(selecionado)) return setIsError({ message: 'O mesmo jogador não pode posuir mais de uma posição' });
    return setUserIdSecond(selecionado);
  };
  const btnPosition3 = () => {
    if ([userIdFirst, userIdSecond].includes(selecionado)) return setIsError({ message: 'O mesmo jogador não pode posuir mais de uma posição' });
    return setUserIdThird(selecionado);
  };

  const playEnd = () => {
    fetchCreateMatch(id, userIdFirst, userIdSecond, userIdThird, idPlayesTable).then(() => {
      navigate('table/:id/match/podium');
    }).catch(({ response }) => {
      if (response === undefined) return setIsError({ message: 'Sem conexão com banco de dados' });
      if (response.data.message === 'Expired or invalid token') return setIsError(response.data);
      if (response.data.message === 'Token not found') return navigate('/login');
      return setIsError({ message: 'unexpected error' });
    });
  };

  return (
    <div>
      <Navigationbar show textHeader="Mesa" />
      <AlertM message={isError.message} func={() => setIsError(false)} type="Warning" isTrue={isError} />
      <div className="mt-4">
        <GrideTable
          selectPlayer={setSelecionado}
          addPosition={addPosition}
          playesTable={playesTable}
          selecionado={selecionado}
          idTable={id}
        />
        <Container className=" btnPosition">
          <Button onClick={btnPosition1} type="submit" variant="dark">
            <img alt="" src="/primeiro.svg" />
          </Button>
          <Button onClick={btnPosition2} type="submit" variant="dark">
            <img alt="" src="/segundo.svg" />
          </Button>
          <Button onClick={btnPosition3} variant="dark">
            <img alt="" src="/terceiro.svg" />
          </Button>
        </Container>
        <Container className="d-grid gap-2 mt-2 mb-0">
          <Button onClick={playEnd} disabled={btnEnd} type="submit" variant="dark">
            <img className="iconbtnTable" alt="" src="/copas.png" />
            Finalizar Partida
            <img className="iconbtnTable" alt="" src="/copas.png" />
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default Table;
