import React, { useState, useEffect, useContext } from 'react';
import { Button, Container } from 'react-bootstrap';

import GrideTable from '../components/GridTable';
import Navigationbar from '../components/Navigationbar';
import AlertM from '../components/Alert';

import ScoreAppContext from '../context/ScoreAppContext';

import './CSS/table.css';

function Table() {
  const [isError, setIsError] = useState(false);
  const [btnEnd, setBtnEnd] = useState(true);
  const [idFirst, setIdFirst] = useState();
  const [idSegundo, setidSegundo] = useState();
  const [idTerceiro, setIdTerceiro] = useState();
  const [playesTable, setPlayesTable] = useState([]);
  const [selecionado, setSelecionado] = useState();

  const { players, idPlayesTable } = useContext(ScoreAppContext);

  useEffect(() => {
    setPlayesTable(players.filter((player) => idPlayesTable.includes(player.id)));
    if (idFirst && idSegundo && idTerceiro) setBtnEnd(false);
  }, [idFirst, idSegundo, idTerceiro]);

  const addPosition = (userId) => {
    if (Number(userId) === Number(idFirst)) return '/primeiro.svg';
    if (Number(userId) === Number(idSegundo)) return '/segundo.svg';
    if (Number(userId) === Number(idTerceiro)) return '/terceiro.svg';
    return '';
  };

  const btnPosition1 = () => {
    if ([idSegundo, idTerceiro].includes(selecionado)) return setIsError({ message: 'O mesmo jogador não pode posuir mais de uma posição' });
    return setIdFirst(selecionado);
  };
  const btnPosition2 = () => {
    if ([idFirst, idTerceiro].includes(selecionado)) return setIsError({ message: 'O mesmo jogador não pode posuir mais de uma posição' });
    return setidSegundo(selecionado);
  };
  const btnPosition3 = () => {
    if ([idFirst, idSegundo].includes(selecionado)) return setIsError({ message: 'O mesmo jogador não pode posuir mais de uma posição' });
    return setIdTerceiro(selecionado);
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
          <Button disabled={btnEnd} type="submit" variant="dark">
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
